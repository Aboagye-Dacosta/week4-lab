import Button from "../../../components/Button";
import { useQuiz } from "../../../context/QuizContext";
import { usePageSwitch } from "../../../context/QuizPageSwitchContext";
import { PageActions } from "../../../models/page_switch_model";
import { QuizActions } from "../../../models/quiz_model";

export default function QuestionSubmitButton() {
  {
    const {
      questions,
      quizState: { hasAnswered, count },
      setQuizState,
    } = useQuiz();
    const { setPageState } = usePageSwitch();

    switch (hasAnswered) {
      case false:
        return (
          <Button
            onClick={() => {
              setQuizState({ type: QuizActions.SUBMITTED });
            }}
          >
            Submit Answer
          </Button>
        );
      case true:
        return (
          <Button
            onClick={() => {
              if (count < questions.length - 1) {
                setQuizState({
                  type: QuizActions.COMPLETED,
                  payload: {
                    question: questions[count + 1],
                  },
                });
              } else {
                setPageState(PageActions.COMPLETED);
              }
            }}
          >
            {count < questions.length - 1 ? "Next Question" : "Completed"}
          </Button>
        );
    }
  }
}
