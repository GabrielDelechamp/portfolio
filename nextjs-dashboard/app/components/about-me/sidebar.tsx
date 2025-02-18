'use client';
import React, { useState } from 'react';
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
        className="w-full flex items-center text-gray-300 hover:text-white p-2 rounded transition-colors"
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
    className={`w-full flex items-center text-gray-400 hover:text-white p-2 rounded transition-colors ${indent ? 'ml-6' : ''}`}
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
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum massa id mi placerat, et auctor nisi blandit. Pellentesque sollicitudin quis sem faucibus laoreet. Sed egestas metus at nisi eleifend luctus. Mauris eget nulla at diam fermentum tristique. Donec neque elit, iaculis et nunc sit amet, eleifend fermentum elit. Phasellus ut mattis augue. Morbi a nisi in sem lacinia luctus vitae id eros. Fusce eget nibh vel arcu finibus egestas. Donec finibus leo sagittis cursus porta. In pellentesque eros eget ipsum ornare, eget lacinia erat dignissim.`
    );
  };

  return (
    <div className="flex h-[100%]">
      {/* Sidebar */}
      <div className="w-[285px] border-r-2 border-[#1E2D3D] text-white p-4">
        <CollapsibleSection 
          title="personal-info" 
          folderColor="text-orange-400"
          defaultOpen
          onSelect={handleSelect}
        >
          <CollapsibleSection 
            title="bio" 
            folderColor="text-blue-400"
            onSelect={handleSelect}
          >
            <SidebarItem value="aboutme" onSelect={handleSelect}>
              About Me
            </SidebarItem>
          </CollapsibleSection>

          <CollapsibleSection 
            title="interests" 
            folderColor="text-green-400"
            onSelect={handleSelect}
          >
            <SidebarItem value="hobby1" onSelect={handleSelect}>
              Hobby 1
            </SidebarItem>
            <SidebarItem value="hobby2" onSelect={handleSelect}>
              Hobby 2
            </SidebarItem>
          </CollapsibleSection>

          <CollapsibleSection 
            title="education" 
            folderColor="text-purple-400"
            onSelect={handleSelect}
          >
            <SidebarItem value="high-school" icon={School} indent onSelect={handleSelect}>
              High School
            </SidebarItem>
            <SidebarItem value="university" icon={School} indent onSelect={handleSelect}>
              University
            </SidebarItem>
          </CollapsibleSection>
        </CollapsibleSection>

        <CollapsibleSection 
          title="contacts" 
          folderColor="text-red-400"
          onSelect={handleSelect}
        >
          <SidebarItem value="email" icon={Mail} onSelect={handleSelect}>
            Email
          </SidebarItem>
          <SidebarItem value="phone" icon={Phone} onSelect={handleSelect}>
            Phone
          </SidebarItem>
        </CollapsibleSection>
      </div>

      {/* Content Area with Tabs */}
      <div className="flex-1 p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsContent value="aboutme">
            <pre className='w-[600px] whitespace-pre-wrap'>
              {FormattedText(AboutMe())}
            </pre>
          </TabsContent>
          
          <TabsContent value="high-school">
            <h2 className="text-2xl font-bold mb-4">High School Education</h2>
            <p>Your high school details here...</p>
          </TabsContent>

          <TabsContent value="university">
            <h2 className="text-2xl font-bold mb-4">University Education</h2>
            <p>Your university details here...</p>
          </TabsContent>

          <TabsContent value="email">
            <h2 className="text-2xl font-bold mb-4">Email Contact</h2>
            <p>user@gmail.com</p>
          </TabsContent>
          
          <TabsContent value="phone">
            <h2 className="text-2xl font-bold mb-4">Phone Contact</h2>
            <p>+359824639</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
