
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Fanfic } from "@/types/fanfiction";
import { DEFAULT_COVER } from "@/data/fanfics";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import DefaultCover from "./DefaultCover";
import { useState } from "react";

interface FanficCardProps {
  fanfic: Fanfic;
  className?: string;
}

export default function FanficCard({ fanfic, className = "" }: FanficCardProps) {
  const [imageError, setImageError] = useState(!fanfic.imageUrl);
  
  return (
    <Card className={`overflow-hidden hover:shadow-md transition-shadow ${className}`}>
      <div className="relative aspect-[3/2] overflow-hidden">
        {!imageError ? (
          <img 
            src={fanfic.imageUrl} 
            alt={fanfic.title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <DefaultCover title={fanfic.title} />
        )}
        <Badge className="absolute top-3 right-3 z-10">{fanfic.rating}</Badge>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{fanfic.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{fanfic.excerpt}</p>
        <div className="flex items-center gap-2">
          <img 
            src={fanfic.author.avatar} 
            alt={fanfic.author.name} 
            className="w-6 h-6 rounded-full"
          />
          <span className="text-sm">{fanfic.author.name}</span>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {fanfic.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t pt-3 flex justify-between">
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Icon name="Clock" size={14} />
          <span>{fanfic.readTime}</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Icon name="Heart" size={14} />
          <span>{fanfic.likes}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
