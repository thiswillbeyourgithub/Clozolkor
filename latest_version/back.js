<!-- add  this line where you want the button to appear
you can add it several times
I put it at the top and at the bottom of my temlate to make it easier to click on mobile -->
<div class="biggerButtonOnlyOnMobile"><button id="show_obo" onclick="toggle();" class="biggerButtonOnlyOnMobile">Reveal one</button></div>




<!-- Code for "cloze one by one"
     credits due to (at least! ) : iTraveller, /u/AnkingMed, /u/BlueGreenMagick, glume
-->


<!--
<script>
// I don't remember what I had this
//aFade = 50, qFade = 0; // loads less fast to  fix the color being the wrong one
//const clozes = document.getElementsByClassName("cloze");
//var clr = window.getComputedStyle(clozes[0]).color;
//var bg = window.getComputedStyle(clozes[0]).background;
//for (i=1; i<clozes.length; ++i) {
//  clozes[i].style.background = clr;
//  clozes[i].onclick = function() {
//      this.style.background=bg ;
//      var imgs = item.getElementsByTagName("img");
//      for(var i = 0; i < imgs.length; i++){
//          imgs[i].style.visibility = "hidden"; 
//      };
//    }
//}
</script>
-->

<script>
// reveals cloze one by one
var shortcut = ['n','ù'];

aFade = 100, qFade = 75; // loads less fast to  fix the color being the wrong one
    const clozes = [...document.querySelectorAll(".cloze")];

    // use regular cloze instead of "cloze one by one" when there is only one cloze deletion ->
       if(clozes.length <= 1) {
           // hides the button if there is only one cloze
           document.getElementById("show_obo").style.display = "none";
       }; 
    if (clozes.length > 1) {
        const cloze_color = window.getComputedStyle(clozes[0]).color;
        const cloze_bg_color = window.getComputedStyle(clozes[0]).backgroundColor;
        clozes.slice(0).forEach((item) => {
            // if set to (1), will never hide the first cloze
            item.style.backgroundColor = cloze_color;
            var imgs = item.getElementsByTagName("img");
            for (var i = 0; i < imgs.length; i++) {
                imgs[i].style.visibility = "hidden";
            }
            item.addEventListener("click", () => {
                item.style.backgroundColor = cloze_bg_color;
                var imgs = item.getElementsByTagName("img");
                for (var i = 0; i < imgs.length; i++) {
                  imgs[i].style.visibility = "visible";
                }
            });
        });

        // is included in function
        function include(arr, obj) {
          for (var i = 0; i < arr.length; i++) {
            if (arr[i] == obj) return true;
          }
        }
        document.addEventListener("keydown", (event) => {
            if (include(shortcut, event.key)) {
                clozes.slice(0).some((item) => {    
                    if (item.style.backgroundColor != cloze_bg_color) {
                        item.style.backgroundColor = cloze_bg_color;
                        var imgs = item.getElementsByTagName("img"); 
                        for(var i = 0; i < imgs.length; i++){ 
                            imgs[i].style.visibility = "visible"; 
                        };
                        return true;
                    }
                })
            }
        });

// button shows them one by one, very handy on mobile
var toggle = function() {
    clozes.slice(0).some((item) => {   
                    if (item.style.backgroundColor != cloze_bg_color) {
                        item.style.backgroundColor = cloze_bg_color;
                        var imgs = item.getElementsByTagName("img");
                        for(var i = 0; i < imgs.length; i++){ 
                            imgs[i].style.visibility = "visible";
                        };
                        return true;
                    }
                })
        }
};
</script>



