import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Icon from "@/components/ui/icon";
import AuthDialog from "@/components/auth/AuthDialog";
import UserMenu from "@/components/auth/UserMenu";
import PremiumDialog from "@/components/home/PremiumDialog";
import ThemeToggleButton from "@/components/ui/ThemeToggleButton";
import { useAuth } from "@/context/AuthContext";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleRandom = () => {
    const fandoms = ["harry-potter", "star-wars", "marvel", "game-of-thrones", "naruto", "lord-of-the-rings"];
    const random = fandoms[Math.floor(Math.random() * fandoms.length)];
    navigate(`/fandom/${random}`);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link to="/" className="flex items-center gap-2 mr-4">
            <img src="/logo-b.svg" alt="Лого" className="h-8 w-auto" />
            <span className="font-bold text-xl hidden sm:inline-block">
              Starbook
            </span>
          </Link>

          <NavigationMenu className="mr-auto">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Фэндомы</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                    <NavigationMenuLink asChild>
                      <Link
                        to="/explore"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Все фэндомы</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Исследуйте все доступные фэндомы и истории
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { slug: "harry-potter", name: "Гарри Поттер" },
                        { slug: "star-wars", name: "Звездные войны" },
                        { slug: "marvel", name: "Марвел" },
                        { slug: "game-of-thrones", name: "Игра Престолов" },
                      ].map((f) => (
                        <NavigationMenuLink key={f.slug} asChild>
                          <Link
                            to={`/fandom/${f.slug}`}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{f.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/explore">
                  <NavigationMenuLink>Истории</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Разделы</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-1 p-3 w-[220px]">
                    <NavigationMenuLink asChild>
                      <Link
                        to="/explore?tab=recommended"
                        className="flex items-center gap-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <Icon name="Sparkles" size={18} className="text-primary" />
                        <div>
                          <div className="text-sm font-medium">Рекомендации</div>
                          <p className="text-xs text-muted-foreground">Подборка для тебя</p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/explore?tab=authors"
                        className="flex items-center gap-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <Icon name="Users" size={18} className="text-primary" />
                        <div>
                          <div className="text-sm font-medium">Авторы</div>
                          <p className="text-xs text-muted-foreground">Популярные писатели</p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/explore?tab=top"
                        className="flex items-center gap-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <Icon name="TrendingUp" size={18} className="text-primary" />
                        <div>
                          <div className="text-sm font-medium">Топ</div>
                          <p className="text-xs text-muted-foreground">Лучшие истории</p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <button
                        onClick={handleRandom}
                        className="flex w-full items-center gap-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <Icon name="Dices" size={18} className="text-primary" />
                        <div className="text-left">
                          <div className="text-sm font-medium">Рандомная история</div>
                          <p className="text-xs text-muted-foreground">Удиви меня!</p>
                        </div>
                      </button>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <Link to="/create">
                <Button variant="ghost" size="sm" className="gap-1.5">
                  <Icon name="PenLine" size={18} />
                  <span className="hidden sm:inline">Написать</span>
                </Button>
              </Link>
            )}

            <ThemeToggleButton />

            {isLoading ? (
              <Button disabled variant="ghost" size="icon">
                <Icon name="Loader2" className="h-5 w-5 animate-spin" />
              </Button>
            ) : isAuthenticated ? (
              <UserMenu />
            ) : (
              <div className="flex items-center gap-2">
                <PremiumDialog />
                <AuthDialog />
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Starbook. Все права защищены.
          </p>
          <div className="flex gap-4">
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground">О нас</Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground">Условия использования</Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground">Конфиденциальность</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
