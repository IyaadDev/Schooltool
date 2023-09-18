// Function to get the value of a cookie by its name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

// Function to redirect to the specified URL
function redirectTo(url) {
  window.location.href = url;
}

// Main function to check and handle the cookie
function checkBackgroundCookie() {
  const backgroundImgCookie = getCookie("backgroundImg");
  const currentURL = encodeURIComponent(window.location.href);
  const customizePageURL = "https://schooltool.io/app/customize-A.html";

  if (backgroundImgCookie) {
    // If the cookie exists, set the background image
    const imageUrl = decodeURIComponent(backgroundImgCookie);
    setBackground(imageUrl);
  } else if (currentURL !== customizePageURL) {
      console.log("Uncustomized Background")
  }
}

// Call the main function when the script is executed
checkBackgroundCookie();