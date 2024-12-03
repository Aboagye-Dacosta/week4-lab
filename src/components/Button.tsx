export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      className="bg-brand border-none shadow-sm hover:shadow-md p-1 f-white w-100 radius-lg fs-[2rem]"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
