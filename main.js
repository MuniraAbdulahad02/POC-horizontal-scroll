import './style.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// Tutorial used: https://www.youtube.com/watch?v=ogWtHLtxP9E&t=5s Gsap horizontal scroll images 

// Get the gallery element
const gallery = document.querySelector(".gallery");
//Get the gallery total width
let galleryWidth = gallery.offsetWidth;
/* Get the amount to scroll horizontally by
  subtracting the window width from the full
    width of the gallery */
let ammountToScroll = galleryWidth - window.innerWidth;

// Register GSAP ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

// Set the animation for the gallery
gsap.to(gallery, {
  // Set position on the X axis
  x: -ammountToScroll,
  ease: "none", //Remove easing
  scrollTrigger: {
    trigger: ".gallery-wrapper", //Trigger element
    start: "top 30px", // Set scroll trigger start position
    end: "+=" + ammountToScroll, // Set end position
    pin: true, // Pin the gallery while scrolling
    scrub: true, // Set animation progress to scroll postion
  }
});

// Initialize Lenis smooth scrolling
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
