field = document.getElementById("field-test");
field.addEventListener("blur", () => {
	if (field.value == "") {
		tpnF.standout(field, "Please enter your name");
	} else {
		tpnF.rmstandout(field);
	}
});
