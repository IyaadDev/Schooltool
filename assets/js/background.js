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

// Function to set the background image
function setBackground(url) {
  document.body.style.backgroundImage = `url(${url})`;
}

// Main function to check and handle the cookie
function checkBackgroundCookie() {
  const backgroundImgCookie = getCookie("backgroundImg");
  const currentURL = encodeURIComponent(window.location.href);

  if (backgroundImgCookie) {
    // If the cookie exists, set the background image
    const imageUrl = decodeURIComponent(backgroundImgCookie);
    setBackground(imageUrl);
  } else {
    // If the cookie doesn't exist, redirect to the specified URL with the callback parameter
    const redirectURL = `https://schooltool.io/app/customize-A.html?callback=${currentURL}`;
    redirectTo(redirectURL);
  }
}

// Call the main function when the script is executed
checkBackgroundCookie();
