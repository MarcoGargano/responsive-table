function doTable(tableSelector) {
	document.querySelectorAll(`${tableSelector} tr`).forEach((el) => {
		el.addEventListener("click", (e) => {
			if (window.matchMedia("(max-width: 38rem)").matches) {
				e.currentTarget.classList.toggle("open");
			}
		});
	});

	const tableLabels = [];
	document.querySelectorAll(`${tableSelector} thead th`).forEach((el) => {
		tableLabels.push(el.innerText);
	});

	for (var i = 0, len = tableLabels.length; i < len; i++) {
		const label = tableLabels[i];
		document
			.querySelectorAll(`${tableSelector} tbody td:nth-child(${i + 1})`)
			.forEach((el) => {
				el.setAttribute("data-label", label);
			});
	}
}

// window.TableMobile = new TableMobile();