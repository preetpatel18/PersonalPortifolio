import Navigation from "../components/NavigationBar";
import Footer from "../components/Footer";
import "../assets/work.css";

function WorkPage() {
  /*
    ADD ALL PORTFOLIO WORK HERE

    image:
    - Put images inside your src/assets or src folder.
    - import them at the top.
    - then add image: importedImageName.
  */
  const workItems = [
    {
      title: "Luxury Beauty Brand",
      category: "Graphic Design",
      type: "Branding",
      desc: "A premium visual identity and social media design system for a beauty-focused business.",
      link: "#",
    },
    {
      title: "Modern Developer Portfolio",
      category: "Website Design",
      type: "Web",
      desc: "A clean React portfolio with responsive layouts, project sections, and modern UI styling.",
      link: "#",
    },
    {
      title: "Restaurant Branding Package",
      category: "Brand Identity",
      type: "Branding",
      desc: "Menu visuals, social posts, typography direction, and brand styling for a restaurant concept.",
      link: "#",
    },
    {
      title: "Fashion Campaign Visuals",
      category: "Creative Direction",
      type: "Graphic Design",
      desc: "Editorial campaign visuals designed for fashion-focused online promotion.",
      link: "#",
    },
  ];

  return (
    <div className="work-page">
      <Navigation />

      <main className="work-main">
        <section className="work-header">
          <p className="work-label">Selected Work</p>
          <h1>Portfolio</h1>
          <p>
            A collection of websites, branding systems, social media graphics,
            and creative digital projects.
          </p>
        </section>

        <section className="work-grid">
          {workItems.map((item, index) => (
            <article className="work-card" key={index}>
              <div className="work-image">
                <span>{item.title.charAt(0)}</span>
              </div>

              <div className="work-content">
                <div className="work-card-top">
                  <p className="work-label">{item.category}</p>
                  <span>{item.type}</span>
                </div>

                <h2>{item.title}</h2>

                <p>{item.desc}</p>

                <a href={item.link} target="_blank" rel="noreferrer">
                  View Project
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default WorkPage;