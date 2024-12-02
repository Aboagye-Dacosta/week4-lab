export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      className="bg-brand border-none shadow-sm hover:shadow-md p-1 f-white w-100 radius-lg bold fs-[1rem]"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
