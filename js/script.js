// ===== Navbar scroll effect =====
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ===== Back to top =====
const btt = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    btt.classList.add('visible');
  } else {
    btt.classList.remove('visible');
  }
});

// ===== Active nav link on scroll =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) {
      current = sec.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// ===== Close navbar on mobile click =====
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const collapse = document.getElementById('navMenu');
    if (collapse.classList.contains('show')) {
      bootstrap.Collapse.getInstance(collapse)?.hide();
    }
  });
});

// ===== Galeri lightbox =====
function openGaleri(title, imgSrc) {
  document.getElementById('galeriTitle').textContent = title;
  document.getElementById('galeriImg').src = imgSrc;
  document.getElementById('galeriImg').alt = title;
}

// ===== Kontak form =====
function kirimPesan() {
  const nama = document.getElementById('nama').value.trim();
  const email = document.getElementById('email').value.trim();
  const pesan = document.getElementById('pesan').value.trim();
  const agree = document.getElementById('agree').checked;

  // Simple validation
  if (!nama || !email || !pesan) {
    alert('Harap isi semua kolom yang wajib diisi (*)');
    return;
  }
  if (!agree) {
    alert('Harap setujui Kebijakan Privasi terlebih dahulu.');
    return;
  }

  // Show success message
  const alert = document.getElementById('successAlert');
  alert.classList.remove('d-none');
  alert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  // Reset form
  document.getElementById('nama').value = '';
  document.getElementById('email').value = '';
  document.getElementById('pesan').value = '';
  document.getElementById('tujuan').value = '';
  document.getElementById('agree').checked = false;

  // Hide alert after 5s
  setTimeout(() => alert.classList.add('d-none'), 5000);
}

// ===== Scroll reveal animation =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.wisata-card, .galeri-item, .stat-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
