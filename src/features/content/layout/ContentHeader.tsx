import { PropsWithChildren } from "react";

export default function ContentHeader({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col items-start justify-start gap-1 flex-1">{children}</div>
  );
}
