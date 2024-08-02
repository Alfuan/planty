import { ReactNode } from "react";

export interface FooterButtonProps {
  onPress: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary";
}
