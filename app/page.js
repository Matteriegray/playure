import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import Competitions from '@/components/Competitions'
import PlayerCollaboration from '@/components/PlayerCollaboration'
import ChatBotSection from '@/components/ChatBotSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <Competitions />
      <PlayerCollaboration />
      <ChatBotSection />
      <Footer />
    </main>
  )
}
