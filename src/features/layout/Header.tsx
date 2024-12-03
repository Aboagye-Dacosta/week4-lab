import Heading from "../../components/Heading";
import Icon from "../../components/Icon";
import Paragraph from "../../components/Paragraph";
import Switch from "../../components/Switch";
import { useQuiz } from "../../context/QuizContext";
import { useTheme } from "../../context/ThemeContext";
import { getQuizIconColor } from "../../utils/getQuizIconColor";

export default function Header() {
  const { toggleTheme, theme } = useTheme();
  const { quizTopic } = useQuiz();
  return (
    <header className="flex flex-row justify-between items-center w-100">
      <Heading>
        {quizTopic && (
          <div className="flex flex-row items-center gap-1">
            <Icon
              src={quizTopic.icon}
              bgColor={getQuizIconColor(quizTopic.title)}
            />
            <Paragraph variation="small" weight="bold">
              {quizTopic.title}
            </Paragraph>
          </div>
        )}
      </Heading>
      <div className="flex flex-row gap-1 items-center justify-center">
        <img
          src={
            theme == "dark"
              ? "./assets/images/icon-sun-light.svg"
              : "./assets/images/icon-sun-dark.svg"
          }
          alt=""
        />
        <Switch onChange={() => toggleTheme()} state={theme == "dark"} />
        <img
          src={
            theme == "light"
              ? "./assets/images/icon-moon-dark.svg"
              : "./assets/images/icon-moon-light.svg"
          }
          alt=""
        />
      </div>
    </header>
  );
}
