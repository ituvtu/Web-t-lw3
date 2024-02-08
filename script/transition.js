document.addEventListener('DOMContentLoaded', function() {
    function time(i, step) {
      const body = document.getElementById("body");
      body.style.opacity = i;
  
      if (i < 1) {
        setTimeout(() => time(i + step, step), 10);
      }
    }
  
    time(0, 0.02);
  });