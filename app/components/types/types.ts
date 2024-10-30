// types.ts
import { IconType } from "react-icons"; // Make sure to install and import this from your icons library

export interface SkillItem {
  name: string;
  icon: IconType; // Adjust if you're using a different type for icons
  color: string;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}
