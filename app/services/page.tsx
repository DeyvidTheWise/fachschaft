"use client"

import {
  HelpCircle,
  BookOpen,
  Lightbulb,
  Users,
  Coffee,
  Headphones,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Calendar,
  MessageCircle,
  Award,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@/components/language-provider"
import { motion } from "framer-motion"
import { useState, type ReactNode } from "react"

export default function ServicesPage() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState("support")

  const stats = [
    { number: "500+", label: t("students_helped"), icon: <Users className="h-6 w-6" /> },
    { number: "50+", label: t("events_organized"), icon: <Calendar className="h-6 w-6" /> },
    { number: "24/7", label: t("support_available"), icon: <MessageCircle className="h-6 w-6" /> },
    { number: "95%", label: t("satisfaction_rate"), icon: <CheckCircle className="h-6 w-6" /> },
  ]

  const journey = [
    {
      step: 1,
      title: t("step_1_title"),
      description: t("step_1_desc"),
      icon: <HelpCircle className="h-8 w-8" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      step: 2,
      title: t("step_2_title"),
      description: t("step_2_desc"),
      icon: <Calendar className="h-8 w-8" />,
      color: "bg-green-100 text-green-600",
    },
    {
      step: 3,
      title: t("step_3_title"),
      description: t("step_3_desc"),
      icon: <TrendingUp className="h-8 w-8" />,
      color: "bg-sky-100 text-sky-600",
    },
    {
      step: 4,
      title: t("step_4_title"),
      description: t("step_4_desc"),
      icon: <Award className="h-8 w-8" />,
      color: "bg-orange-100 text-orange-600",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              {t("your_student_success_partner")}
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight mb-6 text-primary">
              {t("what_we_do")}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{t("services_subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                {t("explore_our_services")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                {t("join_our_community")}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">{t("your_journey_with_us")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("journey_subtitle")}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {journey.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                  <CardHeader className="text-center">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${item.color}`}
                    >
                      {item.icon}
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{item.description}</p>
                  </CardContent>
                </Card>
                {index < journey.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 translate-x-1/2">
                    <ArrowRight className="h-6 w-6 text-primary/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">{t("our_service_categories")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("service_categories_subtitle")}</p>
          </motion.div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-12 h-14">
              <TabsTrigger value="support" className="text-sm font-medium">
                <HelpCircle className="h-4 w-4 mr-2" />
                {t("support")}
              </TabsTrigger>
              <TabsTrigger value="events" className="text-sm font-medium">
                <Calendar className="h-4 w-4 mr-2" />
                {t("events")}
              </TabsTrigger>
              <TabsTrigger value="communication" className="text-sm font-medium">
                <MessageCircle className="h-4 w-4 mr-2" />
                {t("communication")}
              </TabsTrigger>
              <TabsTrigger value="mentoring" className="text-sm font-medium">
                <Users className="h-4 w-4 mr-2" />
                {t("mentoring")}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="support" className="py-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="grid gap-6 md:grid-cols-2"
              >
                <ServiceCard
                  icon={<HelpCircle className="h-10 w-10" />}
                  title={t("consultation_support")}
                  description={t("consultation_desc")}
                  features={[t("hour_support"), t("quick_response"), t("expert_guidance")]}
                />
                <ServiceCard
                  icon={<BookOpen className="h-10 w-10" />}
                  title={t("academic_guidance")}
                  description={t("academic_guidance_desc")}
                  features={[t("course_planning"), t("exam_prep"), t("study_groups")]}
                />
                <ServiceCard
                  icon={<Lightbulb className="h-10 w-10" />}
                  title={t("problem_resolution")}
                  description={t("problem_resolution_desc")}
                  features={[t("direct_faculty_contact"), t("issue_tracking"), t("follow_up")]}
                />
                <ServiceCard
                  icon={<Users className="h-10 w-10" />}
                  title={t("student_representation_service")}
                  description={t("student_representation_desc")}
                  features={[t("council_participation"), t("voice_amplification"), t("policy_input")]}
                />
              </motion.div>
            </TabsContent>

            <TabsContent value="events" className="py-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="grid gap-6 md:grid-cols-2"
              >
                <ServiceCard
                  icon={<Coffee className="h-10 w-10" />}
                  title={t("social_events")}
                  description={t("social_events_desc")}
                  features={[t("monthly_parties"), t("cultural_events"), t("networking")]}
                />
                <ServiceCard
                  icon={<Lightbulb className="h-10 w-10" />}
                  title={t("info_sessions")}
                  description={t("info_sessions_desc")}
                  features={[t("career_workshops"), t("skill_building"), t("industry_talks")]}
                />
                <ServiceCard
                  icon={<Users className="h-10 w-10" />}
                  title={t("first_semester_meetup")}
                  description={t("first_semester_desc")}
                  features={[t("welcome_events"), t("orientation"), t("peer_connections")]}
                />
                <ServiceCard
                  icon={<BookOpen className="h-10 w-10" />}
                  title={t("open_day_organization")}
                  description={t("open_day_desc")}
                  features={[t("campus_tours"), t("info_booths"), t("student_panels")]}
                />
              </motion.div>
            </TabsContent>

            <TabsContent value="communication" className="py-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="grid gap-6 md:grid-cols-2"
              >
                <ServiceCard
                  icon={<Headphones className="h-10 w-10" />}
                  title={t("faculty_bridge")}
                  description={t("faculty_bridge_desc")}
                  features={[t("regular_meetings"), t("feedback_delivery"), t("issue_resolution_feature")]}
                />
                <ServiceCard
                  icon={<Coffee className="h-10 w-10" />}
                  title={t("information_campaigns")}
                  description={t("information_campaigns_desc")}
                  features={[t("social_media"), t("newsletters"), t("announcements")]}
                />
                <ServiceCard
                  icon={<Users className="h-10 w-10" />}
                  title={t("feedback_collection")}
                  description={t("feedback_collection_desc")}
                  features={[t("surveys"), t("focus_groups"), t("open_forums")]}
                />
                <ServiceCard
                  icon={<Lightbulb className="h-10 w-10" />}
                  title={t("inter_council")}
                  description={t("inter_council_desc")}
                  features={[t("cross_faculty_events"), t("best_practices"), t("joint_initiatives")]}
                />
              </motion.div>
            </TabsContent>

            <TabsContent value="mentoring" className="py-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="grid gap-6 md:grid-cols-2"
              >
                <ServiceCard
                  icon={<Users className="h-10 w-10" />}
                  title={t("buddy_program")}
                  description={t("buddy_program_desc")}
                  features={[t("peer_matching"), t("regular_check_ins"), t("social_integration")]}
                />
                <ServiceCard
                  icon={<BookOpen className="h-10 w-10" />}
                  title={t("erasmus_support")}
                  description={t("erasmus_support_desc")}
                  features={[t("application_help"), t("cultural_prep"), t("ongoing_support")]}
                />
                <ServiceCard
                  icon={<Lightbulb className="h-10 w-10" />}
                  title={t("double_degree")}
                  description={t("double_degree_desc")}
                  features={[t("program_info"), t("application_guidance"), t("success_stories")]}
                />
                <ServiceCard
                  icon={<HelpCircle className="h-10 w-10" />}
                  title={t("integration_support")}
                  description={t("integration_support_desc")}
                  features={[t("language_help"), t("cultural_adaptation"), t("academic_support_feature")]}
                />
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">{t("ready_to_get_started")}</h2>
            <p className="text-xl mb-8 opacity-90">{t("cta_subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                {t("join_fachschaft")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary">
                {t("get_in_touch")}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
            <div className="p-6 border rounded-lg bg-muted/50">
              <h2 className="text-2xl font-bold mb-4 text-primary">{t("join_fachschaft")}</h2>
              <p className="mb-4">{t("join_fachschaft_desc")}</p>
              <p className="font-medium">
                {t("contact_us")}{" "}
                <a href="mailto:fachschaft@fdiba.tu-sofia.bg" className="underline text-primary">
                  fachschaft@fdiba.tu-sofia.bg
                </a>
              </p>
            </div>

            <div className="p-6 border rounded-lg bg-muted/50">
              <h2 className="text-2xl font-bold mb-4 text-primary">{t("need_help")}</h2>
              <p className="mb-4">{t("need_help_desc")}</p>
              <p className="font-medium">{t("office_location")}</p>
              <p className="font-medium">{t("office_hours")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({
  icon,
  title,
  description,
  features = [],
}: {
  icon: ReactNode
  title: string
  description: string
  features?: string[]
}) {

  return (
    <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
      <CardHeader>
        <div className="mb-2 text-primary">{icon}</div>
        <CardTitle className="text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base mb-4">{description}</CardDescription>
        {features.length > 0 && (
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

