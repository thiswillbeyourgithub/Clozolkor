<span class = debugFieldFront></span>

<!-- HEADER -->
<span id="decksContainer">
    {{Deck}}
</span> 
<span id="tagsContainer">
    {{Tags}}
</span>

<span class = smallFontHeader>
    <span class=notOnMobile>
    <!-- not shown on mobile because those information will be added in ankidroid using js code below -->
            <span class=blue>
                {{info-New?:}}
            </span>
            <span class=green>
                {{info-Review?:}}
            </span>
            <span class=red>
                {{info-Learning?:}}
            </span>
            {{info-Factor:}}
    </span>
    <span class=addStateHereFront> </span>
    <span class=addEaseHereFront> </span>
</span>

<span class=orange>
    {{#Teacher}}<i>{{Teacher}}</i>&nbsp&nbsp&nbsp{{/Teacher}}
</span> 

<br>

<!--this next line is used to make sure the text stays at the same level when flipping the card, a placeholder if you will -->
<div class="biggerButtonOnlyOnMobile"><br></div><br>

<hr>
<span class=headerField>
    {{#Header}}<b>{{Header}}<br></b> {{/Header}}
</span>

<!-- the next two lines are used to display the card using Sans forgetica if it's harder, at least on the desktop app. On ankidroid this is done below. They need to encompass the whole cloze -->
<div class="{{{Tags}}">
    <span class="ease{{info-Factor:}}">
        {{cloze:Body}}
        {{#Hint}}
        <hr id=answer><br><br>
        <span class=extra>
            {{hint:Hint}}
        </span>
        {{/Hint}} 
    </span>
</div>

<script>
/* 
    Released under the GNU General Public License v3.
    Copyright (C) - 2020 - user "thiswillbeyourgithub" of the website "github".
    This file is the Front of the Clozolkor template. It is part of Clozolkor : an
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
    Version : August 2020

    credits due to (at least! ) :
    thiswillbeyourgithub (main dev)
    iTraveller (original idea as far as I can tell), /u/AnkingMed (general helper)
    /u/BlueGreenMagick (code help), /u/ssnoyes (piece of code), 
    /u/DrewZZZ and /u/yumenogotoshi (scroll code)
    */

// ###########################################
	// USER SETTINGS

let autoFlip = "T"; // F = autoflip if there are no hints
var qFade = 0;
var aFade = 100;
let tagsAndDeckFontSize     = "8px"; // default : "8px"

// ###########################################
 	// VARIABLES ASSIGNMENT

const clozes                    = [...document.querySelectorAll(".cloze")];
if (clozes.length !== 0) { // continue only if clozes are found
var cloze_color         = window.getComputedStyle(clozes[0]).color;
var cloze_bg_color      = window.getComputedStyle(clozes[0]).backgroundColor;
const biggerButtonOnlyOnMobile  = document.getElementsByClassName("biggerButtonOnlyOnMobile");
const notOnMobile               = document.getElementsByClassName("notOnMobile");
const buttonSizeSmall           = document.getElementsByClassName("buttonSizeSmall");
const buttonSizeBig             = document.getElementsByClassName("buttonSizeBig");
const debugFieldFront           = document.getElementsByClassName("debugFieldFront");
const addEaseHereFront          = document.getElementsByClassName("addEaseHereFront") ; 
const addStateHereFront         = document.getElementsByClassName("addStateHereFront") ; 
const tagsContainer     = document.getElementById("tagsContainer")
const decksContainer    = document.getElementById("decksContainer")


// ###########################################
    // if there are no hints : auto flip the card


var isAnkiDroidFront = /wv/i.test(navigator.userAgent);
if (navigator.userAgent.indexOf("obile") >= 0 || navigator.userAgent.indexOf("roid") >= 0 || isAnkiDroidFront || ankiPlatform.indexOf("esktop") == -1)  {
    var isOnMobileFront = "T";   
} 
else 
{ 
    var isOnMobileFront = "F"; 
}


if (autoFlip == "T") { // if contains at least one hint : dont flip
    for(let i = 0 ; i < clozes.length;i++) {
        if(clozes[i].textContent != '[...]') { 
            autoFlip = "F";
        };
    }
}
if (autoFlip == "T") {
	if (isOnMobileFront == "T") {
        showAnswer(); 
    }
	if (isOnMobileFront == "F") { 
        pycmd("ans"); 
    }
}


// ###########################################
    // STYLING (depending on platform)

		// TAGS AND DECK STYLING :
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

if (tagsContainer.childElementCount == 0) {
 var tagList = tagsContainer.innerHTML.split("::");
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


if ( isOnMobileFront == "T" ) {
    for (index = 0, len = biggerButtonOnlyOnMobile.length ; index < len ; index++) {
        biggerButtonOnlyOnMobile[index].style.display        = "flex";
        biggerButtonOnlyOnMobile[index].style.flexWrap       = "no-wrap";
        biggerButtonOnlyOnMobile[index].style.justifyContent = "center";
    }
    for (index = 0, len = notOnMobile.length ; index < len ; index++) {
        notOnMobile[index].style.display = "none";
    }

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
if ( isOnMobileFront == "F" ) {
    for (index = 0, len = biggerButtonOnlyOnMobile.length ; index < len ; index++) {
        biggerButtonOnlyOnMobile[index].style.display = "none";
    }
    for (index = 0, len = notOnMobile.length ; index < len ; index++) {
        notOnMobile[index].style.color     = "grey";
        notOnMobile[index].style.fontStyle = "bold";
    }
}

}
</script>



