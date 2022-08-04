/**
 * Tab1Mediawiki 1.1.11
 */
class Hangul2Japanese {
    output: string = '';
    before_char = '';
    dict: any;

    /**
     * constructor
     */
    constructor() {
        // this.prepare()
    }

    /**
    * 변경
    */
    translate(text: string, options: ITab2MediawikiOptions) {
        this.output = ''

        let result = ''
        // '가'의 유니코드값. 받침 유무 확인 및 받침 추출에 이용됨.
        const ga_uni:number = 44032

        // 받침 문자
        const t = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ',
            'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ',
            'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ',
            'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
        
        // 문자 하나씩 변형
        for (let c of text){
            // console.log(c)

            // 받침 유무
            let tn = (c.charCodeAt(0) - ga_uni) % 28;

            console.log('tn', tn)

            if(tn == 0){
                //// 받침이 없을 때
                result += this.convertChar(c)
            } else if(tn > 0){
                //// 받침이 존재함
                // 받침을 제외한 문자
                const c2 = String.fromCharCode(c.charCodeAt(0) - tn)
                console.log(c2)
                result += this.convertChar(c2)
    
                // 받침에 대한 처리
                if(t[tn] == 'ㄴ' || t[tn] == 'ㅇ'){
                    result += 'ん'
                } else if(t[tn] == 'ㅅ'){
                    result += 'っ'
                }
            } else {
                //// 입력중임
                result += c
            }
            
            // 직전의 문자
            this.before_char = c
        }

        this.output = result;
        
    }

    prepare(){
        const _dict = {
            'あ' : ['아'],
            'い' : ['이'],
            'う' : ['우'],
            'え' : ['에'],
            'お' : ['오'],
            'か' : ['카','까'],
            'き' : ['키','끼'],
            'く' : ['쿠','꾸'],
            'け' : ['케','께','캐','깨'],
            'こ' : ['코','꼬'],
            'さ' : ['사','싸'],
            'し' : ['시','씨'],
            'す' : ['수','스','쑤','쓰'],
            'せ' : ['세','새','쎄','쌔'],
            'そ' : ['소','쏘'],
            'た' : ['타','따','차'],
            'ち' : ['티','띠','치'],
            'つ' : ['투','트','뚜','뜨','추','츠'],
            'て' : ['테','태','떼','때','체','채'],
            'と' : ['토','또','초'],
            'な' : ['나'],
            'に' : ['니'],
            'ぬ' : ['누','느'],
            'ね' : ['네','내'],
            'の' : ['노'],
            'は' : ['하'],
            'ひ' : ['히'],
            'ふ' : ['후','흐'],
            'へ' : ['헤','해'],
            'ほ' : ['호'],
            'ま' : ['마'],
            'み' : ['미'],
            'む' : ['무'],
            'め' : ['메'],
            'も' : ['모'],
            'ら' : ['라'],
            'り' : ['리'],
            'る' : ['루'],
            'れ' : ['레'],
            'ろ' : ['로'],
            'や' : ['야'],
            'ゆ' : ['유'],
            'よ' : ['요'],
            'わ' : ['와'],
            'ゐ' : ['위'],
            'ゑ' : ['외','왜'],
            'を' : ['올'],
            'が' : ['가'],
            'ぎ' : ['기'],
            'ぐ' : ['구','그'],
            'げ' : ['게','개'],
            'ご' : ['고'],
            'ざ' : ['자'],
            'じ' : ['지'],
            'ず' : ['주','즈'],
            'ぜ' : ['제','재'],
            'ぞ' : ['조'],
            'だ' : ['다'],
            'ぢ' : ['디'],
            'づ' : ['두','드'],
            'で' : ['데','대'],
            'ど' : ['도'],
            'ば' : ['바'],
            'び' : ['비'],
            'ぶ' : ['부','브'],
            'べ' : ['베','배'],
            'ぼ' : ['보'],
            'ぱ' : ['파','빠'],
            'ぴ' : ['피','삐'],
            'ぷ' : ['푸','프','뿌','쁘'],
            'ぺ' : ['페','패','뻬','빼'],
            'ぽ' : ['포','뽀'],
        }

        let result = {}
        for(let ja in _dict){
            _dict[ja].forEach((item: any) => {
                let k = item
                let v = ja
                // console.log(k,v)
                result[k] = v
            });
            /*
            for(let ko in _dict[ja]){
                let k = ko
                let v = ja
                console.log(k,v)
                result[k] = v
            }*/
        }
        this.dict = result
    }

    /**
     * 사전에서 찾아서 일본어로 변환
     * @param c 문자
     * @returns 
     */
    convertChar(c: any){
        let dict = this.dict
        if(dict.hasOwnProperty(c)){
            //return dict[]
            return dict[c]
        } else {
            return c
        }
    }
}