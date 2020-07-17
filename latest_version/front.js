<!-- script for cloze one by one -->

{{cloze:Text}}


<!--this is to avoid having the lines going up or down a notch when fliping the card on mobile
suggestion : put this at the same location as the button in the backtemplate-->
<div class="biggerButtonOnlyOnMobile"><br></div>


    
    

<script>
// Clozolkor script, for more information or latest version go to :
// https://github.com/thiswillbeyourgithub/Clozolkor

// change cloze color if only one is found (regular cloze style)
const clozes = [...document.querySelectorAll(".cloze")];
const userColor = "purple" // pick your color
if(clozes.length <= 1) {
clozes.slice(0).forEach((item) => { item.style.color = userColor }); // to disable, add two slashes // at the beginning of this line
}; 
</script>


