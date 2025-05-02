
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { UseFormReturn } from "react-hook-form";
import { RegisterFormValues } from "../hooks/useRegisterForm";

interface TermsFieldProps {
  form: UseFormReturn<RegisterFormValues>;
  isLoading: boolean;
}

export function TermsField({ form, isLoading }: TermsFieldProps) {
  return (
    <FormField
      control={form.control}
      name="acceptTerms"
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-1">
          <FormControl>
            <Checkbox
              checked={field.value}
              disabled={isLoading}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>
              Я принимаю условия использования и политику конфиденциальности
            </FormLabel>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
}
