elms = document.getElementsByTagName("*");
for (var i = 0; i < elms.length; i++) {
	elm = elms[i];
	// elm.style.fontSize = "14px";
	if (elm.hasAttribute("tpn")) {
		elm.style.display = "block";
	}
}

var ptnColors = {
	prim: {
		brighter: "#bfd3e6",
		bright: "#9AB9D8",
		dark: "#6C94BB",
		darker: "#678DB2",
		border: "#366088",
	},
	seco: {
		bright: "#E3E5EB",
		dark: "#C9CBD0",
		border: "#8F8F8F",
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

let applyStyle = (element, styleObj) => {
	Object.assign(element.style, styleObj);
};

document.querySelectorAll("button").forEach((a) => {
	var text = a.innerHTML;
	a.innerHTML = "<div><span>" + text + "</span></div>";
	var bor = a.querySelector("span");
	var cont = a.querySelector("div");
	const normalStyleA = {
		borderColor: ptnColors.seco.border,
		outlineColor: "rgba(255, 255, 255, 0.4)",
	};
	const filledStyleA = {
		borderColor: ptnColors.prim.border,
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
		cont.style.padding = `${ptnSizes.primPadding.tb - 2.5}px ${
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
		a.style.fontSize = "13px";
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

document.querySelectorAll("text-field").forEach((a) => {
	a.style.display = "block";
	a.innerHTML = `<div class="in" style="outline: 1px solid ${
		ptnColors.seco.border
	}; border-radius: 3px; outline-offset: -1px; box-shadow: 0.5px 0.5px 0.5px 0 rgba(0, 0, 0, 0.25); display: flex; align-items: center;"><input style="display: block; width: ${getWidth()}px" type=${a.getAttribute(
		"type"
	)} placeholder="${a.getAttribute("placeholder")}" /></div>`;
	inp = a.querySelector("input");
	const fieldStyle = {
		border: `none`,
		borderRadius: "3px",
		padding: `${ptnSizes.primPadding.tb - 3.5}px ${
			ptnSizes.primPadding.lr + 2
		}px`,
		height: "20px",
		width: `${getWidth()}px`,
		outline: "1px solid rgba(0, 0, 0, 0.1)",
		outlineOffset: "-2px",
	};
	applyStyle(inp, fieldStyle);
	if (a.getAttribute("tpn-label") != null) {
		const aStyle = {
			display: "flex",
			flexDirection: "column",
			gap: `${ptnSizes.primPadding.tb - 3.5}px`,
			backgroundColor: "transparent",
		};
		applyStyle(a, aStyle);
		const labelStyle = {
			display: "block",
			fontSize: "13px",
			outline: "none",
			width: "fit-content",
		};
		const labelFocus = {
			outline: "1px dotted #000000",
		};
		label = document.createElement("span");
		label.innerText = a.getAttribute("tpn-label");
		applyStyle(label, labelStyle);
		a.prepend(label);
	}
	inp.addEventListener("click", () => {
		applyStyle(label, labelFocus);
	});
	inp.addEventListener("blur", () => {
		applyStyle(a, aStyle);
		applyStyle(label, labelStyle);
	});
});

const tpnF = {
	standout: (elm, text = "default text") => {
		const standoutStyle = {
			fontSize: "11px",
		};
		const outerDiv = elm.parentNode.parentNode;
		const wrapperDiv = elm.parentNode;
		const message = document.createElement("span");
		message.classList.add("tpn-message");
		message.innerText = text;
		outerDiv.appendChild(message);
		applyStyle(message, standoutStyle);
		const outerStandout = {
			backgroundColor: ptnColors.prim.brighter,
			borderRadius: "3px",
		};
		const labelStandout = {
			color: ptnColors.prim.border,
			fontWeight: 500,
		};
		const allFocus = {
			outlineColor: ptnColors.prim.bright,
		};
		const wrapperFocus = {
			outlineColor: ptnColors.prim.border,
		};
		labelElm = outerDiv.querySelector("span");
		applyStyle(outerDiv, outerStandout);
		applyStyle(elm, allFocus);
		applyStyle(wrapperDiv, wrapperFocus);
		applyStyle(labelElm, labelStandout);
		elm.addEventListener("blur", () => {
			applyStyle(elm, allFocus);
			applyStyle(wrapperDiv, wrapperFocus);
			applyStyle(labelElm, labelStandout);
		});
		elm.addEventListener("blur", () => {
			const me = outerDiv.querySelectorAll(".tpn-message");
			if (me.length == 2) {
				const meR = outerDiv.querySelector(".tpn-message");
				meR.remove();
			}
		});
	},
};

document.querySelectorAll("[tpn-field]").forEach((a) => {
	const textStyle = { fontSize: "12px" };
	const pwStyle = { fontSize: "25px" };
	let plc = a.getAttribute("placeholder");
	if (a.getAttribute("type") == "password") {
		applyStyle(a, textStyle);
		a.addEventListener("click", () => {
			applyStyle(a, pwStyle);
		});
		a.addEventListener("blur", () => {
			applyStyle(a, textStyle);
		});
	} else {
		applyStyle(a, textStyle);
	}
	const wrapperDiv = document.createElement("div");
	const outerDiv = document.createElement("div");
	wrapperDiv.classList.add("tpn-wrapper");
	outerDiv.classList.add("tpn-outer");
	a.parentNode.insertBefore(wrapperDiv, a);
	wrapperDiv.appendChild(a);
	wrapperDiv.parentNode.insertBefore(outerDiv, wrapperDiv);
	outerDiv.appendChild(wrapperDiv);
	const getWidth = () => {
		if (a.getAttribute("w") != null) {
			return parseFloat(a.getAttribute("w"));
		} else {
			return 100;
		}
	};
	const fieldStyle = {
		border: `none`,
		borderRadius: "3px",
		padding: `${ptnSizes.primPadding.tb - 3.5}px ${
			ptnSizes.primPadding.lr + 2
		}px`,
		height: "20px",
		width: `${getWidth()}px`,
		outline: "2px solid rgba(0, 0, 0, 0.1)",
		outlineOffset: "-2px",
		backgroundColor: "#ffffff",
	};
	const divStyle = {
		outline: `1px solid ${ptnColors.seco.border}`,
		borderRadius: "3px",
		outlineOffset: "-1px",
		boxShadow: "0.5px 0.5px 0.5px rgba(0, 0, 0, 0.25)",
		display: "flex",
		alignItems: "center",
	};
	const outerStyle = {
		outline: "none",
		padding: `${ptnSizes.primPadding.tb - 4}px ${
			ptnSizes.primPadding.lr - 1
		}px ${ptnSizes.primPadding.tb - 1}px ${ptnSizes.primPadding.lr - 1}px`,
		height: "fit-content",
	};
	applyStyle(outerDiv, outerStyle);
	applyStyle(a, fieldStyle);
	applyStyle(wrapperDiv, divStyle);
	const allFocus = {
		outlineColor: ptnColors.prim.bright,
	};
	const wrapperFocus = {
		outlineColor: ptnColors.prim.border,
	};
	const outerFocus = {
		outline: "1px dotted #000000",
	};
	if (a.getAttribute("tpn-label") != null) {
		const aStyle = {
			display: "flex",
			flexDirection: "column",
			gap: `${ptnSizes.primPadding.tb - 3.5}px`,
			backgroundColor: "transparent",
		};
		const labelStyle = {
			display: "block",
			fontSize: "12px",
			outline: "none",
			width: "fit-content",
			fontWeight: 400,
		};
		const labelFocus = {
			fontWeight: 500,
		};
		applyStyle(outerDiv, aStyle);
		label = document.createElement("span");
		label.innerText = a.getAttribute("tpn-label");
		outerDiv.prepend(label);
		applyStyle(label, labelStyle);
		a.addEventListener("click", () => {
			labelElm = outerDiv.querySelector("span");
			applyStyle(labelElm, labelFocus);
		});
		a.addEventListener("blur", () => {
			labelElm = outerDiv.querySelector("span");
			applyStyle(labelElm, labelStyle);
		});
	}
	a.addEventListener("click", () => {
		applyStyle(a, allFocus);
		applyStyle(wrapperDiv, wrapperFocus);
		applyStyle(outerDiv, outerFocus);
		a.setAttribute("placeholder", "");
	});
	a.addEventListener("blur", () => {
		applyStyle(a, fieldStyle);
		applyStyle(wrapperDiv, divStyle);
		applyStyle(outerDiv, outerStyle);
		a.setAttribute("placeholder", plc);
	});
	if (a.getAttribute("standout") != null) {
		tpnF.standout(a, a.getAttribute("standout"));
	}
});
