import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const HeroBanner = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/explore?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
      <div className="container flex flex-col items-center text-center gap-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
          Открой свою вселенную <span className="text-primary">историй</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px]">
          Создавай, читай и делись увлекательными фанфиками в самом креативном сообществе писателей
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Button size="lg" asChild>
            <Link to="/explore">Начать читать</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/create">Создать историю</Link>
          </Button>
        </div>
        <form onSubmit={handleSearch} className="flex w-full max-w-[560px] gap-2 mt-2">
          <div className="relative flex-1">
            <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Поиск историй, авторов, фэндомов..."
              className="pl-9 h-11 rounded-full bg-background/80 backdrop-blur"
            />
          </div>
          <Button type="submit" size="lg" className="rounded-full px-6">
            Найти
          </Button>
        </form>
      </div>
    </div>
  );
};

export default HeroBanner;
