

/* combined event listeners! */


/* ONE TO LISTEN FOR ALL CLICKS ON HTML ELEMENTS! */

document.addEventListener('click', function (event) {

	if (event.target.matches('.hallo')) {
		 	document.querySelector(".notitie").textContent = "Je hebt GEKLIKT op: Hallo!";
		return;
	}
	if (event.target.matches('.totziens')) {
			document.querySelector(".notitie").textContent = "Je hebt GEKLIKT op: Tot ziens!";
		return;
	}

});

/* ONE TO LISTEN FOR ALL MOUSEOVERS ON HTML ELEMENTS! */

document.addEventListener('mouseover', function (event) {

	if (event.target.matches('.hallo')) {
		 	document.querySelector(".notitie").textContent = "De muis is OVER Hallo!";
		return;
	}
	if (event.target.matches('.totziens')) {
			document.querySelector(".notitie").textContent = "De muis is OVER Tot ziens!";
		return;
	}

});
