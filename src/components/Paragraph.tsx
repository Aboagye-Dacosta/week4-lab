export default function Paragraph({
  children,
  weight = "normal",
  style = "normal",
  variation = "small",
}: {
  weight?: "bold" | "normal";
  style?: "italic" | "normal";
  variation?: "small" | "medium" | "medium-sm" | "large" | "x-large";
  children: React.ReactNode;
}) {
  return (
    <p
      className={`align-left ${weight} ${style} ${
        variation == "x-large" && "fs-[8rem]"
      } ${variation == "large" && "fs-[5rem]"} ${
        variation == "medium" && "fs-[3rem]"
      } ${variation == "small" && "fs-[1.2rem]"}`}
    >
      {children}
    </p>
  );
}
