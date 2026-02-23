"use client"

import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "./language-provider"

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col md:flex-row py-8 px-4 md:px-6 gap-8 md:gap-16">
        <div className="flex flex-col gap-2 min-w-[150px]">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/fdiba-logo.png" alt="FDIBA Logo" width={32} height={32} className="h-8 w-auto" />
          </Link>
          <p className="text-sm text-muted-foreground">
            Fakultät für Deutsche Ingenieur- und Betriebswirtschafts Ausbildung (FDIBA)
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 flex-1">
          <div className="flex flex-col gap-2">
            <h3 className="font-medium">{t("navigation")}</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                {t("home")}
              </Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground">
                {t("services")}
              </Link>
              <Link href="/team" className="text-sm text-muted-foreground hover:text-foreground">
                {t("team")}
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-medium">{t("contact")}</h3>
            <p className="text-sm text-muted-foreground">Room 10101A, FDIBA Building</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-medium">{t("social")}</h3>
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/FDIBA.TU.SOFIA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/fdiba.tu.sofia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t py-4">
        <div className="container flex flex-col sm:flex-row justify-between items-center gap-2 px-4 md:px-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} FDIBA Student Council. {t("all_rights_reserved")}
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
              {t("privacy_policy")}
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground">
              {t("terms_of_service")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
