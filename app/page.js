import Link from 'next/link';
import Hero from "@/components/Hero";
import FeaturedBattle from "@/components/FeaturedBattle";
import UpcomingEvents from "@/components/UpcomingEvents";
import { Mic2, Users, Gamepad2 } from 'lucide-react';

export default function Home() {
  return (
    <div style={{ paddingTop: '0' }}>
      <Hero />
      
      <section style={{ padding: '100px 40px', background: 'var(--background)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <div style={{ textAlign: 'center' }}>
            <div className="text-primary" style={{ marginBottom: '20px' }}><Mic2 size={48} /></div>
            <h3>AUTHENTIC BARS</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)' }}>Pure lyricism, no fillers. We host the rawest talent in the underground scene.</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div className="text-primary" style={{ marginBottom: '20px' }}><Users size={48} /></div>
            <h3>GLOBAL COMMUNITY</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)' }}>Thousands of fans and artists connecting daily through our Discord ecosystem.</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div className="text-secondary" style={{ marginBottom: '20px' }}><Gamepad2 size={48} /></div>
            <h3>LIVE INTERACTIVE</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)' }}>Vote for your winners in real-time. The crowd decides who claims the crown.</p>
          </div>
        </div>
      </section>

      <FeaturedBattle />
      <UpcomingEvents />

      <section className="gritty-bg" style={{ padding: '120px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="text-primary" style={{ fontSize: '3.5rem', marginBottom: '24px' }}>READY TO ENTER THE VERSE?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: 'rgba(255,255,255,0.8)' }}>
            Whether you're a lyricist looking for a stage or a fan hungry for fire, 
            BattleVerse is where the underground comes alive.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link href="/register" className="btn btn-primary" style={{ padding: '15px 40px', textDecoration: 'none' }}>Join the Battle</Link>
            <Link href="https://discord.gg/Mv5Qkq5r" target="_blank" className="btn btn-neon-blue" style={{ padding: '15px 40px', textDecoration: 'none' }}>Enter Discord</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
