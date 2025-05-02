
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface SettingsState {
  profile: {
    displayName: string;
    username: string;
    bio: string;
    website: string;
    socialMedia: {
      twitter: string;
      instagram: string;
      facebook: string;
    };
  };
  account: {
    email: string;
    language: string;
  };
  notifications: {
    email: {
      comments: boolean;
      likes: boolean;
      followers: boolean;
      newsletter: boolean;
    };
    site: {
      comments: boolean;
      likes: boolean;
      followers: boolean;
    };
  };
}

export function useSettings() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  
  // Мок начальных настроек
  const [settings, setSettings] = useState<SettingsState>({
    profile: {
      displayName: "Иван Писатель",
      username: "ivan_writer",
      bio: "Автор фантастических рассказов и фанфиков. Люблю создавать новые миры и персонажей.",
      website: "",
      socialMedia: {
        twitter: "",
        instagram: "",
        facebook: ""
      }
    },
    account: {
      email: "ivan@example.com",
      language: "ru"
    },
    notifications: {
      email: {
        comments: true,
        likes: true,
        followers: true,
        newsletter: false
      },
      site: {
        comments: true,
        likes: true,
        followers: true
      }
    }
  });
  
  const saveSettings = async () => {
    setLoading(true);
    
    try {
      // Имитация задержки запроса к API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Настройки сохранены",
        description: "Ваши настройки были успешно обновлены",
      });
      
      return true;
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ошибка сохранения",
        description: "Не удалось сохранить настройки. Попробуйте позже.",
      });
      
      return false;
    } finally {
      setLoading(false);
    }
  };
  
  return {
    settings,
    setSettings,
    loading,
    saveSettings
  };
}
