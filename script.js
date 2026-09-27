/* Incraft — Hand-Poured Candles */

const img = (id, w = 1000) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const PRODUCTS = [
  {
    id: "bergamot-fig", kind: "jar", kindLabel: "Scented Jar", tag: "Bestseller",
    name: "Bergamot & Fig", price: 68, photo: "1596433809252-260c2745dfdd",
    notes: { top: "Calabrian bergamot, pink pepper", heart: "Green fig leaf, neroli", base: "Cedarwood, white musk" },
    desc: "A late-summer garden in a glass. Sparkling bergamot opens onto the milky green of fig leaves warmed by the sun.",
    specs: { "Burn time": "60 hours", "Weight": "280 g", "Wax": "Coconut-soy", "Vessel": "Rose-tinted glass" },
  },
  {
    id: "ambre-noir", kind: "jar", kindLabel: "Scented Jar", tag: "New",
    name: "Ambre Noir", price: 74, photo: "1612293905607-b003de9e54fb",
    notes: { top: "Saffron, black cardamom", heart: "Labdanum, smoked tea", base: "Amber, vanilla absolute" },
    desc: "A deep, resinous amber lit by saffron and a thread of smoke. Made for long evenings and low light.",
    specs: { "Burn time": "65 hours", "Weight": "300 g", "Wax": "Coconut-soy", "Vessel": "Mouth-blown amber glass" },
  },
  {
    id: "apothecary-duo", kind: "jar", kindLabel: "Scented Jar · Set of two",
    name: "Cèdre & Fumée Duo", price: 96, photo: "1572726729207-a78d6feb18d7",
    notes: { top: "Juniper berry, bay leaf", heart: "Atlas cedar, birch tar", base: "Vetiver, guaiac wood" },
    desc: "Two apothecary jars, one fragrance: a walk through a cedar forest just after a bonfire has been put out.",
    specs: { "Burn time": "2 × 40 hours", "Weight": "2 × 180 g", "Wax": "Coconut-soy", "Vessel": "Amber apothecary glass" },
  },
  {
    id: "nordic-frost", kind: "jar", kindLabel: "Scented Jar",
    name: "Nordic Frost", price: 64, photo: "1602874801007-bd458bb1b8b6",
    notes: { top: "Frosted mint, eucalyptus", heart: "Fir balsam, cashmere wood", base: "Tonka, soft suede" },
    desc: "Cool air and warm wool. The crisp freshness of a pine forest, wrapped in something soft.",
    specs: { "Burn time": "55 hours", "Weight": "260 g", "Wax": "Coconut-soy", "Vessel": "Smoked glass tumbler" },
  },
  {
    id: "hearth", kind: "jar", kindLabel: "Scented Jar",
    name: "Hearth", price: 58, photo: "1605651202774-7d573fd3f12d",
    notes: { top: "Blood orange, clove", heart: "Toasted chestnut, cinnamon bark", base: "Oak, benzoin" },
    desc: "An old farmhouse kitchen in December: citrus peel drying by the stove, chestnuts roasting, oak beams overhead.",
    specs: { "Burn time": "50 hours", "Weight": "240 g", "Wax": "Coconut-soy", "Vessel": "Clear pressed glass" },
  },
  {
    id: "ivory-pillars", kind: "pillar", kindLabel: "Pillar · Set of three", tag: "Unscented",
    name: "Ivory Pillar Trio", price: 52, photo: "1604449387214-e4672cd87563",
    notes: { top: "Unscented", heart: "Pure rapeseed wax", base: "Slow, even burn" },
    desc: "Three sculptural pillars in soft ivory, graduated in height. Made to sit on a mantel or run the length of a table.",
    specs: { "Burn time": "40 / 55 / 70 hours", "Size": "7.5 cm Ø", "Wax": "Rapeseed", "Finish": "Hand-polished" },
  },
  {
    id: "rustic-pillars", kind: "pillar", kindLabel: "Pillar · Set of three",
    name: "Cire Brute Pillars", price: 48, photo: "1602523961358-f9f03dd557db",
    notes: { top: "Unscented", heart: "Raw beeswax blend", base: "Natural honey tone" },
    desc: "Hand-dipped pillars that drip and pool as they burn, getting more beautiful with every evening.",
    specs: { "Burn time": "45 hours each", "Size": "6 cm Ø", "Wax": "Beeswax blend", "Finish": "Hand-dipped" },
  },
  {
    id: "dinner-tapers", kind: "taper", kindLabel: "Taper · Set of six", tag: "Dripless",
    name: "Soirée Tapers", price: 38, photo: "1545666215-c5fbc4a9f4fd",
    notes: { top: "Unscented", heart: "Dripless formula", base: "Braided cotton wick" },
    desc: "Tall, slender and entirely dripless. Made for long dinners and the conversations after them.",
    specs: { "Burn time": "10 hours each", "Height": "30 cm", "Wax": "Rapeseed-beeswax", "Fits": "Standard holders" },
  },
  {
    id: "nocturne-taper", kind: "taper", kindLabel: "Taper · Pair",
    name: "Nocturne Tapers", price: 32, photo: "1570930816498-36f11de68fc0",
    notes: { top: "Faint oud", heart: "Hand-dipped beeswax", base: "Natural honeyed glow" },
    desc: "Pure beeswax tapers dipped by hand forty times and lightly scented with oud. They give off a warm, honeyed light.",
    specs: { "Burn time": "12 hours each", "Height": "35 cm", "Wax": "Pure beeswax", "Fits": "Standard holders" },
  },
  {
    id: "veilleuse", kind: "votive", kindLabel: "Votive · Set of four", tag: "Gift",
    name: "Veilleuse Votives", price: 44, photo: "1663089889826-0575c6ae19de",
    notes: { top: "Roasted hazelnut", heart: "Brown sugar, cocoa husk", base: "Sandalwood" },
    desc: "Four small votives in heavy glass with a gourmand hazelnut scent. Made to be scattered around a room.",
    specs: { "Burn time": "4 × 18 hours", "Weight": "4 × 90 g", "Wax": "Coconut-soy", "Vessel": "Thick-cut glass" },
  },
  {
    id: "lumiere-glow", kind: "votive", kindLabel: "Votive · Set of six",
    name: "Lumière Tealights", price: 36, photo: "1549877696-a46dda28ffa8",
    notes: { top: "Pear, white tea", heart: "Iris, rice flower", base: "Soft musk" },
    desc: "Six tealights in turned ash-wood holders, lightly scented with white tea. Bright, clean and serene.",
    specs: { "Burn time": "6 × 8 hours", "Weight": "6 × 40 g", "Wax": "Coconut-soy", "Holder": "Turned ash wood" },
  },
  {
    id: "golden-hour", kind: "pillar", kindLabel: "Pillar · Collection", tag: "Limited",
    name: "Golden Hour Set", price: 120, photo: "1601479604588-68d9e6d386b5",
    notes: { top: "Honey, apricot", heart: "Beeswax absolute", base: "Warm amber" },
    desc: "Seven pillars in graduated heights, lightly honey-scented, for when you want a whole room lit by candles.",
    specs: { "Burn time": "30–90 hours", "Pieces": "Seven", "Wax": "Beeswax blend", "Edition": "Limited to 200" },
  },
];

