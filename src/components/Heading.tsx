export default function Heading({
  children,
  as = "h1",
}: {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
}) {
  switch (as) {
    case "h1":
      return <h1 className="fs-[5rem] loose-sm my-1">{children}</h1>;
    case "h2":
      return <h2 className="fs-[2rem] loose-sm my-1"> {children} </h2>;
    case "h3":
      return <h3 className="fs-[1.2rem] loose-sm my-1">{children}</h3>;
  }
}
