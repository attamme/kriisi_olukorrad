export default function ChoiceButton({ letter, text, onClick }) {
  return (
    <button className="choiceBtn" onClick={onClick}>
      <span className="choiceLetter">{letter}</span>
      <span className="choiceText">{text}</span>
    </button>
  );
}
