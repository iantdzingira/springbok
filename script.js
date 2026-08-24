/**
 * SPRINGBOK TRAVELS & TOURS — site script
 * Renders dynamic content from SPRINGBOK_DATA (data.js) and wires up
 * navigation, modals, the activity filter, and the booking flow.
 */

const ICONS = {
    compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" fill="currentColor" stroke="none"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14z"/><path d="M5 19c0-5 3-9 9-11"/></svg>',
    tent: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 19h18"/><path d="M12 5l8 14H4l8-14z"/><path d="M12 5v14"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7L12 17.3 5.7 20.9l1.7-7L2 9.2l7.1-.6L12 2z"/></svg>',

    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 21s-7-6.5-7-11.5a7 7 0 0 1 14 0C19 14.5 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.3"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.5l.5-3H14V9z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none"/></svg>',
    twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.3-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.9 3.7A11.5 11.5 0 0 1 3.4 4.6a4 4 0 0 0 1.3 5.4c-.6 0-1.3-.2-1.8-.5v.1a4 4 0 0 0 3.3 4 4 4 0 0 1-1.8.1 4 4 0 0 0 3.8 2.8A8.1 8.1 0 0 1 2 18.4a11.5 11.5 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z"/></svg>',
};

let starGradCounter = 0;
function starRating(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    let html = '';
    for (let i = 0; i < full; i++) html += ICONS.star;
    if (half) {
        const gradId = `halfGrad${starGradCounter++}`;
        html += `<svg viewBox="0 0 24 24"><defs><linearGradient id="${gradId}"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="transparent"/></linearGradient></defs><path fill="url(#${gradId})" stroke="currentColor" stroke-width="0.5" d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7L12 17.3 5.7 20.9l1.7-7L2 9.2l7.1-.6L12 2z"/></svg>`;
    }
    return html;
}

function mediaTag(src, label, extraClass = '') {
    return `<div class="media ${extraClass}" data-label="${label}">
    <img class="media-img" src="${src}" alt="${label}" loading="lazy"
      onerror="this.closest('.media').classList.add('media--missing')">
  </div>`;
}

/* ---------------- Header / nav ---------------- */
function initHeader() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            const open = navLinks.classList.toggle('is-open');
            hamburger.classList.toggle('is-open', open);
            hamburger.setAttribute('aria-expanded', String(open));
        });
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('is-open');
                hamburger.classList.remove('is-open');
            });
        });
    }

    // Mark active nav link based on current page
    const current = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link[href]').forEach(link => {
        const href = link.getAttribute('href');
        if (href === current || (current === '' && href === 'index.html')) {
            link.classList.add('is-active');
        }
    });
}

/* ---------------- Scroll reveal ---------------- */
function initReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    // Stagger items that sit in the same grid/row so groups of cards
    // cascade in rather than popping together.
    let groupParent = null;
    let groupIndex = 0;
    items.forEach((el) => {
        if (el.parentElement !== groupParent) {
            groupParent = el.parentElement;
            groupIndex = 0;
        }
        el.style.setProperty('--reveal-i', groupIndex % 8);
        groupIndex++;
    });

    if (!('IntersectionObserver' in window)) {
        items.forEach(el => el.classList.add('is-visible'));
        return;
    }
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    items.forEach(el => obs.observe(el));
}

