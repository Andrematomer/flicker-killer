# Flicker Killer

### Does this look familiar when you're watching a video?

![The visual artifact](your-glitch-image.png)

[**Click here to watch a full video demonstration of the glitch.**](your-explainer-video.mp4)

If you're seeing that flash of corrupted pixels when video controls fade in or out, you've found the right place.

### So, What's Actually Happening?

That annoying glitch is caused by your browser (like Edge or Chrome) switching into a special performance mode called **Fullscreen Exclusive (FSE)**. This switch is *supposed* to happen when no UI is on screen.

But here's the strange part, which makes this bug so specific:
*   The browser's own UI elements **do not** prevent the glitch. You can have the video progress bar visible or even the entire Edge sidebar open (`Ctrl+Shift+.`), and the artifact will still happen.
*   Curiously, the mouse cursor fading in and out on its own also doesn't trigger it.

The *only* thing that seems to reliably stop the FSE switch is forcing a **native Windows UI overlay** to appear on top of the browser. For example:
*   The Live Captions overlay (`Win + Ctrl + L`)
*   The Emoji panel (`Win + .`)
*   The Voice Typing window (`Win + H`)

Opening one of these completely suppresses the glitch. But who wants to watch a movie with a giant, distracting panel open?

### The Solution: An Invisible Windows Overlay

That's exactly what **Flicker Killer** does. It creates the perfect workaround by mimicking that solution, but invisibly.

The app runs silently in your system tray and places a tiny, **completely transparent** and **click-through** window on your screen. Because this is a native window, it's enough to trick the browser into never attempting the problematic switch to FSE mode.

The result? The glitch is eliminated entirely, and your fullscreen video playback is perfectly smooth.

---

### Features
*   **Set it and Forget It:** Runs silently in your system tray.
*   **Completely Invisible:** The window is transparent and doesn't interfere with your mouse.
*   **Run on Startup:** A simple right-click on the tray icon lets you enable it to start with Windows.
*   **Lightweight:** Uses almost no system resources.

### Installation
1.  Go to the [**Releases Page**](https://github.com/Andrematomer/flicker-killer/releases) for this project.
2.  Download the latest `Flicker.Killer.Setup.exe` file.
3.  Run the installer.
4.  After installation, right-click the icon in your system tray and select "Run on Startup." You're all set!

### License
This project is shared under the ISC License. See the `LICENSE` file for details.

### Disclaimer
This is a workaround for a specific bug and is not an official fix from Microsoft or any hardware vendor. Use at your own risk.