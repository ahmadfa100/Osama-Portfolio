const translations = {
  ar: {
    "document.title": "أسامة بني حمد - أخصائي علاج وظيفي",
    "hero.greeting": "مرحباً، أنا",
    "hero.title1": "أخصائي",
    "hero.title2": "علاج وظيفي",
    "name-part-1": "أسامة",
    "name-part-2": "بني حمد",
    "hero.descMain": "أخصائي علاج وظيفي مكرّس في الإمارات، لدي شغف عميق لمساعدة الأطفال على تحقيق أقصى إمكاناتهم.",
    "hero.descSub": "معتمد وذو خبرة في تقديم رعاية رحيمة وفعّالة للأطفال ذوي الاحتياجات المختلفة، بما في ذلك طيف التوحد.",
    "stat.years": "سنوات خبرة",
    "stat.children": "أطفال تمت مساعدتهم",
    "stat.specs": "تخصصات",
    "cta.work": "لنعمل معاً",
    "cta.journey": "عرض رحلتي",
    "experience.title": "رحلتي المهنية",
    "exp.item1.title": "المركز ١",
    "exp.item1.role": "أخصائي علاج وظيفي",
    "exp.item1.duration": "2018 - 2020",
    "exp.item1.desc": "اكتسبت خبرة أساسية في علاج الأطفال، إجراء التقييمات وتطوير خطط علاج فردية.",
    "exp.item2.title": "مركز أبني (مركز طفلي)",
    "exp.item2.role": "أخصائي علاج وظيفي أول",
    "exp.item2.duration": "سنة واحدة",
    "exp.item2.desc": "تخصصت في علاج تكامل الحواس وبرامج التدخل المبكر، مما حسّن النتائج لدى العديد من الأطفال.",
    "exp.item3.title": "وزارة الصحة (الإمارات)",
    "exp.item3.role": "أخصائي علاج وظيفي",
    "exp.item3.duration": "الحالية",
    "exp.item3.desc": "أقدم خدمات علاجية متخصصة داخل النظام الصحي العام مع الالتزام بأعلى المعايير الوطنية.",
    "gallery.title": "إحداث فرق",
    "gallery.more": "المزيد",
    "gallery.preview1": "«بفضل أسامة، حقق ابننا تقدمًا ملحوظًا...»",
    "gallery.preview2": "«منهج أسامة في تكامل الحواس غيّر...»",
    "gallery.preview3": "«محترف، عطوف، وفعال للغاية...»",
    "gallery.preview4": "«التقدم الذي أحرزه ابننا تحت رعاية أسامة...»",
    "gallery.preview5": "«خبرة أسامة في التدخل المبكر غيّرت...»",
    "gallery.preview6": "«حنون، ماهر، ومتفاني...»",
    "testi.1": "«بفضل أسامة، حقق ابننا تقدمًا ملحوظًا في المهارات الدقيقة. إنه صبور ومدهش مع الأطفال!»",
    "testi.client1": "- والد/ة A.S.",
    "testi.2": "«منهج أسامة في تكامل الحواس غيّر حياة ابنتنا اليومية. نحن ممتنون للغاية!»",
    "testi.client2": "- والد/ة M.K.",
    "testi.3": "«محترف، عطوف، وفعال للغاية. ساعد طفلنا على بلوغ معالم لم نكن نتوقعها.»",
    "testi.client3": "- والد/ة R.A.",
    "testi.4": "«التقدم الذي أحرزه ابننا تحت رعاية أسامة ملحوظ. أنصح به بشدة!»",
    "testi.client4": "- والد/ة S.M.",
    "testi.5": "«خبرة أسامة في التدخل المبكر غيّرت حياتنا. أخصائي متميز!»",
    "testi.client5": "- والد/ة L.H.",
    "testi.6": "«حنون، ماهر، ومتفاني. ساعد طفلنا على اكتساب الثقة والاستقلالية.»",
    "testi.client6": "- والد/ة N.F.",
    "contact.title": "تواصل معي",
    "contact.available": "متاح لجلسات خاصة",
    "contact.desc": "أنا متاح للاستشارات والجلسات الخاصة. دعنا نناقش كيف أستطيع مساعدة طفلك على تحقيق كامل إمكاناته.",
    "contact.email": "osama.banihamad@email.com",
    "contact.phone": "00971559698875",
    "contact.inst": "@osama_therapist",
    "contact.location": "الإمارات العربية المتحدة",
    "form.name": "الاسم",
    "form.email": "البريد الإلكتروني",
    "form.message": "الرسالة",
    "form.send": "إرسال الرسالة",
    "footer.rights": "جميع الحقوق محفوظة."
  }
};

