<!-- eruda is used to enable debug inspecctor on ankidroid-->
<script src="//cdn.jsdelivr.net/npm/eruda"></script>

<span class = debugFieldBack></span>
<span id=nightmodeToggle></span>  <!-- used only to know when nightmode was turned on -->
<span style="display:none"; id="hintLett"></span>  <!--empty and hidden field that will just contain the clozolkor hint text -->

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
    {{#teacher}}<i>{{teacher}}</i>&nbsp&nbsp&nbsp{{/teacher}}
</span> 

<span class="biggerButtonOnlyOnMobile">
    <button id=addStateHereBack class=buttonSizeSmall></button>
    <button id="show_button" onclick="resetClozes();" class="buttonSizeSmall">Hide</button>
    <button id="show_button" onclick="revealAll();" class="buttonSizeSmall">Show</button>
    <button id="show_button" onclick="revealHintWord();" class="buttonSizeBig"> Word</button>
    <button id="show_button" onclick="revealHintLett();" class="buttonSizeBig"> Letter</button>
    <button id="show_button" onclick="revealOne();" class="buttonSizeSmall"> C</button>
    <button id="show_button" onclick="revealOneAuto();" class="buttonSizeSmall"> Auto</button>
</span>

<span class=notOnMobile>
	<hr noshade size="2">
</span>


<!-- field header -->
<span class=headerField>
    {{#header}}<b>{{header}}</b><br>{{/header}}
</span>

<!-- the next two spans are used to display the card using Sans Forgetica if it's harder, at least on the desktop app. On ankidroid this is done below. They need to encompass the whole cloze -->
<span class="{{Tags}}">
    <span class="ease{{info-Factor:}}">
        <span style="display:flex ;  flex-direction:row ; flex-wrap:nowrap">
            <span class="indentedClozeBox" style="flex-grow:1">&nbsp;</span>
            <span style="flex-grow:999 ; flex-wrap:wrap">{{cloze:body}}</span>
            <span class="indentedClozeBox" style="flex-grow:1">&nbsp;</span>
        </span>
    </span>
</span>

<span class=notOnMobile>
	<hr noshade size="2">
</span>

<div class="biggerButtonOnlyOnMobile">
    <button id="show_button" onclick="revealOneAuto();" class="buttonSizeBig">A</button>
    <!--<button id="show_button" onclick="revealOne();" class="buttonSizeSmall">C</button>-->
    <button id="show_button" onclick="revealAndBlur();"   class="buttonSizeSmall">B</button>
    <button id="show_button" onclick="revealHintLett();" class="buttonSizeBig">L</button>
    <button id="show_button" onclick="revealHintWord();" class="buttonSizeSmall">W</button>
<!--    <button id="show_button" onclick="revealOne();"   class="buttonSizeSmall">C</button>  -->
    <button id="show_button"  onclick="revealOneAuto();" class="buttonSizeBig">A</button>

</div>


{{#hint}}
    <span style="font-size:30px; text-align:center;">
        <span class=openWithButton>
            {{hint:hint}}
            <hr size="1" noshade width="33%" align="left">
        </span>
    </span>
{{/hint}}

{{#more}}
    <div style="font-size:40px;" class="openWithButton" id="more_banner">
            	{{hint:more}}
    </div>

{{/more}}

{{#AnkiMnemonics}}
    <div style="font-size:15px;" class="openWithButton" id="mnemonics_banner">
            	{{hint:AnkiMnemonics}}
    </div> </i></b></u>
{{/AnkiMnemonics}}

{{#AnkiExplainer}}
    <div style="font-size:15px;" class="openWithButton" id="summary_banner">
            	{{hint:AnkiExplainer}}
    </div> </i></b></u>
{{/AnkiExplainer}}

{{#AnkiIllustrator}}
    <div style="font-size:15px;" class="openWithButton" id="illustrator_banner">
            	{{hint:AnkiIllustrator}}
     <!--<hr size="25" noshade width="100%" align="left">-->
    </div> </i></b></u>
    <br>
{{/AnkiIllustrator}}



{{#source}}
    <span class=grey>
        <span class=openWithButton>
            {{hint:source}}<br>
        </span>
    </span>
{{/source}}

{{#source_extra}}
    <span class=grey>
        <span class=openWithButton>
            {{hint:source_extra}}<br>
        </span>
    </span>
{{/source_extra}}

{{#source_audio}}
    <span class=grey>
        <span class=openWithButton>
            {{hint:source_audio}}<br>
        </span>
    </span>
{{/source_audio}}

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

// ###########################################
// DEBUG


// to debug, put the following line where you want (see below) :
// debug("executed until here"); to add the string to debugFieldBack[0].textContent then use alert() on the same string

const debugFieldBack    = document.getElementsByClassName("debugFieldBack");
function debug(text) {
    debugFieldBack[0].textContent += text;
    try {
        alert(text);
    } catch(e) {alert(e)};
  }



// ###########################################
// CHECKS
try {

// only proceed if card is not empty :
var clozes            = [...document.querySelectorAll(".cloze")];
if (clozes.length !== 0) {

// hides the card before it is fully loaded, otherwise you can catch a glimpse of images on slow devices
var defaultDisplayBack = [...document.querySelectorAll(".card")][0].style.display;
[...document.querySelectorAll(".card")][0].style.display = "none !important";




// ###########################################
    // USER SETTINGS

var ankidroid_eruda = "F";  // if "T", will init eruda (js debuger) early to be sure to catch errors in an helpful way, otherwise it gets inited too late sometimes
var qFade = 0; // set a delay to appear and flip smoothly
var aFade = 0;
var enableHiding        = "T"; // set to "F" to disable hiding
var enableAutoScroll    = "T" ; // set to "F" to disable autoscroll
var autoShowFirstIfOnly = "F" ; //set to "T" to show directly the first one and hide the buttons
var hideImagesFully     = "T"; // if "F", you can use image size as a hint
var forceMobileBehavior = "F";  // mainly used to debug
var roundedButtons      = "F" ; // "F" to square buttons
var hiddenClozeWidth    = "1px"; // default : "1%", can be in pixel "1px", if very thin it allows to have cloze that touch each other without you being able to count them short of openning the first one
var hiddenClozeHeight   = "16px"; // default : "15px"
var smallButtonSize     = "22px"; // default : "20px"
var largeButtonSize     = "26px"; // default : "15px"
var enableTagsContainerBack = "F"; // default : "T"
var enableDecksContainerBack = "F"; // default : "T"
var tagsAndDeckFontSize     = "8px"; // default : "8px"
var indentedClozeSize = "25"; // default : 10
var indentedClozeSizeMobile = "5"; // default : 10


    // USER SHORTCUTS
var shortcutToReveal   = ['n']; // default ['n']
var shortcutToRevealAuto   = ['w']; // default ['w']
var shortcutToHintLett = [';','c'];
var shortcutToHintWord = [',','x'];
var shortcutToShow5    = [''];
var shortcutToShowAll  = ['.'];
var shortcutToReset    = [':', 'q'];
var shortcutToBlur     = ['W', 'C'];
var wordSeparators      = [" ", "=", "~", "/", "|", "(", ")", "+", "*", "-", ".", "<", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!","?"] ; // when hinting a whole word
//var wordSeparators     = [" ", "=", "~","'", ",", "/", "|", "(", ")", "+", "*", "-", ".", "<", ">", ";", ":","\"", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","!","?"] ; // when hinting a whole word














// ###########################################
// INIT various things

    // VARIABLES ASSIGNMENT
var c                   = 0; // index of cloze
var n                   = 0; // index of the character of the letter used of hints
n = null ; n = undefined; c = null ; c = undefined; c = 0 ; n = 0 ; // this is a trial to make sure c and n are indeed reset across cards


var cloze_color         = window.getComputedStyle(clozes[0]).color;
var cloze_bg_color      = window.getComputedStyle(clozes[0]).backgroundColor;
if (typeof cloze_bg_color == 'undefined') { let cloze_bg_color = "white"}; // not sure it works
const biggerButtonOnlyOnMobile = document.getElementsByClassName("biggerButtonOnlyOnMobile");
const notOnMobile       = document.getElementsByClassName("notOnMobile");
const buttonSizeSmall   = document.getElementsByClassName("buttonSizeSmall");
const buttonSizeBig     = document.getElementsByClassName("buttonSizeBig");
const indentclozeElem   = document.getElementsByClassName("indentedClozeBox");
const addStateHereBack  = document.getElementById("addStateHereBack") ; 
const tagsContainer     = document.getElementById("tagsContainer");
const decksContainer    = document.getElementById("decksContainer");
const hintLettField   = document.getElementById("hintLett");  // will contain the hint field but stay hidden

    
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
    // 2nd check for ankidroid:
    if (document.documentElement.classList.contains("android")) {
        var isAnkiDroidBack2 = "T";
    } else {var isAnkiDroidBack2 = "F";};
    if (isAnkiDroidBack || isAnkiDroidBack2 == "T") { isOnMobileBack = "T"; isOnAndroidBack = "T"; };
    if (navigator.userAgent.indexOf("droid") >= 0) { isOnMobileBack = "T"; isOnAndroidBack = "T"; };
                // ankiMobile :
    if (navigator.userAgent.indexOf("obile") >= 0 && isOnAndroidBack == "F") { isOnMobileBack = "T"; };
                // desktop :
    if (! typeof ankiPlatform === 'undefined') {
        if (ankiPlatform.indexOf("esktop")==-1) { isOnMobileBack = "F"; isOnAndroidBack = "F" };
    }

} catch(e) { debug(e); }


    // ankidroid's buttons etc :

//if (navigator.userAgent.indexOf("obile") >= 0 || navigator.userAgent.indexOf("droid") >= 0 || ankiPlatform.indexOf("esktop")==-1 || isAnkiDroidBack || forceMobileBehavior == "T")  {
if (isOnMobileBack == "T" || forceMobileBehavior == "T") {
    if (isOnAndroidBack == "T") {
        if (ankidroid_eruda == "T") {
            eruda.init();
        }

        var jsApi = {"version" : "0.0.2", "developer" : "clozolkor@m.c"};
        var api = new AnkiDroidJS(jsApi);

        // adds card status to the header
        if (api.ankiGetCardType() == 0) { addStateHereBack.textContent = "N"  ; addStateHereBack.style.color = "blue" ;} //new
        if (api.ankiGetCardType() == 1) { addStateHereBack.textContent = "L"  ; addStateHereBack.style.color = "red" ;} //learning
        if (api.ankiGetCardType() == 2) { addStateHereBack.textContent = "R"  ; addStateHereBack.style.color = "green" ;} //review
        if (api.ankiGetCardType() == 3) { addStateHereBack.textContent = "rL" ; addStateHereBack.style.color = "red" ;} //relearning

        // adds ease factor to the header
        addStateHereBack.textContent += api.ankiGetCardFactor()/10;
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

    for (index = 0, len = indentclozeElem.length ; index < len ; index++) {
        indentclozeElem[index].textContent = "";
        indentclozeElem[index].innerHTML = "";
        for (i = 0, len2 = indentedClozeSizeMobile ; i < len2 ; i++) {
            indentclozeElem[index].innerHTML += "&nbsp;";
        }
    }

} else {
    for (index = 0, len = biggerButtonOnlyOnMobile.length ; index < len ; index++) {
        biggerButtonOnlyOnMobile[index].style.display = "none";
    }
    for (index = 0, len = notOnMobile.length ; index < len ; index++) {
        notOnMobile[index].style.color     = "grey";
        notOnMobile[index].style.fontStyle = "bold";
    }
    for (index = 0, len = indentclozeElem.length ; index < len ; index++) {
        indentclozeElem[index].textContent = "";
        indentclozeElem[index].innerHTML = "";
        for (i = 0, len2 = indentedClozeSize ; i < len2 ; i++) {
            indentclozeElem[index].innerHTML += "&nbsp;";
        }
    }
}

// don't show the buttons if there is only one cloze
var hideButtons="F";
if(clozes.length <= 1 && autoShowFirstIfOnly == "T") {
   var hideButtons = "T";
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
    item.style.filter          = "blur(0px)";
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
        item.style.filter          = "blur(0px)";
        var imgs                   = item.getElementsByTagName("img");
        for (var i = 0; i < imgs.length; i++) {
            if (hideImagesFully == "T") { imgs[i].style.display = "inline-block"; }
            else { imgs[i].style.visibility = "visible"; };
            if (isOnMobileBack == "T") {
                imgs[i].style.height = "unset";
                imgs[i].style.width  = "unset";
            };
        };
        var c = resetVariableC();
        var n = resetHintLett();
        if (c == clozes.length) {
            var openWithButton = document.getElementsByClassName("openWithButton")
                for(var i=0; i<openWithButton.length; i++) {
                        openWithButton[i].querySelector('*').click()
            };
        }
    });
});

// "is included in" function, from stack overflow
function include(arr, obj) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == obj) return true;
  }
}

// keystroke detector
var keystrokeDispatcher = function(event) {
    if (globalThis._pressed == true) {return};
    if (include(shortcutToReveal, event.key)) { revealOne(); };
    if (include(shortcutToRevealAuto, event.key)) { revealOneAuto(); };
    if (include(shortcutToReset, event.key)) { resetClozes(); };
    if (include(shortcutToShowAll, event.key)) { revealAll(); };
    if (include(shortcutToShow5, event.key)) { for(let i = 0 ; i < 5;i++) {revealOne();}};
    if (include(shortcutToHintLett, event.key)) { revealHintLett(); };
    if (include(shortcutToHintWord, event.key)) { revealHintWord(); };
    if (include(shortcutToBlur, event.key)) { revealAndBlur(); };
    globalThis.removeEventListener("keydown", keystrokeDispatcher);
    globalThis.addEventListener("keydown", keystrokeDispatcher, {once: true});
};
// add event listener only once
globalThis.addEventListener("keydown", keystrokeDispatcher, {once: true});

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

// if nightmode is on, invert images
if (document.getElementsByClassName("nightMode").length != 0) {
	var imgs = document.getElementsByTagName("img");
	for (var i = 0; i < imgs.length; i++) {
  	      imgs[i].style.filter = "invert(1)";
	};
};

 

// cloze related functions
var revealOne = function() {
    clozes.slice(0).some((item) => {   
                    if (item.style.backgroundColor != cloze_bg_color || item.style.filter != "blur(0px)") {
                        item.style.backgroundColor = cloze_bg_color;
                        item.style.width           = "";
                        item.style.height          = "";
                        item.style.overflow        = "";
                        item.style.textOverflow    = "";
                        item.style.whiteSpace      = "";
                        item.style.display         = "inline";
                        item.style.textIndent      = "0%";
                        item.style.filter          = "blur(0px)";
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
    var c = resetVariableC();
    var n = resetHintLett();
    if (c >= clozes.length) {
        var openWithButton = document.getElementsByClassName("openWithButton")
        for(var i=0; i<openWithButton.length; i++) {
                openWithButton[i].querySelector('*').click()
        };
    }
};

// reveal the cloze automatically character by character. If pressing the button again, hide the text again
// to avoid favoring impatient behavior and fidgetting.
globalThis.currently_auto_showing = false;
var revealOneAuto = function() {
    if (globalThis.currently_auto_showing == true) {
        // already autoshowing at this time, cancels
        clearInterval(globalThis.id);
        globalThis.currently_auto_showing = false
        //var n = resetHintLett();
        return
    };
    globalThis.currently_auto_showing = true
    var counting = 0;
    //var n = resetHintLett();
    var previous_c = resetVariableC();
    var c = resetVariableC();
    try {
        function frame() {
            if ((previous_c != resetVariableC()) || (counting >= 9999) ) {  // finished animation
                globalThis.currently_auto_showing = false;
                clearInterval(globalThis.id);
            }
            else { // show one letter
                revealHintLett(show_next=false, make_italic=false);
                counting = counting +1;
            }
        };
        globalThis.id = setInterval(frame, 40);
    } catch(e) {debug(e); clearInterval(globalThis.id); globalThis.currently_auto_showing = false; }
    var c = resetVariableC();
    //var n = resetHintLett();
};
var revealAndBlur = function() {
    clozes.slice(0).some((item) => {
                    if (item.style.backgroundColor == cloze_bg_color && item.style.filter != "blur(0px)") {
                        var current_val = item.style.filter.substring(5, 6)
                        current_val = parseInt(current_val) - 1
                        item.style.filter   = "blur(" + current_val + "px)";
                        return true;
                        }
                    if (item.style.backgroundColor != cloze_bg_color) {
                        item.style.backgroundColor = cloze_bg_color;
                        item.style.width           = "";
                        item.style.height          = "";
                        item.style.overflow        = "";
                        item.style.textOverflow    = "";
                        item.style.whiteSpace      = "";
                        item.style.display         = "inline";
                        item.style.textIndent      = "0%";
                        item.style.filter          = "blur(9px)";
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
};
var resetClozes = function() {
		globalThis.currently_auto_showing = false;  // stops reveal auto just in case
    clozes.slice(0).forEach((item) => {
            item.style.backgroundColor = cloze_color;
            item.style.width           = hiddenClozeWidth;
            item.style.height          = hiddenClozeHeight;
            item.style.overflow        = "hidden";
            item.style.textOverflow    = "ellipsis";
            item.style.whiteSpace      = "nowrap";
            item.style.display         = "inline-block";
            item.style.filter          = "blur(0px)";
            var imgs                   = item.getElementsByTagName("img");
            for (var i = 0; i < imgs.length; i++) {
                 if (hideImagesFully == "T") { imgs[i].style.display = "none"; }
                 else { imgs[i].style.visibility = "hidden"; };
            };
    });
    var c = 0;
    var n = resetHintLett();
    window.scroll(0,0);
};
var revealAll = function() {
    clozes.slice(0).forEach((item) => {
            item.style.backgroundColor = cloze_bg_color;
            item.style.width           = "";
            item.style.height          = "";
            item.style.overflow        = "";
            item.style.textOverflow    = "";
            item.style.whiteSpace      = "";
            item.style.display         = "inline";
            item.style.textIndent      = "0%";
            item.style.filter          = "blur(0px)";
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
    var n = resetHintLett();
    var c = clozes.length;
    if (c == clozes.length) {
        var openWithButton = document.getElementsByClassName("openWithButton")
        for(var i=0; i<openWithButton.length; i++) {
                openWithButton[i].querySelector('*').click()
        };
        hintLettField.style.opacity = 0;
    }
};

// shows letter by letter (hint)
var revealHintLett = function(show_next=true, make_italic=true) {
    let c = resetVariableC();
    if ( c < clozes.length) {
        if (clozes[c].style.backgroundColor == cloze_color || clozes[c].style.filter != "blur(0px)") {
            hintLettField.textContent += clozes[c].textContent.substring(n,n+1);
            n=n+1;
            if (n >= clozes[c].textContent.length) { 
                n = 0;
                revealOne();
            };
            if (document.getElementsByClassName('hint_field').length != 0) {
                window.hint_span.remove()
            }
            window.hint_span = document.createElement('span');
            window.hint_span.innerHTML = hintLettField.textContent;
            window.hint_span.classList.add("hint_field")

            if (make_italic == true) {
                window.hint_span.style.fontStyle         = "italic";
            }
            window.hint_span.style.backgroundColor   = "transparent";
            window.hint_span.style.color             = cloze_color;

            clozes[c].parentNode.insertBefore(window.hint_span, clozes[c])
        } 
        else {
            c=c+1;
            if (show_next == true) {revealHintLett()};
        };
    }
};
var revealHintWord = function() {
    revealHintLett();
    var counting = 0;
    while ( (!(include(wordSeparators,hintLettField.textContent.charAt(hintLettField.textContent.length-1)))) && n != 0 && counting <= 99) {
        revealHintLett();
        counting = counting +1;
    };
};
var resetHintLett = function() {
    n = 0;
    hintLettField.style.opacity = 1;
    hintLettField.textContent   = '' ; 
    if (document.getElementsByClassName('hint_field').length != 0) {
        window.hint_span.innerHTML = ""
    };
    return n;
};
var resetVariableC = function() {
   // resets the cloze counter to the minimum cloze number that is still hidden
   var c = 0 ;
   let inc = 0; // just a counter
   while (inc <100) {
       inc=inc+1;
       if (c >= clozes.length) {  // too much, returning max
           c = clozes.length;
           return c;
       }

       //if cloze is not hidden, see next cloze
       if (clozes[c].style.backgroundColor != cloze_bg_color) {
           return c;
       } else { c=c+1; }
   };
   return c;
};





// ###########################################
// code to run after all that 

if (enableHiding == "F") { revealAll();};
var n = resetHintLett();
var c = 0;

}; // end of "if clozes found"

// finally shows the card
[...document.querySelectorAll(".card")][0].style.display = defaultDisplayBack;

} catch(e) {
    debug(e);
    }
</script>

