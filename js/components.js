// Shared navigation component
function getNav(rootPrefix = '') {
  return `
<nav>
  <div class="nav-inner">
    <a href="${rootPrefix}index.html" class="nav-logo">
      <span class="dot"></span>
      Agora des Sciences
    </a>
    <ul class="nav-links">
      <li><a href="${rootPrefix}index.html">Accueil</a></li>
      <li><a href="${rootPrefix}pages/a-propos.html">À propos</a></li>
      <li><a href="${rootPrefix}pages/programme.html">Programme</a></li>
      <li><a href="${rootPrefix}pages/inscription.html">Inscription</a></li>
      <li><a href="${rootPrefix}pages/contact.html">Contact</a></li>
      <li><a href="${rootPrefix}pages/auroralpes.html">AurorAlpes</a></li>
      <li><a href="${rootPrefix}pages/inscription.html" class="btn btn-primary nav-cta">S'inscrire</a></li>
    </ul>
    <button class="nav-burger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;
}

function getFooter(rootPrefix = '') {
  return `
<footer>
  <div class="footer-inner">
    <div class="footer-brand">
      <a href="${rootPrefix}index.html" class="footer-logo">Agora des Sciences</a>
      <p>Un événement organisé par AurorAlpes pour rassembler chercheurs et professionnels autour du partage des savoirs scientifiques.</p>
    </div>
    <div class="footer-col">
      <h4>Navigation</h4>
      <ul>
        <li><a href="${rootPrefix}index.html">Accueil</a></li>
        <li><a href="${rootPrefix}pages/a-propos.html">À propos</a></li>
        <li><a href="${rootPrefix}pages/programme.html">Programme</a></li>
        <li><a href="${rootPrefix}pages/inscription.html">Inscription</a></li>
        <li><a href="${rootPrefix}pages/contact.html">Contact</a></li>
        <li><a href="${rootPrefix}pages/auroralpes.html">AurorAlpes</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <ul>
        <li><a href="mailto:contact@auroralpes.fr">contact@auroralpes.fr</a></li>
        <li><a href="https://www.auroralpes.fr" target="_blank">auroralpes.fr</a></li>
        <li><a href="https://www.instagram.com/auroralpes" target="_blank">Instagram</a></li>
        <li><a href="https://bsky.app/profile/auroralpes.bsky.social" target="_blank">Bluesky</a></li>
        <li><a href="https://www.linkedin.com/company/auroralpes" target="_blank">LinkedIn</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-inner" style="padding-bottom:0; border-bottom:none;">
    <div class="footer-bottom" style="width:100%;">
      <span>© 2025 AurorAlpes · Grenoble</span>
      <span>Fait avec ❤️ pour la science</span>
    </div>
  </div>
</footer>`;
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('nav-root');
  const footRoot = document.getElementById('footer-root');
  const prefix = document.body.dataset.rootPrefix || '';
  if (root) root.innerHTML = getNav(prefix);
  if (footRoot) footRoot.innerHTML = getFooter(prefix);
});
