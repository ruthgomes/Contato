import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { JobOpenings } from "@/components/sections/job-openings"
import { TalentPool } from "@/components/sections/talent-pool"

export default function TrabalheConoscoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        {/* Seção de Vagas Abertas */}
        <JobOpenings />

        {/* Seção de Banco de Talentos */}
        <TalentPool />
      </div>
      <Footer />
    </main>
  )
}
