// background.js

// Function to get the value of a cookie by its name
function getCookie(cookieName) {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [name, value] = cookie.split('=');
    if (name === cookieName) {
      return decodeURIComponent(value);
    }
  }
  return null; // Cookie not found
}

// Check if the current page is within the /app folder
if (window.location.pathname.startsWith('/app')) {
  // Check if the "backgroundImg" cookie exists
  const backgroundCookie = getCookie("backgroundImg");

  if (backgroundCookie) {
    console.log("Found 'backgroundImg' cookie with value:", backgroundCookie);
    
    // Set the image from the "backgroundImg" cookie as the background of the webpage
    document.body.style.backgroundImage = `url(${backgroundCookie})`;
    
    console.log("Background image set successfully!");
  } else {
    console.log("'backgroundImg' cookie does not exist.");
  }
} else {
  console.log("This script is only intended for pages within the /app folder.");
}
