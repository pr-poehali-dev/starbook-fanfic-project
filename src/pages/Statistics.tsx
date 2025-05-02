
import MainLayout from "@/components/layouts/MainLayout";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

// Импорт вкладок
import OverviewTab from "@/components/statistics/tabs/OverviewTab";
import StoriesTab from "@/components/statistics/tabs/StoriesTab";
import ReadersTab from "@/components/statistics/tabs/ReadersTab";
import EngagementTab from "@/components/statistics/tabs/EngagementTab";

// Импорт данных
import { 
  viewsData, 
  likesData, 
  commentsData, 
  categoryData, 
  CHART_COLORS 
} from "@/data/statistics";

export default function Statistics() {
  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Статистика</h1>
        
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full max-w-md">
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="stories">Истории</TabsTrigger>
            <TabsTrigger value="readers">Читатели</TabsTrigger>
            <TabsTrigger value="engagement">Вовлеченность</TabsTrigger>
          </TabsList>
          
          {/* Обзор */}
          <TabsContent value="overview">
            <OverviewTab 
              viewsData={viewsData}
              likesData={likesData}
              commentsData={commentsData}
              categoryData={categoryData}
              colors={CHART_COLORS}
            />
          </TabsContent>
          
          {/* Истории */}
          <TabsContent value="stories">
            <StoriesTab />
          </TabsContent>
          
          {/* Читатели */}
          <TabsContent value="readers">
            <ReadersTab />
          </TabsContent>
          
          {/* Вовлеченность */}
          <TabsContent value="engagement">
            <EngagementTab />
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
