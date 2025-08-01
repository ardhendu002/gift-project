  const carousel = document.getElementById("carousel");
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");

  let scrollAmount = 0;
  const slideWidth = 280; // Approx width of one card including padding

  next.addEventListener("click", () => {
    scrollAmount += slideWidth;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    if (scrollAmount > maxScroll) scrollAmount = 0;
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
  });

  prev.addEventListener("click", () => {
    scrollAmount -= slideWidth;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    if (scrollAmount < 0) scrollAmount = maxScroll;
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
  });
  