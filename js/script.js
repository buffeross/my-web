// ===== 暗色 / 亮色主题切换 =====
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

function syncThemeToggle() {
  const isDark = root.getAttribute('data-theme') === 'dark';
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.setAttribute('aria-label', isDark ? '切换为亮色主题' : '切换为暗色主题');
}
syncThemeToggle();

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  syncThemeToggle();
});

// ===== 移动端菜单展开 =====
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});
// 点击菜单项后自动收起
navLinks.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  })
);

// ===== 页脚年份自动更新 =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== 导航:滚动时高亮当前区块 =====
const navLinkMap = new Map();
document.querySelectorAll('.nav__links a').forEach((a) => {
  const section = document.getElementById(a.getAttribute('href').slice(1));
  if (section) navLinkMap.set(section, a);
});

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinkMap.forEach((link) => link.classList.remove('is-active'));
        const active = navLinkMap.get(entry.target);
        if (active) active.classList.add('is-active');
      }
    });
  },
  { rootMargin: '-45% 0px -50% 0px' }
);
navLinkMap.forEach((_link, section) => navObserver.observe(section));

// ===== 回到顶部按钮 =====
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const backToTop = document.getElementById('back-to-top');
const toggleBackToTop = () => {
  backToTop.classList.toggle('is-visible', window.scrollY > 400);
};
toggleBackToTop();
window.addEventListener('scroll', toggleBackToTop, { passive: true });
backToTop.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
);

// ===== 滚动出现动画 =====
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

// 给各区块加上渐入效果
document
  .querySelectorAll('.section, .hero__inner, .card, .skill-group, .contact-link')
  .forEach((el) => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
