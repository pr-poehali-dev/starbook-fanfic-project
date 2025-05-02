
import { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

// Импорт компонентов настроек
import ProfileSettings from "@/components/settings/ProfileSettings";
import AccountSettings from "@/components/settings/AccountSettings";
import NotificationSettings from "@/components/settings/NotificationSettings";

// Импорт хука настроек
import { useSettings } from "@/hooks/useSettings";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");
  const { saveSettings, loading } = useSettings();
  
  const handleSave = async () => {
    const success = await saveSettings();
    if (success) {
      // Дополнительная логика после успешного сохранения (при необходимости)
    }
  };
  
  const handleCancel = () => {
    // Логика отмены изменений или сброса формы
  };
  
  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Настройки</h1>
        
        <Tabs defaultValue="profile" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-3 w-full max-w-md">
            <TabsTrigger value="profile">Профиль</TabsTrigger>
            <TabsTrigger value="account">Аккаунт</TabsTrigger>
            <TabsTrigger value="notifications">Уведомления</TabsTrigger>
          </TabsList>
          
          {/* Настройки профиля */}
          <TabsContent value="profile">
            <ProfileSettings 
              onSave={handleSave}
              onCancel={handleCancel}
            />
          </TabsContent>
          
          {/* Настройки аккаунта */}
          <TabsContent value="account">
            <AccountSettings 
              onSave={handleSave}
              onCancel={handleCancel}
            />
          </TabsContent>
          
          {/* Настройки уведомлений */}
          <TabsContent value="notifications">
            <NotificationSettings 
              onSave={handleSave}
              onCancel={handleCancel}
            />
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
