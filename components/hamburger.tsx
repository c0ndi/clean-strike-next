"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={cn("fixed inset-0 z-40 bg-background/90 backdrop-blur-sm transition-all duration-300 ease-in-out -left-[100%] h-svh w-full", isOpen && "left-0")}>
        <div className="flex h-full w-full flex-col items-center justify-center gap-8" onClick={() => setIsOpen(false)}>
          <Link href="#home" className="text-sm font-medium hover:text-primary">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              Strona główna
            </Button>
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              O nas
            </Button>
          </Link>
          <Link href="#portfolio" className="text-sm font-medium hover:text-primary">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              Portfolio
            </Button>
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              Kontakt
            </Button>
          </Link>
        </div>
      </div >
      <Button variant="outline" size="icon" className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
        <span className="sr-only">Otwórz menu</span>
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        )}
      </Button>
    </>
  )
}