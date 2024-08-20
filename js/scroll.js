document.addEventListener("DOMContentLoaded", () => {
  // Animasi scroll dengan Intersection Observer
  const elementsToAnimate = document.querySelectorAll(".scroll-animation");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Mengaktifkan animasi saat elemen 10% terlihat
    }
  );

  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });

  // Popup logic
  const popupOverlay = document.querySelector(".popup-overlay");
  const popup = document.querySelector(".popup");
  const popupText = document.getElementById("popup-text");
  const popupTrigger = document.querySelector(".popup-trigger");

  const messages = [
    "She is officially married to Kozume Kenma",
    "She listens to Mitski A LOT",
    "She loves Lana Del Rey",
    "Her playlist is 80% The Neighborhood (TNBH)",
    "She loves Okkotsu Yuuta",
    "She loves to sleep",
    "She spends 50% of her day procrastinating",
    "She is an ENTP-A!",
    "She loves Windah Basudara!!!",
    "She is Nagi Seishiro's GF",
    "She loves Maki",
    "She was born on 5th January 2005",
  ];

  let currentIndex = 0;

  // Function to show the popup with the next message
  const showPopup = () => {
    popupText.textContent = messages[currentIndex];
    popup.classList.add("show");
    popupOverlay.classList.add("show");

    // Move to the next message
    currentIndex = (currentIndex + 1) % messages.length;
  };

  // Function to hide the popup
  const hidePopup = () => {
    popup.classList.remove("show");
    popupOverlay.classList.remove("show");
  };

  // Show popup on trigger click
  if (popupTrigger) {
    popupTrigger.addEventListener("click", showPopup);
  }

  // Hide popup when clicking outside of the popup
  if (popupOverlay) {
    popupOverlay.addEventListener("click", hidePopup);
  }
});
