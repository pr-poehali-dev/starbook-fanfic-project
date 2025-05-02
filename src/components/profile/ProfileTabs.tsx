
import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import OverviewTab from "./tabs/OverviewTab";
import StoriesTab from "./tabs/StoriesTab";
import FavoritesTab from "./tabs/FavoritesTab";
import CommentsTab from "./tabs/CommentsTab";
import { UserProfile } from "@/types/user";

interface ProfileTabsProps {
  user: UserProfile;
}

export default function ProfileTabs({ user }: ProfileTabsProps) {
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <Tabs defaultValue="overview" onValueChange={setActiveTab}>
      <TabsList className="w-full mb-6">
        <TabsTrigger value="overview" className="flex-1">Обзор</TabsTrigger>
        <TabsTrigger value="stories" className="flex-1">Истории</TabsTrigger>
        <TabsTrigger value="favorites" className="flex-1">Избранное</TabsTrigger>
        <TabsTrigger value="comments" className="flex-1">Комментарии</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview">
        <OverviewTab user={user} />
      </TabsContent>
      
      <TabsContent value="stories">
        <StoriesTab />
      </TabsContent>
      
      <TabsContent value="favorites">
        <FavoritesTab />
      </TabsContent>
      
      <TabsContent value="comments">
        <CommentsTab />
      </TabsContent>
    </Tabs>
  );
}
