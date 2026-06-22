// ===== 暗色 / 亮色主题切换 =====
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ===== 移动端菜单展开 =====
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
// 点击菜单项后自动收起
navLinks.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ===== 页脚年份自动更新 =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== 滚动出现动画 =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
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
    observer.observe(el);
  });