/* =========================
   LANGUAGE / RTL
   ========================= */
function applyLanguage(lang) {
  // Walk all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;

    // Save original English text only once so we can revert
    if (!el.dataset.en) {
      // Use trimmed textContent as stored english
      el.dataset.en = el.textContent.trim();
    }

    if (lang === 'ar' && translations.ar[key]) {
      // handle anchors with inner <span> (e.g., CTA buttons)
      if (el.tagName.toLowerCase() === 'a' && el.querySelector('span')) {
        el.querySelector('span').textContent = translations.ar[key];
      } else {
        el.textContent = translations.ar[key];
      }
    } else if (lang === 'en') {
      // revert
      if (el.tagName.toLowerCase() === 'a' && el.querySelector('span') && el.dataset.en) {
        el.querySelector('span').textContent = el.dataset.en;
      } else if (el.dataset.en) {
        el.textContent = el.dataset.en;
      }
    }
  });

  // Document title
  if (lang === 'ar' && translations.ar['document.title']) {
    document.title = translations.ar['document.title'];
  } else {
    // Keep existing title or original; we stored page elements only, so leave as-is for EN
  }

  // RTL/LTR
  if (lang === 'ar') {
    document.documentElement.lang = 'ar';
    document.body.dir = 'rtl';
    document.body.classList.add('arabic');
    const btn = document.getElementById('langToggle'); if (btn) btn.textContent = 'EN';
    localStorage.setItem('siteLang', 'ar');
  } else {
    document.documentElement.lang = 'en';
    document.body.dir = 'ltr';
    document.body.classList.remove('arabic');
    const btn = document.getElementById('langToggle'); if (btn) btn.textContent = 'العربية';
    localStorage.setItem('siteLang', 'en');
  }

  // Re-run typing effect so hero title types with the currently applied language
  if (typeof initTypingEffect === 'function') {
    initTypingEffect();
  }
}

function initLanguageToggle() {
  const btn = document.getElementById('langToggle');
  const stored = localStorage.getItem('siteLang') || 'en';
  applyLanguage(stored);

  if (!btn) {
    console.warn('Language toggle button (#langToggle) not found. Add <button id="langToggle">العربية</button> in HTML.');
    return;
  }

  btn.addEventListener('click', () => {
    const current = localStorage.getItem('siteLang') || 'en';
    const next = current === 'ar' ? 'en' : 'ar';
    applyLanguage(next);
  });
}

/* =========================
   Typing effect (preserves child spans)
   ========================= */
window.__typingTimers = window.__typingTimers || [];
function clearTypingTimers() {
  if (window.__typingTimers && window.__typingTimers.length) {
    window.__typingTimers.forEach(t => clearTimeout(t));
    window.__typingTimers.length = 0;
  }
}

