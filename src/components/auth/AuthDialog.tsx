
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

export default function AuthDialog({ triggerElement }: AuthDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {triggerElement || (
          <Button variant="primary" className="gap-2">
            <Icon name="LogIn" size={18} />
            Войти
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl mb-1">
            Добро пожаловать!
          </DialogTitle>
          <DialogDescription className="text-center">
            Присоединяйтесь к сообществу авторов и читателей
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="login" className="mt-4">
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
        
        <div className="mt-4 text-center text-sm text-muted-foreground">
          Регистрируясь, вы соглашаетесь с нашими{" "}
          <a href="#" className="text-primary hover:underline">
            Условиями использования
          </a>{" "}
          и{" "}
          <a href="#" className="text-primary hover:underline">
            Политикой конфиденциальности
          </a>
        </div>
        
        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-background px-2 text-muted-foreground">
              или продолжить с
            </span>
          </div>
        </div>
        
        <div className="flex justify-center gap-4 mt-4">
          <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
            <Icon name="Github" size={20} />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
            <Icon name="Facebook" size={20} />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
            <Icon name="Mail" size={20} />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