/* ---------------- Card tilt-on-hover (pointer-fine devices only) ---------------- */
function initTilt() {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const selector = '.tour-card, .activity-card';

    document.addEventListener('mousemove', (e) => {
        const card = e.target.closest?.(selector);
        if (!card) return;
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(900px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg) translateY(-4px)`;
    });

    document.addEventListener('mouseout', (e) => {
        const card = e.target.closest?.(selector);
        if (!card) return;
        const related = e.relatedTarget;
        if (related && card.contains(related)) return;
        card.style.transform = '';
    });
}

/* ---------------- Tour cards ---------------- */
function tourCardHTML(tour, opts = {}) {
    const meta = tour.duration ? tour.duration : tour.unit;
    return `
    <div class="tour-card reveal" data-slug="${tour.slug}" tabindex="0" role="button" aria-haspopup="dialog">
      <div class="tour-card__media">${mediaTag(tour.image, tour.title)}</div>
      <div class="tour-card__overlay"></div>
      <div class="tour-card__price">$${tour.price}</div>
      <div class="tour-card__body">
        <div class="tour-card__title">${tour.title}</div>
        <div class="tour-card__meta">${meta}</div>
        <div class="tour-card__actions">
          <span class="tour-card__link">View details</span>
          <button class="btn btn--gold btn--sm" data-book="${tour.slug}">Book now</button>
        </div>
      </div>
    </div>`;
}

function renderTourSlider() {
    const track = document.querySelector('#tour-slider .splide__list');
    if (!track) return;
    track.innerHTML = SPRINGBOK_DATA.TOURS.map(t =>
        `<li class="splide__slide">${tourCardHTML(t)}</li>`
    ).join('');

    if (window.Splide) {
        new Splide('#tour-slider', {
            type: 'loop',
            perPage: 4,
            perMove: 1,
            gap: '24px',
            autoplay: true,
            interval: 4500,
            pauseOnHover: true,
            pagination: true,
            arrows: true,
            breakpoints: {
                1180: { perPage: 3 },
                900: { perPage: 2 },
                640: { perPage: 1, arrows: false },
            },
        }).mount();
    }
}

function renderTourGrid() {
    const grid = document.querySelector('#tour-grid');
    if (!grid) return;
    grid.innerHTML = SPRINGBOK_DATA.TOURS.map(t => tourCardHTML(t)).join('');
}

/* ---------------- Why us: flip cards ---------------- */
function renderWhyUs() {
    const grid = document.querySelector('#why-grid');
    if (!grid) return;
    grid.innerHTML = SPRINGBOK_DATA.WHY_US.map(item => `
    <div class="flip-card reveal" tabindex="0">
      <div class="flip-card__inner">
        <div class="flip-card__face flip-card__front">
          <div class="flip-icon">${ICONS[item.icon] || ''}</div>
          <h4>${item.front}</h4>
          <span class="flip-hint">Hover to read more</span>
        </div>
        <div class="flip-card__face flip-card__back">
          <h4>${item.front}</h4>
          <p>${item.back}</p>
        </div>
      </div>
    </div>`).join('');

    // Touch fallback: tap toggles flip
    grid.querySelectorAll('.flip-card').forEach(card => {
        card.addEventListener('click', () => {
            const inner = card.querySelector('.flip-card__inner');
            const flipped = inner.style.transform === 'rotateY(180deg)';
            inner.style.transform = flipped ? '' : 'rotateY(180deg)';
        });
    });
}

/* ---------------- Reviews ---------------- */
function renderReviews() {
    const grid = document.querySelector('#reviews-grid');
    if (!grid) return;
    grid.innerHTML = SPRINGBOK_DATA.REVIEWS.map(r => `
    <div class="review-card reveal">
      <div class="review-stars">${starRating(r.rating)}</div>
      <p class="review-text">&ldquo;${r.text}&rdquo;</p>
      <div class="review-person">
        <div class="review-avatar">${r.initials}</div>
        <div class="review-name">${r.name}</div>
      </div>
    </div>`).join('');
}

/* ---------------- Activities filter (Activities page) ---------------- */
function renderActivities() {
    const grid = document.querySelector('#activity-grid');
    const bar = document.querySelector('#filter-bar');
    if (!grid || !bar) return;

    bar.innerHTML = SPRINGBOK_DATA.CAT_LABELS.map((cat, i) =>
        `<button class="filter-btn ${i === 0 ? 'is-active' : ''}" data-cat="${cat}">${cat}</button>`
    ).join('');

    grid.innerHTML = SPRINGBOK_DATA.ACTIVITIES.map(a => `
    <div class="activity-card reveal" data-cat="${a.cat}" data-slug="${a.slug}">
      ${mediaTag(a.image, a.title)}
      <div class="activity-card__body">
        <div class="activity-card__cat">${a.cat}</div>
        <div class="activity-card__title">${a.title}</div>
        <div class="activity-card__footer">
          <div class="activity-card__price">From <strong>$${a.price}</strong> pp</div>
          <button class="btn btn--gold btn--sm" data-book-activity="${a.slug}">Book now</button>
        </div>
      </div>
    </div>`).join('');

    bar.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            const cat = btn.dataset.cat;
            grid.querySelectorAll('.activity-card').forEach(card => {
                const show = cat === 'all' || card.dataset.cat === cat;
                card.classList.toggle('is-hidden', !show);
            });
        });
    });
}

/* ---------------- Tour details + booking modals ---------------- */
function initModals() {
    const tourModal = document.querySelector('#tour-modal');
    const bookingModal = document.querySelector('#booking-modal');
    const confirmModal = document.querySelector('#confirmation-modal');

    const openModal = (m) => { if (!m) return; m.style.display = 'flex'; requestAnimationFrame(() => m.classList.add('is-visible')); };
    const closeModal = (m) => { if (!m) return; m.classList.remove('is-visible'); setTimeout(() => { m.style.display = 'none'; }, 300); };

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(overlay); });
        overlay.querySelector('.modal-close')?.addEventListener('click', () => closeModal(overlay));
    });

    let currentTour = null;

    function fillTourModal(tour) {
        currentTour = tour;
        tourModal.querySelector('#modal-title').textContent = tour.title;
        tourModal.querySelector('#modal-eyebrow').textContent = SPRINGBOK_DATA.BRAND.location;
        tourModal.querySelector('#modal-description').textContent = tour.desc;
        tourModal.querySelector('#modal-price').textContent = `$${tour.price}`;
        tourModal.querySelector('#modal-unit').textContent = tour.duration || tour.unit;
        const media = tourModal.querySelector('#modal-media');
        media.innerHTML = mediaTag(tour.image, tour.title);
        const wa = tourModal.querySelector('#modal-whatsapp');
        if (wa) wa.href = `${SPRINGBOK_DATA.BRAND.whatsappHref}?text=${encodeURIComponent(`Hi Springbok, I'd like to know more about the ${tour.title}.`)}`;
    }

    function openBookingModal(tour) {
        const select = document.querySelector('#tour-selection');
        if (select && tour) select.value = tour.slug;
        openModal(bookingModal);
    }

    // Populate booking form's tour select
    const select = document.querySelector('#tour-selection');
    if (select) {
        SPRINGBOK_DATA.TOURS.forEach(t => {
            const opt = document.createElement('option');
            opt.value = t.slug;
            opt.textContent = `${t.title} — $${t.price} ${t.unit}`;
            select.appendChild(opt);
        });
    }

    // Click delegation for cards (details + book buttons)
    document.addEventListener('click', (e) => {
        const bookBtn = e.target.closest('[data-book]');
        if (bookBtn) {
            e.stopPropagation();
            const tour = SPRINGBOK_DATA.TOURS.find(t => t.slug === bookBtn.dataset.book);
            openBookingModal(tour);
            return;
        }
        const card = e.target.closest('.tour-card');
        if (card && tourModal) {
            const tour = SPRINGBOK_DATA.TOURS.find(t => t.slug === card.dataset.slug);
            if (tour) { fillTourModal(tour); openModal(tourModal); }
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter') return;
        const card = e.target.closest?.('.tour-card');
        if (card && tourModal) {
            const tour = SPRINGBOK_DATA.TOURS.find(t => t.slug === card.dataset.slug);
            if (tour) { fillTourModal(tour); openModal(tourModal); }
        }
    });

    tourModal?.querySelector('#modal-book-now')?.addEventListener('click', () => {
        closeModal(tourModal);
        setTimeout(() => openBookingModal(currentTour), 300);
    });

    /* --- Booking form --- */
    const bookingForm = document.querySelector('#booking-form');
    if (bookingForm && confirmModal) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const slug = document.querySelector('#tour-selection').value;
            const tour = SPRINGBOK_DATA.TOURS.find(t => t.slug === slug);
            if (!tour) { alert('Please choose a tour.'); return; }

            const pax = parseInt(document.querySelector('#pax').value, 10) || 1;
            const date = document.querySelector('#tour-date').value;
            const firstName = document.querySelector('#first-name').value;
            const lastName = document.querySelector('#last-name').value;
            const email = document.querySelector('#email').value;
            const total = tour.price * pax;

            document.querySelector('#conf-tour').textContent = tour.title;
            document.querySelector('#conf-date').textContent = date;
            document.querySelector('#conf-pax').textContent = pax;
            document.querySelector('#conf-name').textContent = `${firstName} ${lastName}`;
            document.querySelector('#conf-email').textContent = email;
            document.querySelector('#conf-price').textContent = `$${total.toFixed(2)} USD`;

            confirmModal.dataset.mailto = buildBookingMailto({ tour, pax, date, firstName, lastName, email, total });

            closeModal(bookingModal);
            setTimeout(() => openModal(confirmModal), 300);
        });

        document.querySelector('#edit-booking')?.addEventListener('click', () => {
            closeModal(confirmModal);
            setTimeout(() => openModal(bookingModal), 300);
        });

        document.querySelector('#confirm-and-send')?.addEventListener('click', () => {
            const mailto = confirmModal.dataset.mailto;
            if (mailto) window.location.href = mailto;
            closeModal(confirmModal);
            bookingForm.reset();
        });
    }
}

function buildBookingMailto({ tour, pax, date, firstName, lastName, email, total }) {
    const subject = `Booking request: ${tour.title}`;
    const body = [
        `Tour: ${tour.title}`,
        `Date: ${date}`,
        `Guests: ${pax}`,
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Estimated total: $${total.toFixed(2)} USD`,
        '',
        'Sent from the Springbok Travels & Tours website.',
    ].join('\n');
    return `mailto:${SPRINGBOK_DATA.BRAND.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/* ---------------- Activity booking modal (Activities page) ---------------- */
function initActivityBooking() {
    const bookingModal = document.querySelector('#activity-booking-modal');
    const confirmModal = document.querySelector('#activity-confirmation-modal');
    if (!bookingModal || !confirmModal) return; // only present on activities.html

    const openModal = (m) => { if (!m) return; m.style.display = 'flex'; requestAnimationFrame(() => m.classList.add('is-visible')); };
    const closeModal = (m) => { if (!m) return; m.classList.remove('is-visible'); setTimeout(() => { m.style.display = 'none'; }, 300); };
    // Overlay click-to-close and the .modal-close button are already wired
    // generically for every .modal-overlay in initModals(), so these two
    // modals are covered without repeating that binding here.

    const select = document.querySelector('#activity-selection');
    if (select) {
        SPRINGBOK_DATA.ACTIVITIES.forEach(a => {
            const opt = document.createElement('option');
            opt.value = a.slug;
            opt.textContent = `${a.title} — $${a.price} per person`;
            select.appendChild(opt);
        });
    }

    function openBookingModal(activity) {
        if (select && activity) select.value = activity.slug;
        openModal(bookingModal);
    }

    document.addEventListener('click', (e) => {
        const bookBtn = e.target.closest('[data-book-activity]');
        if (!bookBtn) return;
        e.stopPropagation();
        const activity = SPRINGBOK_DATA.ACTIVITIES.find(a => a.slug === bookBtn.dataset.bookActivity);
        openBookingModal(activity);
    });

    const bookingForm = document.querySelector('#activity-booking-form');
    if (!bookingForm) return;

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const slug = select.value;
        const activity = SPRINGBOK_DATA.ACTIVITIES.find(a => a.slug === slug);
        if (!activity) { alert('Please choose an activity.'); return; }

        const pax = parseInt(document.querySelector('#a-pax').value, 10) || 1;
        const date = document.querySelector('#a-date').value;
        const firstName = document.querySelector('#a-first-name').value;
        const lastName = document.querySelector('#a-last-name').value;
        const email = document.querySelector('#a-email').value;
        const total = activity.price * pax;

        document.querySelector('#aconf-activity').textContent = activity.title;
        document.querySelector('#aconf-date').textContent = date;
        document.querySelector('#aconf-pax').textContent = pax;
        document.querySelector('#aconf-name').textContent = `${firstName} ${lastName}`;
        document.querySelector('#aconf-email').textContent = email;
        document.querySelector('#aconf-price').textContent = `$${total.toFixed(2)} USD`;

        confirmModal.dataset.mailto = buildActivityBookingMailto({ activity, pax, date, firstName, lastName, email, total });

        closeModal(bookingModal);
        setTimeout(() => openModal(confirmModal), 300);
    });

    document.querySelector('#activity-edit-booking')?.addEventListener('click', () => {
        closeModal(confirmModal);
        setTimeout(() => openModal(bookingModal), 300);
    });

    document.querySelector('#activity-confirm-and-send')?.addEventListener('click', () => {
        const mailto = confirmModal.dataset.mailto;
        if (mailto) window.location.href = mailto;
        closeModal(confirmModal);
        bookingForm.reset();
    });
}

function buildActivityBookingMailto({ activity, pax, date, firstName, lastName, email, total }) {
    const subject = `Booking request: ${activity.title}`;
    const body = [
        `Activity: ${activity.title}`,
        `Date: ${date}`,
        `Guests: ${pax}`,
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Estimated total: $${total.toFixed(2)} USD`,
        '',
        'Sent from the Springbok Travels & Tours website.',
    ].join('\n');
    return `mailto:${SPRINGBOK_DATA.BRAND.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/* ---------------- Contact form ---------------- */
function initContactForm() {
    const form = document.querySelector('#contact-form');
    if (!form) return;
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.querySelector('#contact-name').value;
        const email = document.querySelector('#contact-email').value;
        const subject = document.querySelector('#contact-subject').value;
        const message = document.querySelector('#contact-message').value;
        const body = `From: ${name} (${email})\n\n${message}`;

        const sent = await sendAutomatedEmail({ subject, body, replyTo: email });
        if (sent) {
            form.reset();
            showToast("Thanks — your message is on its way. We'll reply soon.");
            return;
        }
        window.location.href = `mailto:${SPRINGBOK_DATA.BRAND.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
}

/* ---------------- Email automation (EmailJS, with mailto fallback) ----------------
 * Sends straight from the browser via EmailJS when SPRINGBOK_DATA.EMAILJS.enabled
 * is true and configured — no mail app popup, no backend server needed.
 * Returns true if the email was actually sent automatically, false if the
 * caller should fall back to a mailto: link instead. */
let emailjsReady = null;
function loadEmailJS() {
    if (emailjsReady) return emailjsReady;
    emailjsReady = new Promise((resolve, reject) => {
        if (window.emailjs) { resolve(window.emailjs); return; }
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
        script.onload = () => resolve(window.emailjs);
        script.onerror = reject;
        document.head.appendChild(script);
    });
    return emailjsReady;
}

async function sendAutomatedEmail({ subject, body, replyTo }) {
    const cfg = SPRINGBOK_DATA.EMAILJS;
    if (!cfg || !cfg.enabled || !cfg.publicKey || cfg.publicKey.startsWith('YOUR_')) return false;
    try {
        const emailjs = await loadEmailJS();
        emailjs.init({ publicKey: cfg.publicKey });
        await emailjs.send(cfg.serviceId, cfg.templateId, {
            to_email: SPRINGBOK_DATA.BRAND.email,
            reply_to: replyTo || SPRINGBOK_DATA.BRAND.email,
            subject,
            message: body,
        });
        return true;
    } catch (err) {
        console.warn('EmailJS send failed, falling back to mailto:', err);
        return false;
    }
}

function showToast(text) {
    let toast = document.querySelector('.sb-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'sb-toast';
        document.body.appendChild(toast);
    }
    toast.textContent = text;
    requestAnimationFrame(() => toast.classList.add('is-visible'));
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => toast.classList.remove('is-visible'), 4000);
}

