# Clozolkor
Enhancing "*cloze one by one*" script found in TheAnking's template (on his website or drive). I think the original idea/script is by user "iTraveller" in the official anki forum. Oh and don't ask why this name. The current status of this project is : I am using it daily. It is definitely stable as it does not require addons or complicated coding. It is just basic javascript added to a cloze template.

If you make a modification to this code, please tell me so that I can (maybe) implement it for everyone else! Thank you!

As time went on, I added a lot of things to suit my needs and decided to share it with the community.

## How does it work?
Basically, you create your cards just like regular clozes but using this template. Then, when reviewing, you can use shortcuts (or buttons that appear on mobile) to reveal the cloze one by one. That means that if you have several `c1` occlusion you will see them sequentially, same for `c2` etc. You can also show letter by letter or word by word what's underneath the cloze as a hint. Lots of things a customizable, and I should be reactive on github to provide support. Oh and don't be surprised : by default the card auto flips the front if you have not used a hint in your cloze (like Y in {{c1::X::Y}}). I think that this behavior can interfere with the "time to answer" statistics of your cards, as well as addons that use this like [speed focus](https://ankiweb.net/shared/info/1046608507).


## Features 
* **complete** : multiple shortcuts (show, hide, hint, etc), it can **show hint of what's hidden underneath a cloze, letter by letter or word by word**. Don't cheat though.
* **customizable** : lots of settings to suit your special needs
* **cross platform** : supports all computer OS's, ankidroid, and maybe iOS too but couldn't test it on my own.
* **compatibility** : it supports multiple cloze : if you add several `c1` you can reveal them one by one but if you add `c2`, `c3` and so one anki will automatically add new cards that reveal `c2` one by one and `c3` one by one. Basically like regular cloze so you can just convert all your cloze to this template and it will work the same.
* **fast** : autoflip to answer sided is the cloze doesn't contain hints
* **memory enhancing?** : if your card's ease drop too low, the card will switch to the font [Sans Forgetica](https://en.wikipedia.org/wiki/Sans_forgetica). No idea if it works but interesting to try.
* **elegant** : shows the tags and decks on top in a nice and non-distracting way
* **handy** : displays the ease and the state (learning, new, etc) on top (desktop) or in a little button box (mobile)
* **non-bloating** : it's not an addon but just a regular javascript-enhanced note template!
* show all the hidden clozes as a fixed size block, this way you can't use the size of the deletion as a hint
* automatically show the "links" (like `{{hint:Sources}}` when you showed all the clozes
* hide images that are inside clozes, leaving the size (or not) as a hint
* buttons, handy for mobile (one to reveal one cloze, one to reset, one to show everything, one to show a character hint)
* automatically scroll to the next cloze if it is cloze to the edge of the frame
* **more to come (see todo below), this clozing system is the basis of my workflow, but I don't have that much time to code.**
* **Up to date** tested successfully on anki 2.1.49

#### demo gifs 
<!--
* early version (severely outdated)
![demo_gif](bin/demo.gif)

* use it with bullet points to remembers sets. I displayed buttons on these gifs but they are designed to be used on mobile and stay hidden on the computer. You can use the first letter as hints for example :
![demo2_gif](bin/demo2.gif)
*I just copied the content of the wikipedia page, just ignore whatever member of Pink Floyd you feel never really existed*

* use it to do followup questions: (very useful to force yourself to yell a mnemonic out loud!)
![demo3_gif](bin/demo3.gif)
-->
![demo](demo.gif)
from the following card (and yes the deck is ZZ::Perso::BrainDB) :
![card](card_pic.jpg)

## TODO / Planned features / known issues (some are really simple, don't hesitate to help!)
* get rid of the hint fields by finding a way to have the letter and word hints appear just before the actual (still hidden) cloze, then disappear while opening the cloze.
* split the script into multiple sub scripts. That would help maintenance and "sharability" to have a "decks and tags section", "cloze section", etc. It would make it really easy to add parts to other template, for example adding the nice tag bar to the image occlusion template.
* see if it's possible to add a {{cx:: field that would always be clozed, no matter the card number (*edit: pretty sure it's actually very easy by adding a html field and treating it like a cloze*)
* I want to support the creation of an addon that handles clozes better : if you are interested, tell it [there](https://github.com/epiphanie-gedeon/anki-wrapper/issues/2)
* html buttons should scroll with the page instead of being shown on top and bottom (ie always appear at the same place), with something like `position:fixed/sticky`
* maybe add a way to show blurred text as a hint? Anki seems to support it. text.filter = "blur(3px)" at least. It seems to work on images too.

#### Known issues
* None?

## A few important notes, please read
* I have a limited (but increasing) understanding of anki coding, don't expect anything much from me, but PR's are welcome and don't hesitate to open an issue if you want anything. Also, I use Linux and ankidroid, I can't test on other devices. Also, I strongly recommend using the addon [Symbols as you type](https://ankiweb.net/shared/info/2040501954), the author very nicely added html insertion, this way for example typing `::c::` is replaced by `}}{{c1::` which makes it a ton faster to use this addon. Same goes for `::c2::` etc. You can see a list of my suggested macros [here](https://github.com/jefdongus/insert-symbols-anki-addon/issues/13). I hope something will come out of [this thread](https://github.com/epiphanie-gedeon/anki-wrapper/issues/2).

* The .js extension of the template files is there only to help with syntax highlighting while editing the files, it's more accurately html containing `<script>` parts.

* I try to stay on the latest **stable** anki version (currently 2.1.44). I also make sure the version works on `AnkiDroid` as it it what I use, and I tend use the latest stable release. I don't usually test it on windows, macOS or iOS, and am counting on your feedbacks for this. **I had the opportunity to test it on 2.1.49 and it works fine.**.

* The shortcuts and many more things can be edited in the template, inside the script.

* If you have a very slow device, especially on mobile, turning nightmode off seems to speed up the card loading

* If you want to allow clozolkor to automatically use the Sans Forgetica font if the ease is low or if the card is a leech, you have to install the font yourself on all your devices. Otherwise clozolkor works fine but won't use this font.


### If you like the idea, these addons will interest you
* [Closet addon](https://ankiweb.net/shared/info/272311064) seems to be able to do everything that I did but... better? Haven't tested it yet.
* [Cloze overlapper](https://github.com/Glutanimate/cloze-overlapper) addon by the Great Glutanimate, unfortunately not (yet?) ported to 2.1
* [Cloze (Hide All) addon](https://ankiweb.net/shared/info/1709973686)
* [Cloze Anything](https://github.com/matthayes/anki_cloze_anything), the creator (as opposed to me) knows how to code in js. I intend to add a "reveal one by one" feature as you can read [here](https://github.com/matthayes/anki_cloze_anything/issues/6#issuecomment-629829062). I learned about this addon only after spending time on this. His project looks better for a lot of use cases for I still intend to use my code for quite a while.
* [anki-wrapper](https://github.com/epiphanie-gedeon/anki-wrapper/) seems promising for cloze handling

## How can I get this?
1. read this page **thoroughly**, it's well worth a few minutes of (y)our time
2. install the [refocus card when reviewing](https://ankiweb.net/shared/info/1642550423) addon, the [additional card field](https://ankiweb.net/shared/info/744725736) addon as well as [clickable Tags](https://ankiweb.net/shared/info/380714095) and restart anki
3. Optional : as written above : installing the addon [Symbols as you type](https://ankiweb.net/shared/info/2040501954) will greatly increase your efficiency. Check out my macros in the `latest_release` folder
4. import the `.apkg` file inside the `latest_release` folder into anki, it's the latest release but usually not the latest *version*
5. get the latest version by updating this new template. To do this : copy and paste the content of the files located in `latest_release`
6. check out the settings inside the front and back template, it is very likely that your shortcuts won't match my keyboard
7. now, when you create your own clozes : just select this template instead of the old "cloze" note type
8. Optional : convert all your past cloze into this template : it works the same, just better
9. optional : install the Sans Forgetica font
10. that's it, if you have **any** issue, open an issue, I'll gladly try and fix it for everyone else, yes even typos.
11. If you make a modification to this code, please tell me so that I can (maybe) implement it for everyone else! Thank you!
