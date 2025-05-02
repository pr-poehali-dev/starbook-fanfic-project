
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FanficFormProps } from "../types/fanfic-form-types";
import ChapterItem from "../chapters/ChapterItem";
import EmptyChaptersView from "../chapters/EmptyChaptersView";

export function FanficChaptersForm({ isEditing, fanfic, onAddChapter }: FanficFormProps) {
  // Мок-данные для глав
  const chapters = isEditing ? [
    { id: "1", title: "Глава 1: Начало приключений", publishedAt: "10.04.2023", status: "published" },
    { id: "2", title: "Глава 2: Космическая буря", publishedAt: "15.04.2023", status: "published" },
    { id: "3", title: "Глава 3: Чужие миры", publishedAt: null, status: "draft" },
  ] : [];
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Главы истории</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {isEditing ? (
          <div className="space-y-4">
            {chapters.map((chapter) => (
              <ChapterItem key={chapter.id} chapter={chapter} />
            ))}
          </div>
        ) : (
          <EmptyChaptersView />
        )}
        
        <Button className="w-full" onClick={onAddChapter}>
          Добавить новую главу
        </Button>
      </CardContent>
    </Card>
  );
}
