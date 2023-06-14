<script src=" https://kit.fontawesome.com/09de2dfdb6.js " crossorigin="anonymous"></script>
<script src="js/main.js"></script>
<script src="js/jquery-3.7.0.min.js"></script>
<script>
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const body = document.body;

  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
  });
</script>
<script>
  $(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        margin: 15,
        autoplay: true,
        rewind: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 4
          },
          1000: {
            items: 4
          }
        }
      }

    );
  });
</script>

<script src="js/owl.carousel.js"></script>
<script src="js/owl.carousel.min.js"></script>
<script src="js/core/bootstrap.bundle.min.js"></script>
<script src="js/core/bootstrap.min.js"></script>
<script src="js/core/popper.min.js"></script>
<script src="js/plugins/choices.min.js"></script>
<script src="js/plugins/countup.min.js"></script>
<script src="js/plugins/flatpickr.min.js"></script>
<script src="js/plugins/moment.min.js"></script>
<script src="js/plugins/parallax.min.js"></script>
<script src="js/plugins/perfect-scrollbar.min.js"></script>
<script src="js/plugins/prism.min.js"></script>
<script src="js/plugins/rellax.min.js"></script>
<script src="js/plugins/tilt.min.js"></script>
<script src="js/plugins/typedjs.js"></script>

<script>
  window.onscroll = function() {
    scrollFunction()
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("backToTopBtn").classList.add("show");
    } else {
      document.getElementById("backToTopBtn").classList.remove("show");
    }
  }

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
</script>