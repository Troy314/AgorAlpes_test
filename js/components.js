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
      <li><a href="https://www.auroralpes.fr/" target="_blank">AurorAlpes</a></li>
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
  <div class="footer-bottom" style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:1rem; padding:1.2rem 2rem;">
    <span>© 2026 AurorAlpes · Grenoble &nbsp;·&nbsp; <a href="${rootPrefix}pages/mentions-legales.html" style="color:rgba(255,255,255,.4);font-size:.78rem;text-decoration:underline;text-underline-offset:3px;">Mentions légales</a></span>
    <ul class="footer-contacts" style="display:flex; flex-direction:row; gap:1.2rem; list-style:none; padding:0; margin:0;">
      <li><a href="mailto:contact@auroralpes.fr" aria-label="Email"><img src="${rootPrefix}media/envelope.svg" alt="Email" style="width:2em;height:2em;vertical-align:middle;" /></a></li>
      <li><a href="https://bsky.app/profile/auroralpes.bsky.social" target="_blank" aria-label="Bluesky"><img src="${rootPrefix}media/bluesky.svg" alt="Bluesky" style="width:2em;height:2em;vertical-align:middle;" /></a></li>
      <li><a href="https://www.linkedin.com/company/auroralpes" target="_blank" aria-label="LinkedIn"><img src="${rootPrefix}media/linkedin.svg" alt="LinkedIn" style="width:2em;height:2em;vertical-align:middle;" /></a></li>
      <li><a href="https://www.instagram.com/auroralpes" target="_blank" aria-label="Instagram"><img src="${rootPrefix}media/square-instagram.svg" alt="Instagram" style="width:2em;height:2em;vertical-align:middle;" /></a></li>
    </ul>
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