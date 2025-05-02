
import { useState } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { UseFormReturn } from "react-hook-form";
import { RegisterFormValues } from "../validation/registerSchema";

interface PasswordFieldProps {
  form: UseFormReturn<RegisterFormValues>;
  isLoading: boolean;
  showHint?: boolean;
}

export function PasswordField({ form, isLoading, showHint = true }: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <FormField
      control={form.control}
      name="password"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Пароль</FormLabel>
          <FormControl>
            <div className="relative">
              <Input 
                placeholder="••••••••" 
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                disabled={isLoading}
                {...field} 
              />
              <Button 
                type="button"
                variant="ghost" 
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Icon name="EyeOff" size={16} />
                ) : (
                  <Icon name="Eye" size={16} />
                )}
              </Button>
            </div>
          </FormControl>
          <FormMessage />
          {showHint && (
            <p className="text-xs text-muted-foreground mt-1">
              Минимум 8 символов, включая заглавную букву и цифру
            </p>
          )}
        </FormItem>
      )}
    />
  );
}
