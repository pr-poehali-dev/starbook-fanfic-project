
import { Form } from "@/components/ui/form";
import { useRegisterForm } from "./hooks/useRegisterForm";
import { UsernameField } from "./form-fields/UsernameField";
import { EmailField } from "./form-fields/EmailField";
import { PasswordField } from "./form-fields/PasswordField";
import { TermsField } from "./form-fields/TermsField";
import { SubmitButton } from "./form-fields/SubmitButton";

interface RegisterFormProps {
  onSuccess?: () => void;
}

export default function RegisterForm({ onSuccess }: RegisterFormProps) {
  const { form, isLoading, onSubmit } = useRegisterForm({ onSuccess });


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <UsernameField form={form} isLoading={isLoading} />
        <EmailField form={form} isLoading={isLoading} />
        <PasswordField form={form} isLoading={isLoading} />
        <TermsField form={form} isLoading={isLoading} />
        
        <SubmitButton 
          isLoading={isLoading} 
          loadingText="Регистрация..." 
          text="Зарегистрироваться" 
        />
      </form>
    </Form>
  );

}
