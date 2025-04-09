'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  ChevronDown, 
  ChevronRight, 
  User, 
  Book, 
  GraduationCap, 
  Phone, 
  Mail, 
  School, 
  LucideIcon, 
  Folder, 
  FileText 
} from 'lucide-react';
import { Tabs, TabsContent } from "@/components/ui/tabs";

interface CollapsibleSectionProps {
  title: string;
  icon?: LucideIcon;
  children?: React.ReactNode;
  folderColor?: string;
  defaultOpen?: boolean;
  onSelect?: (value: string) => void;
}

interface SidebarItemProps {
  icon?: LucideIcon;
  children: React.ReactNode;
  value: string;
  indent?: boolean;
  onSelect?: (value: string) => void;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ 
  title, 
  icon: Icon, 
  children, 
  folderColor = 'text-gray-400', 
  defaultOpen = false, 
  onSelect 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-2">
      <button 
        onClick={() => {
          setIsOpen(!isOpen);
          onSelect?.(title);
        }}
        className="w-full flex items-center text-black dark:text-gray-300 dark:hover:text-white p-2 rounded transition-colors"
      >
        {children && (isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
        <Folder size={16} className={`ml-1 mr-2 ${folderColor}`} />
        <span className="text-[16px]">{title}</span>
      </button>
      {isOpen && children && (
        <div className="ml-6 space-y-1">
          {children}
        </div>
      )}
    </div>
  );
};

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon: Icon = FileText, 
  children, 
  value, 
  indent = false, 
  onSelect 
}) => (
  <button
    onClick={() => onSelect?.(value)}
    className={`w-full flex items-center text-black dark:text-gray-400 dark:hover:text-white p-2 rounded transition-colors ${indent ? 'ml-6' : ''}`}
  >
    <Icon size={16} className="mr-2" />
    <span className="text-sm">{children}</span>
  </button>
);

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState("bio");

  const handleSelect = (value: string) => {
    setActiveTab(value);
  };
  const { t } = useTranslation();


  return (
      <div className="w-[332px] border-r-2 border-[#1E2D3D] text-white p-4 h-[100%]">
        <CollapsibleSection 
          title="contacts" 
          folderColor="text-red-400"
          onSelect={handleSelect}
        >
          <SidebarItem value="email" icon={Mail} onSelect={handleSelect}>
          <a href="mailto:gabriel.delechamp.pro@gmail.com">{t("Contact-me !")}</a>
          </SidebarItem>
        </CollapsibleSection>
      </div>
  );
}
