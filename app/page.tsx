import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { PhotoCarousel } from "@/components/sections/photo-carousel"
import { ContactForm } from "@/components/sections/contact-form"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <PhotoCarousel />
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
      <BackToTop />
    </main>
  )
}
