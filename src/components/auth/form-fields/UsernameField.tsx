
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { RegisterFormValues } from "../validation/registerSchema";

interface UsernameFieldProps {
  form: UseFormReturn<RegisterFormValues>;
  isLoading: boolean;
}

export function UsernameField({ form, isLoading }: UsernameFieldProps) {
  return (
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Имя пользователя</FormLabel>
          <FormControl>
            <Input 
              placeholder="username" 
              autoComplete="username"
              disabled={isLoading}
              {...field} 
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
