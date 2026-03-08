document.addEventListener("DOMContentLoaded", function () {

  // ---------- Back to Top Button ----------
  const backToTop = document.createElement("button");
  backToTop.id = "backToTop";
  backToTop.textContent = "↑ Top";
  backToTop.style.position = "fixed";
  backToTop.style.bottom = "30px";
  backToTop.style.right = "30px";
  backToTop.style.padding = "10px 15px";
  backToTop.style.fontSize = "16px";
  backToTop.style.border = "none";
  backToTop.style.borderRadius = "5px";
  backToTop.style.background = "#4a00e0";
  backToTop.style.color = "white";
  backToTop.style.cursor = "pointer";
  backToTop.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
  backToTop.style.display = "none";
  backToTop.style.zIndex = "1000";
  document.body.appendChild(backToTop);

  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";

    // ---------- Fade-in sections ----------
    document.querySelectorAll("section, .skill-card, .project-card, .card").forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
    });
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ---------- Smooth Scrolling ----------
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.getElementById(this.getAttribute("href").slice(1));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // ---------- Floating Offer Box ----------
  const offerBox = document.createElement("div");
  offerBox.id = "offerBox";
  offerBox.innerHTML = `
    <h4>Earn with My Services</h4>
    <ul>
      <li>Freelance Web Development</li>
      <li>Premium Scripts for Sale</li>
      <li>Affiliate Recommendations</li>
    </ul>
    <a href="#contact" style="color:#fff;text-decoration:underline;">Contact Me</a>
  `;
  offerBox.style.position = "fixed";
  offerBox.style.left = "20px";
  offerBox.style.bottom = "20px";
  offerBox.style.background = "#28a745";
  offerBox.style.color = "white";
  offerBox.style.padding = "15px";
  offerBox.style.borderRadius = "10px";
  offerBox.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
  offerBox.style.fontSize = "0.95em";
  offerBox.style.zIndex = "999";
  offerBox.style.cursor = "pointer";
  offerBox.style.transition = "transform 0.3s";
  document.body.appendChild(offerBox);

  offerBox.addEventListener("mouseenter", () => offerBox.style.transform = "scale(1.05)");
  offerBox.addEventListener("mouseleave", () => offerBox.style.transform = "scale(1)");

  offerBox.addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  });

  // ---------- Interactive Project Modal ----------
  const projectCard = document.querySelector(".project-card");
  if (projectCard) {
    projectCard.addEventListener("click", () => {
      const modal = document.createElement("div");
      modal.id = "projectModal";
      modal.style.position = "fixed";
      modal.style.top = "0";
      modal.style.left = "0";
      modal.style.width = "100%";
      modal.style.height = "100%";
      modal.style.background = "rgba(0,0,0,0.7)";
      modal.style.display = "flex";
      modal.style.justifyContent = "center";
      modal.style.alignItems = "center";
      modal.style.zIndex = "10000";
      modal.innerHTML = `
        <div style="background:white;padding:25px;border-radius:15px;max-width:600px;text-align:center;position:relative;opacity:0;transform:scale(0.8);transition:0.3s;">
          <h2>FinBridge Project</h2>
          <p>Explore detailed features, screenshots, and links to premium services.</p>
          <img src="images/finbridgelogo.jpg" style="width:120px;margin:20px 0;" alt="FinBridge Logo">
          <a href="https://tinyurl.com/SCURDTECHS" target="_blank" style="display:inline-block;margin-top:15px;padding:10px 20px;background:#28a745;color:white;border-radius:8px;text-decoration:none;">Visit Live Project</a>
          <button id="closeModal" style="position:absolute;top:10px;right:10px;background:red;color:white;border:none;padding:5px 10px;border-radius:5px;cursor:pointer;">X</button>
        </div>
      `;
      document.body.appendChild(modal);

      const modalContent = modal.querySelector("div");
      setTimeout(() => {
        modalContent.style.opacity = 1;
        modalContent.style.transform = "scale(1)";
      }, 50);

      document.getElementById("closeModal").addEventListener("click", () => {
        modal.remove();
      });
    });
  }

  // ---------- Animate Skill Cards ----------
  document.querySelectorAll(".skill-card").forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(30px)";
    card.style.transition = `opacity 0.6s ease ${(index + 1) * 0.2}s, transform 0.6s ease ${(index + 1) * 0.2}s`;
  });

  // ---------- Animate Cards and Sections ----------
  document.querySelectorAll(".card, .project-card, section").forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

});