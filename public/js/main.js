// const backdrop = document.querySelector('.backdrop');
// const sideDrawer = document.querySelector('.mobile-nav');
// const menuToggle = document.querySelector('#side-menu-toggle');

// function backdropClickHandler() {
//   backdrop.style.display = 'none';
//   sideDrawer.classList.remove('open');
// }

// function menuToggleClickHandler() {
//   backdrop.style.display = 'block';
//   sideDrawer.classList.add('open');
// }

// backdrop.addEventListener('click', backdropClickHandler);
// menuToggle.addEventListener('click', menuToggleClickHandler);


// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("myBtn").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}