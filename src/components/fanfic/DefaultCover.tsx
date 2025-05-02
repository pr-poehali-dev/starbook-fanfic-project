
import { getFanficCover } from "@/data/fanfics";
import { Fanfic } from "@/types/fanfiction";

interface DefaultCoverProps {
  fanfic?: Fanfic | null;
  className?: string;
}

export default function DefaultCover({ fanfic, className = "" }: DefaultCoverProps) {
  // Защита от случая, когда fanfic не определен
  const coverImage = getFanficCover(fanfic);
  const altText = fanfic?.title || "Обложка истории";
  
  return (
    <div className={`rounded-md overflow-hidden aspect-[3/4] ${className}`}>
      <img 
        src={coverImage} 
        alt={altText}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
