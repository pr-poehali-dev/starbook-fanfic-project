
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { UseFormReturn } from "react-hook-form";
import { RegisterFormValues } from "../validation/registerSchema";

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
        <FormItem className="flex items-start space-x-2 space-y-0">
          <FormControl>
            <Checkbox 
              checked={field.value} 
              onCheckedChange={field.onChange}
              disabled={isLoading}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel className="text-sm font-normal">
              Я соглашаюсь с условиями использования и политикой конфиденциальности
            </FormLabel>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
}
