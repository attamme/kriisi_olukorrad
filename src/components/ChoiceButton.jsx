export default function ChoiceButton({ letter, text, onClick }) {
  return (
    <button className="choiceBtn" onClick={onClick}>
      <span className="choiceLetter">{letter}</span>
      <span style={{ lineHeight: 1.25 }}>{text}</span>
    </button>
  );
}
