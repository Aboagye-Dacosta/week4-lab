import { usePageSwitch } from "./context/QuizPageSwitchContext";
import RootApp from "./features/layout/RootApp";

import CompletedQuizView from "./views/CompletedQuizView";
import InitialView from "./views/InitialView";
import QuizPage from "./views/QuizPage";

export default function App() {
  const {
    pageState: { state },
  } = usePageSwitch();

  return (
    <RootApp>
      {state == "initial" && <InitialView />}
      {state == "pending" && <QuizPage />}
      {state == "completed" && <CompletedQuizView />}
    </RootApp>
  );
}
