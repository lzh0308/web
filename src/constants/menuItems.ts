import { Home, Settings, User, Mail, Phone, Calendar, Camera, Music } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface MenuItem {
  icon: LucideIcon;
  label: string;
  action?: string;
}

export const menuItems: MenuItem[] = [
  { icon: Home, label: '首页', action: 'home' },
  { icon: User, label: '我的', action: 'profile' },
  { icon: Mail, label: '消息', action: 'messages' },
  { icon: Phone, label: '通讯', action: 'contacts' },
  { icon: Calendar, label: '日程', action: 'calendar' },
  { icon: Camera, label: '相机', action: 'camera' },
  { icon: Music, label: '音乐', action: 'music' },
  { icon: Settings, label: '设置', action: 'settings' }
];