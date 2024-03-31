<!-- eruda is used to enable debug inspecctor on ankidroid -->
<script src="https://cdn.jsdelivr.net/npm/eruda"></script>

<span class = debugFieldFront></span>
<!-- HEADER -->
<span id="decksContainer" style="font-size:10px">
    {{Deck}}
</span> 
<span id="tagsContainer" style="font-size:10px">
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
    		<span class=addStateHereFront> </span>
  		   <span class=addEaseHereFront> </span>
</span>

<span class=orange>
    {{#teacher}}<i>{{teacher}}</i>&nbsp&nbsp&nbsp{{/teacher}}
</span> 


<!--this next line is used to make sure the text stays at the same level when flipping the card, a placeholder if you will -->
<div class="biggerButtonOnlyOnMobile"></div>

<hr noshade size="2">

<span class=headerField>
    {{#header}}<b>{{header}}<br></b> {{/header}}
</span>

<!-- the next two lines are used to display the card using Sans forgetica if it's harder, at least on the desktop app. On ankidroid this is done below. They need to encompass the whole cloze -->
<div class="{{Tags}}">
    <span class="ease{{info-Factor:}}">
        <span style="display:flex ;  flex-direction:row ; flex-wrap:nowrap">
            <span class="indentedClozeBox" style="flex-grow:1">&nbsp;</span>
            <span style="flex-grow:999 ; flex-wrap:wrap">{{cloze:body}}</span>
            <span class="indentedClozeBox" style="flex-grow:1">&nbsp;</span>
        </span>
        {{#hint}}
        <hr id=answer><br><br>
        <span class=extra>
            {{hint:hint}}
        </span>
        {{/hint}} 
    </span>
</div>


<script> 
//    Released under the GNU General Public License v3.
//    Copyright (C) - 2020 - user "thiswillbeyourgithub" of the website "github".
//    This file is the Front of the Clozolkor template. It is part of Clozolkor : an
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
//    You should have received a copy of the GNU General Public License
//    along with Clozolkor.  If not, see <https://www.gnu.org/licenses/>.
//    */ /*
//    for more information or to get the latest version go to :
//    https://github.com/thiswillbeyourgithub/Clozolkor
//    Version : March 2024
//
//    credits due to (at least! ) :
//    thiswillbeyourgithub (main dev)
//    iTraveller (original idea as far as I can tell), /u/AnkingMed (general helper)
//    /u/BlueGreenMagick (code help), /u/ssnoyes (piece of code), 
//    /u/DrewZZZ and /u/yumenogotoshi (scroll code)
//
// ###########################################

	// USER SETTINGS

var autoFlip = "T"; // F = autoflip if there are no hints
var enableTagsContainerFront = "F"; // default : "T"
var enableDecksContainerFront = "F"; // default : "T"
var tagsAndDeckFontSize     = "8px"; // default : "8px"
var indentedClozeSize = "10"; // default : 10
var qFade = 0;
var aFade = 0;

//###########################################
  // INIT + VARIABLES ASSIGNMENT

//var n = 0; // tries to reset the variables used in the back as 
//var c = 0; // they sometimes are not reassigned
try { // tries to remove those variables set in the back section that screw everything up
n = null ; n = undefined;
c = null ; c = undefined;
} catch(e) {alert(e);};

var clozes                    = [...document.querySelectorAll(".cloze")];
if (clozes.length !== 0) { // continue only if clozes are found

    // hides the card before it is fully loaded, otherwise you can catch a glimpse of images on slow devices :
var defaultVisiFront = [...document.querySelectorAll("*")][0].style.visibility;
[...document.querySelectorAll("*")][0].style.visibility = "hidden";

var cloze_color         = window.getComputedStyle(clozes[0]).color;
var cloze_bg_color      = window.getComputedStyle(clozes[0]).backgroundColor;
const biggerButtonOnlyOnMobile  = document.getElementsByClassName("biggerButtonOnlyOnMobile");
const notOnMobile               = document.getElementsByClassName("notOnMobile");
const buttonSizeSmall           = document.getElementsByClassName("buttonSizeSmall");
const buttonSizeBig             = document.getElementsByClassName("buttonSizeBig");
const debugFieldFront           = document.getElementsByClassName("debugFieldFront");
const indentclozeElem           = document.getElementsByClassName("indentedClozeBox");
// to debug, put the following line where you want :
//	debugFieldFront[0].textContent += "code run until point A";
// another better way is to use alert("some string"); to know if the code is running a specific part or not, or window.alert()

const addEaseHereFront          = document.getElementsByClassName("addEaseHereFront") ; 
const addStateHereFront         = document.getElementsByClassName("addStateHereFront") ; 
const tagsContainer             = document.getElementById("tagsContainer")
const decksContainer            = document.getElementById("decksContainer")

// ###########################################
    // if there are no hints : auto flip the card
    // platform tests :
try {
            // ankidroid :
    var isOnMobileFront = "F"; var isOnAndroidFront = "F"; // presets
    var isAnkiDroidFront = /wv/i.test(navigator.userAgent);
    if (isAnkiDroidFront) { isOnMobileFront = "T"; isOnAndroidFront = "T"; }
    if (navigator.userAgent.indexOf("droid") >= 0) { isOnMobileFront = "T"; isOnAndroidFront = "T"; }
                // ankiMobile :
    if (navigator.userAgent.indexOf("obile") >= 0 && isOnAndroidFront == "F") { isOnMobileFront = "T"; }
                // desktop :
    if (ankiPlatform.indexOf("esktop")==-1) { isOnMobileFront = "F"; isOnAndroidFront = "F" }
} catch(e){ alert(e);}


if (autoFlip == "T") { // if contains at least one hint : dont flip
    for(var i = 0 ; i < clozes.length;i++) {
        if(clozes[i].textContent != '[...]') { 
            autoFlip = "F";
        };
    }
}
if (autoFlip == "T") {
	if (isOnMobileFront == "T" && isOnAndroidFront == "T") {
        showAnswer(); 
    }
	//if (isOnMobileFront == "T" && isOnAndroidFront == "F") { 
    //    AnkiMobile detected, I need iOS testers to enable autoflip on ankiMobile!
    //}
	if (isOnMobileFront == "F" && isOnAndroidFront == "F") { 
        pycmd("ans"); 
    }
} else { // don't load the front if the card flips on its own

// ###########################################
    // STYLING (depending on platform)

		// TAGS AND DECK STYLING :
if (enableDecksContainerFront == "T") {
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


if (enableTagsContainerFront == "T") {
    if (tagsContainer.childElementCount == 0) {
     var tagList = tagsContainer.innerHTML.replace(/ +/,"").split(/::| /);
     var newTagContent = document.createElement("div");

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
          tagsContainer.querySelectorAll("button")[i].style.textShadow     =  "none !important";
          tagsContainer.querySelectorAll("button")[i].style.borderRadius     =  "-1px";
          tagsContainer.querySelectorAll("button")[i].style.border     =  "none";
          tagsContainer.querySelectorAll("button")[i].style.opacity     =  0.8;
          tagsContainer.querySelectorAll("button")[i].style.fontWeight     =  "bold";
      }
    }
} else { tagsContainer.style.display = "none"; }


if ( isOnMobileFront == "T" ) {
    for (index = 0, len = biggerButtonOnlyOnMobile.length ; index < len ; index++) {
        biggerButtonOnlyOnMobile[index].style.display        = "flex";
        biggerButtonOnlyOnMobile[index].style.flexWrap       = "no-wrap";
        biggerButtonOnlyOnMobile[index].style.justifyContent = "center";
    }
    for (index = 0, len = notOnMobile.length ; index < len ; index++) {
        notOnMobile[index].style.display = "none";
    }

    if (isOnAndroidFront == "T") {
            // loads ankidroid api
        var jsApiFront     = {"version" : "0.0.1", "developer" : "dev@mail.com"};
        var apiStatusFront = AnkiDroidJS.init(JSON.stringify(jsApiFront));
        console.log(apiStatusFront);
        var apiFront       = JSON.parse(apiStatusFront);

        // adds card status to the header
        if (AnkiDroidJS.ankiGetCardType() == 0) { addStateHereFront[0].textContent = "N" ; addStateHereFront[0].style.color = "blue" ;} //new
        if (AnkiDroidJS.ankiGetCardType() == 1) { addStateHereFront[0].textContent = "L" ; addStateHereFront[0].style.color = "red" ;} //learning
        if (AnkiDroidJS.ankiGetCardType() == 2) { addStateHereFront[0].textContent = "R" ; addStateHereFront[0].style.color = "green" ;} //review
        if (AnkiDroidJS.ankiGetCardType() == 3) { addStateHereFront[0].textContent = "rL" ; addStateHereFront[0].style.color = "red" ;} //relearning

        // adds ease factor to the header
        addEaseHereFront[0].textContent += AnkiDroidJS.ankiGetCardFactor()/10;
    }
    try {
        eruda.init(); // try to init the debugging interface (ankidroid only)
    } catch(e) {
        alert(e);
    };
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
}
 // finally shows the card :
[...document.querySelectorAll("*")][0].style.visibility = defaultVisiFront;
}
</script>




