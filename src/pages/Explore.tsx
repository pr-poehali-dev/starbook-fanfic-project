
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout";
import { getFanficsByFandom, getFanficsByRating, fanfics, DEFAULT_COVER } from "@/data/fanfics";
import { getFandomById, fandoms } from "@/data/fandoms";
import { Fanfic, FanficRating, RATING_LABELS } from "@/types/fanfiction";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import AgeRatingBadge from "@/components/fanfic/AgeRatingBadge";

export default function Explore() {
  const { fandomId, rating } = useParams<{ fandomId?: string; rating?: string }>();
  const [filteredFanfics, setFilteredFanfics] = useState<Fanfic[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  useEffect(() => {
    if (fandomId) {
      setFilteredFanfics(getFanficsByFandom(fandomId));
      setActiveFilter(`fandom-${fandomId}`);
    } else if (rating) {
      setFilteredFanfics(getFanficsByRating(rating as FanficRating));
      setActiveFilter(`rating-${rating}`);
    } else {
      setFilteredFanfics(fanfics);
      setActiveFilter("all");
    }
  }, [fandomId, rating]);

  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Исследуйте фанфики</h1>
        
        <Tabs defaultValue="fandoms" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="fandoms">По фандомам</TabsTrigger>
            <TabsTrigger value="rating">По рейтингу</TabsTrigger>
          </TabsList>
          
          <TabsContent value="fandoms">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              <Link 
                to="/explore" 
                className={`block p-4 rounded-lg border transition-colors ${activeFilter === "all" ? "border-primary bg-primary/5" : "hover:border-primary/50"}`}
              >
                <span className="font-medium">Все фандомы</span>
              </Link>
              
              {fandoms.map((fandom) => (
                <Link 
                  key={fandom.id}
                  to={`/fandom/${fandom.id}`}
                  className={`block p-4 rounded-lg border transition-colors ${activeFilter === `fandom-${fandom.id}` ? "border-primary bg-primary/5" : "hover:border-primary/50"}`}
                >
                  <span className="font-medium">{fandom.name}</span>
                </Link>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="rating">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {(Object.keys(RATING_LABELS) as FanficRating[]).map((rating) => (
                <Link 
                  key={rating}
                  to={`/rating/${rating}`}
                  className={`block p-4 rounded-lg border transition-colors ${activeFilter === `rating-${rating}` ? "border-primary bg-primary/5" : "hover:border-primary/50"}`}
                >
                  <span className="font-medium">{RATING_LABELS[rating]}</span>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <Separator className="my-6" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFanfics.length > 0 ? (
            filteredFanfics.map((fanfic) => (
              <Card key={fanfic.id} className="overflow-hidden flex flex-col">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img 
                    src={fanfic.imageUrl || DEFAULT_COVER} 
                    alt={fanfic.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src !== DEFAULT_COVER) {
                        target.src = DEFAULT_COVER;
                      }
                    }}
                  />
                  <div className="absolute top-3 right-3 z-10">
                    <AgeRatingBadge rating={fanfic.rating} />
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{fanfic.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground line-clamp-2 mb-3">{fanfic.excerpt}</p>
                  <div className="flex items-center gap-2 mb-2">
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
                <CardFooter className="border-t pt-4 flex justify-between">
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
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">Фанфики не найдены.</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
