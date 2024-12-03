import "../styles/switch_style.css";

export default function Switch({
  onChange,
  state,
}: {
  onChange: React.FormEventHandler<HTMLInputElement>;
  state: boolean;
}) {
  return (
    <label className="toggle-switch">
      <input type="checkbox" onInput={onChange} checked={state} />
      <span className="slider"></span>
    </label>
  );
}
