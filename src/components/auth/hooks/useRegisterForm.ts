
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../validation/registerSchema";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/context/AuthContext";

interface UseRegisterFormProps {
  onSuccess?: () => void;
}

export function useRegisterForm({ onSuccess }: UseRegisterFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { register } = useAuth();
  
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      acceptTerms: false
    }
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const isValid = await form.trigger();
    if (!isValid) return;
    
    const values = form.getValues();
    setIsLoading(true);
    
    try {
      await register(values.username, values.email, values.password);
      
      toast({
        title: "Регистрация успешна",
        description: "Добро пожаловать на платформу!",
      });
      
      if (onSuccess) onSuccess();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ошибка регистрации",
        description: "Не удалось создать аккаунт. Попробуйте позже.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    isLoading,
    onSubmit
  };
}

export type RegisterFormValues = {
  username: string;
  email: string;
  password: string;
  acceptTerms: boolean;
};
