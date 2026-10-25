import React, { ReactNode } from 'react';

export interface BadgeProps {
  readonly children: ReactNode;
  readonly variant?: 'gold' | 'dark' | 'outline' | 'emerald';
  readonly className?: string;
}

export const Badge: React.FC<Readonly<BadgeProps>> = ({
  children,
  variant = 'gold',
  className = '',
}) => {
  const baseClasses =
    'inline-flex items-center gap-1.5 px-3 py-1 font-label-sm text-label-sm uppercase tracking-[0.2em] select-none';

  const variantClasses = {
    gold: 'bg-primary/15 text-primary border border-primary/30',
    dark: 'bg-midnight-black/85 text-warm-ivory backdrop-blur-md shadow-sm',
    outline: 'bg-surface-container/60 text-sand-beige border border-outline-variant/40',
    emerald: 'bg-emerald-950/40 text-emerald-300 border border-emerald-500/30',
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};
