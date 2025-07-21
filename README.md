# Browser Detector – A Complete Client Environment Inspector
 &nbsp;  &nbsp;  &nbsp;  &nbsp; The Browser Detector is a lightweight, responsive, and interactive web utility built entirely using vanilla JavaScript, HTML, and CSS. It dynamically captures and displays real-time information about the user's **browser info, screen/window properties, geolocation, 
and offers practical examples of localStorage, prompt/alert/confirm** browser-native features. This is an learning schema that demonstrate usage & functionality of **Browser Object Model(BOM)** and its internal Objects and methods. 

## Features & What it will do?
### 1. Browser Identification
- Detects browser name and version using the navigator.userAgent string.
- Smart parsing to differentiate between:
   - Chrome
   - Firefox
   - Microsoft Edge (New + Legacy)
   - Safari

### 2. Window Dimensions & Screen Position
- Dynamically tracks:
  - Window width and height
  - X/Y screen positions (screen coordinates)

- Auto-updates every 500 milliseconds for real-time feedback.

### 3. Geolocation
- Uses navigator.geolocation to fetch and display:
   - Latitude
   - Longitude
- Gracefully handles permission denials or unsupported browsers.

### 4. Local Storage Utility
- Lets users:
    - Save custom data to localStorage
    - Retrieve previously stored data
    - Clear or update values easily
- Reflects the latest saved data instantly in the UI.

### 5.  JavaScript Native Dialogs
- Showcases usage of:
   - prompt() – Let users enter input
   - alert() – Display basic messages
   - confirm() – Confirm user actions
- Demonstrates real-time name storage and conditional UI behavior
  
## 6. Why it's Special?
This project is special because it packs a huge amount of native browser functionality into a small, clean, and focused tool — built entirely from scratch. It proves that:
- You don’t always need frameworks to build something powerful
- Learning and utility can go hand-in-hand
- Even simple JavaScript projects can serve real-world needs

- [Click here for repo](https://github.com/Karthikr32/browser-detecter)
- [Click here for UI](https://karthikr32.github.io/browser-detecter/)
