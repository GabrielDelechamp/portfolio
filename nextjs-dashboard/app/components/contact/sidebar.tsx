'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  ChevronDown, 
  ChevronRight, 
  Mail, 
  LucideIcon, 
  Folder, 
  FileText 
} from 'lucide-react';

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

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("bio");
  const { t } = useTranslation();

  const handleSelect = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div
      className="
        border-[#1E2D3D] text-white
        md:w-[332px] md:border-r-2 md:h-full md:flex md:flex-col
        w-full border-b-2 flex flex-row overflow-x-auto gap-4 p-2
        bg-white dark:bg-[#011627]
      "
    >
      <CollapsibleSection 
        title="contacts" 
        folderColor="text-red-400"
        onSelect={handleSelect}
      >
        <SidebarItem value="email" icon={Mail} onSelect={handleSelect}>
          <a href="mailto:gabriel.delechamp.pro@gmail.com">
            {t("Contact-me !")}
          </a>
        </SidebarItem>
      </CollapsibleSection>
    </div>
  );
}
