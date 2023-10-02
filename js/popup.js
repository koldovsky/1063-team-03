const confirmPopup = document.querySelector(".confirm-popup-background");
const outputTimer = document.getElementById("timer");
const closeButton = document.getElementById("close-popup");
let count = 10;

const timer = () => {
	count--;
	outputTimer.innerHTML = count;
	if (count < 1) {
		clearInterval(interval);
		confirmPopup.classList.add("un-active-popup");
	}
};

closeButton.addEventListener("click", function (e) {
	clearInterval(interval);
	confirmPopup.classList.add("un-active-popup");
});

const interval = setInterval(timer, 1000);
