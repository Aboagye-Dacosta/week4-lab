import ErrorCard from "../../../components/ErrorCard";
import Paragraph from "../../../components/Paragraph";
import ProgressIndicator from "../../../components/ProgressIndicator";
import { useQuiz } from "../../../context/QuizContext";
import ContentBody from "../layout/ContentBody";
import ContentHeader from "../layout/ContentHeader";
import QuestionOptionsList from "./QuestionOptionsList";
import QuestionSubmitButton from "./QuestionSubmitButton";

export default function QuizPageDetail() {
  const {
    questions,
    quizState: { count, selectedAnswer },
  } = useQuiz();

  return (
    <>
      <ContentHeader>
        <Paragraph style="italic">
          Question {count + 1} of {questions.length}
        </Paragraph>
        <Paragraph variation="medium" weight="bold">
          {questions[count].question}
        </Paragraph>
        <ProgressIndicator current={count + 1} total={questions.length} />
      </ContentHeader>
      <ContentBody>
        <QuestionOptionsList />
        <QuestionSubmitButton />
        {selectedAnswer?.value == "" && (
          <ErrorCard>Please select an answer</ErrorCard>
        )}
      </ContentBody>
    </>
  );
}
