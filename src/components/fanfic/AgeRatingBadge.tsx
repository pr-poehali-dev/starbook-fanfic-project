
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { FanficRating } from "@/types/fanfiction";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface AgeRatingBadgeProps {
  rating: FanficRating;
  showTooltip?: boolean;
  className?: string;
}

export default function AgeRatingBadge({ 
  rating, 
  showTooltip = true,
  className 
}: AgeRatingBadgeProps) {
  // Определим цвет бейджа в зависимости от возрастного рейтинга
  const getBadgeStyles = (): string => {
    switch(rating) {
      case '6+': 
        return 'bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-100';
      case '12+': 
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-100';
      case '16+': 
        return 'bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-900 dark:text-amber-100';
      case '18+': 
        return 'bg-orange-100 text-orange-800 hover:bg-orange-200 dark:bg-orange-900 dark:text-orange-100';
      case '21+': 
        return 'bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900 dark:text-red-100';
      default:
        return '';
    }
  };

  // Определим описание рейтинга для тултипа
  const getRatingDescription = (): string => {
    switch(rating) {
      case '6+': 
        return 'Подходит для детей 6+ лет, без неприемлемого содержания';
      case '12+': 
        return 'Для подростков 12+ лет, может содержать лёгкие ругательства';
      case '16+': 
        return 'Для подростков 16+ лет, умеренная лексика и романтика';
      case '18+': 
        return 'Только для взрослых, может содержать откровенный контент';
      case '21+': 
        return 'Строго 21+, откровенные сцены и графическое насилие';
      default:
        return '';
    }
  };

  const badgeContent = (
    <Badge className={cn(getBadgeStyles(), className)}>
      {rating}
    </Badge>
  );

  if (showTooltip) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {badgeContent}
          </TooltipTrigger>
          <TooltipContent>
            <p>{getRatingDescription()}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return badgeContent;
}
