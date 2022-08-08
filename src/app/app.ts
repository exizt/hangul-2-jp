import { bind } from "./app.include";
import { Hangul2Japanese } from "../hangul-2-jp";

/**
 * 이벤트 바인딩
 */
document.addEventListener("DOMContentLoaded", ()=> {
	const converter = new Hangul2Japanese()
	const optionSet = {
		options : {
		},
		selector: {
			input: "#input",
			copyBtn: "#btn_copyresult",
			output: "#output"
		}
	}
	bind(converter, optionSet)
})