import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Button
      type="submit"
      className={cn(
        'w-full h-10 px-4 py-2',
        'bg-primary text-primary-foreground hover:bg-primary/90',
        'rounded-md', // Explicitly using rounded-md as per general button styling in PRD
        'text-sm font-medium',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
