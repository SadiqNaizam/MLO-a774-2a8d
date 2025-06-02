import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface FooterTextProps {
  text?: string;
  linkText: string;
  onLinkClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const FooterText: React.FC<FooterTextProps> = ({
  text = "",
  linkText,
  onLinkClick,
  className,
}) => {
  return (
    <p className={cn("text-center text-sm text-muted-foreground", className)}>
      {text}
      <Button
        variant="link"
        onClick={onLinkClick}
        className="p-0 h-auto font-medium text-primary hover:text-primary/90 hover:no-underline focus-visible:ring-0 focus-visible:ring-offset-0"
      >
        {linkText}
      </Button>
    </p>
  );
};

export default FooterText;
