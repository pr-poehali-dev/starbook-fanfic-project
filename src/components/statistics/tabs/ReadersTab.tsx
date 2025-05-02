
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ReadersTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Анализ аудитории</CardTitle>
        <CardDescription>
          Демографические данные и предпочтения читателей
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Здесь будет отображаться информация о вашей аудитории и их предпочтениях.
        </p>
      </CardContent>
    </Card>
  );
}
