
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { RegisterFormValues } from "../hooks/useRegisterForm";

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
              placeholder="author123"
              disabled={isLoading}
              autoComplete="username"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
