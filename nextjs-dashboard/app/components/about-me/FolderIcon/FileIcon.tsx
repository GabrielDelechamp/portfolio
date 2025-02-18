// FolderIcon.tsx
import { FolderIcon as LucideFolderIcon } from 'lucide-react';

interface CustomFolderIconProps {
  color: string;
  size?: number;
}

export const CustomFolderIcon: React.FC<CustomFolderIconProps> = ({ color, size = 16 }) => (
  <LucideFolderIcon 
    size={size} 
    className="mr-2"
    color={color}
    fill={color}
    fillOpacity={0.2}
  />
);

// FileIcon.tsx
interface CustomFileIconProps {
  color: string;
  size?: number;
}

export const CustomFileIcon: React.FC<CustomFileIconProps> = ({ color, size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-2"
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);