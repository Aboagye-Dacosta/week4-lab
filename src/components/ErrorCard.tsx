import { PropsWithChildren } from "react";
import Paragraph from "./Paragraph";

export default function ErrorCard({ children }: PropsWithChildren) {
  return (
    <div className="flex items-center justify-center f-red gap-1 w-100">
      <img src="./assets/images/icon-error.svg" className="w-[2rem]" />
      <Paragraph>{children}</Paragraph>
    </div>
  );
}
