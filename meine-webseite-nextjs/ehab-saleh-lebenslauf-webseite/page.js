export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot" />
            Verfügbar · Kündigungsfrist 1 Monat zum Monatsende
          </div>
          <h1 className="name">Ehab Saleh</h1>
          <p className="role">M.Eng. Medizintechnik &nbsp;·&nbsp; Elektroingenieur</p>

          <div className="spec-table">
            <div className="spec-row">
              <div className="k">Standort</div>
              <div className="v">Hagen, Deutschland</div>
            </div>
            <div className="spec-row">
              <div className="k">E-Mail</div>
              <div className="v">
                <a href="mailto:q.ehab-saleh@hotmail.com">
                  q.ehab-saleh@hotmail.com
                </a>
              </div>
            </div>
            <div className="spec-row">
              <div className="k">Telefon</div>
              <div className="v">
                <a href="tel:+4917640471865">+49 176 40471865</a>
              </div>
            </div>
            <div className="spec-row">
              <div className="k">LinkedIn</div>
              <div className="v">
                <a
                  href="https://linkedin.com/in/ehab-saleh-165169300"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/ehab-saleh
                </a>
              </div>
            </div>
          </div>

          <div className="cta-row">
            <a className="btn primary" href="mailto:q.ehab-saleh@hotmail.com">
              Kontakt aufnehmen
            </a>
            <a className="btn ghost" href="/Ehab-Saleh-Lebenslauf.pdf" target="_blank" rel="noreferrer">
              Lebenslauf als PDF
            </a>
          </div>
        </div>
      </header>

      <section id="profil">
        <div className="wrap">
          <div className="section-head">
            <span className="idx">01</span>
            <h2>Auf einen Blick</h2>
            <span className="rule" />
          </div>
          <ul className="profile-list">
            <li>Bachelor und Master of Engineering in Medizintechnik mit Schwerpunkten in Elektronik, Sensorik, Messtechnik und Bildgebungsverfahren.</li>
            <li>Berufserfahrung in Schaltungsentwicklung und Layoutdesign für digitale und analoge Baugruppen.</li>
            <li>Fundierte Kenntnisse in Entwicklung, Verifikation und Inbetriebnahme elektronischer Systeme sowie Simulation, Test und Ursachenanalyse.</li>
            <li>Erfahrung in bereichsübergreifender Zusammenarbeit mit Entwicklung, Produktion, Qualitätssicherung und Kunden.</li>
            <li>Ausgeprägte analytische Fähigkeiten, hohe Problemlösungskompetenz und strukturierte, qualitätsorientierte Arbeitsweise.</li>
            <li>Sicher in technischer Dokumentation, Prüfberichten und normgerechten Entwicklungsunterlagen.</li>
            <li>Mehrfacher Deutschlandstipendium- und VDE-Stipendiumsempfänger.</li>
          </ul>
        </div>
      </section>

      <section id="erfahrung">
        <div className="wrap">
          <div className="section-head">
            <span className="idx">02</span>
            <h2>Berufserfahrung</h2>
            <span className="rule" />
          </div>

          <div className="timeline">
            <div className="t-item current">
              <div className="t-date">Juni 2024 — laufend</div>
              <div className="t-title">Hardware-Ingenieur</div>
              <div className="t-org">
                FOGTEC Brandschutz GmbH, Köln — <span>Wassernebel-Löschsysteme für Gebäude, Industrieanlagen, Tunnel und Verkehrsmittel</span>
              </div>
              <ul>
                <li>Entwicklung und Design elektronischer Hardwarekomponenten mit Altium Designer und EAGLE nach EN 50155, EN 61508 und EN 50129.</li>
                <li>Erstellung technischer Dokumentationen und Entwicklungsunterlagen für externe Prüfungen und TÜV-Zertifizierungen nach EN 50126, EN 50129 und 50716.</li>
                <li>Schaltungs- und Systemsimulationen sowie Inbetriebnahme, Bestückung und Verifikation von Prototypen.</li>
                <li>Planung und Auswertung von EMV-Prüfungen und elektrischen Messungen mit externen Prüflaboren (EN 50121-3-2, EN 50124-1, EN 50125-1).</li>
                <li>Bearbeitung technischer Reklamationen, Ursachenanalysen sowie Embedded-C-Entwicklung mit TESSY und Keil µVision.</li>
              </ul>
            </div>

            <div className="t-item">
              <div className="t-date">Juni 2022 — März 2024</div>
              <div className="t-title">Werkstudent Softwareentwicklung</div>
              <div className="t-org">
                Rhenus Assets &amp; Services, Holzwickede — <span>Logistik- und Supply-Chain-Lösungen</span>
              </div>
              <ul>
                <li>Entwicklung von Low-Code-Anwendungen mit Mendix, Zoho Creator und Retool.</li>
                <li>Fachliche Analyse und Bewertung verschiedener Low-Code-Plattformen.</li>
                <li>Mitwirkung an internen Webprojekten mit HTML und Java sowie digitaler Prozessautomatisierung.</li>
              </ul>
            </div>

            <div className="t-item">
              <div className="t-date">März 2022 — März 2023</div>
              <div className="t-title">Tutor Elektronik</div>
              <div className="t-org">
                FH Südwestfalen, Hagen — <span>Praxisorientierte Ingenieurwissenschaften</span>
              </div>
              <ul>
                <li>Betreuung von Studierenden in praktischen Elektronikübungen.</li>
                <li>Vermittlung von Grundlagen der Schaltungsanalyse und Messtechnik.</li>
                <li>Vorbereitung und Durchführung von Laborversuchen.</li>
              </ul>
            </div>

            <div className="t-item">
              <div className="t-date">Juli 2020 — März 2022</div>
              <div className="t-title">Promoter</div>
              <div className="t-org">
                SPORTFIVE, Dortmund — <span>Sportmarketing, Sponsoring und Hospitality</span>
              </div>
              <ul>
                <li>Repräsentation der Marke bei Veranstaltungen und Heimspielen.</li>
                <li>Betreuung von Aktionsständen und Fan-Aktivierungen.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="ausbildung">
        <div className="wrap">
          <div className="section-head">
            <span className="idx">03</span>
            <h2>Hochschulausbildung</h2>
            <span className="rule" />
          </div>

          <div className="edu-grid">
            <div className="edu-item">
              <div className="t-date">Mai 2024 — November 2025</div>
              <h3>Master of Engineering — Medizintechnik, FH-SWF Hagen</h3>
              <p>Schwerpunkte: Sensorik und spezielle MRT-Techniken.</p>
              <p>Masterarbeit: „Entwicklung und Systemarchitektur eines elektronischen Temperaturreglers mit EMV-gerechter Auslegung für den Einsatz im Bahntechnik-Umfeld" — Note 1,7</p>
              <p className="note">Abschlussnote: gut (2,0)</p>
            </div>

            <div className="edu-item">
              <div className="t-date">September 2020 — April 2024</div>
              <h3>Bachelor of Engineering — Medizintechnik, FH-SWF Hagen</h3>
              <p>Schwerpunkte: Elektronik und bildgebende Verfahren.</p>
              <p>Bachelorarbeit: „Simulation und Entwurf eines Wilkinson-Leistungsteilers für 2,45 GHz zur Anwendung in der Mikrowellenablation" — Note 1,3</p>
              <p className="note">Abschlussnote: sehr gut (1,5)</p>
            </div>

            <div className="edu-item">
              <div className="t-date">Juli 2019 — August 2020</div>
              <h3>Studienkolleg, Hochschule Kaiserslautern</h3>
              <p>Schwerpunkte: Physik und Mathematik.</p>
              <p className="note">Abschlussnote: sehr gut (1,5)</p>
            </div>

            <div className="edu-item">
              <div className="t-date">Juni 2005 — März 2018</div>
              <h3>Abitur, Al Ettifaq International Academy, Amman</h3>
              <p className="note">Abiturnote: gut (2,0)</p>
            </div>
          </div>
        </div>
      </section>

      <section id="kenntnisse">
        <div className="wrap">
          <div className="section-head">
            <span className="idx">04</span>
            <h2>Tools &amp; Kenntnisse</h2>
            <span className="rule" />
          </div>

          <div className="skill-groups">
            <div className="skill-group">
              <div className="label">Hardware Design</div>
              <div className="tags">
                <span className="tag">Altium Designer</span>
                <span className="tag">EAGLE</span>
                <span className="tag">EnCo SOX</span>
                <span className="tag">KiCad</span>
                <span className="tag">TESSY</span>
              </div>
            </div>
            <div className="skill-group">
              <div className="label">Simulation</div>
              <div className="tags">
                <span className="tag">LTspice</span>
                <span className="tag">PSpice</span>
                <span className="tag">Matlab Simulink</span>
                <span className="tag">BORIS</span>
                <span className="tag">COMSOL Multiphysics</span>
              </div>
            </div>
            <div className="skill-group">
              <div className="label">Programmierung</div>
              <div className="tags">
                <span className="tag">C (Keil µVision)</span>
                <span className="tag">Java</span>
                <span className="tag">HTML</span>
              </div>
            </div>
            <div className="skill-group">
              <div className="label">Low-Code</div>
              <div className="tags">
                <span className="tag">Mendix</span>
                <span className="tag">Zoho Creator</span>
                <span className="tag">Retool</span>
              </div>
            </div>
            <div className="skill-group">
              <div className="label">Projektmanagement</div>
              <div className="tags">
                <span className="tag">SAP ECTR</span>
                <span className="tag">Easy Project</span>
                <span className="tag">ProAlpha ERP</span>
              </div>
            </div>
            <div className="skill-group">
              <div className="label">Dokumentation</div>
              <div className="tags">
                <span className="tag">LaTeX</span>
                <span className="tag">IBM Engineering DOORS</span>
                <span className="tag">Jama Connect</span>
                <span className="tag">MS Office</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="weiteres">
        <div className="wrap">
          <div className="section-head">
            <span className="idx">05</span>
            <h2>Auszeichnungen &amp; Sprachen</h2>
            <span className="rule" />
          </div>

          <div className="two-col">
            <div className="simple-list">
              <div className="row"><span className="k">VDE-Stipendium</span><span className="v">2024 · 2025</span></div>
              <div className="row"><span className="k">Deutschlandstipendium</span><span className="v">2023 · 2024 · 2025</span></div>
              <div className="row"><span className="k">Intel-Wettbewerb Wissenschaft &amp; Technologie</span><span className="v">2016</span></div>
              <div className="row"><span className="k">Grafikdesign-Wettbewerb</span><span className="v">2016</span></div>
              <div className="row"><span className="k">Funktionale Sicherheit nach IEC 61508</span><span className="v">2025</span></div>
              <div className="row"><span className="k">Mikrocontroller-Schaltungstechnik</span><span className="v">2025</span></div>
            </div>
            <div className="simple-list">
              <div className="row"><span className="k">Deutsch</span><span className="v">Verhandlungssicher</span></div>
              <div className="row"><span className="k">Englisch</span><span className="v">Fortgeschritten</span></div>
              <div className="row"><span className="k">Arabisch</span><span className="v">Muttersprache</span></div>
              <div className="row"><span className="k">Spanisch</span><span className="v">Grundkenntnisse</span></div>
              <div className="row"><span className="k">Führerschein</span><span className="v">Klasse B</span></div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="foot-name">Ehab Saleh</div>
          <p>q.ehab-saleh@hotmail.com · Hagen, Deutschland</p>
        </div>
      </footer>
    </>
  );
}
