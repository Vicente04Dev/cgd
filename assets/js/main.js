/* ============================================================
   CGD LDA — JavaScript Principal
   Gráfica & Design em Angola
   ============================================================ */

/* ===== LOADER ===== */
function hideLoader() {
  var l = document.getElementById('loader');
  if (l) l.classList.add('hidden');
}
setTimeout(hideLoader, 2200);
document.addEventListener('DOMContentLoaded', function () { setTimeout(hideLoader, 1200); });
window.addEventListener('load', hideLoader);


/* ===== CURSOR PERSONALIZADO ===== */
var cursor = document.getElementById('cursor');
var ring = document.getElementById('cursorRing');
var mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', function (e) {
  mx = e.clientX; my = e.clientY;
  if (cursor) cursor.style.transform = 'translate(' + (mx - 5) + 'px,' + (my - 5) + 'px)';
});

(function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  if (ring) ring.style.transform = 'translate(' + (rx - 18) + 'px,' + (ry - 18) + 'px)';
  requestAnimationFrame(animRing);
})();

document.querySelectorAll('a, button, .portfolio-item, .service-card').forEach(function (el) {
  el.addEventListener('mouseenter', function () {
    if (ring) { ring.style.width = '56px'; ring.style.height = '56px'; ring.style.opacity = '1'; }
  });
  el.addEventListener('mouseleave', function () {
    if (ring) { ring.style.width = '36px'; ring.style.height = '36px'; ring.style.opacity = '.6'; }
  });
});


/* ===== NAV SCROLL ===== */
window.addEventListener('scroll', function () {
  var nav = document.getElementById('mainNav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
  var bt = document.getElementById('backTop');
  if (bt) bt.classList.toggle('visible', window.scrollY > 400);
});


/* ===== MENU MOBILE ===== */
function toggleMenu() {
  var hb = document.getElementById('hamburger');
  var mm = document.getElementById('mobileMenu');
  if (hb) hb.classList.toggle('open');
  if (mm) mm.classList.toggle('open');
}

/* Fecha o menu ao clicar em qualquer link dentro do menu mobile */
document.addEventListener('DOMContentLoaded', function () {
  var mm = document.getElementById('mobileMenu');
  if (mm) {
    mm.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        var hb = document.getElementById('hamburger');
        if (hb) hb.classList.remove('open');
        mm.classList.remove('open');
      });
    });
  }
});


/* ===== ANIMAÇÕES DE SCROLL (REVEAL) ===== */
function observeReveal() {
  var els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger');
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  els.forEach(function (el) { obs.observe(el); });
}
document.addEventListener('DOMContentLoaded', observeReveal);

/* ===== LAZY LOADING IMAGENS ===== */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('img:not([loading])').forEach(function (img) {
    if (!img.closest('.hero-visual') && !img.closest('.hero-left')) {
      img.setAttribute('loading', 'lazy');
    }
  });
});


/* ===== FILTRO DO PORTFÓLIO ===== */
function filterPortfolio(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
  btn.classList.add('active');
  document.querySelectorAll('#portfolioGrid .portfolio-item').forEach(function (item) {
    var show = cat === 'all' || item.dataset.cat === cat;
    item.style.display = show ? '' : 'none';
  });
}


/* ===== LIGHTBOX ===== */
function openLightbox(src) {
  var img = document.getElementById('lightboxImg');
  var lb  = document.getElementById('lightbox');
  if (img) img.src = src;
  if (lb)  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  var lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLightbox(); });


/* ===== TOAST ===== */
function showToast(msg) {
  var toast = document.getElementById('toast');
  var label = document.getElementById('toastMsg');
  if (label) label.textContent = msg;
  if (toast) {
    toast.classList.add('show');
    setTimeout(function () { toast.classList.remove('show'); }, 3500);
  }
}


/* ===== FORMULÁRIO ===== */
function submitForm(e) {
  e.preventDefault();
  showToast('Mensagem enviada com sucesso! ✓ Entraremos em contacto em breve.');
  e.target.reset();
}
