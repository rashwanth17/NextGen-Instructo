import React, { forwardRef } from 'react';
import { cn } from './cn';
import { twMerge } from 'tailwind-merge';

export const Button = forwardRef(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          variant === 'ghost' &&
            'hover:bg-accent hover:text-accent-foreground',
          variant === 'secondary' &&
            'bg-secondary text-secondary-foreground hover:bg-secondary/80',
          variant === 'outline' &&
            'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
          variant === 'destructive' &&
            'bg-destructive text-destructive-foreground hover:bg-destructive/90',
          variant === 'default' &&
            'bg-primary text-primary-foreground hover:bg-primary/80',
          variant === 'link' && 'underline-offset-4 hover:underline text-foreground',
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
