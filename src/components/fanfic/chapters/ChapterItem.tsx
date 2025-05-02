
import { Button } from "@/components/ui/button";

interface Chapter {
  id: string;
  title: string;
  publishedAt: string | null;
  status: 'published' | 'draft';
}

interface ChapterItemProps {
  chapter: Chapter;
  onEdit?: (id: string) => void;
}

export default function ChapterItem({ chapter, onEdit }: ChapterItemProps) {
  const handleEdit = () => {
    if (onEdit) {
      onEdit(chapter.id);
    }
  };
  
  return (
    <div className="flex items-center justify-between p-3 border rounded-md hover:bg-muted/50 transition-colors">
      <div>
        <h3 className="font-medium">{chapter.title}</h3>
        <p className="text-sm text-muted-foreground">
          {chapter.publishedAt 
            ? `Опубликована: ${chapter.publishedAt}` 
            : "Черновик"}
        </p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm" onClick={handleEdit}>
          Редактировать
        </Button>
      </div>
    </div>
  );
}
