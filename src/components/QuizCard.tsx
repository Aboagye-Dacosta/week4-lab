export default function QuizCard({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <div
      className="flex flex-row items-center gap-1 p-1 w-100 shadow-sm bg-grey-0 radius-lg hover:shadow-md"
      onClick={onClick}
    >
      {children}
    </div>
  );
}
