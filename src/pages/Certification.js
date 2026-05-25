import Navigation from "../components/NavigationBar";
import Footer from "../components/Footer";
import "../assets/certification.css";

function Projects() {
	return (
		<div>
			<Navigation />
			<main className="front">
			<div class="container">
				<div className="header">
					<h1>Certifications</h1>
					<p class="tagline">"Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt." ~ Technoblade, Art of War</p>
				</div>
				
				<section id="certifications">
					<h2 class="section-title">Certifications</h2>
					<div class="certs-grid">
						<div class="cert-card">
							<p class="cert-org">Oracle</p>
							<h3 class="cert-name">Java Certified Foundations Associate</h3>
							<p class="cert-date">Issued: January 2023</p>
						</div>
						
						<div class="cert-card">
							<p class="cert-org">HackerRank</p>
							<h3 class="cert-name">Java (Basic) Certificate</h3>
							<p class="cert-date">Issued: December 2024</p>
							<p class="cert-id">Credential ID: 162e51003060</p>
						</div>
						<div class="cert-card">
							<p class="cert-org">HackerRank</p>
							<h3 class="cert-name">Problem Solving (Basic) Certificate</h3>
							<p class="cert-date">Issued: December 2024</p>
							<p class="cert-id">Credential ID: 9fe300356be8</p>
						</div>
					</div>
				</section>
				
				<section id="skills">
					<h2 class="section-title">Technical Skills</h2>
					<div class="skills-container">
						<div class="skill-category">
							<h3 class="skill-category-title"><span class="skill-category-icon">💻</span> Frontend</h3>
							<div class="skill-items">
								<span class="skill-item">React</span>
								<span class="skill-item">HTML5</span>
								<span class="skill-item">CSS3</span>
								<span class="skill-item">JavaScript</span>
								<span class="skill-item">JSP</span>
							</div>
						</div>
						
						<div class="skill-category">
							<h3 class="skill-category-title"><span class="skill-category-icon">🔌</span> Backend</h3>
							<div class="skill-items">
								<span class="skill-item">Node.js</span>
								<span class="skill-item">APIs</span>
								<span class="skill-item">MySQL</span>
								<span class="skill-item">GraphQL</span>
								<span class="skill-item">MongoDB</span>
								<span class="skill-item">PostgreSQL</span>
								<span class="skill-item">Java</span>
							</div>
						</div>
						
						<div class="skill-category">
							<h3 class="skill-category-title"><span class="skill-category-icon">📊</span> Data</h3>
							<div class="skill-items">
								<span class="skill-item">Python</span>
								<span class="skill-item">Pandas</span>
								<span class="skill-item">NumPy</span>
								<span class="skill-item">R</span>
								<span class="skill-item">Data Visualization</span>
							</div>
						</div>
						
						<div class="skill-category">
							<h3 class="skill-category-title"><span class="skill-category-icon">☁️</span> DevOps</h3>
							<div class="skill-items">
								<span class="skill-item">Git</span>
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