function initTypingEffect() {
  clearTypingTimers();
  const title = document.querySelector('.hero-title');
  if (!title) return;

  // If title has child elements (spans), type each separately
  const children = Array.from(title.children).filter(n => n.nodeType === 1);

  if (children.length > 0) {
    // store each child's full text then clear it
    children.forEach(child => {
      child.dataset.fullText = (child.textContent || '').trim();
      child.textContent = '';
    });

    function typeChild(i) {
      if (i >= children.length) return;
      const el = children[i];
      const text = el.dataset.fullText || '';
      let j = 0;
      function step() {
        if (j < text.length) {
          el.textContent += text.charAt(j);
          j++;
          window.__typingTimers.push(setTimeout(step, 70));
        } else {
          window.__typingTimers.push(setTimeout(() => typeChild(i + 1), 150));
        }
      }
      step();
    }

    // start after a short delay so translations apply visually
    window.__typingTimers.push(setTimeout(() => typeChild(0), 150));
  } else {
    // fallback: no children, type full title
    const full = (title.textContent || '').trim();
    title.textContent = '';
    let k = 0;
    function stepFull() {
      if (k < full.length) {
        title.textContent += full.charAt(k);
        k++;
        window.__typingTimers.push(setTimeout(stepFull, 90));
      }
    }
    window.__typingTimers.push(setTimeout(stepFull, 200));
  }
}

/* =========================
   UI / Animations / Helpers
   ========================= */

// Scroll Animations
function initScrollAnimations() {
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        if (entry.target.classList.contains('gallery-item')) {
          const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
          setTimeout(() => entry.target.classList.add('loaded'), delay);
        }
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.timeline-item, .gallery-item, .section-title');
  animatedElements.forEach(el => observer.observe(el));
}

// Smooth Scrolling
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    });
  });
}

// Contact Form
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const fd = new FormData(form);
    const name = fd.get('name'), email = fd.get('email'), message = fd.get('message');

    if (!name || !email || !message) {
      showNotification((localStorage.getItem('siteLang') === 'ar') ? 'يرجى تعبئة جميع الحقول' : 'Please fill in all fields', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showNotification((localStorage.getItem('siteLang') === 'ar') ? 'الرجاء إدخال بريد إلكتروني صالح' : 'Please enter a valid email address', 'error');
      return;
    }

    const submitButton = form.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    submitButton.textContent = (localStorage.getItem('siteLang') === 'ar') ? 'جاري الإرسال...' : 'Sending...';
    submitButton.disabled = true;

    setTimeout(() => {
      showNotification((localStorage.getItem('siteLang') === 'ar') ? 'شكرًا لرسالتك! سأتواصل معك قريبًا.' : 'Thank you for your message! I will get back to you soon.', 'success');
      form.reset();
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }, 2000);
  });

  // input focus effects
  document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(input => {
    input.addEventListener('focus', () => input.parentElement.classList.add('focused'));
    input.addEventListener('blur', () => { if (!input.value) input.parentElement.classList.remove('focused'); });
  });
}

// Gallery Animations
function initGalleryAnimations() {
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function() { 
      this.style.transform = 'translateY(-10px) scale(1.02)'; 
    });
    item.addEventListener('mouseleave', function() { 
      this.style.transform = 'translateY(0) scale(1)'; 
    });
    
    // Add click/tap functionality for better UX
    item.addEventListener('click', function() {
      const feedbackCard = this.querySelector('.feedback-card');
      if (feedbackCard) {
        const isVisible = feedbackCard.style.transform === 'translateY(0px)' || 
                         feedbackCard.classList.contains('visible');
        
        if (isVisible) {
          feedbackCard.style.transform = 'translateY(100%)';
          feedbackCard.classList.remove('visible');
          this.classList.remove('active');
        } else {
          feedbackCard.style.transform = 'translateY(0)';
          feedbackCard.classList.add('visible');
          this.classList.add('active');
        }
      }
    });
    
    // Add touch support for mobile
    item.addEventListener('touchstart', function(e) {
      e.preventDefault();
      this.click();
    });
  });
}

// Timeline Animations
function initTimelineAnimations() {
  document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('mouseenter', function() { this.style.transform = 'translateX(0) scale(1.05)'; });
    item.addEventListener('mouseleave', function() { this.style.transform = 'translateX(0) scale(1)'; });
  });
}

