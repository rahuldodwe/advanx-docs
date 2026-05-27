import { signal } from "../../lib/advanx/runtime.ts";

export const isCopied = signal(false);

// ── Get Started steps ──
export function copyStep1() { copyText("npx advanxjs create my-app"); }
export function copyStep2() { copyText("cd my-app && bun install"); }
export function copyStep3() { copyText("advanx add navbar"); }
export function copyStep4() { copyText("advanx build src/pages"); }
export function copyStep5() { copyText("advanx serve dist"); }

// ── Component install commands ──
export function copyNavbar()         { copyText("advanx add navbar"); }
export function copyHeroSimple()     { copyText("advanx add hero-simple"); }
export function copyButtonGroup()    { copyText("advanx add button-group"); }
export function copyFooterSimple()   { copyText("advanx add footer-simple"); }
export function copyLoginForm()      { copyText("advanx add login-form"); }
export function copyPricingTable()   { copyText("advanx add pricing-table"); }
export function copyFaqAccordion()   { copyText("advanx add faq-accordion"); }
export function copyCardProduct()    { copyText("advanx add card-product"); }
export function copyContactSection() { copyText("advanx add contact-section"); }
export function copySidebarNav()     { copyText("advanx add sidebar-nav"); }

function copyText(text: string) {
  navigator.clipboard.writeText(text).then(() => {
    isCopied.value = true;
    setTimeout(() => { isCopied.value = false; }, 1800);
  });
}
