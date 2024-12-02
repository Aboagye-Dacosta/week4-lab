import { PropsWithChildren } from "react";
import PageSwitchProvider from "./PageSwitchProvider";
import QuizProvider from "./QuizProvider";
import ThemeProvider from "./ThemeProvider";

export default function Provider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <PageSwitchProvider>
        <QuizProvider>{children}</QuizProvider>
      </PageSwitchProvider>
    </ThemeProvider>
  );
}
