import { PropsWithChildren } from "react";

export default function ContentBody({ children }: PropsWithChildren) {
  return <div className="flex flex-col gap-2">{children}</div>;
}
