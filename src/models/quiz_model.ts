export type Answer = {
    id: number;
    value: string;
}

export type QuizState = {
    question: QuizQuestion | null;
    correctAnswer: Answer | null,
    selectedAnswer: Answer | null,
    isAnswerCorrect: boolean | null,
    hasAnswered: boolean,
    score: number,
    count: number,
}

export enum QuizActions { INITIAL, ANSWERED, SUBMITTED, COMPLETED, FINISHED }

export type QuizPayload = Partial<QuizState>

export type QuizAction = {
    type: QuizActions.INITIAL,
    payload?: QuizPayload
} | {
    type: QuizActions.ANSWERED,
    payload?: QuizPayload

} | {
    type: QuizActions.SUBMITTED,
    payload?: QuizPayload

} | {
    type: QuizActions.COMPLETED,
    payload?: QuizPayload

}
    | {
        type: QuizActions.FINISHED,
        payload?: QuizPayload

    }

export type QuizContextState = {
    quizState: QuizState,
    quizTopic: QuizTopic | null,
    questions: QuizQuestion[],
    setSelectedTopic(topic: string): void,
    setQuizState(action: QuizAction): void
    setCurrentTopic(topic: QuizTopic | null): void,
}

export type QuizTopic = {
    icon: string,
    title: string,
}


export type QuizQuestion = {
    question: string,
    options: string[],
    answer: string,
}