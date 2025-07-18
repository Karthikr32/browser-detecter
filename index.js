document.addEventListener("DOMContentLoaded", () => {
  handleBrowser();
  setInterval(updateWindowInfo, 500);
});

/*
NOTE: 
 1.) functionName --> call when needed based in condition
 2.) functionName() --> calls immediately 
*/
 
function handleBrowser() {
  // 1. Set Browser Information using Native JavaScript
  const browserNameElem = document.getElementById("browser-name");
  const browserVersionElem = document.getElementById("browser-version");

  // Get browser name and version using `navigator`
  const userAgent = navigator.userAgent;

  function getBrowserInfo() {
    let browserName = "Unknown Browser";
    let version = "Unknown Version";

    if (userAgent.indexOf("Chrome") > -1) {
      // Check if it's Chrome or Edge
      if (userAgent.indexOf("Edg/") > -1) {
        // This Condition is to detect new version
        browserName = "Microsoft Edge";
        version = userAgent.split("Edg/")[1];
      } 
      else if (userAgent.indexOf("Edge") > -1 && userAgent.indexOf("Edg/") === -1) {     // check old version by excluding the new version
        browserName = "Edge";
        version = userAgent.split("Edge/")[1];            // This Condition is to detect Older Edge Version
      } 
      else {
        browserName = "Google Chrome";
        version = userAgent.split("Chrome/")[1].split(" ")[0];
      }
    } 
    else if (userAgent.indexOf("Firefox") > -1) {
      browserName = "Firefox";
      version = userAgent.split("Firefox/")[1];
    } 
    else if (
      userAgent.indexOf("Safari") > -1 &&
      userAgent.indexOf("Chrome") === -1
    ) {
      // checking need safari but not need chrome
      browserName = "Safari";
      version = userAgent.split("Version/")[1].split(" ")[0];
    }

    return { browserName, version };
  }

  const browserInfo = getBrowserInfo();
  browserNameElem.textContent = browserInfo.browserName;
  browserVersionElem.textContent = browserInfo.version;

  updateWindowInfo();

  // 2. Geolocation functionality
  const latitudeElem = document.getElementById("latitude");
  const longitudeElem = document.getElementById("longitude");

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(                      // navigator.geolocation.getCurrentPosition(position, errorMsg)
      (position) => {
        latitudeElem.textContent = `${position.coords.latitude}`;
        longitudeElem.textContent = `${position.coords.longitude}`;
      },
      (error) => {
        latitudeElem.textContent = `Error: ${error.message}`;
        longitudeElem.textContent = `Error: ${error.message}`;
      }
    );
  } else {
    // What if geolocation is not supported at all in any of the Browsers?:
    latitudeElem.textContent = "Geolocation is not supported on this browser.";
    longitudeElem.textContent = "Geolocation is not supported on this browser.";
  }

  // 3. Local Storage functionality
  const localStorageInput = document.getElementById("local-storage-input");
  const saveBtn = document.getElementById("save-btn");
  const retrieveBtn = document.getElementById("retrieve-btn");
  const saveDataElem = document.getElementById("save-data");

  // Save data to local storage
  saveBtn.addEventListener("click", () => {
    const inputValue = localStorageInput.value;
    if (inputValue) {
      localStorage.setItem("savedData", inputValue);
      localStorageInput.value = ""; // Clear the input field
      saveDataElem.textContent = inputValue;
    }
  });

  // Retrieve data from local storage
  retrieveBtn.addEventListener("click", () => {
    const savedData = localStorage.getItem("savedData");
    if (savedData) {
      saveDataElem.textContent = savedData;
    } else {
      saveDataElem.textContent = "No data found in local storage.";
    }
  });

  // 4. Action Buttons
  const writeBtn = document.getElementById("write-btn");
  const alertBtn = document.getElementById("alert-btn");
  const confirmBtn = document.getElementById("confirm-btn");

  let uName = "Unknown";
  writeBtn.addEventListener("click", () => {
    uName = prompt("Enter Something...");
    return;
  });

  alertBtn.addEventListener("click", () => {
    if (uName !== null && uName !== "") {
      alert(`Welcome ${uName}`);
    }
  });

  confirmBtn.addEventListener("click", () => {
    const result = confirm("Are you sure you want to continue?");
    if (result) {
      alert(`${uName} clicked OK!`);
    } else {
      alert(`${uName} clicked Cancel!`);
    }
  });
}

// Get window dimensions and position
function updateWindowInfo() {
  const windowWidthElem = document.getElementById("window-width");
  const windowHeightElem = document.getElementById("window-height");
  const windowXElem = document.getElementById("window-x");
  const windowYElem = document.getElementById("window-y");
  windowWidthElem.textContent = window.innerWidth;
  windowHeightElem.textContent = window.innerHeight;
  windowXElem.textContent = window.screenX || window.screenLeft || 0; // window.screenLeft  Bcoz of X-axis(Left - Right)
  windowYElem.textContent = window.screenY || window.screenTop || 0; // window.screenTop  Bcoz of Y-axis(Top - Bottom)
}
