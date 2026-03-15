import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Icon from "@/components/ui/icon";

interface AuthDialogProps {
  triggerElement?: React.ReactNode;
}

const SOCIAL_PROVIDERS = [
  {
    id: "google",
    label: "Google",
    color: "hover:border-red-400 hover:text-red-500",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
  },
  {
    id: "yandex",
    label: "Яндекс",
    color: "hover:border-red-500 hover:text-red-600",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#FC3F1D"/>
        <path d="M13.32 7.2h-.87c-1.43 0-2.18.7-2.18 1.84 0 1.3.57 1.96 1.72 2.74l.96.64-2.74 4.18H8.5l2.52-3.84c-1.46-1.04-2.28-2.06-2.28-3.62 0-2.06 1.44-3.34 3.72-3.34h2.74v10.8h-1.88V7.2z" fill="#fff"/>
      </svg>
    ),
  },
  {
    id: "vk",
    label: "ВКонтакте",
    color: "hover:border-blue-500 hover:text-blue-600",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#4C75A3"/>
        <path d="M17.18 13.36c.38.37.78.72 1.12 1.12.15.18.29.36.4.55.16.27.04.57-.2.59l-1.47.02c-.38.03-.68-.12-.93-.38-.2-.2-.38-.42-.58-.62a.95.95 0 00-.36-.25c-.25-.09-.47-.04-.61.19-.15.23-.18.5-.19.77-.02.4-.14.5-.54.52-.85.04-1.65-.1-2.39-.54-1.05-.64-1.87-1.55-2.58-2.56C8.3 11.5 7.6 10.1 7 8.65c-.14-.33-.04-.5.31-.51l1.48-.01c.37 0 .61.16.75.52.27.7.59 1.38.99 2.01.11.17.22.33.38.45.17.13.3.1.39-.1.06-.13.08-.27.09-.41.04-.53.04-1.06-.04-1.58-.05-.33-.22-.55-.55-.62-.17-.03-.14-.12-.06-.21.14-.16.27-.26.53-.26h1.67c.42.08.52.27.57.69l.01 2.97c0 .16.08.62.37.72.23.08.39-.1.53-.25.65-.73 1.12-1.59 1.54-2.47.06-.14.12-.28.18-.43.09-.22.23-.33.47-.33l1.55-.01c.46 0 .58.22.46.65-.2.71-.62 1.31-1.04 1.9-.39.56-.81 1.1-1.2 1.67-.16.24-.14.36.08.56z" fill="#fff"/>
      </svg>
    ),
  },
  {
    id: "instagram",
    label: "Instagram",
    color: "hover:border-pink-500 hover:text-pink-600",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f09433"/>
            <stop offset="25%" stopColor="#e6683c"/>
            <stop offset="50%" stopColor="#dc2743"/>
            <stop offset="75%" stopColor="#cc2366"/>
            <stop offset="100%" stopColor="#bc1888"/>
          </linearGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#ig-grad)"/>
        <path d="M12 7.5A4.5 4.5 0 1 0 12 16.5 4.5 4.5 0 0 0 12 7.5zm0 7.5A3 3 0 1 1 12 9a3 3 0 0 1 0 6zM17.25 7.25a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0z" fill="#fff"/>
        <rect x="4" y="4" width="16" height="16" rx="5" stroke="#fff" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    id: "twitch",
    label: "Twitch",
    color: "hover:border-purple-500 hover:text-purple-600",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" fill="#9146FF"/>
      </svg>
    ),
  },
];

export default function AuthDialog({ triggerElement }: AuthDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {triggerElement || (
          <Button className="gap-2">
            <Icon name="LogIn" size={18} />
            Войти
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[460px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl mb-1">
            Добро пожаловать!
          </DialogTitle>
          <DialogDescription className="text-center">
            Присоединяйтесь к сообществу авторов и читателей
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-5 gap-2 mt-2">
          {SOCIAL_PROVIDERS.map((p) => (
            <button
              key={p.id}
              onClick={() => handleSocialLogin(p.id)}
              title={p.label}
              className={`flex flex-col items-center gap-1 rounded-xl border border-border p-2.5 transition-all ${p.color} hover:bg-muted/50`}
            >
              {p.icon}
              <span className="text-[10px] text-muted-foreground leading-tight">{p.label}</span>
            </button>
          ))}
        </div>

        <div className="relative my-2">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-background px-2 text-muted-foreground">
              или по email
            </span>
          </div>
        </div>

        <Tabs defaultValue="login">
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="login">Вход</TabsTrigger>
            <TabsTrigger value="register">Регистрация</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="mt-4">
            <LoginForm onSuccess={() => setIsOpen(false)} />
          </TabsContent>

          <TabsContent value="register" className="mt-4">
            <RegisterForm onSuccess={() => setIsOpen(false)} />
          </TabsContent>
        </Tabs>

        <p className="mt-2 text-center text-xs text-muted-foreground">
          Регистрируясь, вы соглашаетесь с{" "}
          <a href="#" className="text-primary hover:underline">Условиями использования</a>
          {" "}и{" "}
          <a href="#" className="text-primary hover:underline">Политикой конфиденциальности</a>
        </p>
      </DialogContent>
    </Dialog>
  );
}
