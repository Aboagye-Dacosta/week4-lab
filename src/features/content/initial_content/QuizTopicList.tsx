import Icon from "../../../components/Icon";
import Paragraph from "../../../components/Paragraph";
import QuizCard from "../../../components/QuizCard";
import { useQuiz } from "../../../context/QuizContext";
import { usePageSwitch } from "../../../context/QuizPageSwitchContext";
import { quizTopics } from "../../../models/data_utils";
import { PageActions } from "../../../models/page_switch_model";
import { getQuizIconColor } from "../../../utils/getQuizIconColor";

export default function QuizTopicList() {
  const { setPageState } = usePageSwitch();
  const { setSelectedTopic } = useQuiz();
  return (
    <>
      {quizTopics.map((topic, index) => {
        const { title } = topic;
        return (
          <QuizCard
            key={`${topic.title}-${index}`}
            onClick={() => {
              setSelectedTopic(title);
              setPageState(PageActions.PENDING);
            }}
          >
            <Icon src={topic.icon} bgColor={getQuizIconColor(title)} />
            <Paragraph variation="medium-sm" weight="bold">
              {title}
            </Paragraph>
          </QuizCard>
        );
      })}
    </>
  );
}
