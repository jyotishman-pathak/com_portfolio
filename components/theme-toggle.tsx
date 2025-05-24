"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative h-6 w-6"
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all" />
        ) : (
          <Moon className="h-5 w-5 rotate-0 scale-100 transition-all" />
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}