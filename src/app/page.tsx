import HeaderHome from "@/components/Header/HeaderHome";
import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Footer from "@/components/universal/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f5f7]">
      <HeaderHome />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
