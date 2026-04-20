import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveProvider from "@/components/InteractiveProvider";

export const metadata = {
  title: "BattleVerse | Bars. Beats. Bragging Rights.",
  description: "The ultimate underground rap battle platform. Join the verse, claim the throne.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ cursor: 'none' }}>
        <InteractiveProvider />
        <div className="smoke-overlay"></div>
        <Navbar />
        <main className="page-fade-in">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
