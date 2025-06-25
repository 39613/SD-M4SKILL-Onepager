const section = document.getElementsByTagName("section");

const observer1 = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting == true) {
      section[0].classList.add("a-popup");
    } else if (entries[0].isIntersecting == false) {
      section[0].classList.remove("a-popup");
    }
  },
  {
    threshold: 0.1,
  }
);

const observer2 = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting == true) {
      section[1].classList.add("a-popup");
    } else if (entries[0].isIntersecting == false) {
      section[1].classList.remove("a-popup");
    }
  },
  {
    threshold: 0.1,
  }
);

const observer3 = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting == true) {
      section[2].classList.add("a-popup");
    } else if (entries[0].isIntersecting == false) {
      section[2].classList.remove("a-popup");
    }
  },
  {
    threshold: 0.1,
  }
);

observer1.observe(section[0]);
observer2.observe(section[1]);
observer3.observe(section[2]);
