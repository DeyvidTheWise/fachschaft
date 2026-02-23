"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Target, Users, MessageSquare, Award } from "lucide-react"
import { useTranslation } from "@/components/language-provider"

export default function AboutPage() {
  const { t } = useTranslation()

  const achievements = [
    t("achievement_1"),
    t("achievement_2"),
    t("achievement_3"),
    t("achievement_4"),
    t("achievement_5"),
    t("achievement_6"),
  ]

  const benefits = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: t("better_dialogue"),
      description: t("better_dialogue_desc"),
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: t("issue_resolution"),
      description: t("issue_resolution_desc"),
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t("student_integration"),
      description: t("student_integration_desc"),
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: t("international_support"),
      description: t("international_support_desc"),
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4 text-primary">{t("about_fachschaft")}</h1>
        <p className="text-xl text-muted-foreground">{t("about_subtitle")}</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Definition Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">{t("what_is_fachschaft")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg">{t("fachschaft_definition")}</p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2 text-primary">{t("main_goals")}</h3>
                <ul className="space-y-1 text-sm">
                  <li>• {t("represent_students")}</li>
                  <li>• {t("bridge_communication")}</li>
                  <li>• {t("support_students")}</li>
                  <li>• {t("organize_events")}</li>
                </ul>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2 text-primary">{t("who_can_join")}</h3>
                <p className="text-sm">{t("anyone_can_join")}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">{t("our_achievements")}</CardTitle>
            <CardDescription>{t("achievements_subtitle")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">{t("benefits_for_faculty")}</CardTitle>
            <CardDescription>{t("benefits_subtitle")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-primary">{benefit.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Collaboration Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">{t("lets_collaborate")}</CardTitle>
            <CardDescription>{t("collaboration_subtitle")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-2">{t("our_needs")}</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• {t("more_visibility")}</li>
                  <li>• {t("participation_decisions")}</li>
                  <li>• {t("improved_communication")}</li>
                  <li>• {t("support_organizing")}</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t("we_invite_you")}</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• {t("share_ideas")}</li>
                  <li>• {t("attend_events")}</li>
                  <li>• {t("collaborate_projects")}</li>
                  <li>• {t("support_communication")}</li>
                </ul>
              </div>
            </div>
            <div className="pt-4 border-t">
              <p className="text-center">
                <strong>{t("ready_to_collaborate")}</strong> {t("contact_us")}{" "}
                <a href="mailto:fachschaft@fdiba.tu-sofia.bg" className="text-primary underline">
                  fachschaft@fdiba.tu-sofia.bg
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
