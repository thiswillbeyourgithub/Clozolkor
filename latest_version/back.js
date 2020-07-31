<!-- add  this line where you want the button to appear
you can add it several times
I put it at the top and at the bottom of my temlate to make it easier to click on mobile -->
<div class="biggerButtonOnlyOnMobile">
    <button id="show_button" onclick="resetClozesVar();" class="buttonSizeSmall">Hide</button>
    <button id="show_button" onclick="revealAllVar();" class="buttonSizeSmall">Shw</button>
    <button id="show_button" onclick="revealOneVar();revealOneVar();revealOneVar();revealOneVar();revealOneVar()" class="buttonSizeSmall">5</button>
    <button id="show_button" onclick="revealOneVar();" class="buttonSizeBig">Reveal one</button>
</div>

{{cloze:Cloze}} 



<br>{{Extra}}    






<script>
// Clozolkor back script, for more information or latest version go to :
// https://github.com/thiswillbeyourgithub/Clozolkor
// Version : July 2020
// credits due to (at least! ) : iTraveller, /u/AnkingMed, /u/BlueGreenMagick, thiswillbeyourgithub



var shortcutToReveal = ['n','c','ù'];
var shortcutToReset = [','];
var shortcutToShowAll = [';'];
var shortcutToShow5 = ['N','%','C'];

var enableHiding="T"; // set to "F" to disable hiding
var enableAutoScroll="T" ; // set to "F" to disable autoscroll



	const clozes = [...document.querySelectorAll(".cloze")];

    // use regular cloze instead of "cloze one by one" when there is only one cloze deletion ->
       if(clozes.length <= 1) {
           // don't show the buttons if there is only one cloze
           document.getElementById("show_button").style.display = "hidden !important";
       }; 
    if (clozes.length > 1) {
        var cloze_color = window.getComputedStyle(clozes[0]).color;
        var cloze_bg_color = window.getComputedStyle(clozes[0]).backgroundColor;
	if (cloze_bg_color == 'undefined') { var cloze_bg_color = "white"}; // doesn't work

        clozes.slice(0).forEach((item) => {
            item.style.backgroundColor = cloze_color;
            //item.style.color=cloze_color;
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

        // "is included in" function, from stack overflow
        function include(arr, obj) {
          for (var i = 0; i < arr.length; i++) {
            if (arr[i] == obj) return true;
          }
        }
        document.addEventListener("keydown", (event) => {
            if (include(shortcutToReveal, event.key)) { revealOneConst(); };
            if (include(shortcutToReset, event.key)) { resetClozesConst(); };
            if (include(shortcutToShowAll, event.key)) { revealAllConst(); };
            if (include(shortcutToShow5, event.key)) { revealOneConst();revealOneConst();revealOneConst();revealOneConst();revealOneConst(); };
        });

const autoScrollToCloze = function(item) {
// https://old.reddit.com/r/Anki/comments/acukqg/how_to_autoscroll_to_cloze_deletion_part_in_long/
if (enableAutoScroll == "T") {
			item.scrollIntoViewIfNeeded();
			if (typeof onShownHook !== "undefined") {   //for Anki 2.1.x ;
				onShownHook.push(function() {        scroll_to_cloze();   
				 })
			} else {    // for AnkiDroid
			   	setTimeout(function() {   scroll_to_cloze();   
				}, 10);
			};
}
};
// super ugly code but apparently var only works with the html buttons while const only works with the keystrokes... So I duplicated all function to make it work

// code for html buttons :
var revealOneVar = function() {
    clozes.slice(0).some((item) => {   
                    if (item.style.backgroundColor != cloze_bg_color) {
                        item.style.backgroundColor = cloze_bg_color;
                        var imgs = item.getElementsByTagName("img");
                        for(var i = 0; i < imgs.length; i++){ 
                            imgs[i].style.visibility = "visible";
                        };
                        autoScrollToCloze(item);
                        return true;
                    }
                })
        };
var resetClozesVar = function() {
    clozes.slice(0).forEach((item) => {
            item.style.backgroundColor = cloze_color;
            var imgs = item.getElementsByTagName("img");
            for (var i = 0; i < imgs.length; i++) {
                imgs[i].style.visibility = "hidden";
            } ;
	window.scroll(0,0);
    });
};
var revealAllVar = function() {
    clozes.slice(0).forEach((item) => {
            item.style.backgroundColor = cloze_bg_color;
            var imgs = item.getElementsByTagName("img");
            for (var i = 0; i < imgs.length; i++) {
                imgs[i].style.visibility = "visible";
            }
    });};




// code for keystrokes
const revealOneConst = function() {
    clozes.slice(0).some((item) => {   
                    if (item.style.backgroundColor != cloze_bg_color) {
                        item.style.backgroundColor = cloze_bg_color;
                        var imgs = item.getElementsByTagName("img");
                        for(var i = 0; i < imgs.length; i++){ 
                            imgs[i].style.visibility = "visible";
                        };
                        autoScrollToCloze(item);
                        return true;
                    }
                })
        };
const resetClozesConst = function() {
    clozes.slice(0).forEach((item) => {
            item.style.backgroundColor = cloze_color;
            var imgs = item.getElementsByTagName("img");
            for (var i = 0; i < imgs.length; i++) {
                imgs[i].style.visibility = "hidden";
            }
    });
	window.scroll(0,0);

};

const revealAllConst = function() {
    clozes.slice(0).forEach((item) => {
            item.style.backgroundColor = cloze_bg_color;
            var imgs = item.getElementsByTagName("img");
            for (var i = 0; i < imgs.length; i++) {
                imgs[i].style.visibility = "visible";
            }
    });
}
};

if (clozes.length > 1) { if (enableHiding == "F") { revealAllVar();} }


</script>
