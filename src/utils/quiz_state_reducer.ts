import { QuizAction, QuizActions, QuizState } from "../models/quiz_model";

export function quizStateReduce(
    state: QuizState,
    action: QuizAction
): QuizState {
    let currentState: QuizState;
    switch (action.type) {
        case QuizActions.INITIAL: {
            const answer = action.payload!.question!.answer;
            currentState = {
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
            break;
        case QuizActions.ANSWERED:
            currentState = {
                ...state,
                selectedAnswer: action.payload!.selectedAnswer!,
            };
            break;
        case QuizActions.SUBMITTED: {
            if (!state.selectedAnswer || !state.selectedAnswer!.value) {
                currentState = {
                    ...state,
                    selectedAnswer: { id: 0, value: "" },
                }
                break;
            }
            const isAnswerCorrect =
                state.correctAnswer!.id == state.selectedAnswer?.id;
            currentState = {
                ...state,
                isAnswerCorrect,
                score: isAnswerCorrect ? state.score + 1 : state.score,
                hasAnswered: true,
            };
        }
            break;
        case QuizActions.COMPLETED:
            {
                const answer = action.payload!.question!.answer;
                currentState = {
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
            break;
        case QuizActions.FINISHED:
            currentState = {
                question: null,
                correctAnswer: null,
                selectedAnswer: null,
                isAnswerCorrect: null,
                hasAnswered: false,
                count: 0,
                score: 0,
            }


    }

    //@ts-expect-error is available
    this.persist(currentState);
    return currentState;
}
