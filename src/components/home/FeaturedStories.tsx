
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

// Временные данные для демонстрации
const featuredStories = [
  {
    id: 1,
    title: "Возвращение Звёздного Капитана",
    excerpt: "После десяти лет изгнания, легендарный капитан возвращается с секретной миссией...",
    author: {
      name: "АлексСкайуокер",
      avatar: "https://source.unsplash.com/random/300x300/?portrait,1",
    },
    category: "Научная фантастика",
    readTime: "12 мин",
    likes: 342,
    imageUrl: "https://source.unsplash.com/random/600x400/?space,1"
  },
  {
    id: 2,
    title: "Тайна Зачарованного Леса",
    excerpt: "Когда древние деревья начинают шептать, юная волшебница должна раскрыть секрет...",
    author: {
      name: "МагияСлов",
      avatar: "https://source.unsplash.com/random/300x300/?portrait,2",
    },
    category: "Фэнтези",
    readTime: "8 мин",
    likes: 217,
    imageUrl: "https://source.unsplash.com/random/600x400/?forest,1"
  },
  {
    id: 3,
    title: "Последний Рыцарь Королевства",
    excerpt: "В мире, где честь давно забыта, один рыцарь продолжает служить павшему королевству...",
    author: {
      name: "РыцарьПера",
      avatar: "https://source.unsplash.com/random/300x300/?portrait,3",
    },
    category: "Историческое фэнтези",
    readTime: "15 мин",
    likes: 189,
    imageUrl: "https://source.unsplash.com/random/600x400/?castle,1"
  }
];

const FeaturedStories = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Популярные истории</h2>
          <Link to="/explore" className="flex items-center gap-1 text-primary hover:underline">
            Смотреть все <Icon name="ArrowRight" size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredStories.map((story) => (
            <Card key={story.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={story.imageUrl} 
                  alt={story.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm text-xs px-2 py-1 rounded-full">
                  {story.category}
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="line-clamp-1 text-xl">{story.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={story.author.avatar} alt={story.author.name} />
                    <AvatarFallback>{story.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{story.author.name}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2">{story.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between text-xs text-muted-foreground pt-0">
                <div className="flex items-center gap-1">
                  <Icon name="Clock" size={14} />
                  <span>{story.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Heart" size={14} />
                  <span>{story.likes}</span>
                </div>
                <Link to={`/story/${story.id}`} className="text-primary hover:underline flex items-center gap-1">
                  Читать <Icon name="ArrowRight" size={14} />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStories;
