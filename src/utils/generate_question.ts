import { QuizQuestion } from "../models/quiz_model";

export function* generateQuestion(questions: QuizQuestion[]) {
    let count = 0;
    while (count < questions.length) {
        yield questions[count++];
    }
}