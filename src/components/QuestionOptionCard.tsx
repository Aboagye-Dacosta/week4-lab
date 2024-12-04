import Paragraph from "./Paragraph";

export default function QuestionOptionCard({
  state,
  option,
  tag,
  isSelectedOption,
  disabled,
  onClick,
}: {
  option: string;
  tag: string;
  state: "correct" | "wrong" | "neutral";
  isSelectedOption: boolean;
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      className={`flex items-center justify-between gap-2 border-none bg-grey-0 focus:outline-brand shadow-sm hover:shadow-md w-100 group p-1 radius-lg f-grey-500 ${
        state == "correct" && isSelectedOption && "outline-green"
      } ${state == "wrong" && isSelectedOption && "outline-red"}`}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      <div className="flex items-center gap-2">
        <div
          className={`group:focus:bg-brand p-1 radius-md bg-grey-100 flex items-center justify-center ${
            state == "correct" && isSelectedOption && "bg-green"
          } ${state == "wrong" && isSelectedOption && "bg-red"}`}
        >
          <span className="bolder">{tag}</span>
        </div>
        <Paragraph variation="medium-sm">{option}</Paragraph>
      </div>
      {state == "correct" && (
        <img
          src="/assets/images/icon-correct.svg"
          className="w-[2rem] self-end"
        />
      )}
      {state == "wrong" && (
        <img
          src="/assets/images/icon-incorrect.svg"
          className="w-[2rem] self-end"
        />
      )}
    </button>
  );
}
