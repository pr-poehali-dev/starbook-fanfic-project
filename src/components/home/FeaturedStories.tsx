
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DEFAULT_COVER, fanfics } from "@/data/fanfics";
import FanficCard from "@/components/fanfic/FanficCard";

export default function FeaturedStories() {
  // Группировка фанфиков по категориям
  const popularStories = fanfics.sort((a, b) => b.likes - a.likes).slice(0, 6);
  const recentStories = [...fanfics].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  ).slice(0, 6);
  
  return (
    <section className="py-12 container">
      <h2 className="text-3xl font-bold mb-6">Лучшие фанфики</h2>
      
      <Tabs defaultValue="popular" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="popular">Популярные</TabsTrigger>
          <TabsTrigger value="recent">Недавние</TabsTrigger>
        </TabsList>
        
        <TabsContent value="popular" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularStories.map((story) => (
            <FanficCard key={story.id} fanfic={story} />
          ))}
        </TabsContent>
        
        <TabsContent value="recent" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentStories.map((story) => (
            <FanficCard key={story.id} fanfic={story} />
          ))}
        </TabsContent>
      </Tabs>
    </section>
  );
}
