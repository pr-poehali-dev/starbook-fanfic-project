
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function EngagementTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Показатели вовлеченности</CardTitle>
        <CardDescription>
          Детальный анализ вовлеченности читателей
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Здесь будет отображаться подробная информация о вовлеченности читателей.
        </p>
      </CardContent>
    </Card>
  );
}
