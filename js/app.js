function getRand() {
	fetch("https://catfact.ninja/fact?max_length=512")
		.then((response) => {
			if (!response.ok)
				return (document.getElementById("cat-fact").innerHTML =
					"Whoops! There was an error.");
			return response.json();
		})
		.then(
			(data) => (document.getElementById("cat-fact").innerHTML = data.fact)
		);
}

function getImg() {
	fetch("https://api.thecatapi.com/v1/images/search")
		.then((response) => {
			if (!response.ok)
				return document
					.getElementById("cat-img")
					.setAttribute("src", "./defaultCat.jpg");
			return response.json();
		})
		.then((data) => {
			if (data[0].height > 600) {
				return getImg();
			}
			document
				.getElementById("cat-img")
				.setAttribute("src", data[0].url.toString());

			getRand();
		});

	document.getElementById("getBtn").disabled = true;
	setTimeout(function () {
		document.getElementById("getBtn").disabled = false;
	}, 1000);
}
