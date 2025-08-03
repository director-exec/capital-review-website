"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Menu,
  ArrowRight,
  CreditCard,
  Settings,
  TrendingUp,
  Shield,
  Users,
  Award,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Building2,
  Scale,
  Lock,
  BarChart3,
  Handshake,
  Target,
  Zap,
  Globe,
  FileText,
  Headphones,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false)

  const aboutLinks = [
    { title: "About Main Page", href: "/about" },
    { title: "Security", href: "/about/security" },
    { title: "Compliance", href: "/about/compliance" },
    { title: "Industries We Serve", href: "/about/industries" },
    { title: "Community Involvement", href: "/about/community" },
  ]

  const consumerLinks = [
    { title: "Consumer Tools", href: "/consumer-tools" },
    { title: "Make a Payment", href: "/consumer-tools/payment" },
    { title: "Dispute My Account", href: "/consumer-tools/dispute" },
    { title: "Request Account Validation", href: "/consumer-tools/validation" },
    { title: "Bankruptcy Notification", href: "/consumer-tools/bankruptcy" },
    { title: "Fraud & Identity Theft", href: "/consumer-tools/fraud" },
    { title: "Remove My Number", href: "/consumer-tools/remove-number" },
    { title: "Submit a Compliment or Complaint", href: "/consumer-tools/feedback" },
  ]

  const solutionsLinks = [
    { title: "Solutions Main Page", href: "/solutions" },
    { title: "Pre-Charge Off Collections", href: "/solutions/pre-charge-off" },
    { title: "Post Charge-Off Collections", href: "/solutions/post-charge-off" },
    { title: "Secondary & Tertiary Collections", href: "/solutions/secondary-tertiary" },
    { title: "Credit Bureau Reporting", href: "/solutions/credit-reporting" },
    { title: "Skip Tracing", href: "/solutions/skip-tracing" },
    { title: "Network of Attorneys", href: "/solutions/attorneys" },
    { title: "Warehousing Management", href: "/solutions/warehousing" },
  ]

  const services = [
    {
      icon: CreditCard,
      title: "Make a Payment",
      description: "Use one of our secure, convenient payment options to resolve your account.",
      href: "/consumer-tools/payment",
      buttonText: "Make a Payment",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      icon: Settings,
      title: "Consumer Tools",
      description: "Access helpful resources, submit requests, or get assistance every step of the way.",
      href: "/consumer-tools",
      buttonText: "View Consumer Tools",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      icon: TrendingUp,
      title: "Business Solutions",
      description: "Recover more while protecting your brand. Explore our full suite of recovery services.",
      href: "/solutions",
      buttonText: "Get Started",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ]

  const features = [
    {
      icon: Shield,
      title: "Compliance-First Culture",
      description: "We maintain the highest standards of compliance and treat every consumer with respect.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
    },
    {
      icon: Users,
      title: "Long-Term Partnerships",
      description: "Every client relationship is built on trust, transparency, and mutual success.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      icon: Award,
      title: "Industry Excellence",
      description: "Our ethics, technology, and performance set us apart in the industry.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      icon: TrendingUp,
      title: "Maximum ROI",
      description: "Deliver results while protecting your reputation and minimizing risk.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ]

  const certifications = ["FDCPA", "FCRA", "GLBA", "HIPAA"]

  const standards = [
    "CFPB oversight and documentation standards",
    "State licensing, COAs, and bond requirements across all 50 states",
  ]

  const siteResources = [
    { title: "Make a Payment", href: "/consumer-tools/payment" },
    { title: "Consumer Tools", href: "/consumer-tools" },
    { title: "Client Login", href: "/client-login" },
    { title: "About Us", href: "/about" },
    { title: "Solutions", href: "/solutions" },
    { title: "Careers", href: "/careers" },
    { title: "Contact Us", href: "/contact" },
    { title: "Privacy Policy & Disclaimers", href: "/privacy" },
  ]

  const stats = [
    { label: "Years of Experience", value: "40+", icon: Award },
    { label: "States Licensed", value: "50", icon: Globe },
    { label: "Compliance Rate", value: "99.9%", icon: CheckCircle },
    { label: "Client Satisfaction", value: "98%", icon: Users },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative h-12 w-12">
              <Image 
                src="/LOGO/thread-viewer-1.png" 
                alt="Elite Portfolio Management" 
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-elite-primary">Elite Portfolio Management</div>
              <div className="text-xs text-muted-foreground">Digital Recovery. Human Respect. Total Compliance.</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    {aboutLinks.map((link) => (
                      <NavigationMenuLink key={link.href} asChild>
                        <Link
                          href={link.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{link.title}</div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">Consumer Tools</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[500px] gap-3 p-4">
                    {consumerLinks.map((link) => (
                      <NavigationMenuLink key={link.href} asChild>
                        <Link
                          href={link.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{link.title}</div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[450px] gap-3 p-4">
                    {solutionsLinks.map((link) => (
                      <NavigationMenuLink key={link.href} asChild>
                        <Link
                          href={link.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{link.title}</div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Contact Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <div className="space-y-3">
                  <h4 className="font-medium">About</h4>
                  <div className="grid gap-2 pl-4">
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Consumer Tools</h4>
                  <div className="grid gap-2 pl-4">
                    {consumerLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Solutions</h4>
                  <div className="grid gap-2 pl-4">
                    {solutionsLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link href="/contact" className="font-medium hover:text-foreground" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-elite-primary via-elite-secondary to-elite-accent text-white">
          <div className="absolute inset-0 finance-pattern opacity-20"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container px-4 md:px-6 py-20 lg:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-8">
                <Badge variant="elite" className="mb-4 text-sm">
                  Trusted Since 1984
                </Badge>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                Digital Recovery. <span className="text-elite-gold">Human Respect.</span> Total Compliance.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 opacity-90">
                With over four decades of successful collections experience, Elite Portfolio Management delivers
                best-in-class recovery solutions with a focus on compliance, professionalism, and empathy.
              </p>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-7 opacity-80">
                We combine advanced technology, secure infrastructure, and highly trained personnel to ensure every
                consumer interaction reflects the highest standards of the industry — and every client experiences
                maximum ROI with minimum reputational risk.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button size="lg" className="bg-elite-accent hover:bg-elite-accent/90 text-white">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-elite-primary">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-elite-accent/10">
                      <stat.icon className="h-6 w-6 text-elite-accent" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-elite-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                How Can We Help You Today?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our comprehensive suite of services designed to meet your specific needs
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden border-0 shadow-finance hover-lift group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full bg-elite-accent hover:bg-elite-accent/90">
                      <Link href={service.href}>
                        {service.buttonText}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                About Elite Portfolio Management
              </h2>
              <p className="text-lg leading-8 text-muted-foreground">
                We maintain a compliance-first culture, treating every consumer with respect and every client
                relationship as a long-term partnership.
              </p>
            </div>
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 lg:grid-cols-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-elite-accent/10">
                          <feature.icon className="h-5 w-5 text-elite-accent" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-8">
                <Badge variant="gold" className="mb-4 text-sm">
                  Industry Leader
                </Badge>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
                Memberships & Certifications
              </h2>
              <p className="text-lg leading-8 text-muted-foreground mb-12">
                Elite Portfolio Management maintains all required state licenses and industry certifications. Our
                internal compliance team ensures full alignment with:
              </p>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Federal Compliance Standards</h3>
                  <div className="flex flex-wrap gap-3">
                    {certifications.map((cert) => (
                      <Badge key={cert} variant="elite" className="px-4 py-2 text-sm font-medium">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Additional Standards</h3>
                  <div className="space-y-4">
                    {standards.map((standard, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-elite-accent" />
                        <span className="text-slate-700">{standard}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-br from-elite-primary to-elite-secondary py-20 lg:py-32 text-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg leading-8 opacity-90 mb-12">
                Call us to learn how Elite can support your receivables, protect your reputation, and deliver results.
              </p>

              <div className="grid gap-8 md:grid-cols-3">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-sm opacity-80">1-800-XXX-XXXX</p>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-sm opacity-80">info@eliteportfoliomgmt.com</p>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">Visit Us</h3>
                  <p className="text-sm opacity-80">PO Box [Insert Address], [City, State ZIP]</p>
                </div>
              </div>

              <div className="mt-12">
                <Button size="lg" className="bg-elite-accent hover:bg-elite-accent/90 text-white">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Us Today
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative h-8 w-8">
                  <Image 
                    src="/LOGO/thread-viewer-1.png" 
                    alt="Elite Portfolio Management" 
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-lg font-semibold">Elite Portfolio Management</div>
                  <div className="text-sm text-slate-400">Digital Recovery. Human Respect. Total Compliance.</div>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                This is an attempt to collect a debt. Any information obtained will be used for that purpose. This
                communication is from a debt collector.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Site Resources</h3>
              <ul className="space-y-2">
                {siteResources.map((resource) => (
                  <li key={resource.href}>
                    <Link href={resource.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {resource.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="space-y-4">
                <Link href="#" className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </Link>
                <Link href="#" className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google Business
                </Link>
                <Link href="#" className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Compliance Certifications
                </Link>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-slate-700" />

          <div className="text-center text-sm text-slate-400">
            <p>&copy; 2024 Elite Portfolio Management. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 