// Floating Shapes
function initFloatingShapes() {
  document.querySelectorAll('.floating-shape').forEach((shape, index) => {
    setInterval(() => {
      const randomX = Math.random() * 20 - 10;
      const randomY = Math.random() * 20 - 10;
      const randomRotation = Math.random() * 360;
      shape.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
    }, 3000 + index * 1000);
  });
}

// Helpers
function isValidEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }

// Notifications
function showNotification(message, type = 'info') {
  const existing = document.querySelector('.notification'); if (existing) existing.remove();
  const notification = document.createElement('div'); notification.className = `notification notification-${type}`; notification.textContent = message;
  notification.style.cssText = `position: fixed; top: 20px; padding: 15px 25px; border-radius: 10px; color: white; font-weight: 500; z-index: 1000; transform: translateX(100%); transition: transform 0.3s ease; max-width: 320px; box-shadow: 0 10px 25px rgba(0,0,0,0.2);`;

  // RTL placement
  if (document.body.classList.contains('arabic')) { notification.style.left = '20px'; notification.style.right = 'auto'; }
  else { notification.style.right = '20px'; notification.style.left = 'auto'; }

  if (type === 'success') notification.style.background = 'linear-gradient(135deg,#10b981,#059669)';
  else if (type === 'error') notification.style.background = 'linear-gradient(135deg,#ef4444,#dc2626)';
  else notification.style.background = 'linear-gradient(135deg,#3b82f6,#2563eb)';

  document.body.appendChild(notification);
  setTimeout(() => notification.style.transform = 'translateX(0)', 50);
  setTimeout(() => { notification.style.transform = 'translateX(100%)'; setTimeout(() => { if (notification.parentNode) notification.remove(); }, 300); }, 5000);
}

// Parallax
function initParallaxEffect() { window.addEventListener('scroll', () => { const scrolled = window.pageYOffset; const hero = document.querySelector('.hero'); if (hero) hero.style.transform = `translateY(${scrolled * -0.5}px)`; }); }

// Scroll progress bar
function initScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `position: fixed; top: 0; left: 0; width: 0%; height: 3px; background: linear-gradient(135deg,#2563eb,#ec4899); z-index: 1000; transition: width 0.1s ease;`;
  document.body.appendChild(progressBar);
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / Math.max(1, docHeight)) * 100;
    progressBar.style.width = scrollPercent + '%';
  });
}

// CTA hover
function initCTAEffects() { document.querySelectorAll('.cta-button').forEach(btn => { btn.addEventListener('mouseenter', function() { this.style.transform = 'translateY(-3px) scale(1.05)'; }); btn.addEventListener('mouseleave', function() { this.style.transform = 'translateY(0) scale(1)'; }); }); }

// Section highlighting
function initSectionHighlighting() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('a[href^="#"]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
      }
    });
  }, { threshold: 0.5 });
  sections.forEach(s => observer.observe(s));
}

/* =========================
   Initialization (single DOMContentLoaded)
   ========================= */

document.addEventListener('DOMContentLoaded', function() {
  initLanguageToggle();

  // UI features
  initScrollAnimations();
  initSmoothScrolling();
  initContactForm();
  initGalleryAnimations();
  initTimelineAnimations();
  initFloatingShapes();
  initParallaxEffect();
  initScrollProgress();
  initCTAEffects();
  initSectionHighlighting();

  // typing runs as part of applyLanguage; ensure runs now
  if (typeof initTypingEffect === 'function') initTypingEffect();

  // add loaded class on window load
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    const heroElements = document.querySelectorAll('.hero-name, .hero-title, .hero-description, .cta-button');
    heroElements.forEach((el, index) => {
      setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }, index * 200);
    });
  });
  
  // No longer needed - removed hint functionality
});