/* ---------------- Cookie consent bar ---------------- */
function initCookieConsent() {
    const KEY = 'sb_cookie_consent';
    if (localStorage.getItem(KEY)) return;

    const bar = document.createElement('div');
    bar.className = 'cookie-bar';
    bar.innerHTML = `
    <div class="cookie-bar__text">
      We use a small amount of essential storage to remember things like this
      choice and your booking preferences. No tracking or ad cookies.
      <a href="privacy.html">Privacy policy</a>
    </div>
    <div class="cookie-bar__actions">
      <button type="button" class="cookie-bar__decline">Essential only</button>
      <button type="button" class="btn btn--gold">Accept</button>
    </div>`;
    document.body.appendChild(bar);
    requestAnimationFrame(() => bar.classList.add('is-visible'));

    const dismiss = (value) => {
        localStorage.setItem(KEY, value);
        bar.classList.remove('is-visible');
        setTimeout(() => bar.remove(), 500);
    };
    bar.querySelector('.btn--gold').addEventListener('click', () => dismiss('accepted'));
    bar.querySelector('.cookie-bar__decline').addEventListener('click', () => dismiss('essential-only'));
}

/* ---------------- Partner/sponsor card — Random & 40-Min Cycle ---------------- */
function initAdCard() {
    // 1. Safety check
    if (typeof SPRINGBOK_DATA === 'undefined' || !SPRINGBOK_DATA?.ADS_ENABLED) return;
    const ads = SPRINGBOK_DATA.ADS;
    if (!Array.isArray(ads) || ads.length === 0) return;

    // 2. Prevent stacked duplicate cards (fixes the 2-click close bug)
    let card = document.querySelector('.ad-card');
    if (!card) {
        card = document.createElement('div');
        card.className = 'ad-card';
        document.body.appendChild(card);

        // Bind single close event listener via delegation
        card.addEventListener('click', (e) => {
            if (e.target.closest('.ad-card__close')) {
                e.preventDefault();
                hide();
            }
        });
    }

    let cycleTimer = null;

    // Helper: Select a random ad from the list
    function getRandomAd() {
        const randomIndex = Math.floor(Math.random() * ads.length);
        return ads[randomIndex];
    }

    function render() {
        const ad = getRandomAd(); // 🎲 Picks a random ad
        card.innerHTML = `
            <div class="ad-card__top">
                <span class="ad-card__label">${ad.label || 'Sponsor'}</span>
                <button type="button" class="ad-card__close" aria-label="Dismiss">&times;</button>
            </div>
            <div class="ad-card__title">${ad.title || ''}</div>
            <p class="ad-card__text">${ad.text || ''}</p>
            <a href="${ad.href || '#'}" target="_blank" rel="noopener" class="ad-card__cta">${ad.cta || 'Learn More'} &rarr;</a>
        `;
        show();
    }

    function show() {
        card.classList.add('is-visible');
    }

    function hide() {
        card.classList.remove('is-visible');

        // ⏱️ Wait 40 minutes (40 min * 60 sec * 1000 ms) before showing another random ad
        clearTimeout(cycleTimer);
        cycleTimer = setTimeout(render, 40 * 60 * 1000);
    }

    // Display first random ad 8 seconds after page load
    setTimeout(render, 8000);
}

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAdCard);
} else {
    initAdCard();
}

function initSplitMedia() {
    const media = [
        document.getElementById('splitMedia1'),
        document.getElementById('splitMedia2'),
        document.getElementById('splitMedia3')
    ];

    const usedImages = new Set();

    media.forEach(img => {
        if (!img) return;

        let item;

        // Keep selecting until we get a different image
        do {
            item = getRandomSpringbokImage();
        } while (usedImages.has(item.image) && usedImages.size < 10);

        usedImages.add(item.image);

        img.src = item.image;
        img.alt = item.title;

        // Update the label on the parent .media
        const container = img.closest('.media');

        if (container) {
            container.dataset.label = item.title;
        }
    });
}

/* ---------------- Boot ---------------- */
document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    renderTourSlider();
    renderTourGrid();
    renderWhyUs();
    renderReviews();
    renderActivities();
    initModals();
    initActivityBooking();
    initContactForm();
    initReveal();
    initTilt();
    initCookieConsent();
    initAdCard();
    initSplitMedia();
});