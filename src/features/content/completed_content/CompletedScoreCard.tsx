import Icon from "../../../components/Icon";
import Paragraph from "../../../components/Paragraph";
import { useQuiz } from "../../../context/QuizContext";
import { getQuizIconColor } from "../../../utils/getQuizIconColor";

export default function CompletedScoreCard() {
  const {
    questions,
    quizState: { score },
    quizTopic,
  } = useQuiz();

  return (
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
  );
}
