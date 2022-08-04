// 변환기의 옵션들.
var TTTConverter = {
	output: '',
	options : {
		isIncludedHeader: true,
		isReverse: false,
		isOnlyItems: false,
		isSortable: false
	},
	selectors : {
		isIncludedHeader: "#opt_included_header",
		isReverse: "#opt_reverse",
		isOnlyItems: "#opt_only_items",
		isSortable: "#opt_sortable",
		textInput: "#input",
		copyBtn: "#btn_copyresult",
		output: "#output"
	}
}
var converter = null

/**
 * 이벤트 리스터
 */
document.addEventListener("DOMContentLoaded", ()=> {
	// 로드 후 생성
	converter = new Hangul2Japanese()
	converter.prepare()

	// console.log(converter.dict)

	// 이벤트 매핑
	onLoadedEventListeners();
	function onLoadedEventListeners(){
		let sel = TTTConverter.selectors;
		
		// 값 입력시
		_add_event(sel.textInput, 'input', convert);

		_add_event(sel.copyBtn, 'click', (e)=>{
			e.preventDefault();
			copyToClipboard(TTTConverter.output);
		})
	}
	
	function _add_event(sel, type, event){
		document.querySelector(sel).addEventListener(type, event);
	}

	function onChangeEv(sel, event){
		_add_event(sel, 'change', event)
	}
});


/**
* 변환
*/
function convert(){
	let sel = TTTConverter.selectors
	converter.translate(document.querySelector(sel.textInput).value, TTTConverter.options);
	document.querySelector(sel.output).innerHTML = converter.output;
}


/**
* source : http://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
*/
function copyToClipboard(text) {
	var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

	if (window.clipboardData) { // Internet Explorer
		caseIE(text);
	} else {
		executeCopy(text);
	}
	//$("#copy-msg").text("copied");

	/*
	* old IE version
	*/
	function caseIE(text)
	{
		if(console) console.log("caseIE");
		window.clipboardData.setData("Text", text);
	}
	/*
	* 일반적인 경우
	*/
	function executeCopy(text)
	{
		var input = document.createElement('textarea');
		document.body.appendChild(input);
		input.value = text;
		input.select();
		try{
			document.execCommand('Copy');
		} catch(e) {
			if(console) console.log(e);
		}
		//input.remove();
		document.body.removeChild(input);
	}
}