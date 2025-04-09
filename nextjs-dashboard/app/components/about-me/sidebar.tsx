'use client';
import SkillsSection from './aboutme/skill-section';
import HobbyRoom from './aboutme/hobby-room';
import ExperienceTimeline from './career/experience-timeline';
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
        className="w-full flex items-center dark:text-gray-300 hover:text-gray-700 dark:hover:text-white p-2 rounded transition-colors"
      >
        {children && (isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
        <Folder size={16} className={`ml-1 mr-2 ${folderColor}`} />
        <span className="">{title}</span>
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
    className={`w-full flex items-center dark:text-gray-400 dark:hover:text-white p-2 rounded transition-colors ${indent ? 'ml-6' : ''}`}
  >
    <Icon size={16} className="mr-2" />
    <span className="text-sm">{children}</span>
  </button>
);

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState("bio");
  const { t } = useTranslation();

  const handleSelect = (value: string) => {
    setActiveTab(value);
  };

  const FormattedText = (text: string): string => {
    const maxLineLength = 50;

    // Découpe le texte en lignes d'une longueur maximale
    const splitIntoLines = (input: string, maxLen: number): string[] => {
      const words = input.split(' ');
      const lines: string[] = [];
      let currentLine = '';

      for (const word of words) {
        if ((currentLine + ' ' + word).trim().length > maxLen) {
          lines.push(currentLine.trim());
          currentLine = word;
        } else {
          currentLine += ` ${word}`;
        }
      }
      if (currentLine.trim().length > 0) {
        lines.push(currentLine.trim());
      }

      return lines;
    };

    const lines = splitIntoLines(text, maxLineLength);
    const maxIndexLength = (lines.length + 2).toString().length;

    // Formater chaque ligne
    const formattedText = lines.map((line, index) => {
      const paddedIndex = (index + 2).toString().padStart(maxIndexLength, ' ');
      return `${paddedIndex} * ${line}`;
    });

    // Ajouter la ligne d'ouverture et de fermeture
    const openingLine = ` 1 /**`;
    const closingLine = `${(lines.length + 2).toString().padStart(maxIndexLength, ' ')} */`;

    // Assembler le texte final
    return [openingLine, ...formattedText, closingLine].join('\n');
  };

  const AboutMe = () => {
    return (
      t("aboutmeparagraph")
    );
  };

  return (
    <div className="flex h-[100%]">
      {/* Sidebar */}
      <div className="w-[285px] border-r-2 border-[#1E2D3D] text-black dark:text-white p-4">
        <CollapsibleSection 
          title={t("personal-info")} 
          folderColor="text-orange-400"
          defaultOpen
          onSelect={handleSelect}
        >
          <CollapsibleSection 
            title={t("bio")} 
            folderColor="text-blue-400"
            onSelect={handleSelect}
          >
            <SidebarItem value="aboutme" onSelect={handleSelect}>
              {t("About Me")}
            </SidebarItem>
          </CollapsibleSection>

          <CollapsibleSection 
            title={t("career")} 
            folderColor="text-green-400"
            onSelect={handleSelect}
          >
            <SidebarItem value="eduaction" onSelect={handleSelect}>
              {t("Education")}
            </SidebarItem>
          </CollapsibleSection>
        </CollapsibleSection>
      </div>

      {/* Content Area with Tabs */}
      <div className="flex-1 p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsContent value="aboutme">
            <div className='flex flex-row'>
              <pre className='w-[50%] whitespace-pre-wrap'>
                {FormattedText(AboutMe())}
              </pre>

              <div className="w-[50%] flex flex-col justify-around gap-10">
                <SkillsSection />
                <HobbyRoom />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="eduaction">
            <div className='flex flex-row'>
              <div className="w-[50%] flex flex-col justify-center item-center gap-10">
                <ExperienceTimeline />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
