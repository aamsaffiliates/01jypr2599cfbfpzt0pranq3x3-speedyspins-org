// SpeedySpins Casino JavaScript

// Redirect to register function
function redirectToRegister() {
  window.location.href = "/register"
}

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", () => {
  // FAQ Toggle functionality
  const faqItems = document.querySelectorAll(".faq-item")

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")
    const answer = item.querySelector(".faq-answer")
    const icon = question.querySelector("i")

    // Initially hide answers
    answer.style.display = "none"

    question.addEventListener("click", () => {
      const isOpen = answer.style.display === "block"

      // Close all other FAQ items
      faqItems.forEach((otherItem) => {
        const otherAnswer = otherItem.querySelector(".faq-answer")
        const otherIcon = otherItem.querySelector(".faq-question i")
        otherAnswer.style.display = "none"
        otherIcon.style.transform = "rotate(0deg)"
      })

      // Toggle current item
      if (!isOpen) {
        answer.style.display = "block"
        icon.style.transform = "rotate(180deg)"
      }
    })
  })

  // Parallax effect for hero section
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const parallaxElements = document.querySelectorAll(".parallax-bg")

    parallaxElements.forEach((element) => {
      const speed = 0.5
      element.style.transform = `translateY(${scrolled * speed}px)`
    })
  })

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for scroll animations
  const animatedElements = document.querySelectorAll(".step-card, .game-card, .stat-card, .support-card, .promo-card")
  animatedElements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(30px)"
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(element)
  })

  // Mobile menu toggle (if needed)
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const mobileMenu = document.querySelector(".mobile-menu")

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")
    })
  }

  // Add loading animation
  window.addEventListener("load", () => {
    document.body.classList.add("loaded")
  })

  // Prevent right-click context menu (optional security measure)
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault()
  })

  // Add click tracking for analytics (placeholder)
  document.addEventListener("click", (e) => {
    if (e.target.matches(".cta-button, .cta-button-large, .play-btn")) {
      // Track button clicks
      console.log("CTA button clicked:", e.target.textContent)
    }
  })
})

// Preload critical images
function preloadImages() {
  const images = ["images/hero.webp", "images/payouts.webp", "images/crypto.webp"]

  images.forEach((src) => {
    const img = new Image()
    img.src = src
  })
}

// Initialize preloading
preloadImages()

// Add performance monitoring
window.addEventListener("load", () => {
  if ("performance" in window) {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
    console.log("Page load time:", loadTime + "ms")
  }
})
