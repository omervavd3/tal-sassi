window.onscroll = () => {
    const nav = document.getElementById("nav");
    nav.style.transition = '.5s';
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      nav.className = "navColor";
    } else {
      nav.className = "";
    }
  }