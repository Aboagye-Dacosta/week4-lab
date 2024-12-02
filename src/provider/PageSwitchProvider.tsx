import { PropsWithChildren } from "react";
import {
  QuizPageSwitchContext,
  usePageSwitchContext,
} from "../context/QuizPageSwitchContext";

export default function PageSwitchProvider({ children }: PropsWithChildren) {
  return (
    <QuizPageSwitchContext.Provider value={usePageSwitchContext()}>
      {children}
    </QuizPageSwitchContext.Provider>
  );
}
