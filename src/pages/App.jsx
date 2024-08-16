import { Nav, Hero, About, JoinUs, Footer } from "../sections/index.js";

function App() {
  return (
    <main className="relative">
      <Nav page="home" />
      <section id="home">
        <Hero />
      </section>
      <section id="about-us">
        <About />
      </section>
      <section id="join-us">
        <JoinUs />
      </section>
      <section id="contact-us">
        <Footer />
      </section>
    </main>
  );
}

export default App;
