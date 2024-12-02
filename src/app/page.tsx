import { Header } from "@/components/header";
import "../styles/main.scss";
import { Footer } from "@/components/footer";
import { Search } from "@/components/search";

export default function Home() {
  return (
    <div className="app home-page">
      <Header />
      <main className="main">
        <div className="container">
          <Search className="home-page__search" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
