# Clozolkor
Enhancing "*cloze one by one*" script found in TheAnking's template (on his website or drive). I think the original idea/script is by user "iTraveller" in the official anki forum. Oh and don't ask why this name. The current status of this project is : I am using it daily. It is definitely stable as it does not require addons or complicated coding. It is just basic javascript added to a cloze template.


## Features 
* supports multiple shortcuts to show or rehide clozes
* supports multiple cloze : if you add several `c1` you can reveal them one by one but if you add `c2`, `c3` and so one anki will automatically add new cards that reveal `c2` one by one and `c3` one by one.
* changes cloze color when there is only one deletion (can easily be edited)
* supports image cloze deletion (thanks to /u/bluegreenmagick)
* added buttons, handy for mobile (one to reveal one cloze, one to reset)
* more to come, this clozing system is the basis of my workflow
* added a small delay to be sure that the cloze background is loaded before hiding it, otherwize the wrong color is selected
* ability to show 5 by 5, or reveal everything, or rehide the clozes.
* autoscroll if the cloze is outside the frame

#### several demo gifs :
* simple idea, now a bit outdated:
![demo_gif](bin/demo.gif)

* you can use it with bullet points to remembers sets. I displayed buttons on these gifs but they are designed to be used on mobile and stay hidden on the computer. You can use the first letter as hints for example :
![demo2_gif](bin/demo2.gif)
*I just copied the content of the wikipedia page, just ignore whatever member of Pink Floyd you feel never really existed*

* you can also use it to do followup questions:
![demo3_gif](bin/demo3.gif)

## Planned features / TODO list (some are really simple, don't forget to help!)
* figure out a way to avoid hiding cloze hints
* fix the hint given by mathjax formula by changing the color of clozes to the background's, but you then have to show a number indicating the number of cloze still hidden I guess
* use the same shortcut to answer 3 if no more cloze to reveal, depending on a boolean
* pressing the reveal shortcut should show `{{hint:}}` fields when there are no more cloze to unfold
* the shortcut when seeing front should reveal the back
* add a preview : the cloze that could disappear should change color just before, as a hint of the size of the deletion
* change link color with something like `a:visited { color:red }`, as currently they can be read above the colored background instead of being hidden
* add a button in the edit window to automatically cloze every space of a text selection, or increment cloze number etc

#### Known issues
* I very rarely get the wrong background color, which sucks because you can still read the cloze. It seems to happen only in specific circumstances for me but this might be linked to the speed of your computer. If you have this issue regularly let me know. There might be a fix using `aFade` and `qFade` (taken from Glutanimate's IOC addon).
* If you use a font that uses [ligatures](https://en.wikipedia.org/wiki/Orthographic_ligature) then you can run into a *slight* issue where some characters seemingly use Quantum Tunneling to cross the cloze barrier. For example in `{{c1::ef}}{{c1::fects}}`, openning the first cloze might show `eff` intead of `ef`.
* The cloze color changes when there is only one deletion (the behavior is then the same as with regular clozes) but you can't select a color for nightmode
* Buttons are supposed to hide when there is only one deletion but it doesn't happen on Ankidroid, still figuring this out. They do hide on the computer version though, which is expected behavior.
* On ankidroid sometimes I can catch a glimpse of the answer before the background color changes
* if you use a square root or a fraction in a mathjax formula, it can often be seen above and below the hiding rectangle, and thus help guess the answer. If it's a real issue you can try converting the mathjax brackets to latex, as it is transformed into a picture it works okay. 
* links that appear blue are not hidden, they can be seen

## A few notes, please read
I have a very limited understanding of anki coding, don't expect anything much from me, but PR's are welcome and don't hesitate to open an issue if you want anything. Also, I use linux and ankidroid, I can't test on other devices. Also, I strongly recommande using the addon ["Symbols as you type"](https://ankiweb.net/shared/info/2040501954), the author very nicely added html insertion, this way for example typing `::c::` is replaced by `}}{{c1::` which makes it a ton faster to use this addon. Same goes for `::c2::` etc.

The .js extension of the template files is there only to help with syntax highlighting while editing the files, it's more likely html containing `<script>` parts

Useful vim command to convert rapidly some clozes from its html : `s/<div>}}<br><\/div>//g | s/<div>{{c1::<\/div>//g | s/<li>/<li>{{c1::/g | s/<\/li>/}}<\/li>/g`. If you want to see this command in action, [click here](bin/demo_vim.gif).

I use `anki 2.1` and try to stay on the latest **stable** version (currently 2.1.22). I don't know if it works in `2.0`. I also make sure the version works on `AnkiDroid` as it it what I use, and I tend use the latest stable release.

The default shortcuts are `n` and `ù` to reveal the deletions one by one, `N` and `%` reset the hiding ("re-hides" everything), on my keyboard they are obtained via capitilizing the former shortcuts. `ù` is just next to `jklm`, that I use to answer my cards. You can change them easily in the `back` template.


### If you like the idea, these addons will interest you
* [Cloze overlapper](https://github.com/Glutanimate/cloze-overlapper) addon by the Great Glutanimate, unfortunately not (yet?) ported to 2.1
* [Cloze (Hide All) addon](https://ankiweb.net/shared/info/1709973686)
* [Cloze Anything](https://github.com/matthayes/anki_cloze_anything), the creator (as opposed to me) knows how to code in js. I intend to add a "reveal one by one" feature as you can read [here](https://github.com/matthayes/anki_cloze_anything/issues/6#issuecomment-629829062). I learned about this addon only after spending time on this. His project looks better for a lot of use cases for I still intend to use my code for quite a while.

#### Folder description
* BlueGreenMagick_files : he started it all
* latest_version : the one I'm using, tried and tested

## How can I get this ? (novice mode)
* read this page thoroughly
* import the file `latest_version/ClozolkorTemplate.apkg` into anki, it won't teach you the secrets of Life but contains the template to create your own cards.
* create your own cloze but select this new template instead of the old "cloze" note type
* use shortcuts to reveal cards

## How can I get this ? (in control mode)
* read this page thoroughly
* go into the `latest_version` folder
* put the content of `front.js` as the cloze's front template (look for it in the anki manual)
* put the content of `back.js` as the back template
* copy `styling.css` into the styling section of the card template
