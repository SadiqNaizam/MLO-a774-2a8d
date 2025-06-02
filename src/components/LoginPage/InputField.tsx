import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string; // For accessibility, even if visually hidden
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = 'text',
  placeholder,
  className,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && <Label htmlFor={id} className="sr-only">{label}</Label>}
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        className={cn(
          'h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm',
          'ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium',
          'placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
          // Custom styling based on project context (if any beyond Shadcn defaults)
          // Ensuring text color is primary text for inputs on a white surface
          'text-card-foreground',
          className
        )}
        {...props}
      />
    </div>
  );
};

export default InputField;
