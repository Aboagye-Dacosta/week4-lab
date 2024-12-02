import Heading from "../../../components/Heading";
import Icon from "../../../components/Icon";
import Paragraph from "../../../components/Paragraph";
import QuizCard from "../../../components/QuizCard";
import { useQuiz } from "../../../context/QuizContext";
import { usePageSwitch } from "../../../context/QuizPageSwitchContext";
import { quizTopics } from "../../../models/data_utils";
import { PageActions } from "../../../models/page_switch_model";
import { getQuizIconColor } from "../../../utils/getQuizIconColor";

import ContentBody from "../layout/ContentBody";
import ContentHeader from "../layout/ContentHeader";

export default function InitialPageDetail() {
  const { setPageState } = usePageSwitch();
  const { setSelectedTopic } = useQuiz();
  return (
    <>
      <ContentHeader>
        <Heading as="h1">
          <Paragraph variation="medium"> Welcome to the</Paragraph>
          <Paragraph weight="bold" variation="medium">
            Frontend Quiz!
          </Paragraph>
        </Heading>
        <Paragraph variation="small" style="italic">
          Pick a subject to get started.
        </Paragraph>
      </ContentHeader>
      <ContentBody>
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
      </ContentBody>
    </>
  );
}
