import { useEffect, useRef, useState } from "react";
import resumePdf from "../images/Resume_Preet_Patel_Rutgers_New_Brunswick.pdf";

/* ---------- EDIT YOUR INFO HERE ---------- */
const profile = {
  name: "Preet Patel",
  tagline: "Hey, its nice to see you here!",
  email: "preetpatel1862@gmail.com",
  github: "https://github.com/preetpatel18",
  githubHandle: "https://github.com/preetpatel18",
  linkedin: "https://www.linkedin.com/in/preetp1826/",
  note: "LC@300",
  pdfUrl: resumePdf, // put your PDF in the public folder with this name
  pdfName: "Preet-Patel-Resume.pdf",
};

const education = [
  {
    title: "B.S. Computer/Data Science, Stats/Maths",
    place: "Rutgers University - New Brunswick",
    years: "Sept 2024 – May 2028",
  },
];

const work = [
  {
    title: "Software Engineering Intern",
    place: "GE Appliances - A Haier Company",
    years: "Aug 2026 – Present",
  },
];

const projects = [
  {
    name: "TruthLens",
    date: "Spring 2026",
    blurb: "An AI-powered browser extension that analyzes news articles and visualizes their credibility, helping users determine whether the content is human generated or AI-generated.",
    url: "https://github.com/EricAzayev/CornellAIHackathon",
    website: "",
  },
  {
    name: "Data Analysis on US Tariffs",
    date: "Spring 2025",
    blurb: "A data-driven R project analyzing 34 years of U.S. trade to evaluate global tariff imbalances, with case studies on China and Canada.",
    url: "https://github.com/preetpatel18/A-Data-on-U.S.-Tariff-and-Trade-Fairness/tree/main",
    website: "",
  },
  {
    name: "SketchFlow",
    date: "Spring 2025",
    blurb: "Using React and Node.js, we created a fully functional sketch-to-React application. Users can sketch on the website and receive a ZIP file of their generated React application.",
    url: "https://github.com/preetpatel18/SketchFlow",
    website: "",
  },
  {
    name: "Traffic Data Analysis",
    date: "Spring 2025",
    blurb: "Using R and Python, we created detailed graphical analysis of traffic accidents based on time, location, weather, and more.",
    url: "https://github.com/preetpatel18/Datathon",
    website: "",
  },
  {
    name: "Beacon",
    date: "Spring 2025",
    blurb: "Beacon is an AI-powered wildfire detection and monitoring system that integrates NASA's FIRMS for real-time fire data visualization and predictive analytics.",
    url: "https://github.com/preetpatel18/Beacon",
    website: "",
  },
  {
    name: "CureBytes",
    date: "Fall 2024",
    blurb: "Designed to aid medical schools in enhancing the student experience through innovative tools and resources.",
    url: "https://github.com/preetpatel18/Health-HackRU-Hackathon",
    website: "https://health-hack-ru-main.vercel.app/",
  },
  {
    name: "Data Structures",
    date: "Fall 2024",
    blurb: "A repository containing implementations of fundamental data structures and algorithms using Java for my Data Structures course.",
    url: "https://github.com/preetpatel18/Data-Structures/",
    website: "",
  },
  {
    name: "Stock Simulation",
    date: "2024",
    blurb: "An interactive and educational stock market app designed for teens and kids. The platform makes learning trading fun and safe through engaging activities.",
    url: "https://github.com/preetpatel18/Stock-Simulation",
    website: "",
  },
  {
    name: "Battleship",
    date: "2022",
    blurb: "An AI-powered Battleship game in Java where the computer strategically attacks based on probability rather than randomness.",
    url: "https://github.com/preetpatel18/BattleShip-AI",
    website: "",
  },
];

/* ----------------------------------------- */

const SHADES = ["#1a1a1a", "#333", "#4d4d4d", "#707070", "#999", "#b5b5b5"];
const DESKTOP = "(min-width:761px)";

