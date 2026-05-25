// import { useNavigate } from "react-router-dom";
// import Navigation from "../components/NavigationBar";
// import Footer from "../components/Footer";
// import "../assets/CreativeStudio.css";

// function CreativeStudioPage() {
//   const navigate = useNavigate();

//   /*
//     ADD SERVICES HERE
//     To add a new service, copy one object and change title, price, desc.
//   */
//   const services = [
//     {
//       title: "Website Design",
//       price: "Starting at $100",
//       desc: "Modern responsive websites built with React, animations, optimized UX, and custom branding.",
//     },
//     {
//       title: "Graphic Design",
//       price: "Starting at $20",
//       desc: "Posters, social media kits, menus, flyers, branding systems, and custom visual assets.",
//     },
//     {
//       title: "Portfolio Development",
//       price: "Starting at $50",
//       desc: "Clean personal portfolios for students, developers, startups, and creators.",
//     },
//   ];

//   /*
//     ADD FEATURED PROJECTS HERE
//     image can be added later. For now, it uses the first letter as a placeholder.
//   */
//   const projects = [
//     {
//       title: "Luxury Beauty Brand",
//       category: "Graphic Design",
//       desc: "A modern beauty brand design system with social graphics, service menus, and premium visual direction.",
//     },
//     {
//       title: "Modern Developer Portfolio",
//       category: "Website Design",
//       desc: "A clean personal portfolio website built for students, developers, and freelancers.",
//     },
//     {
//       title: "Restaurant Branding Package",
//       category: "Brand Identity",
//       desc: "A full restaurant branding concept with menu design, typography, colors, and promotional assets.",
//     },
//     {
//       title: "Fashion Campaign Visuals",
//       category: "Creative Direction",
//       desc: "Editorial-style social content and promotional visuals for fashion-based campaigns.",
//     },
//   ];

//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);

//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="studio-page">
//       <Navigation />

//       {/* HERO */}
//       <section className="studio-hero">
//         <div className="studio-doodle studio-doodle-one">✦</div>
//         <div className="studio-doodle studio-doodle-two">◌</div>

//         <div className="studio-hero-container">
//           <div className="studio-hero-text">
//             <div className="studio-pill">
//               Creative Studio • Web Development • Branding
//             </div>

//             <h1 className="studio-hero-title">
//               Turning
//               <span>Ideas Into</span>
//               Modern Digital Experiences.
//             </h1>

//             <p className="studio-hero-desc">
//               I create visually-driven websites, branding systems, and creative
//               digital experiences designed to elevate businesses, creators, and
//               startups.
//             </p>

//             <div className="studio-button-row">
//               <button
//                 className="studio-btn studio-btn-dark"
//                 onClick={() => navigate("/work")}
//               >
//                 View My Work
//               </button>

//               <button
//                 className="studio-btn studio-btn-light"
//                 onClick={() => scrollToSection("services")}
//               >
//                 Explore Services
//               </button>
//             </div>
//           </div>

//           {/* SHOWCASE */}
//           <div className="studio-showcase">
//             <div className="studio-showcase-card white">
//               <p>Portfolio</p>
//               <h3>Creative Websites</h3>
//             </div>

//             <div className="studio-showcase-card dark tall down">
//               <p>Branding</p>
//               <h3>Visual Identity Systems</h3>
//             </div>

//             <div className="studio-showcase-card gray tall up">
//               <p>Graphic Design</p>
//               <h3>Posters & Social Media</h3>
//             </div>

//             <div className="studio-showcase-card white">
//               <p>UI / UX</p>
//               <h3>Clean User Experiences</h3>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SERVICES */}
//       <section className="studio-services" id="services">
//         <div className="studio-container">
//           <div className="studio-section-header">
//             <p className="studio-section-label">Services</p>
//             <h2 className="studio-section-title">
//               Design & Development Services Built Around Your Brand.
//             </h2>
//           </div>

//           <div className="studio-services-grid">
//             {services.map((service, index) => (
//               <div className="studio-service-card" key={index}>
//                 <div className="studio-card-symbol">✦</div>

