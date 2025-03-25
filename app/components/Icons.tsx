'use client';

import { LucideProps } from 'lucide-react';
import { 
  Send, 
  FileText, 
  Globe, 
  Window,
  MessageSquare,
} from 'lucide-react';

export const Icons = {
  send: Send,
  file: FileText,
  globe: Globe,
  window: Window,
  message: MessageSquare,
};

export type Icon = keyof typeof Icons;

interface IconComponentProps extends LucideProps {
  name: Icon;
}

export function IconComponent({ name, ...props }: IconComponentProps) {
  const Icon = Icons[name];
  return <Icon {...props} />;
} 