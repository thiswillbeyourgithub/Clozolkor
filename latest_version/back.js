<!-- add  this line where you want the button to appear
you can add it several times
I put it at the top and at the bottom of my temlate to make it easier to click on mobile -->

<div class = smallFontHeader><span class=grey>Deck - {{clickable:Deck}} {{#Tags}} |      Tags - {{clickable:Tags}}{{/Tags}}  | Rema. cloze <span id="numberIndicator"></span> | </span><span class=notOnMobile><u><span class=red>{{info-New?:}}</span>{{info-Review?:}}{{info-Learning?:}}</u> | Ease = {{info-Factor:}}</div>
<span class=orange>{{#Teacher}}By : <i>{{Teacher}}</i>&nbsp&nbsp&nbsp{{/Teacher}}</span> </span>

<div class="biggerButtonOnlyOnMobile">
    <button id="show_button" onclick="resetClozesVar();" class="buttonSizeSmall">Reset</button>
    <button id="show_button" onclick="revealAllVar();" class="buttonSizeSmall">Clear</button>
    <!--<button id="show_button" onclick="for(let i = 0 ; i < 5;i++) {revealOneVar();}" class="buttonSizeSmall">5</button>-->
    <button id="show_button"  onclick="revealOneVar();" class="buttonSizeSmall"> Cloze</button>
    <button id="show_button" onclick="revealHintWordVar();" class="buttonSizeBig"> Word</button>
    <button id="show_button" onclick="revealHintLettVar();" class="buttonSizeBig"> Letter</button>

</div>


<span class=notOnMobile>
	<br><br><br><br><br><br><br><br><br><br><br>
</span>

<div id="hintLett"></div> 





<span class=header1>{{#Header1}}<b>{{Header1}}</b><br>{{/Header1}}</span><br>
{{#Header2}}<span class=header2>{{Header2}} : </span>{{/Header2}}{{cloze:Body}}

<hr>




<div class="biggerButtonOnlyOnMobile">
    <button id="show_button" onclick="resetClozesVar();" class="buttonSizeSmall">&nbsp;</button>
    <button id="show_button" onclick="revealAllVar();" class="buttonSizeSmall">&nbsp;</button>    
    <!--<button id="show_button" onclick="for(let i = 0 ; i < 5;i++) {revealOneVar();}" class="buttonSizeSmall">&nbsp</button>-->
    <button id="show_button" onclick="revealOneVar();" class="buttonSizeSmall">&nbsp</button>
    <button id="show_button" onclick="revealHintWordVar();" class="buttonSizeBig">&nbsp;&nbsp</button>
    <button id="show_button" onclick="revealHintLettVar();" class="buttonSizeBig">&nbsp;&nbsp&nbsp</button>

</div>
<div id="hintLett2"></div>

{{#Hint}}<span class=extra>{{hint:Hint}}</span><br>{{/Hint}}
{{#More}}<span class=extra>{{hint:More}}</span>{{/More}}







<script>
/* 
    Released under the GNU General Public License v3.
    Copyright (C) - 2020 - user "thiswillbeyourgithub" of the website "github".
    This file is the Back of the Clozolkor template. It is part of Clozolkor : an
    Anki card template helping user to retain knowledge.

    Clozolkor is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Clozolkor is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Clozolkor.  If not, see <https://www.gnu.org/licenses/>.
    */ /*
    for more information or to get the latest version go to :
    https://github.com/thiswillbeyourgithub/Clozolkor
    Version : August 15th 2020

    credits due to (at least! ) :
    thiswillbeyourgithub (main dev)
    iTraveller (original idea as far as I can tell), /u/AnkingMed (general helper)
    /u/BlueGreenMagick (code help), /u/ssnoyes (piece of code), 
    /u/DrewZZZ and /u/yumenogotoshi (scroll code)
    */



    // SETTINGS AND SHORTCUTS
let enableHiding="T"; // set to "F" to disable hiding
let enableAutoScroll="T" ; // set to "F" to disable autoscroll
let autoShowFirstIfOnly="F" ; //set to "T" to show directly the first one and hide the buttons
let hideImagesFully="T"; // if "F", you can use image size as a hint
let wordSeparators = [" ", "=", "~", ",", "/", "|", "(", ")", "+", "*", "-", ".", "<", ">", ";", ":","\""] ; // when hinting a whole word
let forceMobileBehavior = "F"; 
let roundedButtons = "T" ; // "F" to square buttons
    // SHORTCUTS
let shortcutToReveal = ['n'];
let shortcutToHintLett = [';'];
let shortcutToHintWord = [','];
let shortcutToShow5 = ['N'];
let shortcutToShowAll = ['.'];
let shortcutToReset = [':'];


    // VAR
qFade=0; aFade=50 ;if (typeof anki !== 'undefined') anki.qFade=qFade; //disables fading
let c = 0; // index of cloze
let n = 0; // index of the character of the letter used of hints
let manuallyClicked = 0; // if a cloze has been manually clicked
const clozes = [...document.querySelectorAll(".cloze")];
let cloze_color = window.getComputedStyle(clozes[0]).color;
let cloze_bg_color = window.getComputedStyle(clozes[0]).backgroundColor;
if (typeof cloze_bg_color == 'undefined') { let cloze_bg_color = "white"}; // not sure it works
const biggerButtonOnlyOnMobile = document.getElementsByClassName("biggerButtonOnlyOnMobile");
const notOnMobile = document.getElementsByClassName("notOnMobile");
const buttonSizeSmall = document.getElementsByClassName("buttonSizeSmall");
const buttonSizeBig = document.getElementsByClassName("buttonSizeBig");
const numbIndi = document.getElementById("numberIndicator");
const hintLettField = document.getElementById("hintLett");
const hintLettField2 = document.getElementById("hintLett2");

    // STYLING
hintLettField.style.fontStyle = "italic";
hintLettField.style.backgroundColor = "transparent";
hintLettField.style.color = "grey";
hintLettField.style.display = "flex";
hintLettField.style.justifyContent = "center";
hintLettField.style.alignItems = "center";
hintLettField2.style.fontStyle = "italic";
hintLettField2.style.backgroundColor = "transparent";
hintLettField2.style.color = "grey";
hintLettField2.style.display = "flex";
hintLettField2.style.justifyContent = "center";
hintLettField2.style.alignItems = "center";
// button styling (hide on computer, show on mobile etc) :
if (navigator.userAgent.indexOf("obile") >= 0 || navigator.userAgent.indexOf("droid") >= 0 ||ankiPlatform.indexOf("esktop")==-1 || forceMobileBehavior == "T")  {
    var isOnMobileBack = "T";
    for (index = 0, len = biggerButtonOnlyOnMobile.length ; index < len ; index++) {
        biggerButtonOnlyOnMobile[index].style.display = "flex";
        biggerButtonOnlyOnMobile[index].style.flexWrap = "no-wrap";
        biggerButtonOnlyOnMobile[index].style.justifyContent = "center";
	biggerButtonOnlyOnMobile[index].style.backgroundColor = "transparent"
    };
    for (index = 0, len = notOnMobile.length ; index < len ; index++) {
        notOnMobile[index].style.display = "none";
    };
}
else {
    var isOnMobileBack = "F";
    for (index = 0, len = biggerButtonOnlyOnMobile.length ; index < len ; index++) {
        biggerButtonOnlyOnMobile[index].style.display = "none";
    }
    for (index = 0, len = notOnMobile.length ; index < len ; index++) {
        notOnMobile[index].style.color = "grey";
        notOnMobile[index].style.fontStyle = "bold";
    }
    hintLettField2.style.display = "none"; 
}
for (index = 0, len = buttonSizeSmall.length ; index < len ; index++) {
    buttonSizeSmall[index].style.backgroundColor = "grey";
    buttonSizeSmall[index].style.flexGrow = "1";
    buttonSizeSmall[index].style.fontSize = "18px";
    buttonSizeSmall[index].style.color = "beige";
    buttonSizeSmall[index].style.outlineColor = "transparent";
    if (roundedButtons == "T") {
        buttonSizeSmall[index].style.borderRadius = "15px";
    } else { buttonSizeSmall[index].style.borderRadius = "-1px"; }
}
for (index = 0, len = buttonSizeBig.length ; index < len ; index++) {
    buttonSizeBig[index].style.backgroundColor = "grey";
    buttonSizeBig[index].style.flexGrow = "10";
    buttonSizeBig[index].style.fontSize = "22px";
    buttonSizeBig[index].style.color = "beige";
    buttonSizeBig[index].style.outlineColor = "transparent";
    if (roundedButtons == "T") {
        buttonSizeBig[index].style.borderRadius = "15px";
    } else { buttonSizeBig[index].style.borderRadius = "-1px"; }
}

// don't show the buttons if there is only one cloze
let hideButtons="F"; 
if(clozes.length <= 1 && autoShowFirstIfOnly == "T") {
   let hideButtons = "T";
   enableHiding = "F";
}
if(hideButtons == "T") {
    for (index = 0, len = biggerButtonOnlyOnMobile.length ; index < len ; index++) {
       biggerButtonOnlyOnMobile[index].style.display = "none";
    }
    for (index = 0, len = buttonSizeSmall.length ; index < len ; index++) {
        buttonSizeSmall[index].style.display = "none";
    }
    for (index = 0, len = buttonSizeBig.length ; index < len ; index++) {
        buttonSizeBig[index].style.display = "none";
    }
}; 


// hides the clozes
clozes.slice(0).forEach((item) => {
    item.style.backgroundColor = cloze_color;
    item.style.width = "2%";
    item.style.height = "20px";
    item.style.overflow = "hidden";
    item.style.textOverflow = "ellipsis";
    item.style.whiteSpace = "nowrap";
    item.style.display = "inline-block";
    var imgs = item.getElementsByTagName("img");
    for (var i = 0; i < imgs.length; i++) {
         if (hideImagesFully == "T") { imgs[i].style.display = "none"; }
         else { imgs[i].style.visibility = "hidden"; };
    }
    item.addEventListener("click", () => {
        item.style.backgroundColor = cloze_bg_color;
        item.style.width = "";
        item.style.height = "";
        item.style.overflow = "";
        item.style.textOverflow = "";
        item.style.whiteSpace = "";
        item.style.display = "inline";
        var imgs = item.getElementsByTagName("img");
        for (var i = 0; i < imgs.length; i++) {
            if (hideImagesFully == "T") { imgs[i].style.display = "inline-block"; }
            else { imgs[i].style.visibility = "visible"; };
            if (isOnMobileBack == "T") {
                imgs[i].style.height = "unset";
                imgs[i].style.width = "unset";
            };
        };
        manuallyClicked = manuallyClicked+1;
        resetHintLettConst();
    });
});

// "is included in" function, from stack overflow, no shame
function include(arr, obj) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == obj) return true;
  }
}

// keystroke detector
document.addEventListener("keydown", (event) => {
    if (include(shortcutToReveal, event.key)) { revealOneConst(); };
    if (include(shortcutToReset, event.key)) { resetClozesConst(); };
    if (include(shortcutToShowAll, event.key)) { revealAllConst(); };
    if (include(shortcutToShow5, event.key)) { for(let i = 0 ; i < 5;i++) {revealOneConst();}};
    if (include(shortcutToHintLett, event.key)) { revealHintLettConst(); };
    if (include(shortcutToHintWord, event.key)) { revealHintWordConst(); };
});

// autoscroll to the cloze
// https://old.reddit.com/r/Anki/comments/acukqg/how_to_autoscroll_to_cloze_deletion_part_in_long/
const autoScrollToCloze = function(item) {
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
 


// cloze related functions
// super ugly code but apparently only var works with the html buttons while const only works with the keystrokes... So I duplicated all function to make it work
// code for html buttons :
var revealOneVar = function() {
    clozes.slice(0).some((item) => {   
                    if (item.style.backgroundColor != cloze_bg_color) {
                        item.style.backgroundColor = cloze_bg_color;
                        item.style.width = "";
                        item.style.height = "";
                        item.style.overflow = "";
                        item.style.textOverflow = "";
                        item.style.whiteSpace = "";
                        item.style.display = "inline";
                        var imgs = item.getElementsByTagName("img");
                        for(var i = 0; i < imgs.length; i++){ 
                            if (hideImagesFully == "T") { imgs[i].style.display = "inline-block"; }
                            else { imgs[i].style.visibility = "visible"; };
                            if (isOnMobileBack == "T") {
                                imgs[i].style.height = "unset";
                                imgs[i].style.width = "unset";
                            };
                        };
                        autoScrollToCloze(item);
                        return true;
                    }
                });
    c = c+1 ; if (c > clozes.length) { c=clozes.length };
    n = 0;
    resetHintLettVar();
};
var resetClozesVar = function() {
    clozes.slice(0).forEach((item) => {
            item.style.backgroundColor = cloze_color;
            item.style.width = "2%";
            item.style.height = "20px";
            item.style.overflow = "hidden";
            item.style.textOverflow = "ellipsis";
            item.style.whiteSpace = "nowrap";
            item.style.display = "inline-block";
            var imgs = item.getElementsByTagName("img");
            for (var i = 0; i < imgs.length; i++) {
                 if (hideImagesFully == "T") { imgs[i].style.display = "none"; }
                 else { imgs[i].style.visibility = "hidden"; };
            };
    });
    window.scroll(0,0);
    c = 0;
    n = 0;
    manuallyClicked = 0;
    resetHintLettVar();
};
var revealAllVar = function() {
    clozes.slice(0).forEach((item) => {
            item.style.backgroundColor = cloze_bg_color;
            item.style.width = "";
            item.style.height = "";
            item.style.overflow = "";
            item.style.textOverflow = "";
            item.style.whiteSpace = "";
            item.style.display = "inline";
            var imgs = item.getElementsByTagName("img");
            for (var i = 0; i < imgs.length; i++) {
                if (hideImagesFully == "T") { imgs[i].style.display = "inline-block"; }
                else { imgs[i].style.visibility = "visible"; };
                if (isOnMobileBack == "T") {
                    imgs[i].style.height = "unset";
                    imgs[i].style.width = "unset";
                };
            };
    });
    c = clozes.length;
    n = 0;
    manuallyClicked = 0;
    resetHintLettVar();
};

// code for keystrokes
const revealOneConst = function() {
    clozes.slice(0).some((item) => {   
                    if (item.style.backgroundColor != cloze_bg_color) {
                        item.style.backgroundColor = cloze_bg_color;
                        item.style.width = "";
                        item.style.height = "";
                        item.style.overflow = "";
                        item.style.textOverflow = "";
                        item.style.whiteSpace = "";
                        item.style.display = "inline";
                        var imgs = item.getElementsByTagName("img");
                        for(var i = 0; i < imgs.length; i++){ 
                            if (hideImagesFully == "T") { imgs[i].style.display = "inline-block"; }
                            else { imgs[i].style.visibility = "visible"; };
                            if (isOnMobileBack == "T") {
                                imgs[i].style.height = "unset";
                                imgs[i].style.width = "unset";
                            };
                        };
                        autoScrollToCloze(item);
                        return true;
                    }
                });
    c = c+1; if (c > clozes.length) { c=clozes.length };
    n = 0;
    resetHintLettConst();
};
const resetClozesConst = function() {
    clozes.slice(0).forEach((item) => {
            item.style.backgroundColor = cloze_color;
            item.style.width = "2%";
            item.style.height = "20px";
            item.style.overflow = "hidden";
            item.style.textOverflow = "ellipsis";
            item.style.whiteSpace = "nowrap";
            item.style.display = "inline-block";
            var imgs = item.getElementsByTagName("img");
            for (var i = 0; i < imgs.length; i++) {
                 if (hideImagesFully == "T") { imgs[i].style.display = "none"; }
                 else { imgs[i].style.visibility = "hidden"; };
            };
    });
    window.scroll(0,0);
    c = 0;
    n = 0;
    manuallyClicked = 0;
    resetHintLettConst();
};
const revealAllConst = function() {
    clozes.slice(0).forEach((item) => {
            item.style.backgroundColor = cloze_bg_color;
            item.style.width = "";
            item.style.height = "";
            item.style.overflow = "";
            item.style.textOverflow = "";
            item.style.whiteSpace = "";
            item.style.display = "inline";
            var imgs = item.getElementsByTagName("img");
            for (var i = 0; i < imgs.length; i++) {
                if (hideImagesFully == "T") { imgs[i].style.display = "inline-block"; }
                else { imgs[i].style.visibility = "visible"; };
                if (isOnMobileBack == "T") {
                    imgs[i].style.height = "unset";
                    imgs[i].style.width = "unset";
                };
             };
    });
    c = clozes.length;
    n = 0;
    manuallyClicked = 0;
    resetHintLettConst();
};



// shows letter by letter (hint)
var revealHintLettVar = function() { 
    if ( c < clozes.length) {
        if (clozes[c].style.backgroundColor == cloze_color) {
            hintLettField.textContent = hintLettField.textContent.substring(0,hintLettField.textContent.length-1);
            hintLettField.textContent += clozes[c].textContent.substring(n,n+1)+"…";
            n=n+1;
            if (n >= clozes[c].textContent.length+1) { 
                n = 0;
                revealOneVar();
            };
        } 
        else { c=c+1 ; revealHintLettVar()};
        hintLettField2.textContent = hintLettField.textContent ;
    }
};
const revealHintLettConst = function() { 
    if ( c < clozes.length) {
        if (clozes[c].style.backgroundColor == cloze_color) {
            hintLettField.textContent = hintLettField.textContent.substring(0,hintLettField.textContent.length-1);
            hintLettField.textContent += clozes[c].textContent.substring(n,n+1)+"…";
            n=n+1;
            if (n >= clozes[c].textContent.length+1) { 
                n = 0;
                revealOneConst();
            };
        } 
        else { c=c+1 ; revealHintLettConst()};
        hintLettField2.textContent = hintLettField.textContent ;
    }
};
var revealHintWordVar = function() {
    revealHintLettVar();
    var counting = 0;
    while ( (!(include(wordSeparators,hintLettField.textContent.charAt(hintLettField.textContent.length-2)))) && n != 0 && counting <= 99) {
        revealHintLettVar();
        counting = counting +1;
    };
};
const revealHintWordConst = function() {
    revealHintLettConst();
    var counting = 0;
    while ( (!(include(wordSeparators,hintLettField.textContent.charAt(hintLettField.textContent.length-2)))) && n != 0 && counting <= 99) {
        revealHintLettConst();
        counting = counting +1;
    };
};
var resetHintLettVar = function() {
    n = 0;
    hintLettField.textContent = '…' ; 
    hintLettField2.textContent = hintLettField.textContent ;
    numbIndi.textContent = Math.max(0,Math.round(clozes.length-c-manuallyClicked))
};
const resetHintLettConst = function() {
    n = 0;
    hintLettField.textContent = '…' ;
    hintLettField2.textContent = hintLettField.textContent ;
    numbIndi.textContent = Math.max(0,Math.round(clozes.length-c-manuallyClicked))
};









// init
if (enableHiding == "F") { revealAllVar();};
resetHintLettVar()
resetHintLettConst();



</script>

