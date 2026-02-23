"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, Github } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "@/components/language-provider"

export default function TeamPage() {
  const { t } = useTranslation()

  const teamMembers = [
    {
      id: 1,
      name: "Deyvid Popov",
      role: t("president"),
      department: t("computer_science"),
      year: t("fourth_year"),
      bio: t("team_deyvid_bio"),
      image: "/images/deyvid-popov.jpeg",
      email: "deyvid.popov@fdiba.tu-sofia.bg",
      linkedin: "deyvid-popov",
      github: "deyvidpopov",
    },
    {
      id: 2,
      name: "Gergana Dimitrova",
      role: t("member"),
      department: t("business_informatics"),
      year: t("third_year"),
      bio: t("team_gergana_bio"),
      image: "/images/gergana-dimitrova.jpeg",
      email: "gergana.dimitrova@fdiba.tu-sofia.bg",
      linkedin: "gergana-dimitrova",
      github: "gerganadimitrova",
    },
    {
      id: 3,
      name: "Yordan Ivanov",
      role: t("member"),
      department: t("mechatronics"),
      year: t("second_year"),
      bio: t("team_yordan_bio"),
      image: "/images/yordan-ivanov.jpeg",
      email: "yordan.ivanov@fdiba.tu-sofia.bg",
      linkedin: "yordan-ivanov",
      github: "yordanivanov",
    },
    {
      id: 4,
      name: "Martin Kirilov",
      role: t("member"),
      department: t("mechatronics"),
      year: t("third_year"),
      bio: t("team_martin_bio"),
      image: "/images/martin-kirilov.jpeg",
      email: "martin.kirilov@fdiba.tu-sofia.bg",
      linkedin: "martin-kirilov",
      github: "martinkirilov",
    },
    {
      id: 5,
      name: "Alexandar Hristov",
      role: t("member"),
      department: t("mechatronics"),
      year: t("third_year"),
      bio: t("team_alexandar_bio"),
      image: "/images/alexandar-hristov.jpeg",
      email: "aleksandar.r.hristov@fdiba.tu-sofia.bg",
      linkedin: "alexandar-hristov",
      github: "alexandarhristov",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4 text-primary">
          {t("meet_our_team_title")}
        </h1>
        <p className="text-xl text-muted-foreground">{t("team_subtitle")}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <Card
            key={member.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-[3/4] relative">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                fill
                className="object-cover object-center"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-base font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </div>
                <Badge
                  variant="outline"
                  className="border-primary text-primary min-w-[80px] text-center"
                >
                  {member.year}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                {member.department}
              </p>
              <p>{member.bio}</p>
            </CardContent>
            <CardFooter className="flex gap-4">
              <a
                href={`mailto:${member.email}`}
                className="text-primary hover:text-primary/80"
              >
                <Mail className="h-5 w-5" />
              </a>
              <button
                disabled
                className="text-muted-foreground/50 cursor-not-allowed"
                title="Coming soon"
              >
                <Linkedin className="h-5 w-5" />
              </button>
              <button
                disabled
                className="text-muted-foreground/50 cursor-not-allowed"
                title="Coming soon"
              >
                <Github className="h-5 w-5" />
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
