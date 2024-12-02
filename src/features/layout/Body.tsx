import { PropsWithChildren } from "react";

export default function Body({ children }: PropsWithChildren) {
  return <div className="flex flex-col lg:flex-row gap-4 lg:gap-3 w-100">{children}</div>;
}
