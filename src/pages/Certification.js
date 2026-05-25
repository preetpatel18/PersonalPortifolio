import Navigation from "../components/NavigationBar";
import Footer from "../components/Footer";
import "../assets/certification.css";

function Projects() {
	return (
		<div>
			<Navigation />
			<main className="page cert-page">
			<div className="page-container">
				<div className="page-header">
					<p className="page-tag">Skills & Credentials</p>
					<h1 className="page-title">Certifications</h1>
					<p className="page-subtitle">"Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt." ~ Technoblade, Art of War</p>
				</div>
				
				<section className="cert-section" id="certifications">
					<h2 className="cert-section-title">Certifications</h2>
					<div className="certs-grid">
						<div className="cert-card">
							<p className="cert-org">Oracle</p>
							<h3 className="cert-name">Java Certified Foundations Associate</h3>
							<p className="cert-date">Issued: January 2023</p>
						</div>
						
						<div className="cert-card">
							<p className="cert-org">HackerRank</p>
							<h3 className="cert-name">Java (Basic) Certificate</h3>
							<p className="cert-date">Issued: December 2024</p>
							<p className="cert-id">Credential ID: 162e51003060</p>
						</div>
						<div className="cert-card">
							<p className="cert-org">HackerRank</p>
							<h3 className="cert-name">Problem Solving (Basic) Certificate</h3>
							<p className="cert-date">Issued: December 2024</p>
							<p className="cert-id">Credential ID: 9fe300356be8</p>
						</div>
					</div>
				</section>
				
				<section className="cert-section" id="skills">
					<h2 className="cert-section-title">Technical Skills</h2>
					<div className="skills-container">
						<div className="skill-category">
							<h3 className="skill-category-title"><span className="skill-category-icon">💻</span> Frontend</h3>
							<div className="skill-items">
								<span className="skill-item">React</span>
								<span className="skill-item">HTML5</span>
								<span className="skill-item">CSS3</span>
								<span className="skill-item">JavaScript</span>
								<span className="skill-item">JSP</span>
							</div>
						</div>
						
						<div className="skill-category">
							<h3 className="skill-category-title"><span className="skill-category-icon">🔌</span> Backend</h3>
							<div className="skill-items">
								<span className="skill-item">Node.js</span>
								<span className="skill-item">APIs</span>
								<span className="skill-item">MySQL</span>
								<span className="skill-item">GraphQL</span>
								<span className="skill-item">MongoDB</span>
								<span className="skill-item">PostgreSQL</span>
								<span className="skill-item">Java</span>
							</div>
						</div>
						
						<div className="skill-category">
							<h3 className="skill-category-title"><span className="skill-category-icon">📊</span> Data</h3>
							<div className="skill-items">
								<span className="skill-item">Python</span>
								<span className="skill-item">Pandas</span>
								<span className="skill-item">NumPy</span>
								<span className="skill-item">R</span>
								<span className="skill-item">Data Visualization</span>
							</div>
						</div>
						
						<div className="skill-category">
							<h3 className="skill-category-title"><span className="skill-category-icon">☁️</span> DevOps</h3>
							<div className="skill-items">
								<span className="skill-item">Git</span>
							</div>
						</div>
					</div>
				</section>
			</div>
			</main>
			<Footer />
		</div>
	);
}

export default Projects;
