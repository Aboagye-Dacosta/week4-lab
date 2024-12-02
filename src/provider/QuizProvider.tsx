import { PropsWithChildren } from "react";
import { QuizContext, useQuizContext } from "../context/QuizContext";

export default function QuizProvider({ children }: PropsWithChildren) {
  return (
    <QuizContext.Provider value={useQuizContext()}>
      {children}
    </QuizContext.Provider>
  );
}
