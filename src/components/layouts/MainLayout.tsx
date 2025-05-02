
import { ReactNode } from "react";
import { Link } from "react-router-dom";
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
import { useAuth } from "@/context/AuthContext";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { isAuthenticated, isLoading } = useAuth();

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
                        <div className="text-sm font-medium leading-none">
                          Все фэндомы
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Исследуйте все доступные фэндомы и истории
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <div className="grid grid-cols-2 gap-3">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/fandom/harry-potter"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Гарри Поттер
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/fandom/star-wars"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Звездные войны
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/fandom/marvel"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Марвел
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/fandom/game-of-thrones"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Игра Престолов
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/explore">
                  <NavigationMenuLink>Истории</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            {/* Кнопка создания истории (только для авторизованных пользователей) */}
            {isAuthenticated && (
              <Link to="/create">
                <Button variant="ghost" size="sm" className="gap-1.5">
                  <Icon name="PenLine" size={18} />
                  <span className="hidden sm:inline">Написать</span>
                </Button>
              </Link>
            )}

            {/* Авторизация */}
            {isLoading ? (
              <Button disabled variant="ghost" size="icon">
                <Icon name="Loader2" className="h-5 w-5 animate-spin" />
              </Button>
            ) : isAuthenticated ? (
              <UserMenu />
            ) : (
              <AuthDialog />
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
            <Link
              to="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              О нас
            </Link>
            <Link
              to="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Условия использования
            </Link>
            <Link
              to="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Конфиденциальность
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
