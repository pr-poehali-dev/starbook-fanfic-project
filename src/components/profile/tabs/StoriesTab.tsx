
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
        <CardTitle>Ваши истории</CardTitle>
        <CardDescription>
          Управляйте своими публикациями
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-center text-muted-foreground py-8">
          Для полного списка историй перейдите в раздел "Мои истории"
        </p>
      </CardContent>
    </Card>
  );
}
