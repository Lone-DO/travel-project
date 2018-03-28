import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScoll";
import StickyHeader from "./modules/StickyHeader";
import $ from "jquery";
import Modal from "./modules/Modal";

let mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
let stickyHeader = new StickyHeader();

let modal = new Modal();
