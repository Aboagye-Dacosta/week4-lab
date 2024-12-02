import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import Icon from "../../../components/Icon";
import Paragraph from "../../../components/Paragraph";
import { useQuiz } from "../../../context/QuizContext";
import { usePageSwitch } from "../../../context/QuizPageSwitchContext";
import { PageActions } from "../../../models/page_switch_model";
import { QuizActions } from "../../../models/quiz_model";
import { getQuizIconColor } from "../../../utils/getQuizIconColor";

export default function CompletedQuizDetail() {
  const {
    questions,
    quizState: { score },
    quizTopic,
    setQuizState,
  } = useQuiz();
  const { setPageState } = usePageSwitch();
  return (
    <>
      <Heading>
        <Paragraph variation="medium">Quiz Completed</Paragraph>
        <Paragraph variation="medium" weight="bold">
          You Scored...
        </Paragraph>
      </Heading>
      <div className="flex flex-col gap-1">
        <div className="flex flex-col items-center gap-2 justify-center radius-lg p-2 w-full bg-grey-0 shadow-sm">
          <div className="flex items-center gap-1 justify-center">
            <Icon
              src={quizTopic!.icon}
              bgColor={getQuizIconColor(quizTopic!.title)}
            />
            <Paragraph weight="bold">{quizTopic?.title}</Paragraph>
          </div>
          <Paragraph variation="x-large" weight="bold">
            {score}
          </Paragraph>
          <Paragraph>out of {questions.length}</Paragraph>
        </div>
        <Button
          onClick={() => {
            setQuizState({ type: QuizActions.FINISHED });
            setPageState(PageActions.INITIAL);
          }}
        >
          Play Again
        </Button>
      </div>
    </>
  );
}
