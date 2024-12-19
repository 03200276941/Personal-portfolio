// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Create a timeline for the initial animations
var t1 = gsap.timeline();

// Initial animations (executed when the page loads)
t1.from(".logo", {
    x: -350,
    opacity: 0,
    duration: 2.5,
    ease: "expo.inOut"
})
.from(".navbar", {
    x: 350,
    opacity: 0,
    duration: 2.5,
    ease: "expo.inOut"
})
.from(".home", {
    x: -350,
    opacity: 0,
    duration: 2.5,
    ease: "expo.inOut"
})
.from(".home-img", {
    x: 350,
    opacity: 0,
    duration: 2.5,
    ease: "expo.inOut"
});

// ScrollTrigger-based animations for the About section
gsap.timeline({
    scrollTrigger: {
        trigger: ".about-img",
        start: "top 80%",
        end: "top 30%",
        scrub: 2,
        markers: false,
    }
})
.from(".about-img", {
    x: -350,
    scale: 0.95,
    opacity: 0,
    duration: 3.5,
    ease: "power3.inOut"
})
.from(".about-content", {
    x: 350,
    scale: 0.95,
    opacity: 0,
    duration: 3.5,
    ease: "power3.inOut"
}, "-=2.0");

// ScrollTrigger-based animations for the Portfolio section
gsap.from(".portfolio-box", {
    opacity: 0,
    y: 120,
    duration: 3,
    stagger: 0.4,
    ease: "bounce.out",
    scrollTrigger: {
        trigger: ".portfolio-container",
        start: "top 80%",
        end: "top 30%",
        scrub: 2,
        markers: false,
    }
});

// ScrollTrigger-based animations for the Contact section
gsap.from(".Contact h2", {
    y: 60,
    opacity: 0,
    scale: 0.6,
    duration: 2.5,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".Contact",
        start: "top 80%",
        end: "top 30%",
        scrub: 2,
        markers: false,
    }
});

// Input fields and textarea animation in the Contact section
gsap.from(".input-box input, .input-box textarea", {
    opacity: 0,
    x: -120,
    duration: 2,
    stagger: {
        amount: 0.6,
        from: "start",
        ease: "power3.inOut"
    },
    scrollTrigger: {
        trigger: ".Contact",
        start: "top 80%",
        end: "top 30%",
        scrub: 2,
        markers: false,
    }
});

// Extra dynamic animation: Subtle rotation and scaling effect
gsap.from(".about-img, .home-img, .portfolio-box", {
    rotation: 10,
    scale: 0.95,
    opacity: 0,
    duration: 3,
    ease: "power3.inOut",
    scrollTrigger: {
        trigger: ".about-img, .home-img, .portfolio-box",
        start: "top 75%",
        end: "top 30%",
        scrub: 2,
        markers: false,
    }
});

// Fade-in effect for elements as they scroll into view
gsap.from(".fade-in", {
    opacity: 0,
    duration: 2,
    ease: "sine.inOut",
    scrollTrigger: {
        trigger: ".fade-in",
        start: "top 80%",
        end: "top 30%",
        scrub: 2,
        markers: false,
    }
});
