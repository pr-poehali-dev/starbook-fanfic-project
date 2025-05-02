
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CommentsTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Комментарии</CardTitle>
        <CardDescription>
          Ваши комментарии к историям
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-center text-muted-foreground py-8">
          У вас пока нет комментариев
        </p>
      </CardContent>
    </Card>
  );
}
