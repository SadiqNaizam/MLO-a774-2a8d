import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface MainAppLayoutProps {
  children: React.ReactNode;
  title?: string; // Optional title for the card header, as per layout component guidelines
  className?: string; // Additional classes for the Card component, as per layout component guidelines
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, title, className }) => {
  return (
    // Overall layout: centers content on the screen
    // Styles from Layout Requirements: overall.definition
    <div className="flex justify-center items-center h-screen bg-background">
      {/* Main content card */}
      <Card
        className={cn(
          // Base styles for the card from Layout Requirements: mainContent.layout
          // Shadcn Card component defaults: bg-card (maps to --prd-surface), rounded-lg (maps to --radius).
          // Explicitly add shadow-lg as per mainContent.layout, overriding Card's default shadow-sm.
          "shadow-lg", 
          
          // A sensible default width for a centered card, typical for login forms.
          // This is an interpretation based on common UI patterns for such pages and the provided image,
          // as specific width is not in Layout Requirements.
          "w-full max-w-sm",
          
          className // Allows overriding or extending Card styles via props, applied to the Card element.
        )}
      >
        {title && ( // Conditionally render CardHeader if a title is provided
          <CardHeader> {/* Shadcn CardHeader default padding is p-6 */}
            <CardTitle>{title}</CardTitle>
          </CardHeader>
        )}
        {/* 
          Content area within the card.
          Padding from Layout Requirements: mainContent.layout ("p-6").
          Internal flex structure from Layout Requirements: mainContent.container ("flex flex-col gap-4").
          This is also confirmed by mainContent.notes: "Card holds all visible components. 
          Internally uses vertical flex layout with gap-4 spacing."
        */}
        <CardContent
          className={cn(
            "p-6",                  // Padding specified in mainContent.layout
            "flex flex-col gap-4" // Flex container behavior specified in mainContent.container
            // If 'title' is present, CardHeader also has p-6. CardContent also has p-6.
            // This is a standard structure. If specific padding adjustments (e.g., pt-0 on CardContent)
            // are needed when a header exists, that would be a more specific customization for a particular page,
            // not necessarily part of this general layout component based on current requirements.
          )}
        >
          {children}
        </CardContent>
      </Card>
    </div>
  );
};

export default MainAppLayout;
