  <p align="center">
    <img src="https://github.com/user-attachments/assets/6009dfc2-142f-4ac0-87a3-6998032c322c" alt="Logo" width="300">
  </p>
  
  # Do you get a weird flicker or glitch when watching fullscreen video in a web browser?
  
  <table>
    <tr>
      <!-- Left Column: GIF -->
      <td style="width:50%; vertical-align: top;">
        <img src="https://github.com/user-attachments/assets/311b9823-738d-499d-95e4-f4d56400acd5" alt="Demo GIF" width="100%" />
      </td>
      <!-- Right Column: Video -->
      <td style="width:50%; vertical-align: top;">
        <video src="https://github.com/user-attachments/assets/ea8d8787-7e99-453f-8e41-863e03cb3363" controls width="100%">
          Your browser does not support the video tag.
        </video>
      </td>
    </tr>
  </table>
  
If you're seeing a brief flash, flicker, or visual artifact when UI elements appear or disappear, you've found the right place.

**The glitch can look different for everyone.** It might be a flash of colorful pixels like the demo above, a momentary black and white pattern, or even a screen of glitched stripes. As long as the *trigger* is the same, this tool should fix it.
  
  ### So, What's Actually Happening?
  
  That annoying glitch is caused by your browser (like Edge or Chrome) switching into a special performance mode called **Fullscreen Exclusive (FSE)**. This switch is *supposed* to happen when no UI is on screen.
  
  The *only* thing that seems to reliably stop the FSE switch is forcing a **native Windows UI overlay** to appear on top of the browser. For example:
  *   The Live Captions overlay (`Win + Ctrl + L`)
  *   The Emoji panel (`Win + .`)
  *   The Voice Typing window (`Win + H`)
  *   Volume level (`keep pressing vol up & down to prevent volume level UI to dissappear`)
  
  Opening one of these completely suppresses the glitch. But who wants to watch a video with a distracting panel open?
  
  ### The Solution: An Invisible Windows Overlay
  
  That's exactly what **Flicker Killer** does. It creates the perfect workaround by mimicking that solution, but invisibly.
  
  The app runs silently in your system tray and places a tiny, transparent, and click-through window on your screen. Crucially, this window is set to 'always on top,' mimicking the behavior of a native Windows UI panel. This is enough to trick the browser into never attempting the problematic switch to FSE mode.
  
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
  
