
    {{cloze:Text}}
    <script>
      // Put this in Front template
      function hideCloze() {
        var clozes = document.getElementsByClassName("cloze");
        if (clozes.length <= 1) {
          return;
        }
        for (i = 0; i < clozes.length; ++i) {
          var clr = window.getComputedStyle(clozes[i]).color;
          var bg = window.getComputedStyle(clozes[i]).background;
          clozes[i].style.background = clr;
        }
      }
      hideCloze();
    </script>


