import Heading from "../../../components/Heading";
import Paragraph from "../../../components/Paragraph";

import ContentBody from "../layout/ContentBody";
import ContentHeader from "../layout/ContentHeader";
import QuizTopicList from "./QuizTopicList";

export default function InitialPageDetail() {
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
        <QuizTopicList />
      </ContentBody>
    </>
  );
}
