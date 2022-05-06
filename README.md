# HeronX
## A mod loader to send to your friends.

When playing modded minecraft with my friends or school friends that have never downloaded mods in their life, I realized I didn't want to waste time screensharing and trying to get them to place the mods in the appdata and then .minecraft and create a mods folder, etc.

Ofc, make sure they have downloaded java 8 and forge (minecraft forge, not electron forge).

HeronX is supposed to be a super lightweight mod loader.
While it doesn't stream download, it instead has all of the mods inside of the src folder which is compiled into an EXE.

Basically, it is super easy to use but takes a fat while to download.

HeronX is built using Electron. I kind of screwed up the build process and it currently exports to a ZIP for Windows.
Change it if you want. The build is handled by `electron-forge`.

The UI is very simple as I rigged it up on vacation with Dreamweaver and a macbook. Not the best setup.
The loading bar is complete garbage as well, looks cool though so hey :)

`HeronX sends the mods in the "mods" folder into the users appdata/.minecraft/mods folder and creates a /mods folder if there isn't one allready. It will overwrite all of the files but I haven't tested this much. No need to change the directory if you are building for mac and windows, a node module will handle that. Also, it is SUPER unsafe because I allowed node-module-integration instead of using communication. Oversight, but it doesn't matter anyways 😆.`

Okay, time to get into the instructions.

### HeronX should NOT BE USED as a mod launcher. This is simply used to send mods to your friends.

First, clone this directory.
Place all of your mods in the mods folder.
Next, use `npm run makeforge`. This will create a windows ZIP file containing the application in the `out` folder. Under the "config-forge" in the package.json, you will be able to change the output system. Read up on the `electron-forge` docs to learn more about the different outputs. I probably messed up and so the regular windows squirrel output wasn't working.


## Oh, and a sidenote. Tell your friends to extract and then double press the "heronx" file. I made the mistake of assuming people are smart, and so they ended up not knowing what to do with the zip file. Some of them even knew how to install mods and placed the zip inside of their mods folder, and then assumed it wasn't working ;).
