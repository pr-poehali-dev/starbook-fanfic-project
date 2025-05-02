
import { useState, useEffect } from "react";
import { UserProfile } from "@/types/user";
import { fanfics } from "@/data/fanfics";
import { useAuth } from "@/context/AuthContext";

export function useUserProfile() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const { user } = useAuth();
  
  useEffect(() => {
    const fetchUserProfile = async () => {
      setLoading(true);
      
      try {
        // В реальном приложении здесь был бы запрос к API
        // Имитируем загрузку данных пользователя
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // Если пользователь авторизован, используем его данные
        if (user) {
          setUserProfile({
            name: user.username,
            username: user.username.toLowerCase().replace(/\s+/g, '_'),
            avatar: user.avatar || "https://source.unsplash.com/random/300x300/?portrait,11",
            bio: "Автор фантастических рассказов и фанфиков. Люблю создавать новые миры и персонажей.",
            joined: "Март 2023",
            stories: fanfics.slice(0, 3), // Первые 3 фанфика для примера
            followers: 128,
            following: 45,
          });
        } else {
          // Если пользователь не авторизован, используем демо-данные
          setUserProfile({
            name: "Иван Писатель",
            username: "ivan_writer",
            avatar: "https://source.unsplash.com/random/300x300/?portrait,11",
            bio: "Автор фантастических рассказов и фанфиков. Люблю создавать новые миры и персонажей.",
            joined: "Март 2023",
            stories: fanfics.slice(0, 3), // Первые 3 фанфика для примера
            followers: 128,
            following: 45,
          });
        }
      } catch (err) {
        setError("Не удалось загрузить данные профиля");
        console.error("Error fetching user profile:", err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUserProfile();
  }, [user]);
  
  return { userProfile, loading, error };
}
