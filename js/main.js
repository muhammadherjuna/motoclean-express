/**
 * MotoClean Express - Skrip Utama
 * Mengatur Navigasi, Menu Ponsel, Slider Pembanding Foto, Galeri, dan WhatsApp.
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initMobileMenu();
  initWhatsAppLinks();
  initBeforeAfterSlider();
  initGalleryFilterAndLightbox();
  initFAQAccordion();
  initScrollAnimations();
});

/**
 * Membentuk tautan resmi WhatsApp dengan pesan terformat
 */
function getWhatsAppUrl(customMessage) {
  const phone = CONFIG.whatsappNumber || "6281234567890";
  const defaultText = `Halo ${CONFIG.brandName}, saya ingin bertanya mengenai layanan cuci motor.`;
  const text = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${phone}?text=${text}`;
}

/**
 * Menghubungkan seluruh tombol WhatsApp pada halaman secara dinamis
 */
function initWhatsAppLinks() {
  const waButtons = document.querySelectorAll("[data-wa-action]");

  waButtons.forEach((btn) => {
    const actionType = btn.getAttribute("data-wa-action");
    let msg = "";

    if (actionType === "hero") {
      msg = `Halo ${CONFIG.brandName}, saya ingin memesan layanan cuci motor melalui website. Kapan jadwal terdekat yang tersedia?`;
    } else if (actionType === "promo") {
      msg = CONFIG.promos.newCustomer.waMessage;
    } else if (actionType === "service-basic") {
      msg = CONFIG.services[0].waMessage;
    } else if (actionType === "service-premium") {
      msg = CONFIG.services[1].waMessage;
    } else if (actionType === "service-detailing") {
      msg = CONFIG.services[2].waMessage;
    } else if (actionType === "general") {
      msg = `Halo ${CONFIG.brandName}, saya ingin menanyakan lokasi dan antrean cuci motor saat ini.`;
    }

    btn.href = getWhatsAppUrl(msg);
    btn.setAttribute("target", "_blank");
    btn.setAttribute("rel", "noopener noreferrer");
  });
}

/**
 * Navigasi menempel (sticky header) dan penanda bagian aktif saat digulir
 */
function initNavbar() {
  const header = document.querySelector(".site-header");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    let currentSectionId = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll();
}

/**
 * Navigasi menu samping untuk perangkat ponsel
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById("menu-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const overlay = document.getElementById("drawer-overlay");
  const closeBtn = document.getElementById("drawer-close");
  const drawerLinks = document.querySelectorAll(".drawer-link");

  function openDrawer() {
    mobileDrawer.classList.add("open");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
    if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "true");
  }

  function closeDrawer() {
    mobileDrawer.classList.remove("open");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
    if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
  }

  if (toggleBtn) toggleBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (overlay) overlay.addEventListener("click", closeDrawer);

  drawerLinks.forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });
}

/**
 * Slider interaktif perbandingan Sebelum dan Sesudah
 */
function initBeforeAfterSlider() {
  const container = document.querySelector(".ba-slider-container");
  if (!container) return;

  const afterImg = container.querySelector(".ba-after-img");
  const handle = container.querySelector(".ba-slider-handle");
  let isDragging = false;

  function updateSliderPosition(x) {
    const rect = container.getBoundingClientRect();
    let offsetX = x - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;

    const percentage = (offsetX / rect.width) * 100;
    afterImg.style.clipPath = `polygon(${percentage}% 0, 100% 0, 100% 100%, ${percentage}% 100%)`;
    handle.style.left = `${percentage}%`;
  }

  handle.addEventListener("mousedown", () => (isDragging = true));
  window.addEventListener("mouseup", () => (isDragging = false));
  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  });

  handle.addEventListener("touchstart", () => (isDragging = true), { passive: true });
  window.addEventListener("touchend", () => (isDragging = false));
  window.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    if (e.touches && e.touches[0]) {
      updateSliderPosition(e.touches[0].clientX);
    }
  }, { passive: true });

  container.addEventListener("click", (e) => {
    updateSliderPosition(e.clientX);
  });
}

/**
 * Penyaringan kategori galeri foto dan pratinjau modal
 */
function initGalleryFilterAndLightbox() {
  const filterBtns = document.querySelectorAll(".gallery-filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");
      galleryItems.forEach((item) => {
        const category = item.getAttribute("data-category");
        if (filterValue === "all" || category === filterValue) {
          item.style.display = "block";
          setTimeout(() => (item.style.opacity = "1"), 50);
        } else {
          item.style.opacity = "0";
          setTimeout(() => (item.style.display = "none"), 200);
        }
      });
    });
  });

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      const caption = item.getAttribute("data-caption") || img.alt;
      if (img && lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxCaption.textContent = caption;
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener("click", () => {
      lightbox.classList.remove("active");
      document.body.style.overflow = "";
    });
  }

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }
}

/**
 * Fungsi buka-tutup accordion pada bagian FAQ
 */
function initFAQAccordion() {
  const accordionItems = document.querySelectorAll(".faq-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".faq-header");

    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      accordionItems.forEach((other) => {
        other.classList.remove("active");
        const btn = other.querySelector(".faq-header");
        if (btn) btn.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("active");
        header.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/**
 * Animasi kemunculan elemen saat layar digulir
 */
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px"
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll(".reveal");
  revealElements.forEach((el) => observer.observe(el));
}
