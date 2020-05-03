<span class=gris>Deck - {{Deck}} {{#Tags}} |      Tags - {{clickable:Tags}}{{/Tags}} </span> |
<span class = pasSurMobile><u><span class=rouge>{{info-New?:}}</span>{{info-Review?:}}{{info-Learning?:}}</u> | F={{info-Factor:}}</span> <br>
<span class=orange>{{#Professeur}}Par : <i>{{Professeur}}</i>&nbsp&nbsp&nbsp{{/Professeur}}</span>
<span class=h1>{{#Header1}}<b>{{Header1}}</b>{{/Header1}}</span> <br><br>

<span class=h2>{{Header2}}</span>{{cloze:Corps}}

<hr id=answer>
<button id="show_obo" onclick="toggle();">show one by one</button>


{{#Indice}}<span class=extra>{{Indice}}</span>{{/Indice}}
{{#More}}<br> <span class=extra>{{More}}</span>{{/More}}




















<!-- Code for "cloze one by one"
     credits due to (at least! ) : iTraveller, /u/AnkingMed, /u/BlueGreenMagick, glume
       -->

<script>
//SHORTCUT TO REVEAL CLOZES
var shortcut = 'n'
//SHORTCUT END
</script>



<!--
<script>
const clozes = document.getElementsByClassName("cloze");
var clr = window.getComputedStyle(clozes[0]).color;
var bg = window.getComputedStyle(clozes[0]).background;
for (i=1; i<clozes.length; ++i) {
  clozes[i].style.background = clr;
  clozes[i].onclick = function() {
      this.style.background=bg ;
      var imgs = item.getElementsByTagName("img");
      for(var i = 0; i < imgs.length; i++){
          imgs[i].style.visibility = "hidden"; 
      };
    }
}
</script>
-->

<script>
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

//USER CUSTOMIZATION event.key
        document.addEventListener("keydown", (event) => {
            if (event.key == shortcut) {
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

//adds a button that shows them one by one, very handy on mobile
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

<!--                             
todo :
    augmenter le nombre de shortcuts possible
    dedupliquer le code pour le shortcut en faisant un appel a une nfonction
    faire que appuyer sur un shortcut quand ill y a plus de cloze a ouvrir valide la carte 
    faire que le bouton napparaisse que sur mobile
    faire un shortcut qui ouvrre tout
           -->
