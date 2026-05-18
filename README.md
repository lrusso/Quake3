# Quake III Arena

A Quake III Arena port designed for running in pure JavaScript pre-ECMAScript 2015 (no WebAssembly). Simply open the link below, click the red icon, and select all the `PK3` files and `q3config.cfg` (optional); all files will be loaded and booted automatically. If you have the commercial version and you want to play it, you need to have the Point Release 1.32 version, this means than you need to have and select at least the following files: `pak0.pk3`, `pak1.pk3`, `pak2.pk3`, `pak3.pk3`, `pak4.pk3`, `pak5.pk3`, `pak6.pk3`, `pak7.pk3` and `pak8.pk3`. The multiplayer mode is not available in this project, for multiplayer check the original project link at the bottom of this document.

![alt screenshot](https://lrusso.github.io/Quake3/Quake3.jpg)

## Links:

- [Quake III Arena](https://lrusso.github.io/Quake3/Quake3.htm)
- [Quake III Arena online demo](https://lrusso.github.io/Quake3/Quake3.htm?demo)
- [Quake III Arena online demo using my profile](https://lrusso.github.io/Quake3/Quake3.htm?demo&lrusso)

## Special keys:

| Action                | macOS Shortcut | Windows Shortcut | Safari Shortcut |
| :-------------------- | :------------: | :--------------: | :-------------: |
| Download q3config.cfg |  Command + P   |     Ctrl + P     |    Ctrl + P     |
| Fullscreen mode       |  Command + F   |     Ctrl + F     |    Ctrl + F     |

## Main differences with the original project:

- Fixed a few rendering bugs.
- Adjusted the emscripten code to create an asm.js build.
- Transpiled JS to pre-ES2015 via `node ConverterES5.js quake3.js`.

## This is a modified version of ioq3:

https://github.com/lrusso/ioq3

**NOTE:** Emscripten 4.0.23 was used to build the project.