export default function Portfolio() {
  const contentRef = useRef(null);
  const resumeRef = useRef(null);
  const [leaves, setLeaves] = useState([]);
  const [showTop, setShowTop] = useState(false);

  /* falling leaves (generated after mount to avoid SSR mismatch) */
  useEffect(() => {
    setLeaves(
      Array.from({ length: 8 }, (_, i) => {
        const size = 24 + Math.random() * 26;
        const dur = 16 + Math.random() * 16;
        return {
          left: `${Math.random() * 100}%`,
          width: size,
          height: size,
          color: SHADES[i % SHADES.length],
          animationDuration: `${dur}s`,
          animationDelay: `-${Math.random() * dur}s`,
          "--sway": `${25 + Math.random() * 60}px`,
          "--sd": `${3 + Math.random() * 3}s`,
        };
      })
    );
  }, []);

  /* scroll the info column from anywhere + back-to-top visibility */
  useEffect(() => {
    const c = contentRef.current;
    const mq = window.matchMedia(DESKTOP);

    const onWheel = (e) => {
      if (!mq.matches || c.contains(e.target) || e.ctrlKey) return;
      c.scrollTop += e.deltaMode === 1 ? e.deltaY * 32 : e.deltaY;
    };

    const onKey = (e) => {
      if (!mq.matches || e.ctrlKey || e.metaKey || e.altKey) return;
      if (c.contains(document.activeElement)) return;
      if (/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
      const page = c.clientHeight * 0.9;
      let d = 0;
      if (e.key === "ArrowDown") d = 60;
      else if (e.key === "ArrowUp") d = -60;
      else if (e.key === "PageDown" || (e.key === " " && !e.shiftKey)) d = page;
      else if (e.key === "PageUp" || (e.key === " " && e.shiftKey)) d = -page;
      else if (e.key === "Home") {
        e.preventDefault();
        c.scrollTo({ top: 0, behavior: "smooth" });
        return;
      } else if (e.key === "End") {
        e.preventDefault();
        c.scrollTo({ top: c.scrollHeight, behavior: "smooth" });
        return;
      }
      if (d) {
        e.preventDefault();
        c.scrollBy({ top: d, behavior: "smooth" });
      }
    };

    const update = () =>
      setShowTop((mq.matches ? c.scrollTop : window.scrollY) > 240);

    document.addEventListener("wheel", onWheel, { passive: true });
    document.addEventListener("keydown", onKey);
    c.addEventListener("scroll", update, { passive: true });
    window.addEventListener("scroll", update, { passive: true });
    mq.addEventListener("change", update);
    return () => {
      document.removeEventListener("wheel", onWheel);
      document.removeEventListener("keydown", onKey);
      c.removeEventListener("scroll", update);
      window.removeEventListener("scroll", update);
      mq.removeEventListener("change", update);
    };
  }, []);

  const jumpToResume = (e) => {
    e.preventDefault();
    const c = contentRef.current;
    const t = resumeRef.current;
    if (window.matchMedia(DESKTOP).matches) {
      c.scrollTo({
        top: t.getBoundingClientRect().top - c.getBoundingClientRect().top + c.scrollTop - 12,
        behavior: "smooth",
      });
    } else {
      t.scrollIntoView({ behavior: "smooth" });
    }
  };

  const backToTop = () => {
    if (window.matchMedia(DESKTOP).matches) {
      contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="pf">
      <style>{css}</style>

      <div className="pf-leaves" aria-hidden="true">
        {leaves.map((l, i) => (
          <div key={i} className="pf-leaf" style={l}>
            <svg viewBox="0 0 60 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 58V46L17 50l4-13L7 32l11-8-4-13 12 6 4-14 4 14 12-6-4 13 11 8-14 5 4 13-13-4z" />
              <path
                d="M30 56V14M30 44L19 35M30 44l11-9M30 32L20 24M30 32l10-8"
                stroke="#fff"
                strokeOpacity=".45"
                strokeWidth="1.2"
                fill="none"
              />
            </svg>
          </div>
        ))}
      </div>

      <div className="pf-page">
        <aside className="pf-aside">
          <h1>{profile.name}</h1>
          <p className="intro">{profile.tagline}</p>
          <nav className="btns" aria-label="Contact links">
            <a className="btn" href={`mailto:${profile.email}`}>Email me</a>
            <a className="btn" href={profile.github}>GitHub</a>
            <a className="btn" href={profile.linkedin}>LinkedIn</a>
            <a className="btn" href="#resume" onClick={jumpToResume}>Résumé</a>
          </nav>
        </aside>

        <main className="pf-content" ref={contentRef}>
          <h2>Education</h2>
          <div className="list">
            {education.map((e) => (
              <div className="item" key={e.title}>
                <div><h3>{e.title}</h3><p>{e.place}</p></div>
                <span className="meta">{e.years}</span>
              </div>
            ))}
          </div>

          <h2>Work experience</h2>
          <div className="list">
            {work.map((w) => (
              <div className="item" key={w.title}>
                <div><h3>{w.title}</h3><p>{w.place}</p></div>
                <span className="meta">{w.years}</span>
              </div>
            ))}
          </div>

          <h2>Projects</h2>
          <div className="list">
            {projects.map((p) => (
              <div className="item" key={p.name}>
                <div>
                  <h3><a href={p.url} target="_blank" rel="noreferrer">{p.name}</a></h3>
                  <p>
                    {p.blurb}
                    {p.website && (
                      <>
                        {" "}
                        <a className="site" href={p.website} target="_blank" rel="noreferrer">Website</a>
                      </>
                    )}
                  </p>
                </div>
                <span className="meta">{p.date}</span>
              </div>
            ))}
          </div>

          <section id="resume" ref={resumeRef} aria-label="Résumé">
            <div className="res-head">
              <h2>Résumé</h2>
              <a className="btn dl" href={profile.pdfUrl} download={profile.pdfName}>
                Download PDF
              </a>
            </div>
            <div className="sheet">
            <object
              data={`${profile.pdfUrl}#toolbar=0&navpanes=0&view=FitH`}
              type="application/pdf"
              aria-label="Résumé PDF"
            >
              <p className="sheet-fallback">
                Your browser can't show the PDF here.{" "}
                <a href={profile.pdfUrl} target="_blank" rel="noreferrer">
                  Open it in a new tab
                </a>
                .
              </p>
            </object>
          </div>
        </section>
        </main>
      </div>

      <footer className="pf-footer">
        <div className="pf-footer-in">
          <span className="pf-copy">{profile.note}</span>
          <button
            type="button"
            className={`btn pf-totop${showTop ? " show" : ""}`}
            onClick={backToTop}
            aria-label="Back to top"
          >
            ↑ Back to top
          </button>
        </div>
      </footer>
    </div>
  );
}

/* All styles are scoped under .pf so they won't touch the rest of your app. */
const css = `
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500&family=Nunito:wght@400;600&family=Playpen+Sans&display=swap");

.pf{
  --ink:#111; --muted:#777; --line:#e4e4e4; --yellow:#ffd93d;
  position:relative; min-height:100dvh; background:#fff; color:var(--ink);
  font:400 17px/1.7 "Nunito",system-ui,-apple-system,"Segoe UI",sans-serif;
  box-sizing:border-box;
  padding-top:env(safe-area-inset-top,0px); padding-bottom:env(safe-area-inset-bottom,0px);
}
.pf *{box-sizing:border-box}
.pf h1,.pf h2,.pf h3,.pf h4,.pf p{margin:0}
.pf h2,.pf h3,.pf h4,.pf .btn{font-family:"Fredoka",system-ui,sans-serif}
.pf a{color:inherit;text-decoration:none}
.pf a:focus-visible{outline:3px solid var(--ink);outline-offset:3px}

.pf-page{position:relative;z-index:1;max-width:1000px;margin:0 auto;padding:10vh 32px 80px;display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:72px}
.pf-aside{position:sticky;top:8vh;align-self:start;container-type:inline-size}

.pf h1{font-family:"Playpen Sans","Snell Roundhand","Apple Chancery",cursive;font-size:min(6.6rem,21cqw);font-weight:400;line-height:1.1;margin-bottom:10px;color:#111;white-space:nowrap;display:inline-block}
.pf h2{display:inline-block;font-size:1.4rem;font-weight:500;margin-bottom:10px;padding:0 4px;background:linear-gradient(var(--yellow),var(--yellow)) 0 88%/100% 10px no-repeat}
.pf h3{font-size:1.08rem;font-weight:500}
.pf .intro{display:inline-block;color:var(--muted);font-size:1.08rem;max-width:19em}

.pf .btns{display:flex;flex-direction:column;gap:12px;margin-top:32px;max-width:200px}
.pf .btn{background:#fff;border:1.5px solid var(--ink);padding:9px 18px;border-radius:12px;font-size:.98rem;text-align:center;box-shadow:3px 3px 0 var(--ink);transition:transform .12s,box-shadow .12s,background .12s}
.pf .btn:hover{background:var(--yellow);transform:translate(2px,2px);box-shadow:1px 1px 0 var(--ink)}
.pf button.btn{color:var(--ink);cursor:pointer;font-weight:400}

.pf .list{margin-bottom:48px}
.pf .item{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-top:1.5px dashed var(--line)}
.pf .item:first-child{border-top:0}
.pf .item p,.pf .meta{color:var(--muted);font-size:.92rem}
.pf .meta{white-space:nowrap;text-align:right}
.pf .item h3 a{border-bottom:1px solid var(--line);transition:border-color .15s}
.pf .item h3 a:hover{border-color:var(--ink)}
.pf .item .site{color:var(--ink);border-bottom:1.5px solid var(--yellow)}

/* falling leaves */
.pf-leaves{position:fixed;inset:0;z-index:0;overflow:hidden;pointer-events:none}
.pf-leaf{position:absolute;top:-80px;animation:pf-fall linear infinite}
.pf-leaf svg{display:block;width:100%;height:100%;animation:pf-sway var(--sd) ease-in-out infinite alternate}
@keyframes pf-fall{to{transform:translateY(calc(100vh + 160px))}}
@keyframes pf-sway{from{transform:translateX(calc(var(--sway) * -1)) rotate(-60deg)}to{transform:translateX(var(--sway)) rotate(70deg)}}

/* frosted glass with feathered edges */
.pf h1,.pf .intro,.pf .item{position:relative;isolation:isolate}
.pf h1::before,.pf .intro::before,.pf .item::before{
  content:"";position:absolute;inset:-8px -14px;z-index:-1;pointer-events:none;
  background:rgba(255,255,255,.4);
  -webkit-backdrop-filter:blur(9px);backdrop-filter:blur(9px);
  -webkit-mask-image:linear-gradient(to right,transparent,#000 16px,#000 calc(100% - 16px),transparent),linear-gradient(to bottom,transparent,#000 12px,#000 calc(100% - 12px),transparent);
  -webkit-mask-composite:source-in;
  mask-image:linear-gradient(to right,transparent,#000 16px,#000 calc(100% - 16px),transparent),linear-gradient(to bottom,transparent,#000 12px,#000 calc(100% - 12px),transparent);
  mask-composite:intersect}

/* résumé sheet */
.pf #resume{margin-top:56px}
.pf .res-head{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:10px}
.pf .res-head h2{margin:0}
.pf .btn.dl{padding:7px 16px;font-size:.9rem}
.pf .sheet{background:#fff;border:1px solid #e2e2e2;box-shadow:0 12px 32px rgba(0,0,0,.12);aspect-ratio:8.5/11;overflow:hidden}
.pf .sheet object{display:block;width:100%;height:100%;border:0}
.pf .sheet-fallback{padding:24px;color:var(--muted)}
.pf .sheet-fallback a{color:var(--ink);border-bottom:1.5px solid var(--yellow)}

/* bottom bar: copyright + back to top */
.pf .pf-footer{position:fixed;left:0;right:0;bottom:0;z-index:5;background:#fff;border-top:1.5px solid var(--line);padding:10px 0 calc(10px + env(safe-area-inset-bottom,0px))}
.pf .pf-copy{font-family:"Fredoka",system-ui,sans-serif;font-size:.88rem;color:var(--muted)}
.pf .pf-footer-in{max-width:1000px;margin:0 auto;padding:0 32px;display:flex;align-items:center;justify-content:space-between;gap:16px}
.pf .pf-totop{padding:6px 14px;font-size:.88rem;white-space:nowrap;opacity:0;visibility:hidden;transition:opacity .2s,visibility .2s,transform .12s,box-shadow .12s,background .12s}
.pf .pf-totop.show{opacity:1;visibility:visible}

@media (prefers-reduced-motion:reduce){
  .pf-leaves{display:none}
  .pf .btn,.pf .item h3 a{transition:none}
}

/* desktop: page is locked, only the info column scrolls */
@media (min-width:761px){
  .pf{height:100dvh;overflow:hidden}
  .pf-page{height:100%;padding-top:8vh;padding-bottom:0;align-items:start}
  .pf-aside{position:static}
  .pf-content{height:calc(100% - 8vh);overflow-y:auto;overscroll-behavior:contain;padding:12px 16px max(14vh,110px);margin:0 -16px;scrollbar-width:none;-ms-overflow-style:none}
  .pf-content::-webkit-scrollbar{display:none}
}

/* mobile: stacked, normal page scroll */
@media (max-width:760px){
  .pf-page{grid-template-columns:1fr;gap:44px;padding-top:7vh;padding-bottom:110px}
  .pf-aside{position:static}
  .pf .btns{flex-direction:row;flex-wrap:wrap;max-width:none}
}
@media (max-width:560px){
  }
@media (max-width:480px){
  .pf .item{flex-direction:column;gap:4px}
  .pf .meta{text-align:left}
}
`;