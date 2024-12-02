import "../styles/progress_indicator.css";

export default function ProgressIndicator({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const progressPercentage = (current / total) * 100;

  return (
    <div className="quiz-progress__bar w-full bg-grey-0 shadow-sm">
      <div
        className="quiz-progress__fill"
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
}
