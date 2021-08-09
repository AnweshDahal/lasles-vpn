function menuHandler() {
	// Open Menu Button
	let openBtn = document.getElementById("menuBtn");
	openBtn.addEventListener("click", (e) => {
		e.preventDefault();
		mMenu.style.display = "flex";
	});

	// Close Menu Button
	let closeBtn = document.getElementById("closeBtn");
	closeBtn.addEventListener("click", (event) => {
		event.preventDefault();
		mMenu.style.display = "none";
	});

	// Menu Navigation Buttons
	let navButtons = document.getElementsByClassName("m-nav-list__link");
	console.log("Got");
	for (let i = 0; i < navButtons.length; i++) {
		navButtons[i].addEventListener("click", (event) => {
			event.preventDefault();
			mMenu.style.display = "none";
		});
	}
}
document.addEventListener("DOMContentLoaded", (event) => {
	menuHandler();
});
