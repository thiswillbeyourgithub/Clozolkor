<div class = smallFontHeader><span class=grey>Deck - {{clickable:Deck}} {{#Tags}} |      Tags - {{clickable:Tags}}{{/Tags}} </span><span class = notOnMobile > | <u><span class=red>{{info-New?:}}</span>{{info-Review?:}}{{info-Learning?:}}</u> | Ease = {{info-Factor:}}</div>
<span class=orange>{{#Teacher}}Par : <i>{{Teacher}}</i>&nbsp&nbsp&nbsp{{/Teacher}}</span> </span>


<div class="biggerButtonOnlyOnMobile"><br></div>
<br>

<!--this is to avoid having the lines going up or down a notch when fliping the card on mobile
<span class = notOnMobile>
	<br><br><br><br><br><br><br><br><br><br><br>
</span>


<span class=header1>{{#Header1}}<b>{{Header1}}</b><br>{{/Header1}}</span> <br>
{{#Header2}}<span class=header2>{{Header2}} : </span>{{/Header2}} {{cloze:Body}}
{{#Hint}}<hr id=answer><span class=extra>{{hint:Hint}}</span>{{/Hint}} 



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
    Version : August 15th 2020

    credits due to (at least! ) :
    thiswillbeyourgithub (main dev)
    iTraveller (original idea as far as I can tell), /u/AnkingMed (general helper)
    /u/BlueGreenMagick (code help), /u/ssnoyes (piece of code), 
    /u/DrewZZZ and /u/yumenogotoshi (scroll code)
    */



	// SETTINGS
let autoFlip = "T"; // F = autoflip if there are no hints
 	// VAR
const clozes = [...document.querySelectorAll(".cloze")];
const biggerButtonOnlyOnMobile = document.getElementsByClassName("biggerButtonOnlyOnMobile");
const notOnMobile = document.getElementsByClassName("notOnMobile");
const buttonSizeSmall = document.getElementsByClassName("buttonSizeSmall");
const buttonSizeBig = document.getElementsByClassName("buttonSizeBig");



    // STYLING (depending on platform)
var isAnkiDroid = /wv/i.test(navigator.userAgent); // ankidroid specific test 
if (navigator.userAgent.indexOf("obile") >= 0 || navigator.userAgent.indexOf("roid") >= 0 || isAnkiDroid || ankiPlatform.indexOf("esktop") == -1)  {
    var isOnMobile = "T";
    for (index = 0, len = biggerButtonOnlyOnMobile.length ; index < len ; index++) {
        biggerButtonOnlyOnMobile[index].style.display = "flex";
        biggerButtonOnlyOnMobile[index].style.flexWrap = "no-wrap";
        biggerButtonOnlyOnMobile[index].style.justifyContent = "center";
    }
    for (index = 0, len = notOnMobile.length ; index < len ; index++) {
        notOnMobile[index].style.display = "none";
    }
}
else {
	var isOnMobile = "F";
    for (index = 0, len = biggerButtonOnlyOnMobile.length ; index < len ; index++) {
        biggerButtonOnlyOnMobile[index].style.display = "none";
    }
    for (index = 0, len = notOnMobile.length ; index < len ; index++) {
        notOnMobile[index].style.color = "grey";
        notOnMobile[index].style.fontStyle = "bold";
    }
}

    // if there are no hints : auto flip the card
for(let i = 0 ; i < clozes.length;i++) {
    if (autoFlip == "T") {
        if(clozes[i].textContent != '[...]') { 
            autoFlip = "F";
        };
    }
}
if (autoFlip == "T") {
	if (isOnMobile == "T") { showAnswer(); }
	if (isOnMobile == "F") { pycmd("ans"); }
}

</script>