//                 <h3>{service.title}</h3>

//                 <p>{service.desc}</p>

//                 <div className="studio-service-bottom">
//                   <strong>{service.price}</strong>

//                   <button
//                     className="studio-small-btn"
//                     onClick={() => scrollToSection("pricing")}
//                   >
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FEATURED WORK */}
//       <section className="studio-work" id="work">
//         <div className="studio-container">
//           <div className="studio-work-header">
//             <div>
//               <p className="studio-section-label">Featured Work</p>
//               <h2 className="studio-section-title">Selected Projects.</h2>
//             </div>

//             <button
//               className="studio-btn studio-btn-light"
//               onClick={() => navigate("/work")}
//             >
//               View All Projects
//             </button>
//           </div>

//           <div className="studio-work-grid">
//             {projects.map((project, index) => (
//               <div className="studio-project-card" key={index}>
//                 <div className="studio-project-image">
//                   {project.title.charAt(0)}
//                 </div>

//                 <div className="studio-project-content">
//                   <p className="studio-section-label">{project.category}</p>

//                   <h3>{project.title}</h3>

//                   <p className="studio-project-desc">{project.desc}</p>

//                   <button
//                     className="studio-text-btn"
//                     onClick={() => navigate("/work")}
//                   >
//                     View Case Study
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PRICING */}
//       <section className="studio-pricing" id="pricing">
//         <div className="studio-pricing-bg-text">STUDIO</div>

//         <div className="studio-pricing-container">
//           <p className="studio-dark-label">Pricing Plans</p>

//           <h2>Transparent Creative Pricing.</h2>

//           <p className="studio-pricing-desc">
//             Every project is different, but these packages help provide a
//             starting point depending on your goals and scale.
//           </p>

//           <div className="studio-pricing-grid">
//             <div className="studio-price-card dark">
//               <p className="studio-dark-label">Starter</p>
//               <h3>$150</h3>

//               <ul>
//                 <li>Single-page design</li>
//                 <li>Basic branding assets</li>
//                 <li>Responsive layout</li>
//               </ul>

//               <button
//                 className="studio-price-btn light"
//                 onClick={() => scrollToSection("contact")}
//               >
//                 Get Started
//               </button>
//             </div>

//             <div className="studio-price-card featured">
//               <p className="studio-section-label">Most Popular</p>
//               <h3>$450</h3>

//               <ul>
//                 <li>Multi-page website</li>
//                 <li>Custom UI/UX</li>
//                 <li>SEO optimization</li>
//                 <li>Full responsive build</li>
//               </ul>

//               <button
//                 className="studio-price-btn dark"
//                 onClick={() => scrollToSection("contact")}
//               >
//                 Choose Plan
//               </button>
//             </div>

//             <div className="studio-price-card dark">
//               <p className="studio-dark-label">Premium</p>
//               <h3>Custom</h3>

//               <ul>
//                 <li>Full branding package</li>
//                 <li>Advanced animations</li>
//                 <li>Creative direction</li>
//                 <li>Ongoing support</li>
//               </ul>

//               <button
//                 className="studio-price-btn light"
//                 onClick={() => scrollToSection("contact")}
//               >
//                 Contact Me
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CONTACT */}
//       <section className="studio-contact" id="contact">
//         <div className="studio-contact-container">
//           <p className="studio-section-label">Contact</p>

//           <h2>Ready To Build Something Amazing?</h2>

//           <p>
//             Whether you're launching a business, refreshing your brand, or
//             building your online presence — let's create something unique
//             together.
//           </p>

//           <div className="studio-button-row center">
//             <button
//               className="studio-btn studio-btn-dark"
//               onClick={() => navigate("/contact")}
//             >
//               Book A Consultation
//             </button>

//             <button
//               className="studio-btn studio-btn-light"
//               onClick={() => navigate("/work")}
//             >
//               View Portfolio
//             </button>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

// export default CreativeStudioPage;