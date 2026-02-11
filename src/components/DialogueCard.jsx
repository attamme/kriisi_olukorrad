import { MessageCircle } from "lucide-react";

export default function DialogueCard({ narrator = "Kriisi-Juhendaja", hint = "Vali rahulikult parim tegevus", text }) {
  return (
    <div className="card cardPad dialogue">
      <div className="narratorRow">
        <div className="avatar" aria-hidden>
          <MessageCircle size={18} />
        </div>
        <div>
          <div className="narratorName">{narrator}</div>
          <div className="narratorHint">{hint}</div>
        </div>
      </div>
      <div className="dialogueText">{text}</div>
    </div>
  );
}
