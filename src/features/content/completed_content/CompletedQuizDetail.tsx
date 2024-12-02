import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import Paragraph from "../../../components/Paragraph";
import { useQuiz } from "../../../context/QuizContext";
import { usePageSwitch } from "../../../context/QuizPageSwitchContext";
import { PageActions } from "../../../models/page_switch_model";
import { QuizActions } from "../../../models/quiz_model";
import ContentBody from "../layout/ContentBody";
import ContentHeader from "../layout/ContentHeader";
import CompletedScoreCard from "./CompletedScoreCard";

export default function CompletedQuizDetail() {
  const { setQuizState } = useQuiz();
  const { setPageState } = usePageSwitch();
  return (
    <>
      <ContentHeader>
        <Heading>
          <Paragraph variation="medium">Quiz Completed</Paragraph>
          <Paragraph variation="medium" weight="bold">
            You Scored...
          </Paragraph>
        </Heading>
      </ContentHeader>
      <ContentBody>
        <CompletedScoreCard />
        <Button
          onClick={() => {
            setQuizState({ type: QuizActions.FINISHED });
            setPageState(PageActions.INITIAL);
          }}
        >
          Play Again
        </Button>
      </ContentBody>
    </>
  );
}
