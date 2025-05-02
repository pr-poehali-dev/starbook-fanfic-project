
import { Link } from "react-router-dom";

import Icon from "@/components/ui/icon";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import AuthDialog from "@/components/auth/AuthDialog";


interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Sparkles" size={24} className="text-primary" />
            <span className="text-xl font-bold">StarBook</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Главная
            </Link>
            <Link to="/explore" className="text-muted-foreground hover:text-foreground transition-colors">
              Библиотека
            </Link>
            <Link to="/create" className="text-muted-foreground hover:text-foreground transition-colors">
              Создать
            </Link>
            <Link to="/my-stories" className="text-muted-foreground hover:text-foreground transition-colors">
              Мои истории
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="rounded-full p-2 hover:bg-accent transition-colors">
              <Icon name="Search" size={20} />
            </button>
            <div className="relative">
              <button className="bg-primary text-primary-foreground rounded-full px-4 py-2 hover:bg-primary/90 transition-colors">
                Личный кабинет
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>
      
      <footer className="border-t bg-muted/50 py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" size={20} className="text-primary" />
            <span className="font-semibold">StarBook</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} StarBook. Все права защищены.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="Twitter" size={18} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="Instagram" size={18} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="Facebook" size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
