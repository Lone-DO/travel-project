import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScoll";
import StickyHeader from "./modules/StickyHeader";
import $ from "jquery";

let mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");

let stickyHeader = new StickyHeader();
