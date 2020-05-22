<!-- script for cloze one by one -->

<!--this is to avoid having the lines going up or down a notch when fliping the card on mobile
suggestion : put this at the same location as the button in the backtemplate-->
<div class="biggerButtonOnlyOnMobile"> <br></div>


    
<script>
// this make a quick fade to be sure the background loads after everything is set (still in testing)
aFade = 75, qFade = 50 ;

// change cloze color if only one is found (regular cloze style)
const clozes = [...document.querySelectorAll(".cloze")];
const userColor = "purple" // pick your color
    if(clozes.length <= 1) {
        clozes.slice(0).forEach((item) => { item.style.color = userColor });
}; 
</script>
