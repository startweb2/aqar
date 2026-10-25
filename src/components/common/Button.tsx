import React, { ReactNode, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends Readonly<ButtonHTMLAttributes<HTMLButtonElement>> {
  readonly children: ReactNode;
  readonly variant?: 'primary' | 'secondary' | 'ghost';
  readonly className?: string;
}

export const Button: React.FC<Readonly<ButtonProps>> = ({
  children,
  variant = 'primary',
  className = '',
  ...rest
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-label-md text-label-md uppercase tracking-wider transition-all duration-300 disabled:opacity-50 select-none cursor-pointer';

  const variantClasses = {
    primary:
      'text-midnight-black px-space-lg py-3.5 bg-[linear-gradient(135deg,#FAECCD_0%,#DFB76E_50%,#BA8733_100%)] shadow-md hover:brightness-110 hover:shadow-[0_4px_20px_rgba(223,183,110,0.35)]',
    secondary:
      'text-warm-ivory px-space-lg py-3.5 bg-surface-container-high hover:bg-surface-container-highest shadow-sm border border-outline-variant/30',
    ghost:
      'text-warm-ivory px-space-md py-3.5 bg-transparent border border-primary/40 hover:border-primary hover:bg-primary/10 hover:text-primary',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
};
