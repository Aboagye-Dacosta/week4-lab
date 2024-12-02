import QuestionOptionCard from "../../../components/QuestionOptionCard";
import { useQuiz } from "../../../context/QuizContext";
import { QuizActions } from "../../../models/quiz_model";

const optionTags = ["A", "B", "C", "D"];

export default function QuestionOptionsList() {
  const {
    questions,
    quizState: { count, selectedAnswer, correctAnswer, hasAnswered },
    setQuizState,
  } = useQuiz();
  return (
    <>
      {questions[count].options.map((option, i) => (
        <QuestionOptionCard
          key={option}
          option={option}
          tag={optionTags[i]}
          state={
            !hasAnswered
              ? "neutral"
              : correctAnswer?.id == i ||
               ( selectedAnswer?.id == correctAnswer?.id && selectedAnswer?.id == i)
              ? "correct"
              : selectedAnswer?.id == i &&
                selectedAnswer.id != correctAnswer?.id
              ? "wrong"
              : "neutral"
          }
          onClick={() =>
            setQuizState({
              type: QuizActions.ANSWERED,
              payload: {
                selectedAnswer: {
                  id: i,
                  value: option,
                },
              },
            })
          }
        />
      ))}
    </>
  );
}
