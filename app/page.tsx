"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Moon,
  Sun,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Award,
  Code,
  User,
  GraduationCap,
  Briefcase,
  Star,
  Download,
} from "lucide-react"

// Localization content
const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    resume: "Resume",
    contact: "Contact",

    // Hero Section
    heroTitle: "Swayam Jain",
    heroSubtitle: "Aspiring Software Engineer & Computer Science Undergraduate",
    heroDescription:
      "Passionate about building innovative solutions with modern technologies. Currently pursuing B.Tech in Computer Science with a focus on software development and problem-solving.",
    learnMore: "Learn More About Me",
    getInTouch: "Get In Touch",

    // About Section
    aboutTitle: "About Me",
    aboutDescription: "Get to know more about my journey, interests, and what drives my passion for technology.",
    personalProfile: "Personal Profile",
    aboutText1:
      "I'm a dedicated Computer Science student with a strong foundation in programming and software development. My journey began with a curiosity about how technology shapes our world, and has evolved into a passion for creating meaningful solutions through code.",
    aboutText2:
      "Beyond academics, I'm deeply interested in financial markets, enjoy problem-solving challenges, and have demonstrated leadership skills as a former House Captain. I'm also multilingual, speaking Hindi, English, and German fluently.",
    interestsHobbies: "Interests & Hobbies",

    // Resume Section
    resumeTitle: "Resume",
    resumeDescription: "A comprehensive overview of my education, skills, projects, and achievements.",
    education: "Education",
    examinationAchievements: "Examination Achievements",
    examinationDescription: "Standardized test scores and competitive exam results",
    technicalSkills: "Technical Skills",
    programmingLanguages: "Programming Languages",
    databaseTools: "Database & Tools",
    languages: "Languages",
    projects: "Projects",
    certificationsAwards: "Certifications & Awards",
    certifications: "Certifications",
    leadershipAwards: "Leadership & Awards",

    // Contact Section
    contactTitle: "Get In Touch",
    contactDescription:
      "I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.",
    contactInformation: "Contact Information",
    contactChannels: "Feel free to reach out through any of these channels",
    email: "Email",
    phone: "Phone",
    location: "Location",
    connectOnline: "Connect Online",
    connectPlatforms: "Let's connect on professional platforms",
    githubProfile: "GitHub Profile",
    linkedinProfile: "LinkedIn Profile",
    collaborationText: "Interested in collaboration or have a project in mind? I'd love to hear from you!",
    sendEmail: "Send Email",
    downloadResume: "Download Resume",
    downloadDescription: "Get a professionally formatted PDF copy of my resume",
    downloadText:
      "Download my complete resume in PDF format, including all education, skills, projects, and achievements.",
    downloadPDF: "Download PDF Resume",

    // Footer
    footerText: "© 2024 Swayam Jain. Built with passion for technology and innovation.",

    // Skills and other content
    native: "Native",
    currentlyPursuing: "B.Tech Computer Science & Engineering",
    cgpa: "CGPA: 9.51/10",
    born: "Born: 26/07/2004, Jabalpur, India",

    // Interests
    problemSolving: "Problem Solving",
    financialMarkets: "Financial Markets",
    leadership: "Leadership",
    sports: "Sports",
    mathematics: "Mathematics",
    programming: "Programming",

    // Education details
    languageCertificate: "Language Certificate (A1-C1)",
    germanProficiency: "German Language Proficiency",
    bachelorTech: "Bachelor of Technology",
    computerScience: "Computer Science & Engineering",
    seniorSchool: "Senior School Certificate",
    secondarySchool: "Secondary School",
    keySubjects: "Key Subjects:",
    achievements: "Achievements:",

    // Examination descriptions
    iitjeeDesc: "Performance in one of the world's toughest examinations",
    ieltsDesc: "English language proficiency",
    testdafDesc: "German language proficiency",
    testasDesc: "Academic aptitude test",

    // Project descriptions
    bankManagementTitle: "Bank Management System",
    bankManagementDesc:
      "Console-based bank management system with core functionalities like deposit, withdrawal, balance inquiry, and fund transfer.",
    coachingSystemTitle: "Coaching Management System",
    coachingSystemDesc: "Digital solution to eliminate paperwork and manage students and staff data efficiently.",

    // Features
    customerData: "Customer data management",
    transactionHistory: "Transaction history",
    secureDatabase: "Secure database integration",
    studentManagement: "Student management",
    staffData: "Staff data handling",
    digitalWorkflow: "Digital workflow",

    // Certifications
    cybersecurityTitle: "Introduction to Cybersecurity Awareness",
    cybersecurityDesc: "Common cybersecurity threats and data security practices",
    aiTitle: "AI for Beginners",
    aiDesc: "AI concepts, applications, and ethical implications",
    germanCertTitle: "German Language Certificate (A1-C1)",
    germanCertDesc: "Comprehensive German language proficiency from A1 to C1 level",

    // Awards
    houseCaptain: "House Captain",
    captainDesc1: "Led Ujjaini House as elected captain",
    captainDesc2: "Organized competitions and events",
    captainDesc3: "Managed general and board meetings",
    captainDesc4: "Maintained school discipline standards",

    // File info
    fileSize: "File size: ~150KB",
    viewCertificate: "View Certificate",
  },
  de: {
    // Navigation
    home: "Startseite",
    about: "Über mich",
    resume: "Lebenslauf",
    contact: "Kontakt",

    // Hero Section
    heroTitle: "Swayam Jain",
    heroSubtitle: "Angehender Software-Ingenieur & Informatik-Student",
    heroDescription:
      "Leidenschaftlich für innovative Lösungen mit modernen Technologien. Studiere derzeit B.Tech in Informatik mit Fokus auf Softwareentwicklung und Problemlösung.",
    learnMore: "Mehr über mich erfahren",
    getInTouch: "Kontakt aufnehmen",

    // About Section
    aboutTitle: "Über mich",
    aboutDescription:
      "Erfahren Sie mehr über meinen Werdegang, meine Interessen und was meine Leidenschaft für Technologie antreibt.",
    personalProfile: "Persönliches Profil",
    aboutText1:
      "Ich bin ein engagierter Informatikstudent mit einer soliden Grundlage in Programmierung und Softwareentwicklung. Meine Reise begann mit der Neugier darauf, wie Technologie unsere Welt prägt, und hat sich zu einer Leidenschaft für die Entwicklung sinnvoller Lösungen durch Code entwickelt.",
    aboutText2:
      "Neben dem Studium interessiere ich mich sehr für Finanzmärkte, genieße Problemlösungsherausforderungen und habe Führungsqualitäten als ehemaliger Hauskapitän unter Beweis gestellt. Ich spreche auch mehrere Sprachen fließend: Hindi, Englisch und Deutsch.",
    interestsHobbies: "Interessen & Hobbys",

    // Resume Section
    resumeTitle: "Lebenslauf",
    resumeDescription: "Ein umfassender Überblick über meine Ausbildung, Fähigkeiten, Projekte und Erfolge.",
    education: "Bildung",
    examinationAchievements: "Prüfungserfolge",
    examinationDescription: "Standardisierte Testergebnisse und Wettbewerbsprüfungen",
    technicalSkills: "Technische Fähigkeiten",
    programmingLanguages: "Programmiersprachen",
    databaseTools: "Datenbank & Tools",
    languages: "Sprachen",
    projects: "Projekte",
    certificationsAwards: "Zertifikate & Auszeichnungen",
    certifications: "Zertifikate",
    leadershipAwards: "Führung & Auszeichnungen",

    // Contact Section
    contactTitle: "Kontakt aufnehmen",
    contactDescription:
      "Ich bin immer offen für Diskussionen über neue Möglichkeiten, Zusammenarbeit oder einfach ein Gespräch über Technologie.",
    contactInformation: "Kontaktinformationen",
    contactChannels: "Zögern Sie nicht, mich über einen dieser Kanäle zu kontaktieren",
    email: "E-Mail",
    phone: "Telefon",
    location: "Standort",
    connectOnline: "Online verbinden",
    connectPlatforms: "Lassen Sie uns auf professionellen Plattformen verbinden",
    githubProfile: "GitHub-Profil",
    linkedinProfile: "LinkedIn-Profil",
    collaborationText:
      "Interessiert an Zusammenarbeit oder haben Sie ein Projekt im Kopf? Ich würde gerne von Ihnen hören!",
    sendEmail: "E-Mail senden",
    downloadResume: "Lebenslauf herunterladen",
    downloadDescription: "Erhalten Sie eine professionell formatierte PDF-Kopie meines Lebenslaufs",
    downloadText:
      "Laden Sie meinen vollständigen Lebenslauf im PDF-Format herunter, einschließlich aller Bildung, Fähigkeiten, Projekte und Erfolge.",
    downloadPDF: "PDF-Lebenslauf herunterladen",

    // Footer
    footerText: "© 2024 Swayam Jain. Mit Leidenschaft für Technologie und Innovation erstellt.",

    // Skills and other content
    native: "Muttersprache",
    currentlyPursuing: "B.Tech Informatik & Ingenieurwesen",
    cgpa: "CGPA: 9.51/10",
    born: "Geboren: 26/07/2004, Jabalpur, Indien",

    // Interests
    problemSolving: "Problemlösung",
    financialMarkets: "Finanzmärkte",
    leadership: "Führung",
    sports: "Sport",
    mathematics: "Mathematik",
    programming: "Programmierung",

    // Education details
    languageCertificate: "Sprachzertifikat (A1-C1)",
    germanProficiency: "Deutsche Sprachkenntnisse",
    bachelorTech: "Bachelor of Technology",
    computerScience: "Informatik & Ingenieurwesen",
    seniorSchool: "Oberschulabschluss",
    secondarySchool: "Sekundarschule",
    keySubjects: "Hauptfächer:",
    achievements: "Erfolge:",

    // Examination descriptions
    iitjeeDesc: "Leistung in einer der schwierigsten Prüfungen der Welt",
    ieltsDesc: "Englische Sprachkenntnisse",
    testdafDesc: "Deutsche Sprachkenntnisse",
    testasDesc: "Akademischer Eignungstest",

    // Project descriptions
    bankManagementTitle: "Bank-Management-System",
    bankManagementDesc:
      "Konsolenbasiertes Bank-Management-System mit Kernfunktionen wie Einzahlung, Abhebung, Kontostandsabfrage und Geldtransfer.",
    coachingSystemTitle: "Coaching-Management-System",
    coachingSystemDesc:
      "Digitale Lösung zur Eliminierung von Papierkram und effizienter Verwaltung von Studenten- und Personaldaten.",

    // Features
    customerData: "Kundendatenverwaltung",
    transactionHistory: "Transaktionshistorie",
    secureDatabase: "Sichere Datenbankintegration",
    studentManagement: "Studentenverwaltung",
    staffData: "Personalverwaltung",
    digitalWorkflow: "Digitaler Arbeitsablauf",

    // Certifications
    cybersecurityTitle: "Einführung in das Cybersicherheitsbewusstsein",
    cybersecurityDesc: "Häufige Cybersicherheitsbedrohungen und Datensicherheitspraktiken",
    aiTitle: "KI für Anfänger",
    aiDesc: "KI-Konzepte, Anwendungen und ethische Implikationen",
    germanCertTitle: "Deutsches Sprachzertifikat (A1-C1)",
    germanCertDesc: "Umfassende deutsche Sprachkenntnisse von A1 bis C1 Niveau",

    // Awards
    houseCaptain: "Hauskapitän",
    captainDesc1: "Führte das Ujjaini-Haus als gewählter Kapitän",
    captainDesc2: "Organisierte Wettbewerbe und Veranstaltungen",
    captainDesc3: "Leitete allgemeine und Vorstandssitzungen",
    captainDesc4: "Aufrechterhaltung der Schuldisziplin",

    // File info
    fileSize: "Dateigröße: ~150KB",
    viewCertificate: "Zertifikat anzeigen",
  },
}

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [language, setLanguage] = useState<"en" | "de">("en")

  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "resume", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      ".animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right",
    )
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "de" : "en")
  }

  const skills = ["Python", "C++", "C", "HTML", "CSS", "MySQL", "Microsoft Office"]

  const languages = [
    { name: "Hindi", level: t.native },
    { name: "English", level: "C1/B2" },
    { name: "Deutsch", level: "B2/C1" },
  ]

  const projects = [
    {
      title: t.bankManagementTitle,
      description: t.bankManagementDesc,
      technologies: ["Python", "MySQL"],
      features: [t.customerData, t.transactionHistory, t.secureDatabase],
    },
    {
      title: t.coachingSystemTitle,
      description: t.coachingSystemDesc,
      technologies: ["Python", "SQL"],
      features: [t.studentManagement, t.staffData, t.digitalWorkflow],
    },
  ]

  const certifications = [
    {
      title: t.cybersecurityTitle,
      issuer: "HP Foundation",
      date: language === "en" ? "May 31, 2025" : "31. Mai 2025",
      description: t.cybersecurityDesc,
      link: "https://www.life-global.org/certificate/6b54cfbf-e462-4453-ac23-8f16ee64c517",
    },
    {
      title: t.aiTitle,
      issuer: "HP Foundation",
      date: language === "en" ? "May 24, 2025" : "24. Mai 2025",
      description: t.aiDesc,
      link: "https://www.life-global.org/certificate/707de644-3735-4c46-9bfd-6b674d757316",
    },
    {
      title: t.germanCertTitle,
      issuer: "Language Pantheon",
      date: language === "en" ? "2024 - Current" : "2024 - Aktuell",
      description: t.germanCertDesc,
    },
  ]

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = "/resume/Swayam_Jain_Resume.pdf"
    link.download = "Swayam_Jain_Resume.pdf"
    link.click()
  }

  const interestsList = [t.problemSolving, t.financialMarkets, t.leadership, t.sports, t.mathematics, t.programming]

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDark ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDark ? "bg-gray-900/95" : "bg-white/95"} backdrop-blur-sm border-b`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl">Swayam Jain</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: "hero", label: t.home },
                { id: "about", label: t.about },
                { id: "resume", label: t.resume },
                { id: "contact", label: t.contact },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === item.id ? "text-blue-600 font-medium" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={toggleLanguage} className="rounded-full">
                <span className="text-sm font-medium">{language === "en" ? "DE" : "EN"}</span>
              </Button>

              <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              {/* Mobile menu button */}
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden ${isDark ? "bg-gray-900" : "bg-white"} border-t`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: "hero", label: t.home },
                { id: "about", label: t.about },
                { id: "resume", label: t.resume },
                { id: "contact", label: t.contact },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    activeSection === item.id ? "text-blue-600 font-medium" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-gradient">{t.heroTitle}</h1>
            <p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              {t.heroSubtitle}
            </p>
            <p
              className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              {t.heroDescription}
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <Button size="lg" onClick={() => scrollToSection("about")} className="btn-gradient text-white border-0">
                {t.learnMore}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="hover:scale-105 transition-transform duration-300"
              >
                {t.getInTouch}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4 gradient-text">{t.aboutTitle}</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t.aboutDescription}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center animate-on-scroll-left">
              <div className="relative group">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1 shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                    <img
                      src="/images/profile.jpeg"
                      alt="Swayam Jain - Computer Science Student"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg animate-pulse">
                  <Code className="h-6 w-6" />
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-on-scroll-right">
              <div className="flex items-center space-x-2 mb-4">
                <User className="h-6 w-6 text-blue-600" />
                <h3 className="text-2xl font-semibold">{t.personalProfile}</h3>
              </div>

              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>45, Main Road Kareli, Madhya Pradesh, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  <span>{t.currentlyPursuing}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-blue-600" />
                  <span>{t.cgpa}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-blue-600" />
                  <span>{t.born}</span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{t.aboutText1}</p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{t.aboutText2}</p>

              <div className="pt-4">
                <h4 className="font-semibold mb-3">{t.interestsHobbies}</h4>
                <div className="flex flex-wrap gap-2">
                  {interestsList.map((interest) => (
                    <Badge
                      key={interest}
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className={`py-20 px-4 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.resumeTitle}</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t.resumeDescription}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <Card className="h-fit card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                  <span>{t.education}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-2 border-green-600 pl-4">
                  <h4 className="font-semibold text-lg">{t.languageCertificate}</h4>
                  <p className="text-green-600 font-medium">{t.germanProficiency}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Language Pantheon, New Delhi</p>
                  <p className="text-sm text-gray-500">
                    {language === "en" ? "Feb 2024 - Current" : "Feb 2024 - Aktuell"}
                  </p>
                  <div className="mt-2">
                    <p className="text-sm font-medium mb-1">{t.achievements}</p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">
                        German A1-C1
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        TestDAF {language === "en" ? "Preparation" : "Vorbereitung"}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        IELTS {language === "en" ? "Preparation" : "Vorbereitung"}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="border-l-2 border-blue-600 pl-4">
                  <h4 className="font-semibold text-lg">{t.bachelorTech}</h4>
                  <p className="text-blue-600 font-medium">{t.computerScience}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Silver Oak University, Ahmedabad</p>
                  <p className="text-sm text-gray-500">2023 - 2024 | CGPA: 9.51/10</p>
                  <div className="mt-2">
                    <p className="text-sm font-medium mb-1">{t.keySubjects}</p>
                    <div className="flex flex-wrap gap-1">
                      {[
                        language === "en" ? "Programming (C, C++, OOP)" : "Programmierung (C, C++, OOP)",
                        language === "en" ? "Applied Mathematics" : "Angewandte Mathematik",
                        language === "en" ? "Engineering Fundamentals" : "Ingenieurgrundlagen",
                        language === "en" ? "Communication Skills" : "Kommunikationsfähigkeiten",
                      ].map((subject) => (
                        <Badge key={subject} variant="outline" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-l-2 border-gray-300 pl-4">
                  <h4 className="font-semibold">{t.seniorSchool}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Carmel School, Kareli</p>
                  <p className="text-sm text-gray-500">2023 | 87.4%</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {language === "en"
                      ? "Physics, Chemistry, Mathematics, English, Computer Science"
                      : "Physik, Chemie, Mathematik, Englisch, Informatik"}
                  </p>
                </div>

                <div className="border-l-2 border-gray-300 pl-4">
                  <h4 className="font-semibold">{t.secondarySchool}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Carmel School, Kareli</p>
                  <p className="text-sm text-gray-500">2021 | 93.6%</p>
                </div>
              </CardContent>
            </Card>

            {/* Examination Achievements */}
            <Card className="h-fit card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-purple-600" />
                  <span>{t.examinationAchievements}</span>
                </CardTitle>
                <CardDescription>{t.examinationDescription}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div>
                      <h4 className="font-semibold text-blue-700 dark:text-blue-300">IIT-JEE MAINS</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{t.iitjeeDesc}</p>
                    </div>
                    <Badge className="bg-blue-600 hover:bg-blue-700 text-white">88 Percentile</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <div>
                      <h4 className="font-semibold text-green-700 dark:text-green-300">IELTS</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{t.ieltsDesc}</p>
                    </div>
                    <Badge className="bg-green-600 hover:bg-green-700 text-white">7.5 Bands (C1)</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                    <div>
                      <h4 className="font-semibold text-orange-700 dark:text-orange-300">TestDAF</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{t.testdafDesc}</p>
                    </div>
                    <Badge className="bg-orange-600 hover:bg-orange-700 text-white">14 Points (3344)</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div>
                      <h4 className="font-semibold text-purple-700 dark:text-purple-300">TestAS</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{t.testasDesc}</p>
                    </div>
                    <Badge className="bg-purple-600 hover:bg-purple-700 text-white">220/260 Points</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="h-fit card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="h-6 w-6 text-blue-600" />
                  <span>{t.technicalSkills}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">{t.programmingLanguages}</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "C++", "C", "HTML", "CSS"].map((skill) => (
                        <Badge key={skill} className="bg-blue-600 hover:bg-blue-700">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">{t.databaseTools}</h4>
                    <div className="flex flex-wrap gap-2">
                      {["MySQL", "Microsoft Office"].map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-3">{t.languages}</h4>
                    <div className="space-y-2">
                      {languages.map((lang) => (
                        <div key={lang.name} className="flex justify-between items-center">
                          <span className="font-medium">{lang.name}</span>
                          <Badge variant="outline">{lang.level}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card className="lg:col-span-2 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                  <span>{t.projects}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {projects.map((project, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-lg mb-2">{project.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{project.description}</p>
                      <div className="mb-3">
                        <div className="flex flex-wrap gap-1 mb-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications & Awards */}
            <Card className="lg:col-span-2 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-blue-600" />
                  <span>{t.certificationsAwards}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4">{t.certifications}</h4>
                    <div className="space-y-4">
                      {certifications.map((cert, index) => (
                        <div key={index} className="border-l-2 border-blue-600 pl-4">
                          <h5 className="font-medium">{cert.title}</h5>
                          <p className="text-sm text-blue-600">{cert.issuer}</p>
                          <p className="text-xs text-gray-500">{cert.date}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{cert.description}</p>
                          {cert.link && (
                            <a
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-blue-500 hover:underline mt-1 inline-flex items-center"
                            >
                              {t.viewCertificate} <ExternalLink className="h-3 w-3 ml-1" />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">{t.leadershipAwards}</h4>
                    <div className="border-l-2 border-yellow-500 pl-4">
                      <h5 className="font-medium">{t.houseCaptain}</h5>
                      <p className="text-sm text-yellow-600">Carmel School</p>
                      <p className="text-xs text-gray-500">2022</p>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 mt-2 space-y-1">
                        <li>• {t.captainDesc1}</li>
                        <li>• {t.captainDesc2}</li>
                        <li>• {t.captainDesc3}</li>
                        <li>• {t.captainDesc4}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4 gradient-text">{t.contactTitle}</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t.contactDescription}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-on-scroll-left">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>{t.contactInformation}</CardTitle>
                  <CardDescription>{t.contactChannels}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">{t.email}</p>
                      <a href="mailto:jainswayam2004@gmail.com" className="text-blue-600 hover:underline">
                        jainswayam2004@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">{t.phone}</p>
                      <a href="tel:+919630030091" className="text-blue-600 hover:underline">
                        (+91) 9630030091
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">{t.location}</p>
                      <p className="text-gray-600 dark:text-gray-300">Kareli, Madhya Pradesh, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="animate-on-scroll-right">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>{t.connectOnline}</CardTitle>
                  <CardDescription>{t.connectPlatforms}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => window.open("https://github.com/swayam-jain-ai", "_blank")}
                  >
                    <Github className="h-5 w-5 mr-3" />
                    {t.githubProfile}
                    <ExternalLink className="h-4 w-4 ml-auto" />
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => window.open("https://www.linkedin.com/in/swayam-jain-224937293/", "_blank")}
                  >
                    <Linkedin className="h-5 w-5 mr-3" />
                    {t.linkedinProfile}
                    <ExternalLink className="h-4 w-4 ml-auto" />
                  </Button>

                  <div className="pt-4">
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{t.collaborationText}</p>
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      onClick={() => window.open("mailto:jainswayam2004@gmail.com", "_blank")}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      {t.sendEmail}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="md:col-span-2 mt-8 animate-on-scroll">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <GraduationCap className="h-6 w-6 text-green-600" />
                    <span>{t.downloadResume}</span>
                  </CardTitle>
                  <CardDescription>{t.downloadDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{t.downloadText}</p>
                      <p className="text-xs text-gray-500">{t.fileSize}</p>
                    </div>
                    <Button
                      size="lg"
                      className="btn-gradient text-white border-0 min-w-[200px]"
                      onClick={downloadResume}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      {t.downloadPDF}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${isDark ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300">{t.footerText}</p>
        </div>
      </footer>
    </div>
  )
}
