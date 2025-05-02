
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface SubmitButtonProps {
  isLoading: boolean;
  loadingText: string;
  text: string;
}

export function SubmitButton({ isLoading, loadingText, text }: SubmitButtonProps) {
  return (
    <Button type="submit" className="w-full" disabled={isLoading}>
      {isLoading ? (
        <>
          <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
          {loadingText}
        </>
      ) : (
        text
      )}
    </Button>
  );
}
