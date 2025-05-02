
import { Fanfic } from "@/types/fanfiction";

export interface FanficFormProps {
  isEditing: boolean;
  fanfic?: Partial<Fanfic>;
  onSave?: () => void;
  onCancel?: () => void;
  onPublish?: () => void;
  onSaveDraft?: () => void;
  onAddChapter?: () => void;
}
