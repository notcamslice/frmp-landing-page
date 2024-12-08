"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "px-6 py-3 rounded-lg font-medium transition-colors",
        variant === "primary" && "bg-indigo-600 hover:bg-indigo-700 text-white",
        variant === "secondary" && "bg-gray-700 hover:bg-gray-600 text-white",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}