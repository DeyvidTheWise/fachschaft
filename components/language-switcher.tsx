"use client"

import { Button } from "@/components/ui/button"
import { useTranslation } from "./language-provider"

export function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation()

  return (
    <div className="flex items-center gap-1 border rounded-md">
      <Button
        variant="ghost"
        size="sm"
        className={`px-2 py-1 h-8 rounded-none ${language === "en" ? "bg-muted" : ""}`}
        onClick={() => setLanguage("en")}
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={`px-2 py-1 h-8 rounded-none ${language === "de" ? "bg-muted" : ""}`}
        onClick={() => setLanguage("de")}
      >
        DE
      </Button>
    </div>
  )
}
