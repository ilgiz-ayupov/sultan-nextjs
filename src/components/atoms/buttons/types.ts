export type ButtonTagTypes = "link" | "button";
export type ButtonTypeTypes = "button" | "submit" | "reset";
export type ButtonVariantTypes = "primary" | "secondary";

export type ButtonProps = {
  tag: ButtonTagTypes;
  variant: ButtonVariantTypes;
  children: React.ReactNode;
  className?: string;
  href?: string;
  type?: ButtonTypeTypes;
  onClick?: (event: React.MouseEvent) => void;
};
