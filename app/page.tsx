import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Mail, MapPin, Phone, Droplets, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import BeforeAfterGallery from "@/components/before-after-gallery"
import { Hamburger } from "@/components/hamburger"

import { Metadata } from "next"
import PageLoader from "@/components/page-loader"
import { BeforeAfterHeroAnimation } from "@/components/before-after-hero-animation"

export const metadata: Metadata = {
  title: "Clean Strike - Profesjonalne czyszczenie kostki brukowej",
  description: "Specjaliści w przywracaniu świeżości i estetyki kostce brukowej na prywatnych posesjach. Używamy najnowocześniejszych myjek ciśnieniowych i ekologicznych środków czyszczących.",
  keywords: ["czyszczenie kostki brukowej", "mycie kostki brukowej", "Czeladź", "Będzin", "profesjonalne czyszczenie", "kostka brukowa"],
  authors: [{ name: "Clean Strike" }],
  creator: "Clean Strike",
  publisher: "Clean Strike",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://cleanstrike.pl",
    title: "Clean Strike - Profesjonalne czyszczenie kostki brukowej",
    description: "Specjaliści w przywracaniu świeżości i estetyki kostce brukowej na prywatnych posesjach.",
    siteName: "Clean Strike",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clean Strike - Profesjonalne czyszczenie kostki brukowej",
    description: "Specjaliści w przywracaniu świeżości i estetyki kostce brukowej na prywatnych posesjach.",
    creator: "@cleanstrike",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const siteConfig = {
  header: {
    logoAlt: "Logo Clean Strike",
    logoText: "Clean Strike",
    navigation: {
      home: "Strona główna",
      about: "O nas",
      portfolio: "Portfolio",
      contact: "Kontakt",
      freeQuoteButton: "Bezpłatna wycena",
    },
  },
  hero: {
    badge: "Profesjonalne usługi",
    heading: "Profesjonalne czyszczenie kostki brukowej",
    description: "Clean Strike to specjaliści w przywracaniu świeżości i estetyki kostce brukowej na prywatnych posesjach. Używamy najnowocześniejszych myjek ciśnieniowych i ekologicznych środków czyszczących.",
    freeQuoteButton: "Bezpłatna wycena",
    portfolioButton: "Zobacz nasze efekty",
    heroImageAlt: "Czyszczenie kostki brukowej",
  },
  about: {
    heading: "O Nas",
    paragraph1: "Clean Strike to firma z wieloletnim doświadczeniem w profesjonalnym czyszczeniu kostki brukowej. Nasz zespół składa się z wykwalifikowanych specjalistów, którzy z pasją podchodzą do każdego zlecenia.",
    paragraph2: "Oferujemy konkurencyjne ceny i gwarantujemy szybki czas realizacji zleceń. Naszym priorytetem jest zadowolenie klienta i osiągnięcie najlepszych możliwych efektów czyszczenia.",
    paragraph3: "Korzystamy wyłącznie z profesjonalnego sprzętu i ekologicznych środków czyszczących, które są skuteczne, a jednocześnie bezpieczne dla środowiska.",
    experience: {
      heading: "Doświadczenie",
      description: "Wieloletnie doświadczenie w branży czyszczenia powierzchni zewnętrznych.",
    },
    professionalism: {
      heading: "Profesjonalizm",
      description: "Wykwalifikowany zespół i nowoczesny sprzęt gwarantujący najwyższą jakość usług.",
    },
    satisfaction: {
      heading: "Satysfakcja",
      description: "Setki zadowolonych klientów i imponujące efekty naszej pracy.",
    },
  },
  portfolio: {
    heading: "Nasze Portfolio",
    description: "Zobacz imponujące efekty naszej pracy. Zdjęcia \"przed i po\" najlepiej pokazują skuteczność naszych usług.",
  },
  contact: {
    heading: "Skontaktuj się z nami",
    description: "Skorzystaj z formularza kontaktowego lub zadzwoń do nas, aby uzyskać bezpłatną wycenę.",
    phone: "+48 123 456 789",
    email: "kontakt@cleanstrike.pl",
    address: "Działamy na terenie całego Śląska",
    workingHours: {
      heading: "Godziny pracy",
      mondayFriday: "Poniedziałek - Piątek",
      mondayFridayHours: "8:00 - 18:00",
      saturday: "Sobota",
      saturdayHours: "9:00 - 15:00",
      sunday: "Niedziela",
      sundayHours: "Zamknięte",
    },
    form: {
      nameLabel: "Imię i nazwisko",
      namePlaceholder: "Jan Kowalski",
      emailLabel: "Email",
      emailPlaceholder: "jan@example.com",
      phoneLabel: "Telefon",
      phonePlaceholder: "+48 123 456 789",
      messageLabel: "Wiadomość",
      messagePlaceholder: "Opisz swoje potrzeby...",
      submitButton: "Wyślij wiadomość",
    },
  },
  footer: {
    logoAlt: "Logo Clean Strike",
    logoText: "Clean Strike",
    description: "Profesjonalne czyszczenie kostki brukowej na prywatnych posesjach.",
    navigationHeading: "Nawigacja",
    contactHeading: "Kontakt",
    socialMediaHeading: "Social Media",
    copyright: `© ${new Date().getFullYear()} Clean Strike. Wszelkie prawa zastrzeżone.`,
    facebookAlt: "Facebook",
    instagramAlt: "Instagram",
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageLoader />
      {/* Nagłówek */}
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/20">
              <Droplets className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold text-primary">{siteConfig.header.logoText}</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#home" className="text-sm font-medium hover:text-primary">
              {siteConfig.header.navigation.home}
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              {siteConfig.header.navigation.about}
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-primary">
              {siteConfig.header.navigation.portfolio}
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              {siteConfig.header.navigation.contact}
            </Link>
          </nav>
          <Button asChild size="sm" className="hidden md:inline-flex bg-destructive hover:bg-destructive/90">
            <Link href="#contact">{siteConfig.header.navigation.freeQuoteButton}</Link>
          </Button>
          <Hamburger />
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="home"
          className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-16 md:py-24"
        >
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,255,0.2),transparent_60%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,0,0,0.2),transparent_60%)]"></div>
          </div>
          <div className="container relative z-10 grid gap-8 md:grid-cols-2 md:items-center">
            <div className="flex flex-col gap-4">
              <div className="w-max inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                <Zap className="h-4 w-4" />
                <span>{siteConfig.hero.badge}</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                {siteConfig.hero.heading}
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                {siteConfig.hero.description}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90">
                  <Link href="#contact">
                    {siteConfig.hero.freeQuoteButton}
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
                  <Link href="#portfolio">{siteConfig.hero.portfolioButton}</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg border border-border/50 md:h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>

              <BeforeAfterHeroAnimation />
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                {siteConfig.portfolio.heading}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {siteConfig.portfolio.description}
              </p>
            </div>
            <div className="mt-12">
              <BeforeAfterGallery />
            </div>
          </div>
        </section>

        {/* O Nas Section */}
        <section id="about" className="py-16 md:py-24 bg-muted">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                {siteConfig.about.heading}
              </h2>
              <div className="mt-8 space-y-4 text-lg">
                <p>
                  {siteConfig.about.paragraph1}
                </p>
                <p>
                  {siteConfig.about.paragraph2}
                </p>
                <p>
                  {siteConfig.about.paragraph3}
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="rounded-lg border border-border/50 bg-card/50 p-6 text-card-foreground backdrop-blur-sm">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
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
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                      <path d="M12 2v2" />
                      <path d="M12 22v-2" />
                      <path d="m17 20.66-1-1.73" />
                      <path d="M11 10.27 7 3.34" />
                      <path d="m20.66 17-1.73-1" />
                      <path d="m3.34 7 1.73 1" />
                      <path d="M14 12h8" />
                      <path d="M2 12h2" />
                      <path d="m20.66 7-1.73 1" />
                      <path d="m3.34 17 1.73-1" />
                      <path d="m17 3.34-1 1.73" />
                      <path d="m7 20.66 1-1.73" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary">{siteConfig.about.experience.heading}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {siteConfig.about.experience.description}
                  </p>
                </div>
                <div className="rounded-lg border border-border/50 bg-card/50 p-6 text-card-foreground backdrop-blur-sm">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
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
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12 2v4" />
                      <path d="M20 12h-4" />
                      <path d="M12 18v4" />
                      <path d="M4 12h4" />
                      <path d="M16 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                      <path d="M8 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary">{siteConfig.about.professionalism.heading}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {siteConfig.about.professionalism.description}
                  </p>
                </div>
                <div className="rounded-lg border border-border/50 bg-card/50 p-6 text-card-foreground backdrop-blur-sm">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
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
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary">{siteConfig.about.satisfaction.heading}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {siteConfig.about.satisfaction.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kontakt Section */}
        <section id="contact" className="py-16 md:py-24 relative">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,0,255,0.2),transparent_60%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,0,0,0.2),transparent_60%)]"></div>
          </div>
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                {siteConfig.contact.heading}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {siteConfig.contact.description}
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-5 items-center">
              <div className="space-y-6 md:col-span-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg">{siteConfig.contact.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg">{siteConfig.contact.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg">{siteConfig.contact.address}</span>
                </div>
                <div className="mt-8 rounded-lg border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-primary">{siteConfig.contact.workingHours.heading}</h3>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>{siteConfig.contact.workingHours.mondayFriday}</span>
                      <span>{siteConfig.contact.workingHours.mondayFridayHours}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{siteConfig.contact.workingHours.saturday}</span>
                      <span>{siteConfig.contact.workingHours.saturdayHours}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{siteConfig.contact.workingHours.sunday}</span>
                      <span>{siteConfig.contact.workingHours.sundayHours}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-3 rounded-lg overflow-hidden text-card-foreground backdrop-blur-sm aspect-video">
                <Image
                  src="/images/contact-section.webp"
                  alt="Contact Section"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Stopka */}
      <footer className="border-t border-border/40 bg-muted py-8">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/20">
                  <Droplets className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xl font-bold text-primary">{siteConfig.footer.logoText}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {siteConfig.footer.description}
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase text-primary">{siteConfig.footer.navigationHeading}</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#home" className="text-sm text-muted-foreground hover:text-primary">
                  {siteConfig.header.navigation.home}
                </Link>
                <Link href="#about" className="text-sm text-muted-foreground hover:text-primary">
                  {siteConfig.header.navigation.about}
                </Link>
                <Link href="#portfolio" className="text-sm text-muted-foreground hover:text-primary">
                  {siteConfig.header.navigation.portfolio}
                </Link>
                <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary">
                  {siteConfig.header.navigation.contact}
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase text-primary">{siteConfig.footer.contactHeading}</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>{siteConfig.contact.phone}</p>
                <p>{siteConfig.contact.email}</p>
                <p>{siteConfig.contact.address}</p>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase text-primary">{siteConfig.footer.socialMediaHeading}</h3>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background/50 text-muted-foreground hover:bg-destructive/20 hover:text-destructive"
                >
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
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">{siteConfig.footer.facebookAlt}</span>
                </Link>
                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background/50 text-muted-foreground hover:bg-destructive/20 hover:text-destructive"
                >
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
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">{siteConfig.footer.instagramAlt}</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
            <p>{siteConfig.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}