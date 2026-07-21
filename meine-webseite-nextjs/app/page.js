export default function Home() {
  return (
    <>
      <nav>
        <div className="nav-inner">
          <div className="logo">Dein Name</div>
          <ul className="nav-links">
            <li><a href="#ueber-mich">Über mich</a></li>
            <li><a href="#projekte">Projekte</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero">
        <h1>
          Hallo, ich bin <span className="accent">Dein Name</span>
        </h1>
        <p>
          Hier steht ein kurzer Satz darüber, was du machst oder was diese
          Seite zeigen soll. Ersetze diesen Text einfach durch deinen eigenen.
        </p>
        <a className="cta" href="#kontakt">Kontakt aufnehmen</a>
      </section>

      <section id="ueber-mich">
        <h2>Über mich</h2>
        <p>
          Schreibe hier ein paar Sätze über dich, dein Unternehmen oder dein
          Projekt. Diese Sektion kannst du frei anpassen.
        </p>
      </section>

      <section id="projekte">
        <h2>Projekte</h2>
        <p>Ein paar Beispiele, die du zeigen möchtest.</p>
        <div className="cards">
          <div className="card">
            <h3>Projekt 1</h3>
            <p>Kurze Beschreibung des ersten Projekts.</p>
          </div>
          <div className="card">
            <h3>Projekt 2</h3>
            <p>Kurze Beschreibung des zweiten Projekts.</p>
          </div>
          <div className="card">
            <h3>Projekt 3</h3>
            <p>Kurze Beschreibung des dritten Projekts.</p>
          </div>
        </div>
      </section>

      <section id="kontakt">
        <h2>Kontakt</h2>
        <p>
          Erreichbar unter{" "}
          <a href="mailto:deine@email.de">deine@email.de</a>
        </p>
      </section>

      <footer>
        © {new Date().getFullYear()} Dein Name. Alle Rechte vorbehalten.
      </footer>
    </>
  );
}
