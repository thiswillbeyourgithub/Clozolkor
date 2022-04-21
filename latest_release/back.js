<span class = debugFieldBack></span>

<!-- HEADER -->
<span id="decksContainer">
    {{Deck}}
</span> 
<span id="tagsContainer">
    {{Tags}}
</span>

<span style="font-size:12px">
        <span class=notOnMobile>
        <!-- not shown on mobile because those information will be added in ankidroid using js code below -->
                <span style="color:blue">
                    {{info-New?:}}
                </span>
                <span style="color:green">
                    {{info-Review?:}}
                </span>
                <span style="color:red">
                    {{info-Learning?:}}
                </span>
                {{info-Factor:}}
        </span>
</span>

<span class=orange>
    {{#Teacher}}<i>{{Teacher}}</i>&nbsp&nbsp&nbsp{{/Teacher}}
</span> 

<span class="biggerButtonOnlyOnMobile">
    <button id=addStateHereBack class=buttonSizeSmall></button>
    <button id="show_button" onclick="resetClozesVar();" class="buttonSizeSmall">Hide</button>
    <button id="show_button" onclick="revealAllVar();" class="buttonSizeSmall">Show</button>
    <button id="show_button" onclick="revealHintWordVar();" class="buttonSizeBig"> Word</button>
    <button id="show_button" onclick="revealHintLettVar();" class="buttonSizeBig"> Letter</button>
    <button id="show_button"  onclick="revealOneVar();" class="buttonSizeSmall"> Cloze</button>
</span>

<!-- line that will be filled with the cloze hint-->
<div id="hintLettUp"></div> 

<span class=notOnMobile>
	<hr noshade size="2">
</span>


<!-- field header -->
<span class=headerField>
    {{#Header}}<b>{{Header}}</b><br>{{/Header}}
</span>

<!-- the next two spans are used to display the card using Sans Forgetica if it's harder, at least on the desktop app. On ankidroid this is done below. They need to encompass the whole cloze -->
<span class="{{Tags}}">
    <span class="ease{{info-Factor:}}">
        <div style="text-indent:0%">
                 <!-- cloze body -->
                 {{cloze:Body}}
        </div>
    </span>
</span>

<span class=notOnMobile>
	<hr noshade size="2">
</span>

<!-- line that will be filled with the cloze hint-->
<span id="hintLettDown"></span>

<div class="biggerButtonOnlyOnMobile">
    <button id="show_button" onclick="revealOneVar();" class="buttonSizeSmall">C</button> 
    <button id="show_button" onclick="revealHintLettVar();" class="buttonSizeBig">L</button>
    <button id="show_button" onclick="revealHintWordVar();" class="buttonSizeBig">W</button>
<!--    <button id="show_button" onclick="revealOneVar();"   class="buttonSizeSmall">C</button>  -->
</div>


{{#Hint}}
    <span style="font-size:30px; text-align:center;">
        <span class=openWithButton>
            {{hint:Hint}}
					  <hr size="1" noshade width="33%" align="left">
        </span>
    </span>
{{/Hint}}
{{#More}}
    <span style="font-size:30px;">
        <span class=openWithButton>
            {{hint:More}}
						<hr size="1" noshade width="33%" align="left">
        </span>
    </span>
{{/More}}
{{#Source}}
    <span class=grey>
        <span class=openWithButton>
            {{hint:Source}}<br>
        </span>
    </span>
{{/Source}}
{{#Source extra}}
    <span class=grey>
        <span class=openWithButton>
            {{hint:Source extra}}<br>
        </span>
    </span>
{{/Source extra}}

<script>
//    Released under the GNU General Public License v3.
//    Copyright (C) - 2020 - user "thiswillbeyourgithub" of the website "github".
//    This file is the Back of the Clozolkor template. It is part of Clozolkor : an
//    Anki card template helping user to retain knowledge.
//
//    Clozolkor is free software: you can redistribute it and/or modify
//    it under the terms of the GNU General Public License as published by
//    the Free Software Foundation, either version 3 of the License, or
//    (at your option) any later version.
//
//    Clozolkor is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//    GNU General Public License for more details.
//
//    You should have received a copyof the GNU General Public License
//    along with Clozolkor.  If not, see <https://www.gnu.org/licenses/>.
//    */ /*
//    for more information or to get the latest version go to :
//    https://github.com/thiswillbeyourgithub/Clozolkor
//    Version : June 2021
//
//    credits due to (at least! ) :
//    thiswillbeyourgithub (main dev)
//    iTraveller (original idea as far as I can tell), /u/AnkingMed (general helper)
//    /u/BlueGreenMagick (code help), /u/ssnoyes (piece of code), 
//    /u/DrewZZZ and /u/yumenogotoshi (scroll code)
//
// ###########################################
// CHECKS
try {

// only proceed if card is not empty :
const clozes            = [...document.querySelectorAll(".cloze")]; 
if (clozes.length !== 0) {

// hides the card before it is fully loaded, otherwise you can catch a glimpse of images on slow devices
var defaultDisplayBack = [...document.querySelectorAll(".card")][0].style.display;
[...document.querySelectorAll(".card")][0].style.display = "none !important";

// to debug, put the following line where you want :
//	debugFieldBack[0].textContent += "code run until point A";
// another better way is to use alert("some string"); to know if the code is running a specific part or not, or window.alert()

// ###########################################
    // USER SETTINGS

var qFade = 0; // set a delay to appear and flip smoothly
var aFade = 0;
let enableHiding        = "T"; // set to "F" to disable hiding
let enableAutoScroll    = "T" ; // set to "F" to disable autoscroll
let autoShowFirstIfOnly = "F" ; //set to "T" to show directly the first one and hide the buttons
let hideImagesFully     = "T"; // if "F", you can use image size as a hint
let forceMobileBehavior = "F";  // mainly used to debug
let roundedButtons      = "F" ; // "F" to square buttons
let hiddenClozeWidth    = "1px"; // default : "1%", can be in pixel "1px", if very thin it allows to have cloze that touch each other without you being able to count them short of openning the first one
let hiddenClozeHeight   = "16px"; // default : "15px"
let smallButtonSize     = "20px"; // default : "20px"
let largeButtonSize     = "25px"; // default : "15px"
var enableTagsContainerBack = "T"; // default : "T"
var enableDecksContainerBack = "T"; // default : "T"
let tagsAndDeckFontSize     = "8px"; // default : "8px"
let DisableHintLettFieldDow = "F"; // default : "F", disables the secondary hint letter field


    // USER SHORTCUTS
let shortcutToReveal   = ['w', 'n']; // default ['w', 'n']
let shortcutToHintLett = [';','c'];
let shortcutToHintWord = [',','x'];
let shortcutToShow5    = [''];
let shortcutToShowAll  = ['.'];
let shortcutToReset    = [':', 'q'];
let wordSeparators      = [" ", "=", "~", "/", "|", "(", ")", "+", "*", "-", ".", "<", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!","?"] ; // when hinting a whole word
//let wordSeparators     = [" ", "=", "~","'", ",", "/", "|", "(", ")", "+", "*", "-", ".", "<", ">", ";", ":","\"", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","!","?"] ; // when hinting a whole word

    // VARIABLES ASSIGNMENT
let c                   = 0; // index of cloze
let n                   = 0; // index of the character of the letter used of hints
n = null ; n = undefined; c = null ; c = undefined; c = 0 ; n = 0 ; // this is a trial to make sure c and n are indeed reset across cards


var cloze_color         = window.getComputedStyle(clozes[0]).color;
var cloze_bg_color      = window.getComputedStyle(clozes[0]).backgroundColor;
if (typeof cloze_bg_color == 'undefined') { let cloze_bg_color = "white"}; // not sure it works
const biggerButtonOnlyOnMobile = document.getElementsByClassName("biggerButtonOnlyOnMobile");
const notOnMobile       = document.getElementsByClassName("notOnMobile");
const buttonSizeSmall   = document.getElementsByClassName("buttonSizeSmall");
const buttonSizeBig     = document.getElementsByClassName("buttonSizeBig");
const hintLettFieldUp   = document.getElementById("hintLettUp");
const hintLettFieldDown = document.getElementById("hintLettDown");
const debugFieldBack    = document.getElementsByClassName("debugFieldBack");
const addStateHereBack  = document.getElementById("addStateHereBack") ; 
const tagsContainer     = document.getElementById("tagsContainer")
const decksContainer    = document.getElementById("decksContainer")

    // STYLING
hintLettFieldUp.style.fontStyle         = "italic";
hintLettFieldUp.style.backgroundColor   = "transparent";
hintLettFieldUp.style.color             = cloze_color;
hintLettFieldUp.style.display           = "flex";
hintLettFieldUp.style.justifyContent    = "left";
hintLettFieldUp.style.alignItems        = "left";
hintLettFieldDown.style.fontStyle       = "italic"; 
hintLettFieldDown.style.backgroundColor = "transparent";
hintLettFieldDown.style.color           = cloze_color;
hintLettFieldDown.style.display         = "flex";
hintLettFieldDown.style.justifyContent  = "left";
hintLettFieldDown.style.alignItems      = "left";

    
    
	// BUTTON STYLING AND MOBILE BEHAVIOR (hide on computer, show on mobile etc) :

    // setup all buttons
for (index = 0, len = buttonSizeSmall.length ; index < len ; index++) {
    buttonSizeSmall[index].style.backgroundColor = "grey";
    buttonSizeSmall[index].style.flexGrow        = "1";
    buttonSizeSmall[index].style.fontSize        = smallButtonSize;
    buttonSizeSmall[index].style.color           = "beige";
    buttonSizeSmall[index].style.outlineColor    = "transparent";
    if (roundedButtons == "T") {
        buttonSizeSmall[index].style.borderRadius = smallButtonSize;
    } 
    else { buttonSizeSmall[index].style.borderRadius = "-1px"; }
}
for (index = 0, len = buttonSizeBig.length ; index < len ; index++) {
    buttonSizeBig[index].style.backgroundColor = "grey";
    buttonSizeBig[index].style.flexGrow        = "10";
    buttonSizeBig[index].style.fontSize        = largeButtonSize;
    buttonSizeBig[index].style.color           = "beige";
    buttonSizeBig[index].style.outlineColor    = "transparent";
    if (roundedButtons == "T") {
        buttonSizeBig[index].style.borderRadius = largeButtonSize;
    } else { buttonSizeBig[index].style.borderRadius = "-1px"; }
}


    // platform tests :
try {
                // ankidroid :
    var isOnMobileBack = "F"; // preset to false
    var isAnkiDroidBack = /wv/i.test(navigator.userAgent);
    if (isAnkiDroidBack) { isOnMobileBack = "T"; isOnAndroidBack = "T"; };
    if (navigator.userAgent.indexOf("droid") >= 0) { isOnMobileBack = "T"; isOnAndroidBack = "T"; };
                // ankiMobile :
    if (navigator.userAgent.indexOf("obile") >= 0 && isOnAndroidBack == "F") { isOnMobileBack = "T"; };
                // desktop :
    if (ankiPlatform.indexOf("esktop")==-1) { isOnMobileBack = "F"; isOnAndroidBack = "F" };
} catch(e) { }


    // ankidroid's buttons etc :

//if (navigator.userAgent.indexOf("obile") >= 0 || navigator.userAgent.indexOf("droid") >= 0 || ankiPlatform.indexOf("esktop")==-1 || isAnkiDroidBack || forceMobileBehavior == "T")  {
if (isOnMobileBack == "T" || forceMobileBehavior == "T") {
    if (isOnAndroidBack == "T") {
        var jsApi = {"version" : "0.0.1", "developer" : "dev@mail.com"};
        var apiStatus = AnkiDroidJS.init(JSON.stringify(jsApi));
        console.log(apiStatus);
        var api = JSON.parse(apiStatus);

        // adds card status to the header
        if (AnkiDroidJS.ankiGetCardType() == 0) { addStateHereBack.textContent = "N"  ; addStateHereBack.style.color = "blue" ;} //new
        if (AnkiDroidJS.ankiGetCardType() == 1) { addStateHereBack.textContent = "L"  ; addStateHereBack.style.color = "red" ;} //learning
        if (AnkiDroidJS.ankiGetCardType() == 2) { addStateHereBack.textContent = "R"  ; addStateHereBack.style.color = "green" ;} //review
        if (AnkiDroidJS.ankiGetCardType() == 3) { addStateHereBack.textContent = "rL" ; addStateHereBack.style.color = "red" ;} //relearning

        // adds ease factor to the header
        addStateHereBack.textContent += AnkiDroidJS.ankiGetCardFactor()/10;
    }

    // button display for mobile
    for (index = 0, len = biggerButtonOnlyOnMobile.length ; index < len ; index++) {
        biggerButtonOnlyOnMobile[index].style.display         = "flex";
        biggerButtonOnlyOnMobile[index].style.flexWrap        = "no-wrap";
        biggerButtonOnlyOnMobile[index].style.justifyContent  = "center";
        biggerButtonOnlyOnMobile[index].style.backgroundColor = "transparent";
    };
    for (index = 0, len = notOnMobile.length ; index < len ; index++) {
        notOnMobile[index].style.display = "none";
    };

} else {
    for (index = 0, len = biggerButtonOnlyOnMobile.length ; index < len ; index++) {
        biggerButtonOnlyOnMobile[index].style.display = "none";
    }
    for (index = 0, len = notOnMobile.length ; index < len ; index++) {
        notOnMobile[index].style.color     = "grey";
        notOnMobile[index].style.fontStyle = "bold";
    }
}
if (DisableHintLettFieldDow == "T") {
    hintLettFieldDown.style.display      = "none"; 
};

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

		// TAGS AND DECK STYLING :
if (enableDecksContainerBack == "T") {
    if (decksContainer.childElementCount == 0) {
     var deckList = decksContainer.innerHTML.split("::");
     var newdeckContent = document.createElement("div");

     for (var i = 0; i < deckList.length;  i++) {
      var newdeck = document.createElement("button");
      newdeck.innerHTML = deckList[i].replace(" - ", "-");
      newdeckContent.append(newdeck)
     }
     decksContainer.innerHTML              =  newdeckContent.innerHTML;
     decksContainer.style.display          =  "flex";
     decksContainer.style.flexwrap         =  "no-wrap";
     decksContainer.style.justifyContent   =  "left";
     decksContainer.style.backgroundColor   =  cloze_bg_color;

      for (i = 0 , len = decksContainer.querySelectorAll("button").length ; i < len ; i++) {
          decksContainer.querySelectorAll("button")[i].style.fontSize         =  tagsAndDeckFontSize;
          decksContainer.querySelectorAll("button")[i].style.height            =  5;
          decksContainer.querySelectorAll("button")[i].style.flexGrow         =  "1";
          decksContainer.querySelectorAll("button")[i].style.color            =  cloze_color;
          decksContainer.querySelectorAll("button")[i].style.backgroundColor  =  "transparent";
          decksContainer.querySelectorAll("button")[i].style.outlineColor     =  "transparent";
          decksContainer.querySelectorAll("button")[i].style.textShadow     =  "none";
          decksContainer.querySelectorAll("button")[i].style.borderRadius     =  "-1px";
          decksContainer.querySelectorAll("button")[i].style.border     =  "none";
          decksContainer.querySelectorAll("button")[i].style.opacity     =  0.8;
          decksContainer.querySelectorAll("button")[i].style.fontWeight     =  "bold";
      }
    }
} else { decksContainer.style.display = "none"; }
if (enableTagsContainerBack == "T") {
    if (tagsContainer.childElementCount == 0) {
     var newTagContent = document.createElement("div");
     var tagList = [...new Set(tagsContainer.innerHTML.replace(/ +/,"").split(/::| /))];

     for (var i = 0; i < tagList.length;  i++) {
      var newTag = document.createElement("button");
      newTag.innerHTML = tagList[i];
      newTagContent.append(newTag)
     }
        tagsContainer.innerHTML              =  newTagContent.innerHTML;
        tagsContainer.style.display          =  "flex";
        tagsContainer.style.flexwrap         =  "no-wrap";
        tagsContainer.style.justifyContent   =  "left";
        tagsContainer.style.backgroundColor   =  cloze_bg_color;

      for (i = 0 , len = tagsContainer.querySelectorAll("button").length ; i < len ; i++) {
          tagsContainer.querySelectorAll("button")[i].style.fontSize         =  tagsAndDeckFontSize;
          tagsContainer.querySelectorAll("button")[i].style.height         =  5;
          tagsContainer.querySelectorAll("button")[i].style.flexGrow         =  "1";
          tagsContainer.querySelectorAll("button")[i].style.color            =  cloze_color;
          tagsContainer.querySelectorAll("button")[i].style.backgroundColor  =  "transparent";
          tagsContainer.querySelectorAll("button")[i].style.outlineColor     =  "transparent";
          tagsContainer.querySelectorAll("button")[i].style.textShadow     =  "none";
          tagsContainer.querySelectorAll("button")[i].style.borderRadius     =  "-1px";
          tagsContainer.querySelectorAll("button")[i].style.border     =  "none";
          tagsContainer.querySelectorAll("button")[i].style.opacity     =  0.8;
          tagsContainer.querySelectorAll("button")[i].style.fontWeight     =  "bold";
      }
    }
} else { tagsContainer.style.display = "none"; }

// ###########################################
// MAIN CODE :

// hides the clozes
clozes.slice(0).forEach((item) => {
    item.style.backgroundColor = cloze_color;
    item.style.width           = hiddenClozeWidth;
    item.style.height          = hiddenClozeHeight;
    item.style.color           = "inherit";
    item.style.textIndent      = "100%";
    item.style.overflow        = "hidden";
    item.style.textOverflow    = "ellipsis";
    item.style.whiteSpace      = "nowrap";
    item.style.display         = "inline-block";
    var imgs = item.getElementsByTagName("img");
    for (var i = 0; i < imgs.length; i++) {
         if (hideImagesFully == "T") { imgs[i].style.display = "none"; }
         else { imgs[i].style.visibility = "hidden"; };
    }
    item.addEventListener("click", () => {
        item.style.backgroundColor = cloze_bg_color;
        item.style.width           = "";
        item.style.height          = "";
        item.style.overflow        = "";
        item.style.textOverflow    = "";
        item.style.whiteSpace      = "";
        item.style.display         = "inline";
        var imgs                   = item.getElementsByTagName("img");
        for (var i = 0; i < imgs.length; i++) {
            if (hideImagesFully == "T") { imgs[i].style.display = "inline-block"; }
            else { imgs[i].style.visibility = "visible"; };
            if (isOnMobileBack == "T") {
                imgs[i].style.height = "unset";
                imgs[i].style.width  = "unset";
            };
        };
        resetHintLettConst();
        resetVariableCConst();
        resetVariableCVar();
        if (c == clozes.length) {
            var openWithButtonConst = document.getElementsByClassName("openWithButton")
                for(var i=0; i<openWithButtonConst.length; i++) {
                        openWithButtonConst[i].querySelector('*').click()
            };
            hintLettFieldUp.style.opacity = 0;
            hintLettFieldDown.style.opacity = 0;
        }
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
                        item.style.width           = "";
                        item.style.height          = "";
                        item.style.overflow        = "";
                        item.style.textOverflow    = "";
                        item.style.whiteSpace      = "";
                        item.style.display         = "inline";
                        item.style.textIndent      = "0%";
                        var imgs                   = item.getElementsByTagName("img");
                        for(var i = 0; i < imgs.length; i++){ 
                            if (hideImagesFully == "T") { imgs[i].style.display = "inline"; }
                            else { imgs[i].style.visibility = "visible"; };
                            if (isOnMobileBack == "T") {
                                imgs[i].style.height = "unset";
                                imgs[i].style.width  = "unset";
                            };
                        };
                        autoScrollToCloze(item);
                        return true;
                    }
        });
    resetVariableCVar();
    resetHintLettVar();
    if (c == clozes.length) {
        var openWithButtonVar = document.getElementsByClassName("openWithButton")
        for(var i=0; i<openWithButtonVar.length; i++) {
                openWithButtonVar[i].querySelector('*').click()
        };
        hintLettFieldUp.style.opacity = 0;
        hintLettFieldDown.style.opacity = 0;
    }
};
var resetClozesVar = function() {
    clozes.slice(0).forEach((item) => {
            item.style.backgroundColor = cloze_color;
            item.style.width           = hiddenClozeWidth;
            item.style.height          = hiddenClozeHeight;
            item.style.overflow        = "hidden";
            item.style.textOverflow    = "ellipsis";
            item.style.whiteSpace      = "nowrap";
            item.style.display         = "inline-block";
            var imgs                   = item.getElementsByTagName("img");
            for (var i = 0; i < imgs.length; i++) {
                 if (hideImagesFully == "T") { imgs[i].style.display = "none"; }
                 else { imgs[i].style.visibility = "hidden"; };
            };
    });
    window.scroll(0,0);
    c = 0;
    resetHintLettVar();
};
var revealAllVar = function() {
    clozes.slice(0).forEach((item) => {
            item.style.backgroundColor = cloze_bg_color;
            item.style.width           = "";
            item.style.height          = "";
            item.style.overflow        = "";
            item.style.textOverflow    = "";
            item.style.whiteSpace      = "";
            item.style.display         = "inline";
            item.style.textIndent      = "0%";
            var imgs                   = item.getElementsByTagName("img");
            for (var i = 0; i < imgs.length; i++) {
                if (hideImagesFully == "T") { imgs[i].style.display = "inline-block"; }
                else { imgs[i].style.visibility = "visible"; };
                if (isOnMobileBack == "T") {
                    imgs[i].style.height = "unset";
                    imgs[i].style.width  = "unset";
                };
            };
    });
    resetHintLettVar();
    c = clozes.length;
    if (c == clozes.length) {
        var openWithButtonVar = document.getElementsByClassName("openWithButton")
        for(var i=0; i<openWithButtonVar.length; i++) {
                openWithButtonVar[i].querySelector('*').click()
        };
        hintLettFieldUp.style.opacity = 0;
        hintLettFieldDown.style.opacity = 0;
    }
};

// code for keystrokes
const revealOneConst = function() {
    clozes.slice(0).some((item) => {   
                    if (item.style.backgroundColor != cloze_bg_color) {
                        item.style.backgroundColor = cloze_bg_color;
                        item.style.width           = "";
                        item.style.height          = "";
                        item.style.overflow        = "";
                        item.style.textOverflow    = "";
                        item.style.whiteSpace      = "";
                        item.style.display         = "inline";
                        item.style.textIndent      = "0%";
                        var imgs                   = item.getElementsByTagName("img");
                        for(var i = 0; i < imgs.length; i++){ 
                            if (hideImagesFully == "T") { imgs[i].style.display = "inline"; }
                            else { imgs[i].style.visibility = "visible"; };
                            if (isOnMobileBack == "T") {
                                imgs[i].style.height = "unset";
                                imgs[i].style.width  = "unset";
                            };
                        };
                        autoScrollToCloze(item);
                        return true;
                    }
     });
    resetVariableCConst();
    resetHintLettConst();
    if (c == clozes.length) {
        const openWithButtonConst = document.getElementsByClassName("openWithButton")
        for(var i=0; i<openWithButtonConst.length; i++) {
                openWithButtonConst[i].querySelector('*').click()
        };
        hintLettFieldUp.style.opacity = 0;
        hintLettFieldDown.style.opacity = 0;
    }
};
const resetClozesConst = function() {
    clozes.slice(0).forEach((item) => {
            item.style.backgroundColor = cloze_color;
            item.style.width           = hiddenClozeWidth;
            item.style.height          = hiddenClozeHeight;
            item.style.overflow        = "hidden";
            item.style.textOverflow    = "ellipsis";
            item.style.whiteSpace      = "nowrap";
            item.style.display         = "inline-block";
            var imgs                   = item.getElementsByTagName("img");
            for (var i = 0; i < imgs.length; i++) {
                 if (hideImagesFully == "T") { imgs[i].style.display = "none"; }
                 else { imgs[i].style.visibility = "hidden"; };
            };
    });
    window.scroll(0,0);
    c = 0;
    resetHintLettConst();
};
const revealAllConst = function() {
    clozes.slice(0).forEach((item) => {
            item.style.backgroundColor = cloze_bg_color;
            item.style.width           = "";
            item.style.height          = "";
            item.style.overflow        = "";
            item.style.textOverflow    = "";
            item.style.whiteSpace      = "";
            item.style.display         = "inline";
            item.style.textIndent      = "0%";
            var imgs                   = item.getElementsByTagName("img");
            for (var i = 0; i < imgs.length; i++) {
                if (hideImagesFully == "T") { imgs[i].style.display = "inline-block"; }
                else { imgs[i].style.visibility = "visible"; };
                if (isOnMobileBack == "T") {
                    imgs[i].style.height = "unset";
                    imgs[i].style.width  = "unset";
                };
            };
    });
    resetHintLettConst();
    c = clozes.length;
    if (c == clozes.length) {
        const openWithButtonConst = document.getElementsByClassName("openWithButton")
        for(var i=0; i<openWithButtonConst.length; i++) {
                openWithButtonConst[i].querySelector('*').click()
        };
        hintLettFieldUp.style.opacity = 0;
        hintLettFieldDown.style.opacity = 0;
    }
};

// shows letter by letter (hint)
var revealHintLettVar = function() { 
    if ( c < clozes.length) {
        if (clozes[c].style.backgroundColor == cloze_color) {
            hintLettFieldUp.textContent = hintLettFieldUp.textContent.substring(0,hintLettFieldUp.textContent.length-1);
            hintLettFieldUp.textContent += clozes[c].textContent.substring(n,n+1)+"…";
            n=n+1;
            if (n >= clozes[c].textContent.length) { 
                n = 0;
                revealOneVar();
            };
        } 
        else { c=c+1 ; revealHintLettVar()};
        hintLettFieldDown.textContent = hintLettFieldUp.textContent ;
    }
};
const revealHintLettConst = function() { 
    if ( c < clozes.length) {
        if (clozes[c].style.backgroundColor == cloze_color) {
            hintLettFieldUp.textContent = hintLettFieldUp.textContent.substring(0,hintLettFieldUp.textContent.length-1);
            hintLettFieldUp.textContent += clozes[c].textContent.substring(n,n+1)+"…";
            n=n+1;
            if (n >= clozes[c].textContent.length) { 
                n = 0;
                revealOneConst();
            };
        } 
        else { c=c+1 ; revealHintLettConst()};
        hintLettFieldDown.textContent = hintLettFieldUp.textContent ;
    }
};
var revealHintWordVar = function() {
    revealHintLettVar();
    var counting = 0;
    while ( (!(include(wordSeparators,hintLettFieldUp.textContent.charAt(hintLettFieldUp.textContent.length-2)))) && n != 0 && counting <= 99) {
        revealHintLettVar();
        counting = counting +1;
    };
};
const revealHintWordConst = function() {
    revealHintLettConst();
    var counting = 0;
    while ( (!(include(wordSeparators,hintLettFieldUp.textContent.charAt(hintLettFieldUp.textContent.length-2)))) && n != 0 && counting <= 99) {
        revealHintLettConst();
        counting = counting +1;
    };
};
var resetHintLettVar = function() {
    n = 0;
    hintLettFieldUp.style.opacity = 1;
    hintLettFieldDown.style.opacity = 1;
    hintLettFieldUp.textContent   = '…' ; 
    hintLettFieldDown.textContent = hintLettFieldUp.textContent ;
};
const resetHintLettConst = function() {
    n = 0;
    hintLettFieldUp.style.opacity = 1;
    hintLettFieldDown.style.opacity = 1;
    hintLettFieldUp.textContent   = '…' ;
    hintLettFieldDown.textContent = hintLettFieldUp.textContent ;
};
var resetVariableCVar = function() {
   // resets the cloze counter to the minimum cloze number that is still hidden
   c=0 ; 
   inc = 0; // just a counter
   while (inc <100 && inc !=-1) {
       inc=inc+1;
       if (c < clozes.length) {
           if (clozes[c].style.backgroundColor == cloze_bg_color) { //if cloze is not hidden, see next cloze
                c=c+1;
           } else { inc = -1;} // exits the loop
        } else { inc=-1 ; c=clozes.length }
   }
};
const resetVariableCConst = function() {
   // resets the cloze counter to the minimum cloze number that is still hidden
   c=0 ; 
   inc = 0; // just a counter
   while (inc <100 && inc !=-1) {
       inc=inc+1;
       if (c < clozes.length) {
           if (clozes[c].style.backgroundColor == cloze_bg_color) { //if cloze is not hidden, see next cloze
                c=c+1;
           } else { inc = -1;} // exits the loop
        } else { inc=-1 ; c=clozes.length }
   }
};

// ###########################################
// code to run after all that 

if (enableHiding == "F") { revealAllVar();};
resetHintLettVar();
resetHintLettConst();

}; // end of  if clozes found

// finally shows the card
[...document.querySelectorAll(".card")][0].style.display = defaultDisplayBack;

//} catch(e) {	debugFieldBack[0].textContent += e }
} catch(e) {	alert(e) }
</script>
