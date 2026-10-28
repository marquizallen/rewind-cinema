const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
  
          // Animate only once
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );
  
  document.querySelectorAll(".fade-in").forEach((element) => {
    observer.observe(element);
  });