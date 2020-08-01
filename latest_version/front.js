<!-- script for cloze one by one -->

{{cloze:Cloze}}


<!--this is to avoid having the lines going up or down a notch when fliping the card on mobile
suggestion : put this at the same location as the button in the backtemplate-->
<div class="biggerButtonOnlyOnMobile"><br></div>


    
    
<script>
// Clozolkor front script, for more information or latest version go to :
// https://github.com/thiswillbeyourgithub/Clozolkor
// Version : v2 of July 2020
// credits due to (at least! ) : iTraveller, /u/AnkingMed, /u/BlueGreenMagick, thiswillbeyourgithub

// change cloze color if only one deletion is found (regular cloze style)
const clozes = [...document.querySelectorAll(".cloze")];
const userColor = "purple" // pick your color
if(clozes.length <= 1) {
clozes.slice(0).forEach((item) => { item.style.color = userColor }); // to disable, add two slashes // at the beginning of this line
}; 
</script>
