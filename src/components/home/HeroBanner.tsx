
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="relative bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
      <div className="container flex flex-col items-center text-center gap-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
          Открой свою вселенную <span className="text-primary">историй</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px]">
          Создавай, читай и делись увлекательными фанфиками в самом креативном сообществе писателей
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button size="lg" asChild>
            <Link to="/explore">Начать читать</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/create">Создать историю</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
