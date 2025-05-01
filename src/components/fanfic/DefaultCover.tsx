
import { cn } from "@/lib/utils";
import { DEFAULT_COVER } from "@/data/fanfics";

interface DefaultCoverProps {
  title?: string;
  className?: string;
}

export default function DefaultCover({ title, className }: DefaultCoverProps) {
  return (
    <div 
      className={cn(
        "relative w-full h-full overflow-hidden bg-gradient-to-br from-purple-500/20 to-purple-800/70",
        className
      )}
    >
      <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/files/bed427fc-7159-4579-8a00-0101094c1626.png')] bg-center bg-no-repeat bg-contain opacity-90"></div>
      
      {title && (
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <h3 className="text-center font-bold text-white text-shadow-sm px-4 py-2 bg-purple-900/70 rounded backdrop-blur-sm max-w-[80%] line-clamp-2">
            {title}
          </h3>
        </div>
      )}
      
      {/* Добавим блики */}
      <div className="absolute -inset-1/2 animate-[spin_20s_linear_infinite] opacity-30 bg-gradient-radial from-purple-200 to-transparent"></div>
      
      {/* Звездочки */}
      <div className="absolute top-2 right-2 text-purple-200 animate-pulse">✧</div>
      <div className="absolute bottom-2 left-2 text-purple-200 animate-pulse delay-300">✦</div>
      <div className="absolute top-1/2 left-1/4 text-purple-200 animate-pulse delay-700">✧</div>
    </div>
  );
}
