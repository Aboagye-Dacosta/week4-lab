import { createContext, useContext, useReducer, useState } from "react";
import { getQuizzesByTopic } from "../models/data_utils";
import { QuizAction, QuizActions, QuizContextState, QuizQuestion, QuizState, QuizTopic } from '../models/quiz_model';
import { quizStateReduce } from "../utils/quiz_state_reducer";


const initialState: QuizState = {
    hasAnswered: false,
    question: null,
    correctAnswer: null,
    selectedAnswer: null,
    isAnswerCorrect: null,
    count: 0,
    score: 0,
}

export const QuizContext = createContext<QuizContextState | null>(null);

export function useQuizContext() {
    const [quizState, disPatchAction] = useReducer(quizStateReduce, initialState);
    const [quizTopic, setQuizTopic] = useState<QuizTopic | null>(null);
    const [questions, setQuizQuestions] = useState<QuizQuestion[]>([]);

    const setSelectedTopic = (topic: string) => {
        const quiz = getQuizzesByTopic(topic)[0];
        setQuizTopic({ icon: quiz.icon, title: quiz.title });
        setQuizQuestions(quiz.questions);
        setQuizState({ type: QuizActions.INITIAL, payload: { question: quiz.questions[0] } })
    }

    const setQuizState = (action: QuizAction) => {
        disPatchAction(action);
    }

    return {
        quizState,
        quizTopic,
        questions,
        setSelectedTopic,
        setQuizState
    }
}

export function useQuiz() {
    const context = useContext(QuizContext);
    if (!context) {
        throw new Error("using quiz context outside of quiz provider");
    }
    return context;
}