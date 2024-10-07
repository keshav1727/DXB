import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function HomeLayout({ children }) {
  return (
    <main className="relative">
      <div className="absolute w-screen z-10">
        <Header />
      </div>
      <div>{children}</div>
      <Footer />
    </main>
  );
}
