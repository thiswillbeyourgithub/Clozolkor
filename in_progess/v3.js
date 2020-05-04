<span class=gris>Deck - {{Deck}} {{#Tags}} |      Tags - {{clickable:Tags}}{{/Tags}} </span> |
<span class = pasSurMobile><u><span class=rouge>{{info-New?:}}</span>{{info-Review?:}}{{info-Learning?:}}</u> | F={{info-Factor:}}</span> <br>
<span class=orange>{{#Professeur}}Par : <i>{{Professeur}}</i>&nbsp&nbsp&nbsp{{/Professeur}}</span>
<span class=h1>{{#Header1}}<b>{{Header1}}</b>{{/Header1}}</span> <br><br>

<span class=h2>{{Header2}}</span> {{cloze:Corps}}

<hr id=answer>
<div><button id="show_obo" onclick="toggle();" class="biggerBouton">Reveal one</button></div>

{{#Indice}}<span class=extra>{{Indice}}</span>{{/Indice}}
{{#More}}<br> <span class=extra>{{More}}</span>{{/More}}










<!-- Code for "cloze one by one"
     credits due to (at least! ) : iTraveller, /u/AnkingMed, /u/BlueGreenMagick, glume
       -->




<!-- I don't remember why I have this
<script>
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

var shortcuts = ['n','ù'];

aFade=100; qFade=100; // loads less fast to  fix the color being the wrong one

//var revealOne = function() {
function revealOne() {
clozes.slice(0).some((item) => {   
                if (item.style.backgroundColor != cloze_bg_color) {
                    item.style.backgroundColor = cloze_bg_color;
                    var imgs = item.getElementsByTagName("img");
                    for(var i = 0; i < imgs.length; i++){ 
                        imgs[i].style.visibility = "visible";
                    }
                    return true;
                }
            });
    } 
// "is included in" function
function include(arr, obj) {
      for (var i = 0; i < arr.length; i++) {
            if (arr[i] == obj) return true;
          }
        }
// reveal one cloze when button is pressed
//var toggle = function() { revealOne(); };
function toggle() { revealOne(); }


const clozes = [...document.querySelectorAll(".cloze")];

// use regular cloze instead of "cloze one by one" when there is only one cloze deletion ->
if(clozes.length <= 1) {
       // hides the button if there is only one cloze
       document.getElementById("show_obo").style.display = "none";
   } 
// but if there are several cloze deletions, use this code :
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

    document.addEventListener("keydown", (event) => {
        if (include(shortcuts, event.key)) { revealOne(); }
    });
}

</script>

<!--                             
todo :
   de temps en temps ca affiche du noir au lieu de la bonne couleur, checker dans IOC comment il fait pour attendre que X truc load
    augmenter le nombre de shortcuts possible
    dedupliquer le code pour le shortcut en faisant un appel a une nfonction
    faire que appuyer sur un shortcut quand ill y a plus de cloze a ouvrir valide la carte, si option cochée
    faire que le bouton napparaisse que sur mobile
   appuyer sur shortcut devrait montrer le back
    faire un shortcut qui ouvrre tout
    faire un shortcut qui referme tout
    mentionner l'utilisation de symbols as you type
   regarder l'addon qui retire tout seul les newline des pdf ou truc du genre, ca permet surement de rajouter des cloze entrer chaque mot ou truc du genre + auto clozer la premiere lettrer de la ligne + changer de mode de cloze sur le texte selectionné + auto increment/decrement cloze number du text selectionné
    changer le bg de la cloze de couleur juste avant, genre on appuie sur shortcut et sa change la couleurde la cloze et ca ne disparait qu'au 2nd appuie. Ca permettrait de connaitre la taille de la sous cloze mais bon
           -->

