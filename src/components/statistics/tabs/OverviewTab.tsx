
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

import StatsCard from "../StatsCard";
import ViewsLineChart from "../charts/ViewsLineChart";
import CategoryPieChart from "../charts/CategoryPieChart";
import EngagementBarChart from "../charts/EngagementBarChart";

// Типы данных
interface ViewsData {
  name: string;
  views: number;
}

interface LikesData {
  name: string;
  likes: number;
}

interface CommentsData {
  name: string;
  comments: number;
}

interface CategoryData {
  name: string;
  value: number;
}

interface OverviewTabProps {
  viewsData: ViewsData[];
  likesData: LikesData[];
  commentsData: CommentsData[];
  categoryData: CategoryData[];
  colors: string[];
}

export default function OverviewTab({ 
  viewsData, 
  likesData, 
  commentsData, 
  categoryData,
  colors
}: OverviewTabProps) {
  // Подготовка данных для графика вовлеченности
  const engagementData = likesData.map(item => ({
    name: item.name,
    Лайки: item.likes,
    Комментарии: commentsData.find(d => d.name === item.name)?.comments || 0
  }));

  return (
    <>
      <StatsOverview />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <ViewsLineChart 
          data={viewsData} 
          title="Просмотры по месяцам" 
          description="Динамика просмотров ваших историй"
        />
        
        <CategoryPieChart 
          data={categoryData} 
          colors={colors}
          title="Распределение по категориям"
          description="Соотношение категорий ваших историй"
        />
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <EngagementBarChart 
          data={engagementData}
          title="Вовлеченность аудитории"
          description="Лайки и комментарии по месяцам"
        />
      </div>
    </>
  );
}

function StatsOverview() {
  const stats = [
    { title: "Всего просмотров", value: "12,548", change: "+14% с прошлого месяца" },
    { title: "Лайки", value: "2,357", change: "+9.3% с прошлого месяца" },
    { title: "Комментарии", value: "865", change: "+5.1% с прошлого месяца" },
    { title: "Подписчики", value: "478", change: "+12.4% с прошлого месяца" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {stats.map((stat, index) => (
        <StatsCard 
          key={index} 
          title={stat.title} 
          value={stat.value} 
          change={stat.change} 
        />
      ))}
    </div>
  );
}
