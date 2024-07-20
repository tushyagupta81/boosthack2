import { Nav, Hero, About, Footer } from "../sections/index.js";

function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="">
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}

export default App;
