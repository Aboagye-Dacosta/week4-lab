import "../styles/switch_style.css";

export default function Switch({
  onChange,
}: {
  onChange: React.FormEventHandler<HTMLInputElement>;
}) {
  return (
    <label className="toggle-switch">
      <input type="checkbox" onInput={onChange} />
      <span className="slider"></span>
    </label>
  );
}
