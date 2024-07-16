import { Nav, Hero, About, Footer } from "./components/index.js";

function App() {
  return (
    <>
      <section>
        <Nav />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default App;
