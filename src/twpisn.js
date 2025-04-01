elms = document.getElementsByTagName("*");
for (var i = 0; i < elms.length; i++) {
	elm = elms[i];
	elm.style.fontSize = "11pt";
	if (elm.hasAttribute("tpn")) {
		elm.style.display = "block";
	}
}

var prim = "#6C94BB";
var darkPrim = "#678DB2";

document.querySelectorAll("button").forEach((a) => {
	if (a.hasAttribute("tpn-btn")) {
		var text = a.innerHTML;
		a.innerHTML = "<span>" + text + "</span>";
		var bor = a.querySelector("span");
		bor.style.padding = "0 2px";
		bor.style.lineHeight = 0.7;
		a.style.color = "#000000";
		a.style.cursor = "pointer";
		a.style.backgroundImage = "linear-gradient(#E3E5EB, #C9CBD0)";
		a.style.padding = "3px 4px";
		a.style.borderRadius = "3px";
		a.style.border = "1px solid #8F8F8F";
		a.style.fontWeight = 400;
		a.style.minWidth = "60px";
		a.style.boxShadow =
			"0.5px 0.5px 0.5px 0 rgba(0, 0, 0, 0.25), inset 0 0 1px 1px rgba(255, 255, 255, 0.3)";
		a.addEventListener("mouseover", () => {
			a.style.backgroundImage = "none";
			a.style.backgroundColor = "#efefef";
		});
		a.addEventListener("mouseleave", () => {
			a.style.backgroundImage = "linear-gradient(#E3E5EB, #C9CBD0)";
		});
		a.addEventListener("mousedown", () => {
			a.style.backgroundImage = "linear-gradient(#C5C7CB, #D0D2D6)";
			bor.style.outline = "1px dashed black";
		});
		a.addEventListener("mouseup", () => {
			a.style.backgroundImage = "none";
			a.style.backgroundColor = "#efefef";
		});
		a.addEventListener("blur", () => {
			bor.style.outline = "none";
		});
	}
});
