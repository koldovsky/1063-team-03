window.setTimeout(
	() => {
		const toogleMenu = document.querySelector(".toggle-menu");
		const containerMenu = document.querySelector(".container-menu");
		
		toogleMenu.addEventListener("click", function (e) {
			toogleMenu.classList.toggle("toggle-active");
			containerMenu.classList.toggle("container-menu-active");
			document.body.classList.toggle("lock");
		});

		const navLinks = document.querySelectorAll(".header__menu-item");

		navLinks.forEach((navLink) => {
			navLink.addEventListener("click", (_) => {
					if (toogleMenu.classList.contains("active")) {
						toogleMenu.classList.remove("toggle-active");
						containerMenu.classList.remove("container-menu-active");
						document.body.classList.remove("lock");
					}
				}
			);
		});
	}
,500);
