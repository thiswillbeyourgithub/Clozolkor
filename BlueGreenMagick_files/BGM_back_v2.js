<span class=gris>Deck - {{Deck}} {{#Tags}} |      Tags - {{clickable:Tags}}{{/Tags}} </span> |
<span class = pasSurMobile><u><span class=rouge>{{info-New?:}}</span>{{info-Review?:}}{{info-Learning?:}}</u> | F={{info-Factor:}}</span> <br>
<span class=orange>{{#Professeur}}Par : <i>{{Professeur}}</i>&nbsp&nbsp&nbsp{{/Professeur}}</span>
<span class=h1>{{#Header1}}<b>{{Header1}}</b>{{/Header1}}</span> <br><br>

<span class=h2>{{Header2}}</span>{{cloze:Corps}}

<hr id=answer>
<button id="show_obo" onclick="toggle();">show one by one</button>


{{#Indice}}<span class=extra>{{Indice}}</span>{{/Indice}}
{{#More}}<br> <span class=extra>{{More}}</span>{{/More}}




















<!-- Code for "cloze one by one"
     credits due to (at least! ) : iTraveller, /u/AnkingMed, /u/BlueGreenMagick, glume
       -->


<script>
  //SHORTCUT TO REVEAL CLOZES
  //Put this in Back template as well
  var shortcut = "ù";
  //SHORTCUT END
</script>

<script>
  var clozes = [...document.querySelectorAll(".cloze")];
  if (clozes.length <= 1) {
    document.getElementById("show_obo").style.visibility = "hidden";
  }
  if (clozes.length > 1) {
    const cloze_color = window.getComputedStyle(clozes[0]).color;
    const cloze_bg_color = window.getComputedStyle(clozes[0]).backgroundColor;
    clozes.slice(0).forEach((item) => {
      //was (1) before I edited it, as it opennned automatically the first item
      item.style.backgroundColor = cloze_color;
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

    //USER CUSTOMIZATION event.key

    document.addEventListener("keydown", (event) => {
      if (event.key == shortcut) {
        clozes.slice(0).some((item) => {
          //was also (1) before I edited it
          if (item.style.backgroundColor != cloze_bg_color) {
            item.style.backgroundColor = cloze_bg_color;
            var imgs = item.getElementsByTagName("img");
            for (var i = 0; i < imgs.length; i++) {
              imgs[i].style.visibility = "visible";
            }
            return true;
          }
        });
      }
    });

    //by me : adds a button that shows them one by one, very handy on mobile
    var toggle = function () {
      clozes.slice(0).some((item) => {
        //was (1) before I edited it
        if (item.style.backgroundColor != cloze_bg_color) {
          item.style.backgroundColor = cloze_bg_color;
          var imgs = item.getElementsByTagName("img");
          for (var i = 0; i < imgs.length; i++) {
            imgs[i].style.visibility = "visible";
          }
          return true;
        }
      });
    };
  }
</script>
