
import { Fanfic } from "./fanfiction";

export interface UserProfile {
  name: string;
  username: string;
  avatar: string;
  bio: string;
  joined: string;
  stories: Fanfic[];
  followers: number;
  following: number;
}

export interface UserActivity {
  id: string;
  type: 'published' | 'likes' | 'subscribed' | 'comment' | 'other';
  message: string;
  date: string;
  color: string;
}
