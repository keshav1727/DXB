import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function InternalLayout({ children }) {
  return (
    <main className="h-dvh w-dvw flex flex-col">
      <Header />
      <div className="grow w-full overflow-x-hidden">
        <div className="2xl:max-w-[1440px] max-w-[90%] mx-auto">{children}</div>
        <Footer />
      </div>
    </main>
  );
}
