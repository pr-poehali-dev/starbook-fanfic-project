
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function FavoritesTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Избранное</CardTitle>
        <CardDescription>
          Истории, которые вам понравились
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-center text-muted-foreground py-8">
          У вас пока нет историй в избранном
        </p>
      </CardContent>
    </Card>
  );
}
