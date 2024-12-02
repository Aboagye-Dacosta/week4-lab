import { PropsWithChildren } from "react";
import { useTheme } from "../../context/ThemeContext";

export default function Layout({ children }: PropsWithChildren) {
  const { theme } = useTheme();
  return (
    <div
      className={`${theme} flex flex-col gap-2 bg-img-mobile md:bg-img-tablet lg:bg-img-desktop w-100 min-h-[100vh] f-grey-500 p-2 md:p-5 object-cover bg-no-repeat`}
      id="my-root"
    >
      {children}
    </div>
  );
}
