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
	for (let i = 0; i < navButtons.length; i++) {
		navButtons[i].addEventListener("click", (event) => {
			event.preventDefault();
			mMenu.style.display = "none";
		});
	}
}

function accordionHandler() {
	let expandBtn = document.getElementsByClassName("plan__expand");

	for (let i = 0; i < expandBtn.length; i++) {
		expandBtn[i].addEventListener("click", (event) => {
			event.preventDefault();
			expandBtn[i].parentElement
				.querySelector(".plan__features-list")
				.classList.toggle("m-accordion");
			expandBtn[i].parentElement
				.querySelector(".plan__pricing-btn")
				.classList.toggle("hidden");
			expandBtn[i].classList.toggle("rotate-up");
		});
	}
}
document.addEventListener("DOMContentLoaded", (event) => {
	menuHandler();
	accordionHandler();
});