const SCENTS = {
  woody: {
    title: "Woody & Smoke", product: "apothecary-duo", photo: "1572726729207-a78d6feb18d7",
    desc: "Cedar, vetiver and the smoke of an old fire. Grounding, quiet and a little wild.",
    notes: { top: "Juniper, bay", heart: "Atlas cedar, birch", base: "Vetiver, guaiac" },
  },
  citrus: {
    title: "Citrus & Herb", product: "bergamot-fig", photo: "1611080626919-7cf5a9dbab5b",
    desc: "Sunlit peel, crushed leaves and a green, bitter snap. Light enough for daytime.",
    notes: { top: "Bergamot, blood orange", heart: "Fig leaf, neroli", base: "White musk" },
  },
  amber: {
    title: "Amber & Resin", product: "ambre-noir", photo: "1612293905607-b003de9e54fb",
    desc: "Golden resins, vanilla and spice, as warm as a cashmere throw. For long evenings.",
    notes: { top: "Saffron, cardamom", heart: "Labdanum, smoked tea", base: "Amber, vanilla" },
  },
  floral: {
    title: "Soft Floral", product: "lumiere-glow", photo: "1616627561950-9f746e330187",
    desc: "Powdery iris and white tea on freshly washed linen. Calm and clean, and never too sweet.",
    notes: { top: "Pear, white tea", heart: "Iris, rice flower", base: "Soft musk" },
  },
};

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

const pyramidHTML = (n) =>
  ["top", "heart", "base"].map((k) => `<div><span class="k">${k}</span><span>${n[k]}</span></div>`).join("");

/* Products ------------------------------------------------------------- */
const grid = $("#products");
grid.innerHTML = PRODUCTS.map((p) => `
  <article class="product" data-kind="${p.kind}" data-id="${p.id}" tabindex="0" role="button" aria-label="View ${p.name}">
    <div class="product__media">
      ${p.tag ? `<span class="product__tag">${p.tag}</span>` : ""}
      <img src="${img(p.photo, 900)}" alt="${p.name} candle" loading="lazy">
      <span class="product__view">Discover</span>
    </div>
    <div class="product__row">
      <h3>${p.name}</h3>
      <span class="product__price">$${p.price}</span>
    </div>
    <p class="product__notes">${p.kindLabel} · ${p.notes.top}</p>
  </article>`).join("");

function applyFilter(kind) {
  $$(".filter").forEach((b) => {
    const on = b.dataset.filter === kind;
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-selected", on);
  });
  $$(".product").forEach((el, i) => {
    const show = kind === "all" || el.dataset.kind === kind;
    el.classList.toggle("is-hidden", !show);
    if (show) {
      el.classList.add("is-entering");
      setTimeout(() => el.classList.remove("is-entering"), 30 + i * 40);
    }
  });
}
$$(".filter").forEach((b) => b.addEventListener("click", () => applyFilter(b.dataset.filter)));
$$("[data-jump]").forEach((a) => a.addEventListener("click", () => applyFilter(a.dataset.jump)));

