import { signal } from "../../lib/advanx/runtime.ts";

export const isCopied = signal(false);

export function copyNavbar()         { install("navbar"); }
export function copyHeroSimple()     { install("hero-simple"); }
export function copyButtonGroup()    { install("button-group"); }
export function copyFooterSimple()   { install("footer-simple"); }
export function copyLoginForm()      { install("login-form"); }
export function copyPricingTable()   { install("pricing-table"); }
export function copyFaqAccordion()   { install("faq-accordion"); }
export function copyCardProduct()    { install("card-product"); }
export function copyContactSection() { install("contact-section"); }
export function copySidebarNav()     { install("sidebar-nav"); }

function install(slug: string) {
  navigator.clipboard.writeText(`advanx add ${slug}`).then(() => {
    isCopied.value = true;
    setTimeout(() => { isCopied.value = false; }, 1800);
  });
}
