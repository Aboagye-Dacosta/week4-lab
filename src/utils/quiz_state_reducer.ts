import { QuizAction, QuizActions, QuizState } from "../models/quiz_model";

export function quizStateReduce(
    state: QuizState,
    action: QuizAction
): QuizState {
    console.log(state);
    switch (action.type) {
        case QuizActions.INITIAL: {
            const answer = action.payload!.question!.answer;
            return {
                question: action.payload!.question!,
                correctAnswer: {
                    value: answer,
                    id: action.payload!.question!.options.indexOf(answer),
                },
                selectedAnswer: null,
                isAnswerCorrect: null,
                hasAnswered: false,
                count: 0,
                score: 0,
            };
        }
        case QuizActions.ANSWERED:
            return {
                ...state,
                selectedAnswer: action.payload!.selectedAnswer!,
            };
        case QuizActions.SUBMITTED: {
            if (!state.selectedAnswer || !state.selectedAnswer!.value) {
                return {
                    ...state,
                    selectedAnswer: { id: 0, value: "" },
                }
            }
            const isAnswerCorrect =
                state.correctAnswer!.id == state.selectedAnswer?.id;
            return {
                ...state,
                isAnswerCorrect,
                score: isAnswerCorrect ? state.score + 1 : state.score,
                hasAnswered: true,
            };
        }
        case QuizActions.COMPLETED:
            {
                const answer = action.payload!.question!.answer;
                return {
                    ...state,
                    selectedAnswer: null,
                    hasAnswered: false,
                    question: action.payload!.question!,
                    correctAnswer: {
                        id: action.payload!.question!.options.indexOf(answer), value: answer
                    },
                    count: state.count + 1,
                };
            }
        case QuizActions.FINISHED:
            return {
                question: null,
                correctAnswer: null,
                selectedAnswer: null,
                isAnswerCorrect: null,
                hasAnswered: false,
                count: 0,
                score: 0,
            }
    }
}
