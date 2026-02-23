"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { CalendarDays, ArrowRight, ExternalLink } from "lucide-react"
import { useTranslation } from "@/components/language-provider"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HomeHero />
      <UpcomingEvents />
      <PastEvents />
    </div>
  )
}

function HomeHero() {
  const { t } = useTranslation()

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="space-y-2">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="max-w-[600px] text-muted-foreground md:text-xl"
              >
                {t("fachschaft_intro")}
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-wrap gap-4 mt-4"
              >
                {[t("open_to_all"), t("student_representation"), t("academic_support")].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col gap-2 min-[400px]:flex-row"
            >
              <Link href="/services">
                <Button className="bg-primary hover:bg-primary/90 transform transition-transform hover:scale-105 active:scale-95">
                  {t("our_services")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/team">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white transform transition-transform hover:scale-105 active:scale-95"
                >
                  {t("meet_our_team")}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0, rotateY: -30 }}
            animate={{ x: 0, opacity: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative"
            >
              <Image
                src="/images/fachschaft-team.png"
                alt="FDIBA Fachschaft Team in front of the faculty building"
                width={500}
                height={400}
                className="rounded-lg object-cover object-center shadow-lg"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute bottom-4 left-4 text-white"
              >
                <p className="text-sm font-medium">{t("our_fachschaft_team")}</p>
                <p className="text-xs opacity-90">{t("at_fdiba_building")}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function UpcomingEvents() {
  const { t } = useTranslation()

  const events = [
    {
      id: 1,
      title: t("erste_woche_title"),
      description: t("erste_woche_desc"),
      comingSoon: true,
    },
    {
      id: 2,
      title: t("business_101_title"),
      description: t("business_101_desc"),
      comingSoon: true,
    },
  ]

  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start gap-4">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight"
          >
            {t("upcoming_events")}
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ y: 50, opacity: 0, rotateX: -15 }}
                whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="overflow-hidden h-full relative">
                  {event.comingSoon && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                        {t("coming_soon")}
                      </span>
                    </div>
                  )}

                  <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-primary/10 via-blue-50 to-primary/5 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CalendarDays className="h-8 w-8 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground font-medium">{t("details_coming_soon")}</p>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg leading-tight">{event.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2 text-primary">
                      <CalendarDays className="h-4 w-4" />
                      {t("date_time_tba")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{event.description}</p>
                    <p className="mt-2 font-medium text-primary">{t("location_tba")}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" disabled>
                      {t("more_details_soon")}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PastEvents() {
  const { t } = useTranslation()

  const facebookPosts = [
    {
      id: 1,
      title: t("fb_post_1_title"),
      description: t("fb_post_1_desc"),
      embedUrl:
        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fstory.php%3Fstory_fbid%3Dpfbid02DtFki9DTxuLJNpWnQde2veM1r5WrcXzu3tyh9v1XsQAYxxWEa6GpPR5L7aadFFxdl%26id%3D100063547088665&show_text=true&width=500",
      originalUrl:
        "https://www.facebook.com/story.php?story_fbid=pfbid02DtFki9DTxuLJNpWnQde2veM1r5WrcXzu3tyh9v1XsQAYxxWEa6GpPR5L7aadFFxdl&id=100063547088665&mibextid=WC7FNe&_rdr",
    },
    {
      id: 2,
      title: t("fb_post_2_title"),
      description: t("fb_post_2_desc"),
      embedUrl:
        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fstory.php%3Fstory_fbid%3Dpfbid0H8yHfaJBcsYaJJWXk6CgCQae1BRfV8cVPgVSu6BscfGfgJpBAKBeibJa2r8Rf8Kel%26id%3D100063547088665&show_text=true&width=500",
      originalUrl:
        "https://www.facebook.com/story.php?story_fbid=pfbid0H8yHfaJBcsYaJJWXk6CgCQae1BRfV8cVPgVSu6BscfGfgJpBAKBeibJa2r8Rf8Kel&id=100063547088665&mibextid=WC7FNe&_rdr",
    },
    {
      id: 3,
      title: t("fb_post_3_title"),
      description: t("fb_post_3_desc"),
      embedUrl:
        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fstory.php%3Fstory_fbid%3Dpfbid02dgnCk4pXV974PDFS7C64Wdnjho2yjVQa2rRwoqLfcRHuLZ5M3kz8xJdkfQ3Bn1byl%26id%3D100063547088665&show_text=true&width=500",
      originalUrl:
        "https://www.facebook.com/story.php?story_fbid=pfbid02dgnCk4pXV974PDFS7C64Wdnjho2yjVQa2rRwoqLfcRHuLZ5M3kz8xJdkfQ3Bn1byl&id=100063547088665&mibextid=WC7FNe&_rdr",
    },
    {
      id: 4,
      title: t("fb_post_4_title"),
      description: t("fb_post_4_desc"),
      embedUrl:
        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFDIBA.TU.SOFIA%2Fposts%2Fpfbid02T3ZWYp4zYavM8prECDBJkDMXmzMkGjUXC3Z4mMmQsnZefeiKEYWsc13dq5ZGFk8Bl&show_text=true&width=500",
      originalUrl:
        "https://www.facebook.com/FDIBA.TU.SOFIA/posts/pfbid02T3ZWYp4zYavM8prECDBJkDMXmzMkGjUXC3Z4mMmQsnZefeiKEYWsc13dq5ZGFk8Bl",
    },
    {
      id: 5,
      title: t("fb_post_5_title"),
      description: t("fb_post_5_desc"),
      embedUrl:
        "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fm.facebook.com%2Fstory.php%3Fstory_fbid%3Dpfbid02fmM7vaQcZrHPdgNQFtxhDdg5BEv2KbYNWxBAzpMosPBDTnWNRajc7d6htUhzSKurl%26id%3D100063547088665&show_text=true&width=500",
      originalUrl:
        "https://m.facebook.com/story.php?story_fbid=pfbid02fmM7vaQcZrHPdgNQFtxhDdg5BEv2KbYNWxBAzpMosPBDTnWNRajc7d6htUhzSKurl&id=100063547088665&mibextid=WC7FNe",
    },
  ]

  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start gap-4">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight"
          >
            {t("past_highlights")}
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facebookPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="overflow-hidden h-full">
                  <CardHeader>
                    <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <iframe
                        src={post.embedUrl}
                        width="100%"
                        height="400"
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        className="rounded-lg"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-lg -z-10">
                        <div className="flex items-center justify-center h-full">
                          <div className="text-center">
                            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                            <p className="text-sm text-muted-foreground">{t("loading_facebook_post")}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full group" asChild>
                      <a href={post.originalUrl} target="_blank" rel="noopener noreferrer">
                        {t("view_on_facebook")}
                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
