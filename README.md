# Quake III Arena

A Quake III Arena port designed for running in pure JavaScript pre-ECMAScript 2015 (no WebAssembly). Simply open the link below, click the red icon, and select all the `PK3` files and `q3config.cfg` (optional); all files will be loaded and booted automatically. If you have the commercial version and you want to play it, you need to have the Point Release 1.32 version, this means than you need to have and select at least the following files: `pak0.pk3`, `pak1.pk3` and `pak4.pk3`. The multiplayer mode is not available in this project, for multiplayer check the original project link at the bottom of this document.

![alt screenshot](https://lrusso.github.io/Quake3/Quake3.jpg)

## Links:

- [Quake III Arena](https://lrusso.github.io/Quake3/Quake3.htm)
- [Quake III Arena online demo](https://lrusso.github.io/Quake3/Quake3.htm?demo)

## How to use it:

Examples of loading local and online files can be found [here](https://github.com/lrusso/Quake3/blob/master/Quake3.htm#L136-L158) and [here](https://github.com/lrusso/Quake3/blob/master/Quake3.htm#L162-L190).

```js
embedQuake3({
  container: "game",
  files: event.target.files,
  cbStarted: function cbStarted() {
    pleaseWait.style.display = "none"
  },
})
```

| Parameter |            Type            | Required | Description            |
| :-------- | :------------------------: | :------: | :--------------------- |
| container |           string           |   yes    | Target element ID.     |
| files     | Array of Blobs or FileList |   yes    | PK3s and q3config.cfg. |
| cbStarted |          function          |    no    | Called on game start.  |

## Special keys:

| Action                | macOS Shortcut | Windows Shortcut | Safari Shortcut |
| :-------------------- | :------------: | :--------------: | :-------------: |
| Download q3config.cfg |  Command + P   |     Ctrl + P     |    Ctrl + P     |
| Fullscreen mode       |  Command + F   |     Ctrl + F     |    Ctrl + F     |

## Main differences with the original project:

- Removed CDN dependency.
- Removed cache flow in the LocalStorage.
- Fixed build so it can handle PK3 files dynamically.
- Fixed build so it can handle big files (the commercial version).

## Based on the work of:

https://github.com/inolen/quakejs