/* Modal ---------------------------------------------------------------- */
const modal = $("#modal");
let lastFocus = null;

function openProduct(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;
  lastFocus = document.activeElement;
  $("#mImg").src = img(p.photo, 1400);
  $("#mImg").alt = p.name;
  $("#mKind").textContent = p.kindLabel;
  $("#mTitle").textContent = p.name;
  $("#mPrice").textContent = `$${p.price}`;
  $("#mDesc").textContent = p.desc;
  $("#mNotes").innerHTML = pyramidHTML(p.notes);
  $("#mSpecs").innerHTML = Object.entries(p.specs).map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  $(".modal__close").focus();
}
function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  lastFocus?.focus();
}
grid.addEventListener("click", (e) => {
  const card = e.target.closest(".product");
  if (card) openProduct(card.dataset.id);
});
grid.addEventListener("keydown", (e) => {
  const card = e.target.closest(".product");
  if (card && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openProduct(card.dataset.id); }
});
$$("[data-close]", modal).forEach((el) => el.addEventListener("click", closeModal));
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal(); });

/* Scent library -------------------------------------------------------- */
const panel = $(".scent-panel");
function showScent(key, animate = true) {
  const s = SCENTS[key];
  const render = () => {
    $("#scentImg").src = img(s.photo, 1000);
    $("#scentImg").alt = s.title;
    $("#scentTitle").textContent = s.title;
    $("#scentDesc").textContent = s.desc;
    $("#scentPyramid").innerHTML = pyramidHTML(s.notes);
    $("#scentLink").onclick = (e) => { e.preventDefault(); openProduct(s.product); };
    panel.classList.remove("is-switching");
  };
  $$(".scent-tab").forEach((t) => {
    const on = t.dataset.family === key;
    t.classList.toggle("is-active", on);
    t.setAttribute("aria-selected", on);
  });
  if (!animate) return render();
  panel.classList.add("is-switching");
  setTimeout(render, 350);
}
$$(".scent-tab").forEach((t) => t.addEventListener("click", () => showScent(t.dataset.family)));
showScent("woody", false);

/* Testimonials --------------------------------------------------------- */
const voices = $$(".voice");
const dots = $$(".voices__dots button");
let vIdx = 0;
function showVoice(i) {
  vIdx = i;
  voices.forEach((v, j) => v.classList.toggle("is-active", j === i));
  dots.forEach((d, j) => d.classList.toggle("is-active", j === i));
}
dots.forEach((d, i) => d.addEventListener("click", () => { showVoice(i); restartVoices(); }));
let vTimer;
const restartVoices = () => { clearInterval(vTimer); vTimer = setInterval(() => showVoice((vIdx + 1) % voices.length), 6500); };
restartVoices();

/* Nav ------------------------------------------------------------------ */
const nav = $("#nav");
const toggle = $(".nav__toggle");
const menu = $("#mobileMenu");
const setMenu = (open) => {
  toggle.setAttribute("aria-expanded", open);
  menu.classList.toggle("is-open", open);
  menu.setAttribute("aria-hidden", !open);
  document.body.classList.toggle("no-scroll", open);
};
toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
$$("a", menu).forEach((a) => a.addEventListener("click", () => setMenu(false)));

/* Scroll effects ------------------------------------------------------- */
const parallax = $$(".parallax");
function onScroll() {
  const y = window.scrollY;
  nav.classList.toggle("is-scrolled", y > 40);
  parallax.forEach((el) => {
    const r = el.parentElement.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) return;
    const max = r.height * 0.12;
    const raw = (r.top + r.height / 2 - innerHeight / 2) * -parseFloat(el.dataset.speed);
    const offset = Math.max(-max, Math.min(max, raw));
    el.style.transform = `translate3d(0, ${offset}px, 0)`;
  });
}
addEventListener("scroll", () => requestAnimationFrame(onScroll), { passive: true });
onScroll();

/* Reveal + counters ---------------------------------------------------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add("is-in");
    $$("[data-count]", e.target).forEach(countUp);
    io.unobserve(e.target);
  });
}, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
$$(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
  io.observe(el);
});

function countUp(el) {
  const end = +el.dataset.count;
  const start = performance.now();
  const dur = 1800;
  const tick = (t) => {
    const k = Math.min((t - start) / dur, 1);
    el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3)));
    if (k < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* Cursor glow ---------------------------------------------------------- */
const glow = $(".cursor-glow");
addEventListener("pointermove", (e) => {
  glow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
}, { passive: true });

/* Newsletter ----------------------------------------------------------- */
$("#letterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  $("#letterMsg").textContent = "Merci. Your first letter arrives with the next pour.";
  e.target.reset();
});

$("#year").textContent = new Date().getFullYear();
