
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useFanfic } from "@/hooks/useFanfic";
import { FanficInfoForm } from "@/components/fanfic/forms/FanficInfoForm";
import { FanficChaptersForm } from "@/components/fanfic/forms/FanficChaptersForm";
import { FanficPublishForm } from "@/components/fanfic/forms/FanficPublishForm";
import { Skeleton } from "@/components/ui/skeleton";

export default function EditFanfic() {
  const { fanficId } = useParams<{ fanficId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("info");
  
  const {
    fanfic,
    loading,
    error,
    isEditing,
    saveFanfic,
    publishFanfic
  } = useFanfic({ fanficId });
  
  // Обработчики событий
  const handleSave = async () => {
    const success = await saveFanfic(fanfic || {});
    if (success && !isEditing) {
      navigate('/my-stories');
    }
  };
  
  const handleCancel = () => {
    navigate(-1);
  };
  
  const handlePublish = async () => {
    const success = await publishFanfic();
    if (success) {
      navigate('/my-stories');
    }
  };
  
  const handleAddChapter = () => {
    // Пока просто переключаемся на другую вкладку для имитации
    setActiveTab("info");
  };
  
  if (loading) {
    return (
      <MainLayout>
        <div className="container py-8">
          <Skeleton className="h-10 w-72 mb-6" />
          <Skeleton className="h-12 w-full max-w-md mb-8" />
          <Skeleton className="h-[600px] w-full" />
        </div>
      </MainLayout>
    );
  }
  
  if (error) {
    return (
      <MainLayout>
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-6">Ошибка</h1>
          <p className="text-destructive">{error}</p>
        </div>
      </MainLayout>
    );
  }
  
  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">
          {isEditing ? "Редактирование истории" : "Новая история"}
        </h1>
        
        <Tabs defaultValue="info" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-3 w-full max-w-md">
            <TabsTrigger value="info">Информация</TabsTrigger>
            <TabsTrigger value="chapters">Главы</TabsTrigger>
            <TabsTrigger value="publish">Публикация</TabsTrigger>
          </TabsList>
          
          {/* Информация о фанфике */}
          <TabsContent value="info">
            <FanficInfoForm 
              isEditing={isEditing}
              fanfic={fanfic || {}}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          </TabsContent>
          
          {/* Главы */}
          <TabsContent value="chapters">
            <FanficChaptersForm 
              isEditing={isEditing}
              fanfic={fanfic || {}}
              onAddChapter={handleAddChapter}
            />
          </TabsContent>
          
          {/* Публикация */}
          <TabsContent value="publish">
            <FanficPublishForm 
              isEditing={isEditing}
              fanfic={fanfic || {}}
              onPublish={handlePublish}
              onSaveDraft={handleSave}
            />
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
