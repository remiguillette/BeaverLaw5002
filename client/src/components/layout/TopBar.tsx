import React from 'react';
import { Button } from '@/components/ui/button';
import { HelpCircle, MenuIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { BeaverIcon } from '@/lib/icons';

interface TopBarProps {
  onMenuClick: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onMenuClick }) => {
  const { toast } = useToast();

  const handleHelpClick = () => {
    toast({
      title: "Aide",
      description: "La documentation est en cours de développement.",
      variant: "default",
    });
  };

  return (
    <header className="flex items-center justify-between h-16 px-6 bg-background border-b">
      <div className="flex items-center gap-2">
        <BeaverIcon className="w-8 h-8" />
        <span className="text-lg font-semibold text-primary">Système de Gestion</span>
      </div>
      <div className="flex-1 px-4 flex justify-end">
        <div className="ml-4 flex items-center md:ml-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleHelpClick}
            className="p-1 rounded-full text-primary hover:text-primary focus:outline-none"
          >
            <HelpCircle className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;