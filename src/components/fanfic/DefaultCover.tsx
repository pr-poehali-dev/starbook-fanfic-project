
import { getFanficCover } from "@/data/fanfics";
import { Fanfic } from "@/types/fanfiction";

interface DefaultCoverProps {
  fanfic: Fanfic;
  className?: string;
}

export default function DefaultCover({ fanfic, className = "" }: DefaultCoverProps) {
  return (
    <div className={`rounded-md overflow-hidden aspect-[3/4] ${className}`}>
      <img 
        src={getFanficCover(fanfic)} 
        alt={fanfic.title}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
