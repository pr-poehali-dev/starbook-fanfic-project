
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function StoriesTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Статистика по историям</CardTitle>
        <CardDescription>
          Детальная информация о каждой истории
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Здесь будет отображаться детальная статистика по каждой истории.
        </p>
      </CardContent>
    </Card>
  );
}
