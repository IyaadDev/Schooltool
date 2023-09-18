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

// Check if the "backgroundImg" cookie exists
const backgroundCookie = getCookie("backgroundImg");

if (backgroundCookie) {
  // Log the contents of the "backgroundImg" cookie to the console
  console.log("Contents of 'backgroundImg' cookie:", backgroundCookie);

  // Set the background image for the body of the webpage using CSS
  document.body.style.backgroundImage = `url('${backgroundCookie}') !important`;
  document.body.style.backgroundSize = "cover"; // Optional: Set background size
} else {
  console.log("'backgroundImg' cookie does not exist.");
}