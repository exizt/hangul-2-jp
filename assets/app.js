/**
 * 이벤트 리스터
 */
document.addEventListener("DOMContentLoaded", ()=> {
	let converter = null
	const options = {
		selector: {
			input: "#input",
			output: "#output",
			copyBtn: "#btn_copyresult",
		}
	}

	// 로드 후 생성
	converter = new Hangul2Japanese()
	converter.prepare()

	// console.log(~~(10/3))
	// console.log(converter.dict)

	bind();
	
	// 이벤트 바인딩
	function bind(){
		let selector = options.selector
		
		// 값 입력시
		_add_event(selector.input, 'input', convert);

		_add_event(selector.copyBtn, 'click', (e)=>{
			e.preventDefault();
			copyToClipboard(converter.output);
		})
	}
	
	// 엘리먼트 이벤트에 추가
	function _add_event(sel, type, event){
		document.querySelector(sel).addEventListener(type, event);
	}

	function onChangeEv(sel, event){
		_add_event(sel, 'change', event)
	}

	/**
	* 변환
	*/
	function convert(){
		let selector = options.selector

		converter.translate(document.querySelector(selector.input).value, options);
		document.querySelector(selector.output).innerHTML = converter.output;
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
});