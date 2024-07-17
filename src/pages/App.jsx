import { Nav, Hero, About, Footer } from "../sections/index.js";

function App() {
  return (
    <>
      <section className="">
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
