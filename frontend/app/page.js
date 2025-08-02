import HeroSection from '@/components/homepage/HeroSection'
import FeaturesSection from '@/components/homepage/FeaturesSection'
import Competitions from '@/components/homepage/Competitions'
import PlayerCollaboration from '@/components/homepage/PlayerCollaboration'
import ChatBotSection from '@/components/homepage/ChatBotSection'
import Footer from '@/components/homepage/Footer'

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
