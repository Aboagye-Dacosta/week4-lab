export default function Icon({
  src,
  bgColor = "brand",
}: {
  src: string;
  bgColor?: "red" | "green" | "blue" | "brand";
}) {
  const bg: { [key: string]: string } = {
    red: "icon-bg-red",
    blue: "bg-grey-200",
    green: "icon-bg-green",
    brand: "icon-bg-brand",
  };

  return (
    <div className={`flex items-center justify-center p-1 radius-[1rem] ${bg[bgColor]}`}>
      <img src={src} alt="" className="w-[2rem]"/>
    </div>
  );
}
