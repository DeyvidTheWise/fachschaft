"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "de"

type Translations = {
  [key in Language]: {
    [key: string]: string
  }
}

const translations: Translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    services: "Services",
    team: "Team",

    // Home Page
    fachschaft_intro:
      "We are the Fachschaft - the student council representing all students of the Faculty of German Engineering Education and Industrial Management (FDIBA) at TU Sofia. Our mission is to bridge communication between students and faculty leadership while supporting every student's academic journey.",
    open_to_all: "Open to all students",
    student_representation: "Student representation",
    academic_support: "Academic support",
    our_services: "Our Services",
    meet_our_team: "Meet Our Team",
    upcoming_events: "Upcoming Events",
    past_highlights: "Past Highlights",
    learn_more: "Learn More",
    view_gallery: "View Gallery",
    our_fachschaft_team: "Our Fachschaft Team",
    at_fdiba_building: "At FDIBA Building",

    // Events
    freshman_welcome_party: "Freshman Welcome Party",
    freshman_welcome_desc:
      "Join us for the annual welcome party for new students. Meet your peers and professors in a relaxed atmosphere.",
    career_day: "Career Day 2023",
    career_day_desc:
      "Connect with potential employers and discover internship opportunities with our industry partners.",
    exam_prep_workshop: "Winter Semester Exam Prep Workshop",
    exam_prep_desc: "Get tips and strategies for your upcoming exams from senior students who've been there.",
    summer_fest: "Summer Fest 2023",
    summer_fest_desc:
      "Our biggest event of the year with live music, food, and activities. Over 500 students attended!",
    hackathon: "Hackathon 2023",
    hackathon_desc: "48-hour coding challenge where students built innovative solutions for real-world problems.",

    // About Page
    about_fachschaft: "About the Fachschaft",
    about_subtitle: "Understanding our role, achievements, and how we serve the FDIBA community",
    what_is_fachschaft: "What is the Fachschaft?",
    fachschaft_definition:
      "The Fachschaft is the student council/association for the German faculty (FDIBA) at TU Sofia. We are the official representative body for all FDIBA students.",
    main_goals: "Our Main Goals",
    represent_students: "Represent all FDIBA students",
    bridge_communication: "Bridge communication between students and faculty",
    support_students: "Support students with questions and issues",
    organize_events: "Organize meaningful events and initiatives",
    who_can_join: "Who Can Join?",
    anyone_can_join:
      "Any FDIBA student can join our Fachschaft! We welcome students from all years, programs, and backgrounds who want to contribute to our community.",
    our_achievements: "Our Achievements",
    achievements_subtitle: "Real examples of our success and impact",
    benefits_for_faculty: "Benefits for Faculty Leadership",
    benefits_subtitle: "How the Fachschaft supports the entire FDIBA community",
    better_dialogue: "Better Dialogue",
    better_dialogue_desc: "We ensure effective communication between students and faculty leadership",
    issue_resolution: "Issue Resolution",
    issue_resolution_desc: "Timely identification and resolution of student concerns and problems",
    student_integration: "Student Integration",
    student_integration_desc: "Better integration of new students and increased faculty visibility",
    international_support: "International Support",
    international_support_desc: "Quick adaptation support for international and exchange students",
    lets_collaborate: "Let's Collaborate",
    collaboration_subtitle: "We're always open to new ideas and partnerships",
    our_needs: "Our Needs & Suggestions",
    we_invite_you: "We Invite You To",
    ready_to_collaborate: "Ready to collaborate?",

    // Services Page
    what_we_do: "What We Do",
    services_subtitle:
      "As the FDIBA Fachschaft, we provide comprehensive support and representation for all students through various initiatives and services.",
    support: "Support",
    events: "Events",
    communication: "Communication",
    mentoring: "Mentoring",
    consultation_support: "Consultation & Support",
    consultation_desc:
      "We help students with administrative, academic, and integration issues. No problem is too small - we're here to help you navigate university life.",
    academic_guidance: "Academic Guidance",
    academic_guidance_desc:
      "Get support with course selection, exam preparation, and academic requirements. We provide resources and connect you with peer tutors.",
    problem_resolution: "Problem Resolution",
    problem_resolution_desc:
      "We work directly with faculty leadership to address student concerns and propose improvements to academic processes.",
    student_representation_service: "Student Representation",
    student_representation_desc:
      "We participate in key academic councils and committees, ensuring your voice is heard in important university decisions.",
    social_events: "Social Events",
    social_events_desc:
      "From student parties to cultural events like our Christmas Ball, we organize gatherings that bring the FDIBA community together.",
    info_sessions: "Info Sessions & Workshops",
    info_sessions_desc:
      "Regular workshops on important topics like double degree programs, scholarships, internships, and career opportunities.",
    first_semester_meetup: "First Semester Meet-up",
    first_semester_desc:
      "Special events designed to help new students integrate into university life and meet their peers.",
    open_day_organization: "Open Day Organization",
    open_day_desc: "We help organize and participate in faculty open days, showcasing FDIBA to prospective students.",
    faculty_bridge: "Faculty Leadership Bridge",
    faculty_bridge_desc:
      "We facilitate communication between students and faculty management, delivering feedback and helping resolve issues.",
    information_campaigns: "Information Campaigns",
    information_campaigns_desc:
      "Stay informed through our social media channels about important dates, procedures, and opportunities.",
    feedback_collection: "Student Feedback Collection",
    feedback_collection_desc:
      "We gather and present student concerns and suggestions to faculty leadership for continuous improvement.",
    inter_council: "Inter-Council Cooperation",
    inter_council_desc:
      "We collaborate with other student councils to share best practices and coordinate university-wide initiatives.",
    buddy_program: "Buddy Program",
    buddy_program_desc:
      "New students are paired with experienced students to help with adaptation and first steps at the university.",
    erasmus_support: "Erasmus Support",
    erasmus_support_desc:
      "Special assistance for international exchange students and those participating in Erasmus programs.",
    double_degree: "Double Degree Guidance",
    double_degree_desc: "Support and information for students interested in pursuing double degree opportunities.",
    integration_support: "Integration Support",
    integration_support_desc:
      "Helping international students adapt to Bulgarian university culture and academic requirements.",
    join_fachschaft: "Join the Fachschaft",
    join_fachschaft_desc:
      "Any FDIBA student can join our Fachschaft! We welcome students from all years and programs who want to make a difference in our faculty community.",
    contact_us: "Contact us:",
    need_help: "Need Help?",
    need_help_desc:
      "Whether you have administrative questions, academic concerns, or integration issues, we're here to support you.",
    office_location: "Office: Room 10101A, FDIBA Building",
    office_hours: "Office Hours: Monday-Friday, 10:00-16:00",

    // Team Page
    meet_our_team_title: "Meet Our Team",
    team_subtitle:
      "Get to know the dedicated students who work tirelessly to represent your interests and make FDIBA a better place for everyone.",
    president: "President",
    member: "Member",

    // Footer
    navigation: "Navigation",
    contact: "Contact",
    social: "Social",
    privacy_policy: "Privacy Policy",
    terms_of_service: "Terms of Service",
    all_rights_reserved: "All rights reserved.",

    // Departments
    computer_science: "Computer Science",
    business_informatics: "Business Informatics",
    mechatronics: "Mechatronics",

    // Years
    first_year: "1st Year",
    second_year: "2nd Year",
    third_year: "3rd Year",
    fourth_year: "4th Year",

    // Team member bios
    team_deyvid_bio:
      "Leading the FDIBA Fachschaft with a focus on improving student representation and bridging communication between students and faculty leadership.",
    team_gergana_bio:
      "Dedicated to supporting student initiatives and helping with academic resources and student integration.",
    team_yordan_bio:
      "Organizing events and coordinating between different student groups to create a vibrant campus life.",
    team_martin_bio: "Planning and executing student events, from academic workshops to social gatherings.",
    team_alexandar_bio: "Advocating for students' academic interests and facilitating communication with faculty.",

    // Achievements
    achievement_1: "Successfully organized multiple Open Days for prospective students",
    achievement_2: "Established effective communication channels with faculty leadership",
    achievement_3: "Implemented buddy program for new and international students",
    achievement_4: "Active participation in key academic councils and committees",
    achievement_5: "Successful collaboration with other student councils across TU Sofia",
    achievement_6: "Regular feedback collection and resolution of student issues",

    // Collaboration section
    more_visibility: "More visibility for our work through official channels",
    participation_decisions: "Participation in decisions affecting students",
    improved_communication: "Improved communication with regular meetings",
    support_organizing: "Support in organizing events and initiatives",
    share_ideas: "Share ideas and suggestions with us",
    attend_events: "Attend our events and initiatives",
    collaborate_projects: "Collaborate on student-focused projects",
    support_communication: "Support our communication efforts",

    // Add these new translations to the English (en) section:
    erste_woche_title: "First Week at University Event",
    erste_woche_desc:
      "Integration of new students into the university atmosphere. A comprehensive orientation program for first-year students.",
    business_101_title: "Business 101",
    business_101_desc:
      "Masterclass series with experts from various fields. Learn from industry professionals and expand your knowledge in practical sessions.",
    coming_soon: "Coming Soon",
    date_time_tba: "Date & Time TBA",
    location_tba: "Location TBA",
    more_details_soon: "More Details Soon",
    details_coming_soon: "Details coming soon",
    view_on_facebook: "View on Facebook",
    loading_facebook_post: "Loading Facebook post...",

    // Facebook post titles and descriptions in English
    fb_post_1_title: "FDIBA participation with a stand at a university candidate exchange in Pleven",
    fb_post_1_desc: "FDIBA participation in a university candidate exchange in Pleven",
    fb_post_2_title: "FDIBA Fachschaft members welcomed students from the 73rd Gymnasium",
    fb_post_2_desc:
      "FDIBA Fachschaft members greeting 73rd Gymnasium students, answering questions and sharing experiences",
    fb_post_3_title: "FDIBA Sports Day",
    fb_post_3_desc: "FDIBA Sports Day event with students participating in various activities",
    fb_post_4_title: "Hackathon (FDIBA AppHack)",
    fb_post_4_desc: "FDIBA AppHack - 48-hour coding challenge where students built innovative solutions",
    fb_post_5_title: "FDIBA Fachschaft in the TU-Sofia Student Council",
    fb_post_5_desc: "FDIBA Fachschaft members joining the TU-Sofia Student Council as representatives",

    // Services page additional translations
    your_student_success_partner: "Your Student Success Partner",
    explore_our_services: "Explore Our Services",
    join_our_community: "Join Our Community",
    students_helped: "Students Helped",
    events_organized: "Events Organized",
    support_available: "Support Available",
    satisfaction_rate: "Satisfaction Rate",
    your_journey_with_us: "Your Journey With Us",
    journey_subtitle: "From your first day to graduation, we're here to support every step of your academic journey",
    step_1_title: "Get Support",
    step_1_desc: "Reach out to us with any academic or administrative questions",
    step_2_title: "Join Events",
    step_2_desc: "Participate in our workshops, social events, and networking sessions",
    step_3_title: "Connect & Grow",
    step_3_desc: "Build lasting relationships and develop your skills with our community",
    step_4_title: "Lead & Impact",
    step_4_desc: "Take on leadership roles and help shape the future of FDIBA",
    our_service_categories: "Our Service Categories",
    service_categories_subtitle: "Comprehensive support across all aspects of your university experience",
    ready_to_get_started: "Ready to Get Started?",
    cta_subtitle: "Join hundreds of students who have already benefited from our comprehensive support system",
    get_in_touch: "Get in Touch",
    course_planning: "Course Planning",
    exam_prep: "Exam Prep",
    study_groups: "Study Groups",
    direct_faculty_contact: "Direct Faculty Contact",
    issue_tracking: "Issue Tracking",
    follow_up: "Follow-up",
    council_participation: "Council Participation",
    voice_amplification: "Voice Amplification",
    policy_input: "Policy Input",
    monthly_parties: "Monthly Parties",
    cultural_events: "Cultural Events",
    networking: "Networking",
    career_workshops: "Career Workshops",
    skill_building: "Skill Building",
    industry_talks: "Industry Talks",
    welcome_events: "Welcome Events",
    orientation: "Orientation",
    peer_connections: "Peer Connections",
    campus_tours: "Campus Tours",
    info_booths: "Info Booths",
    student_panels: "Student Panels",
    regular_meetings: "Regular Meetings",
    feedback_delivery: "Feedback Delivery",
    issue_resolution_feature: "Issue Resolution",
    social_media: "Social Media",
    newsletters: "Newsletters",
    announcements: "Announcements",
    surveys: "Surveys",
    focus_groups: "Focus Groups",
    open_forums: "Open Forums",
    cross_faculty_events: "Cross-Faculty Events",
    best_practices: "Best Practices",
    joint_initiatives: "Joint Initiatives",
    peer_matching: "Peer Matching",
    regular_check_ins: "Regular Check-ins",
    social_integration: "Social Integration",
    application_help: "Application Help",
    cultural_prep: "Cultural Prep",
    ongoing_support: "Ongoing Support",
    program_info: "Program Info",
    application_guidance: "Application Guidance",
    success_stories: "Success Stories",
    language_help: "Language Help",
    cultural_adaptation: "Cultural Adaptation",
    academic_support_feature: "Academic Support",
    hour_support: "24/7 Support",
    quick_response: "Quick Response",
    expert_guidance: "Expert Guidance",
  },
  de: {
    // Navigation
    home: "Startseite",
    about: "Über uns",
    services: "Dienstleistungen",
    team: "Team",

    // Home Page
    fachschaft_intro:
      "Wir sind die Fachschaft - die Studentenvertretung aller Studierenden der Fakultät für Deutsche Ingenieur- und Betriebswirtschaftsausbildung (FDIBA) an der TU Sofia. Unsere Mission ist es, die Kommunikation zwischen Studierenden und Fakultätsleitung zu fördern und jeden Studierenden auf seinem akademischen Weg zu unterstützen.",
    open_to_all: "Offen für alle Studierenden",
    student_representation: "Studentenvertretung",
    academic_support: "Akademische Unterstützung",
    our_services: "Unsere Dienstleistungen",
    meet_our_team: "Unser Team kennenlernen",
    upcoming_events: "Kommende Veranstaltungen",
    past_highlights: "Vergangene Höhepunkte",
    learn_more: "Mehr erfahren",
    view_gallery: "Galerie ansehen",
    our_fachschaft_team: "Unser Fachschaftsteam",
    at_fdiba_building: "Am FDIBA-Gebäude",

    // Events
    freshman_welcome_party: "Erstsemester-Willkommensfeier",
    freshman_welcome_desc:
      "Nehmt an unserer jährlichen Willkommensfeier für neue Studierende teil. Lernt eure Kommilitonen und Professoren in entspannter Atmosphäre kennen.",
    career_day: "Karrieretag 2023",
    career_day_desc:
      "Knüpft Kontakte zu potenziellen Arbeitgebern und entdeckt Praktikumsmöglichkeiten bei unseren Industriepartnern.",
    exam_prep_workshop: "Prüfungsvorbereitungs-Workshop Wintersemester",
    exam_prep_desc: "Holt euch Tipps und Strategien für eure bevorstehenden Prüfungen von erfahrenen Studierenden.",
    summer_fest: "Sommerfest 2023",
    summer_fest_desc:
      "Unser größtes Event des Jahres mit Live-Musik, Essen und Aktivitäten. Über 500 Studierende haben teilgenommen!",
    hackathon: "Hackathon 2023",
    hackathon_desc:
      "48-Stunden-Programmier-Challenge, bei der Studierende innovative Lösungen für reale Probleme entwickelt haben.",

    // About Page
    about_fachschaft: "Über die Fachschaft",
    about_subtitle: "Verstehen Sie unsere Rolle, Erfolge und wie wir der FDIBA-Gemeinschaft dienen",
    what_is_fachschaft: "Was ist die Fachschaft?",
    fachschaft_definition:
      "Die Fachschaft ist die Studentenvertretung/der Studentenverein für die deutsche Fakultät (FDIBA) an der TU Sofia. Wir sind das offizielle Vertretungsorgan für alle FDIBA-Studierenden.",
    main_goals: "Unsere Hauptziele",
    represent_students: "Alle FDIBA-Studierenden vertreten",
    bridge_communication: "Kommunikation zwischen Studierenden und Fakultät fördern",
    support_students: "Studierende bei Fragen und Problemen unterstützen",
    organize_events: "Sinnvolle Veranstaltungen und Initiativen organisieren",
    who_can_join: "Wer kann mitmachen?",
    anyone_can_join:
      "Jeder FDIBA-Studierende kann unserer Fachschaft beitreten! Wir begrüßen Studierende aller Jahrgänge, Programme und Hintergründe, die zu unserer Gemeinschaft beitragen möchten.",
    our_achievements: "Unsere Erfolge",
    achievements_subtitle: "Echte Beispiele unseres Erfolgs und unserer Wirkung",
    benefits_for_faculty: "Vorteile für die Fakultätsleitung",
    benefits_subtitle: "Wie die Fachschaft die gesamte FDIBA-Gemeinschaft unterstützt",
    better_dialogue: "Besserer Dialog",
    better_dialogue_desc: "Wir sorgen für effektive Kommunikation zwischen Studierenden und Fakultätsleitung",
    issue_resolution: "Problemlösung",
    issue_resolution_desc: "Rechtzeitige Identifizierung und Lösung von Studierendenproblemen",
    student_integration: "Studentenintegration",
    student_integration_desc: "Bessere Integration neuer Studierender und erhöhte Sichtbarkeit der Fakultät",
    international_support: "Internationale Unterstützung",
    international_support_desc: "Schnelle Anpassungsunterstützung für internationale und Austauschstudierende",
    lets_collaborate: "Lasst uns zusammenarbeiten",
    collaboration_subtitle: "Wir sind immer offen für neue Ideen und Partnerschaften",
    our_needs: "Unsere Bedürfnisse & Vorschläge",
    we_invite_you: "Wir laden Sie ein",
    ready_to_collaborate: "Bereit zur Zusammenarbeit?",

    // Services Page
    what_we_do: "Was wir tun",
    services_subtitle:
      "Als FDIBA-Fachschaft bieten wir umfassende Unterstützung und Vertretung für alle Studierenden durch verschiedene Initiativen und Dienstleistungen.",
    support: "Unterstützung",
    events: "Veranstaltungen",
    communication: "Kommunikation",
    mentoring: "Mentoring",
    consultation_support: "Beratung & Unterstützung",
    consultation_desc:
      "Wir helfen Studierenden bei administrativen, akademischen und Integrationsproblemen. Kein Problem ist zu klein - wir sind da, um euch beim Universitätsleben zu helfen.",
    academic_guidance: "Akademische Beratung",
    academic_guidance_desc:
      "Erhaltet Unterstützung bei der Kurswahl, Prüfungsvorbereitung und akademischen Anforderungen. Wir stellen Ressourcen bereit und vermitteln euch Peer-Tutoren.",
    problem_resolution: "Problemlösung",
    problem_resolution_desc:
      "Wir arbeiten direkt mit der Fakultätsleitung zusammen, um Studierendenprobleme anzugehen und Verbesserungen der akademischen Prozesse vorzuschlagen.",
    student_representation_service: "Studentenvertretung",
    student_representation_desc:
      "Wir nehmen an wichtigen akademischen Räten und Ausschüssen teil und sorgen dafür, dass eure Stimme bei wichtigen Universitätsentscheidungen gehört wird.",
    social_events: "Soziale Veranstaltungen",
    social_events_desc:
      "Von Studentenpartys bis hin zu kulturellen Veranstaltungen wie unserem Weihnachtsball organisieren wir Zusammenkünfte, die die FDIBA-Gemeinschaft zusammenbringen.",
    info_sessions: "Info-Sessions & Workshops",
    info_sessions_desc:
      "Regelmäßige Workshops zu wichtigen Themen wie Doppelabschlussprogramme, Stipendien, Praktika und Karrieremöglichkeiten.",
    first_semester_meetup: "Erstsemester-Treffen",
    first_semester_desc:
      "Spezielle Veranstaltungen, die neuen Studierenden helfen, sich ins Universitätsleben zu integrieren und ihre Kommilitonen kennenzulernen.",
    open_day_organization: "Tag der offenen Tür Organisation",
    open_day_desc:
      "Wir helfen bei der Organisation und Teilnahme an Fakultätstagen der offenen Tür und präsentieren FDIBA potenziellen Studierenden.",
    faculty_bridge: "Brücke zur Fakultätsleitung",
    faculty_bridge_desc:
      "Wir erleichtern die Kommunikation zwischen Studierenden und Fakultätsmanagement, übermitteln Feedback und helfen bei der Problemlösung.",
    information_campaigns: "Informationskampagnen",
    information_campaigns_desc:
      "Bleibt über unsere Social-Media-Kanäle über wichtige Termine, Verfahren und Möglichkeiten informiert.",
    feedback_collection: "Studierenden-Feedback-Sammlung",
    feedback_collection_desc:
      "Wir sammeln und präsentieren Studierendenprobleme und -vorschläge der Fakultätsleitung zur kontinuierlichen Verbesserung.",
    inter_council: "Zusammenarbeit zwischen Räten",
    inter_council_desc:
      "Wir arbeiten mit anderen Studentenräten zusammen, um bewährte Praktiken zu teilen und universitätsweite Initiativen zu koordinieren.",
    buddy_program: "Buddy-Programm",
    buddy_program_desc:
      "Neue Studierende werden mit erfahrenen Studierenden gepaart, um bei der Anpassung und den ersten Schritten an der Universität zu helfen.",
    erasmus_support: "Erasmus-Unterstützung",
    erasmus_support_desc:
      "Spezielle Unterstützung für internationale Austauschstudierende und Teilnehmer an Erasmus-Programmen.",
    double_degree: "Doppelabschluss-Beratung",
    double_degree_desc:
      "Unterstützung und Informationen für Studierende, die an Doppelabschlussmöglichkeiten interessiert sind.",
    integration_support: "Integrationsunterstützung",
    integration_support_desc:
      "Hilfe für internationale Studierende bei der Anpassung an die bulgarische Universitätskultur und akademische Anforderungen.",
    join_fachschaft: "Der Fachschaft beitreten",
    join_fachschaft_desc:
      "Jeder FDIBA-Studierende kann unserer Fachschaft beitreten! Wir begrüßen Studierende aller Jahrgänge und Programme, die einen Unterschied in unserer Fakultätsgemeinschaft machen möchten.",
    contact_us: "Kontaktiert uns:",
    need_help: "Braucht ihr Hilfe?",
    need_help_desc:
      "Ob ihr administrative Fragen, akademische Probleme oder Integrationsprobleme habt, wir sind da, um euch zu unterstützen.",
    office_location: "Büro: Raum 10101A, FDIBA-Gebäude",
    office_hours: "Bürozeiten: Montag-Freitag, 10:00-16:00",

    // Team Page
    meet_our_team_title: "Unser Team kennenlernen",
    team_subtitle:
      "Lernt die engagierten Studierenden kennen, die unermüdlich daran arbeiten, eure Interessen zu vertreten und FDIBA zu einem besseren Ort für alle zu machen.",
    president: "Präsident",
    member: "Mitglied",

    // Footer
    navigation: "Navigation",
    contact: "Kontakt",
    social: "Soziale Medien",
    privacy_policy: "Datenschutzrichtlinie",
    terms_of_service: "Nutzungsbedingungen",
    all_rights_reserved: "Alle Rechte vorbehalten.",

    // Departments
    computer_science: "Informatik",
    business_informatics: "Wirtschaftsinformatik",
    mechatronics: "Mechatronik",

    // Years
    first_year: "1. Jahr",
    second_year: "2. Jahr",
    third_year: "3. Jahr",
    fourth_year: "4. Jahr",

    // Team member bios
    team_deyvid_bio:
      "Leitet die FDIBA Fachschaft mit dem Fokus auf die Verbesserung der Studentenvertretung und die Förderung der Kommunikation zwischen Studierenden und Fakultätsleitung.",
    team_gergana_bio:
      "Engagiert sich für die Unterstützung von Studenteninitiativen und hilft bei akademischen Ressourcen und der Integration von Studierenden.",
    team_yordan_bio:
      "Organisiert Veranstaltungen und koordiniert zwischen verschiedenen Studentengruppen, um ein lebendiges Campusleben zu schaffen.",
    team_martin_bio:
      "Plant und führt Studentenveranstaltungen durch, von akademischen Workshops bis hin zu sozialen Zusammenkünften.",
    team_alexandar_bio:
      "Setzt sich für die akademischen Interessen der Studierenden ein und erleichtert die Kommunikation mit der Fakultät.",

    // Achievements
    achievement_1: "Erfolgreich mehrere Tage der offenen Tür für potenzielle Studierende organisiert",
    achievement_2: "Effektive Kommunikationskanäle mit der Fakultätsleitung etabliert",
    achievement_3: "Buddy-Programm für neue und internationale Studierende implementiert",
    achievement_4: "Aktive Teilnahme an wichtigen akademischen Räten und Ausschüssen",
    achievement_5: "Erfolgreiche Zusammenarbeit mit anderen Studentenräten an der TU Sofia",
    achievement_6: "Regelmäßige Feedback-Sammlung und Lösung von Studierendenproblemen",

    // Collaboration section
    more_visibility: "Mehr Sichtbarkeit für unsere Arbeit durch offizielle Kanäle",
    participation_decisions: "Teilnahme an Entscheidungen, die Studierende betreffen",
    improved_communication: "Verbesserte Kommunikation durch regelmäßige Meetings",
    support_organizing: "Unterstützung bei der Organisation von Veranstaltungen und Initiativen",
    share_ideas: "Teilt Ideen und Vorschläge mit uns",
    attend_events: "Nehmt an unseren Veranstaltungen und Initiativen teil",
    collaborate_projects: "Arbeitet an studierendenorientierten Projekten mit",
    support_communication: "Unterstützt unsere Kommunikationsbemühungen",

    // Add these new translations to the German (de) section:
    erste_woche_title: "Erste Woche in der Uni Event",
    erste_woche_desc:
      "Integration von den neuen Studenten in die Atmosphäre der Universität. Ein umfassendes Orientierungsprogramm für Erstsemester.",
    business_101_title: "Business 101",
    business_101_desc:
      "Masterclass-Serie mit Experten aus verschiedenen Bereichen. Lerne von Branchenprofis und erweitere dein Wissen in praktischen Sessions.",
    coming_soon: "Demnächst",
    date_time_tba: "Datum & Zeit werden bekannt gegeben",
    location_tba: "Ort wird bekannt gegeben",
    more_details_soon: "Weitere Details folgen bald",
    details_coming_soon: "Details folgen bald",
    view_on_facebook: "Auf Facebook ansehen",
    loading_facebook_post: "Facebook-Post wird geladen...",

    // Facebook post titles and descriptions in German
    fb_post_1_title: "Teilnahme mit einem Stand von FDIBA an einem Kandidatenaustausch für Universitäten in Pleven",
    fb_post_1_desc: "FDIBA-Teilnahme an einem Universitäts-Kandidatenaustausch in Pleven",
    fb_post_2_title: "Mitglieder von FDIBA Fachschaft begrüßten Schüler der 73.Gymnasium",
    fb_post_2_desc:
      "FDIBA Fachschaft-Mitglieder begrüßen Schüler des 73. Gymnasiums, beantworten Fragen und teilen Erfahrungen",
    fb_post_3_title: "Der Sporttag von FDIBA",
    fb_post_3_desc: "FDIBA Sporttag-Veranstaltung mit Studierenden, die an verschiedenen Aktivitäten teilnehmen",
    fb_post_4_title: "Hackathon (FDIBA AppHack)",
    fb_post_4_desc:
      "FDIBA AppHack - 48-Stunden-Programmier-Challenge, bei der Studierende innovative Lösungen entwickelt haben",
    fb_post_5_title: "FDIBA Fachschaft im Studentenrat der TU-Sofia",
    fb_post_5_desc: "FDIBA Fachschaft-Mitglieder treten dem TU-Sofia Studentenrat als Vertreter bei",

    // Services page additional translations
    your_student_success_partner: "Ihr Partner für studentischen Erfolg",
    explore_our_services: "Entdecken Sie unsere Dienstleistungen",
    join_our_community: "Treten Sie unserer Gemeinschaft bei",
    students_helped: "Studenten unterstützt",
    events_organized: "Veranstaltungen organisiert",
    support_available: "Unterstützung verfügbar",
    satisfaction_rate: "Zufriedenheitsrate",
    your_journey_with_us: "Ihre Reise mit uns",
    journey_subtitle:
      "Von Ihrem ersten Tag bis zum Abschluss sind wir da, um jeden Schritt Ihrer akademischen Reise zu unterstützen",
    step_1_title: "Unterstützung erhalten",
    step_1_desc: "Wenden Sie sich mit akademischen oder administrativen Fragen an uns",
    step_2_title: "An Veranstaltungen teilnehmen",
    step_2_desc: "Nehmen Sie an unseren Workshops, sozialen Veranstaltungen und Networking-Sessions teil",
    step_3_title: "Verbinden & Wachsen",
    step_3_desc: "Bauen Sie dauerhafte Beziehungen auf und entwickeln Sie Ihre Fähigkeiten mit unserer Gemeinschaft",
    step_4_title: "Führen & Bewirken",
    step_4_desc: "Übernehmen Sie Führungsrollen und helfen Sie, die Zukunft von FDIBA zu gestalten",
    our_service_categories: "Unsere Dienstleistungskategorien",
    service_categories_subtitle: "Umfassende Unterstützung in allen Aspekten Ihres Universitätslebens",
    ready_to_get_started: "Bereit loszulegen?",
    cta_subtitle:
      "Schließen Sie sich Hunderten von Studenten an, die bereits von unserem umfassenden Unterstützungssystem profitiert haben",
    get_in_touch: "Kontakt aufnehmen",
    course_planning: "Kursplanung",
    exam_prep: "Prüfungsvorbereitung",
    study_groups: "Lerngruppen",
    direct_faculty_contact: "Direkter Fakultätskontakt",
    issue_tracking: "Problemverfolgung",
    follow_up: "Nachverfolgung",
    council_participation: "Ratspartizipation",
    voice_amplification: "Stimmenverstärkung",
    policy_input: "Politikbeitrag",
    monthly_parties: "Monatliche Partys",
    cultural_events: "Kulturelle Veranstaltungen",
    networking: "Networking",
    career_workshops: "Karriere-Workshops",
    skill_building: "Kompetenzaufbau",
    industry_talks: "Branchengespräche",
    welcome_events: "Willkommensveranstaltungen",
    orientation: "Orientierung",
    peer_connections: "Peer-Verbindungen",
    campus_tours: "Campus-Touren",
    info_booths: "Info-Stände",
    student_panels: "Studentenpanels",
    regular_meetings: "Regelmäßige Treffen",
    feedback_delivery: "Feedback-Übermittlung",
    issue_resolution_feature: "Problemlösung",
    social_media: "Soziale Medien",
    newsletters: "Newsletter",
    announcements: "Ankündigungen",
    surveys: "Umfragen",
    focus_groups: "Fokusgruppen",
    open_forums: "Offene Foren",
    cross_faculty_events: "Fakultätsübergreifende Veranstaltungen",
    best_practices: "Bewährte Praktiken",
    joint_initiatives: "Gemeinsame Initiativen",
    peer_matching: "Peer-Matching",
    regular_check_ins: "Regelmäßige Check-ins",
    social_integration: "Soziale Integration",
    application_help: "Bewerbungshilfe",
    cultural_prep: "Kulturelle Vorbereitung",
    ongoing_support: "Fortlaufende Unterstützung",
    program_info: "Programminformationen",
    application_guidance: "Bewerbungsberatung",
    success_stories: "Erfolgsgeschichten",
    language_help: "Sprachhilfe",
    cultural_adaptation: "Kulturelle Anpassung",
    academic_support_feature: "Akademische Unterstützung",
    hour_support: "24/7 Unterstützung",
    quick_response: "Schnelle Antwort",
    expert_guidance: "Expertenberatung",
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useTranslation() {
  const context = useContext(LanguageContext)

  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider")
  }

  return context
}
