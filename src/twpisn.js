elms = document.getElementsByTagName("*");
for (var i = 0; i < elms.length; i++) {
	elm = elms[i];
	elm.style.fontSize = "14px";
	if (elm.hasAttribute("tpn")) {
		elm.style.display = "block";
	}
}

var ptnColors = {
	prim: {
		bright: "#9AB9D8",
		dark: "#6C94BB",
		darker: "#678DB2",
	},
	seco: {
		bright: "#E3E5EB",
		dark: "#C9CBD0",
	},
	back: {
		bright: "#efefef",
	},
};

var ptnSizes = {
	primPadding: {
		tb: 5,
		lr: 4,
	},
};

document.querySelectorAll("button").forEach((a) => {
	let applyStyle = (element, styleObj) => {
		Object.assign(element.style, styleObj);
	};
	var text = a.innerHTML;
	a.innerHTML = "<div><span>" + text + "</span></div>";
	var bor = a.querySelector("span");
	var cont = a.querySelector("div");
	const normalStyleA = {
		borderColor: "#8F8F8F",
		outlineColor: "rgba(255, 255, 255, 0.4)",
	};
	const filledStyleA = {
		borderColor: "#366088",
		outlineColor: "rgba(0, 0, 0, 0.1)",
	};
	const normalStyle = {
		backgroundImage: `linear-gradient(${ptnColors.seco.bright}, ${ptnColors.seco.dark})`,
		color: "#000000",
	};
	const normalStyleHover = {
		backgroundImage: "none",
		backgroundColor: ptnColors.back.bright,
	};
	const filledStyle = {
		color: "#ffffff",
		backgroundImage: `linear-gradient(${ptnColors.prim.bright}, ${ptnColors.prim.dark})`,
	};
	const filledStyleHover = {
		backgroundImage: "none",
		backgroundColor: ptnColors.prim.bright,
	};
	const normalStyleActive = {
		backgroundImage: `linear-gradient(${ptnColors.seco.bright}, ${ptnColors.seco.dark})`,
	};
	const filledStyleActive = {
		backgroundImage: "none",
		backgroundColor: ptnColors.prim.darker,
	};
	if (a.hasAttribute("tpn-btn")) {
		bor.style.padding = "0 2px";
		bor.style.outlineOffset = "-2px";
		bor.style.textShadow = "0 -0.5px 0 rgba(0, 0, 0, 0.5)";
		cont.style.padding = `${ptnSizes.primPadding.tb - 2}px ${
			ptnSizes.primPadding.lr
		}px`;
		a.style.cursor = "pointer";
		a.style.overflow = "hidden";
		a.style.borderRadius = "3px";
		a.style.fontWeight = 400;
		a.style.minWidth = "60px";
		a.style.boxShadow = "0.5px 0.5px 0.5px 0 rgba(0, 0, 0, 0.25)";
		a.style.border = "1px solid";
		a.style.outline = "1px solid";
		a.style.outlineOffset = "-2px";
		a.style.height = "fit-content";
		applyStyle(cont, normalStyle);
		applyStyle(a, normalStyleA);
		a.addEventListener("mouseover", () => {
			applyStyle(cont, normalStyleHover);
		});
		a.addEventListener("mouseleave", () => {
			applyStyle(cont, normalStyle);
		});
		a.addEventListener("mousedown", () => {
			applyStyle(cont, normalStyleActive);
			bor.style.outline = "1px dotted black";
		});
		a.addEventListener("mouseup", () => {
			applyStyle(cont, normalStyleHover);
		});
		a.addEventListener("blur", () => {
			bor.style.outline = "none";
		});
	}
	if (a.hasAttribute("filled-btn")) {
		applyStyle(cont, filledStyle);
		applyStyle(a, filledStyleA);
		a.addEventListener("mouseover", () => {
			applyStyle(cont, filledStyleHover);
		});
		a.addEventListener("mouseleave", () => {
			applyStyle(cont, filledStyle);
		});
		a.addEventListener("mousedown", () => {
			applyStyle(cont, filledStyleActive);
		});
		a.addEventListener("mouseup", () => {
			applyStyle(cont, filledStyleHover);
		});
	}
	if (a.hasAttribute("tiny-btn")) {
		cont.style.padding = `1px ${ptnSizes.primPadding.lr + 1}px`;
		a.style.fontSize = "13px";
	}
	if (a.hasAttribute("big-btn")) {
		a.style.fontSize = "15px";
		cont.style.padding = `${ptnSizes.primPadding.tb}px ${
			ptnSizes.primPadding.lr + 2
		}px`;
	}
});
