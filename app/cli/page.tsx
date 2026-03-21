import CliDownloadSection from '@/components/cli-download'
import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'

export default function CliPage() {
  return (
    <>
      <HeroHeader />
      <main className="bg-background pt-20">
        <CliDownloadSection />
      </main>
      <FooterSection />
    </>
  )
}
