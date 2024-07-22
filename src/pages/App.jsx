import { Nav, Hero, About, JoinUs, Footer } from "../sections/index.js";

function App() {
  return (
    <main className="relative">
      <Nav page="home" />
      <section className="">
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <JoinUs />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}

export default App;
