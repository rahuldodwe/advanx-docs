import { signal } from "../../lib/advanx/runtime.ts";

export const isCopied = signal(false);

export function copyNavbar()         { copy("navbar"); }
export function copyHeroSimple()     { copy("hero-simple"); }
export function copyButtonGroup()    { copy("button-group"); }
export function copyFooterSimple()   { copy("footer-simple"); }
export function copyLoginForm()      { copy("login-form"); }
export function copyPricingTable()   { copy("pricing-table"); }
export function copyFaqAccordion()   { copy("faq-accordion"); }
export function copyCardProduct()    { copy("card-product"); }
export function copyContactSection() { copy("contact-section"); }
export function copySidebarNav()     { copy("sidebar-nav"); }

function copy(slug: string) {
  navigator.clipboard.writeText(`advanx add ${slug}`).then(() => {
    isCopied.value = true;
    setTimeout(() => { isCopied.value = false; }, 1800);
  });
}

// ── Preview modal signals ──
export const navbarPreview         = signal(false);
export const heroSimplePreview     = signal(false);
export const buttonGroupPreview    = signal(false);
export const footerSimplePreview   = signal(false);
export const loginFormPreview      = signal(false);
export const pricingTablePreview   = signal(false);
export const faqAccordionPreview   = signal(false);
export const cardProductPreview    = signal(false);
export const contactSectionPreview = signal(false);
export const sidebarNavPreview     = signal(false);

function closeAll() {
  navbarPreview.value         = false;
  heroSimplePreview.value     = false;
  buttonGroupPreview.value    = false;
  footerSimplePreview.value   = false;
  loginFormPreview.value      = false;
  pricingTablePreview.value   = false;
  faqAccordionPreview.value   = false;
  cardProductPreview.value    = false;
  contactSectionPreview.value = false;
  sidebarNavPreview.value     = false;
}

export function openNavbarPreview()         { closeAll(); navbarPreview.value = true; }
export function openHeroSimplePreview()     { closeAll(); heroSimplePreview.value = true; }
export function openButtonGroupPreview()    { closeAll(); buttonGroupPreview.value = true; }
export function openFooterSimplePreview()   { closeAll(); footerSimplePreview.value = true; }
export function openLoginFormPreview()      { closeAll(); loginFormPreview.value = true; }
export function openPricingTablePreview()   { closeAll(); pricingTablePreview.value = true; }
export function openFaqAccordionPreview()   { closeAll(); faqAccordionPreview.value = true; }
export function openCardProductPreview()    { closeAll(); cardProductPreview.value = true; }
export function openContactSectionPreview() { closeAll(); contactSectionPreview.value = true; }
export function openSidebarNavPreview()     { closeAll(); sidebarNavPreview.value = true; }
export function closePreview()              { closeAll(); }

if (typeof window !== "undefined") {
  window.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAll(); });
}
