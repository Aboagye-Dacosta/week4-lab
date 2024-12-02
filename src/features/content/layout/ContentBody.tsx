import { PropsWithChildren } from "react";

export default function ContentBody({ children }: PropsWithChildren) {
  return <div className="flex flex-col gap-2 flex-1">{children}</div>;
}
