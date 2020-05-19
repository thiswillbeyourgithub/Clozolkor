# Clozolkor
Enhancing "*cloze one by one*" script found in TheAnking's template (on his website or drive). I think the original idea/script is by user "iTraveller" in the official anki forum. Oh and don't ask why this name. The current status of this project is : I am using it daily. It is definitely stable as it does not require addons or complicated coding. It is basic javascript.


## Features 
* supports multiple shortcuts
* supports image cloze deletion (thanks to /u/bluegreenmagick)
* added buttons, handy for mobile
* more to come, this clozing system is the basis of my workflow
* added a small delay to be sure that the cloze background is loaded before hiding it, otherwize the wrong color is selected

#### Demo (outdated, it is much better now)
![demo_gif](bin/demo.gif)

## Planned features / TODO list (some are really simple, don't forget to help!)
* export a virgin card that contains the code to make it easier for newbies to install
* add a shortcut that reveals everything
* shortcut for  closing everything back
* add a setting section on top of the code
* figure out a way to avoid hiding cloze hints
* deduplicate the the shortcut event, make a function call
* use the same shortcut to answer 3 if no more cloze to reveal, depending on a boolean
* the shortcut when seeing front should reveal the back
* add a preview : the cloze that should disappear should change color just before, as a hint of the size of the deletion
* add a button to automatically cloze every space of a text selection, or increment cloze number etc

#### Known issues
* I very rarely get the wrong background color, which sucks because you can still read the cloze. It seems to happen only in specific circumstances for me but this might be linked to the speed of your computer. If you have this issue regularly let me know. There might be a fix using `aFade` and `qFade` (taken from Glutanimate's IOC addon).
* If you use a font that uses [ligatures](https://en.wikipedia.org/wiki/Orthographic_ligature) then you can run into a *slight* issue where some characters seemingly use Quantum Tunneling to cross the cloze barrier. For example in `{{c1::ef}}{{c1::fects}}`, openning the first cloze might show `eff` intead of `ef`.

## A few notes, please read
I have a very limited understanding of anki coding, don't expect anything much from me, but PR's are welcome and don't hesitate to open an issue if you want anything. Also, I use linux and ankidroid, I can't test on other devices. Also, I strongly recommande using the addon ["Symbols as you type"](https://ankiweb.net/shared/info/2040501954), the author very nicely added html insertion, this way for example typing `::c::` is replaced by `}}{{c1::` which makes it a ton faster to use this addon. Same goes for `::c2::` etc.

The .js extension of the template files is there only to help with syntax highlighting while editing the files, it's more likely html containing `<script>` parts

Useful vim command to convert rapidly some clozes from its html : `s/<div>}}<br><\/div>//g | s/<div>{{c1::<\/div>//g | s/<li>/<li>{{c1::/g | s/<\/li>/}}<\/li>/g`. If you want to see this command in action, [click here](bin/demo_vim.gif).


### If you like the idea, these addons will interest you
* [Cloze overlapper](https://github.com/Glutanimate/cloze-overlapper) addon by the Great Glutanimate, unfortunately not (yet?) ported to 2.1
* [Cloze (Hide All) addon](https://ankiweb.net/shared/info/1709973686)
* [Cloze Anything](https://github.com/matthayes/anki_cloze_anything), the creator (as opposed to me) knows how to code in js. I intend to add a "reveal one by one" feature as you can read [here](https://github.com/matthayes/anki_cloze_anything/issues/6#issuecomment-629829062). I learned about this addon only after spending time on this. His project looks better for a lot of use cases for I still intend to use my code for quite a while.

#### File description
* BlueGreenMagick_files : he started it all
* latest_version : the one I'm using, tried and tested

## How can I get this ? (novice mode)
* read this page thoroughly
* open an issue asking for a card template, I will then send you the latest version as a deck file that you just have to import

## How can I get this ?
* read this page thoroughly
* go into the `current_version` folder
* put the content of `front.js` as the cloze's front template (look for it in the anki manual)
* put the content of `back.js` as the back template
* copy `styling.css` into the styling section of the card template
