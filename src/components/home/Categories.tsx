
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const categories = [
  { name: "Фантастика", icon: "Rocket", count: 1243 },
  { name: "Фэнтези", icon: "Wand", count: 986 },
  { name: "Романтика", icon: "Heart", count: 754 },
  { name: "Приключения", icon: "Map", count: 631 },
  { name: "Детектив", icon: "Search", count: 428 },
  { name: "Ужасы", icon: "Ghost", count: 312 }
];

const Categories = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Исследуйте жанры</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="outline"
              className="h-auto flex-col py-6 gap-2 group"
              asChild
            >
              <Link to={`/category/${category.name.toLowerCase()}`}>
                <Icon 
                  name={category.icon as any} 
                  size={32} 
                  className="text-muted-foreground group-hover:text-primary transition-colors" 
                />
                <span className="font-medium">{category.name}</span>
                <span className="text-xs text-muted-foreground">{category.count} историй</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
