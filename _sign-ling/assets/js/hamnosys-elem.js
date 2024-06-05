(function() {
  const HAMNOSYS_NAMES = {
    "hamfist": "",
    "hamflathand": "",
    "hamfinger2": "",
    "hamfinger23": "",
    "hamfinger23spread": "",
    "hamfinger2345": "",
    "hampinch12": "",
    "hampinchall": "",
    "hampinch12open": "",
    "hamcee12": "",
    "hamceeall": "",
    "hamceeopen": "",
    "hamthumboutmod": "",
    "hamthumbacrossmod": "",
    "hamthumbopenmod": "",
    "hamdoublebent": "",
    "hamfingerstraightmod": "",
    "hamfingerbendmod": "",
    "hamfingerhookmod": "",
    "hamdoublehooked": "",
    "hamthumb": "",
    "hamindexfinger": "",
    "hammiddlefinger": "",
    "hamringfinger": "",
    "hampinky": "",
    "hambetween": "",
    "hamfingertip": "",
    "hamfingernail": "",
    "hamfingerpad": "",
    "hamfingermidjoint": "",
    "hamfingerbase": "",
    "hamfingerside": "",
    "hamextfingeru": "",
    "hamextfingero": "",
    "hamextfingerul": "",
    "hamextfingerur": "",
    "hamextfingerol": "",
    "hamextfingeror": "",
    "hamextfingerl": "",
    "hamextfingerr": "",
    "hamextfingerdl": "",
    "hamextfingerdr": "",
    "hamextfingeril": "",
    "hamextfingerir": "",
    "hamextfingerd": "",
    "hamextfingeri": "",
    "hamorirelative": "",
    "hampalmu": "",
    "hamextfingerui": "",
    "hamextfingeruo": "",
    "hampalmul": "",
    "hampalmur": "",
    "hampalml": "",
    "hampalmr": "",
    "hamextfingerdi": "",
    "hamextfingerdo": "",
    "hampalmdl": "",
    "hampalmdr": "",
    "hampalmd": "",
    "hamheadtop": "",
    "hamhead": "",
    "hamforehead": "",
    "hamnose": "",
    "hamnostrils": "",
    "hamlips": "",
    "hamtongue": "",
    "hamteeth": "",
    "hamchin": "",
    "hamunderchin": "",
    "hamneck": "",
    "hamshouldertop": "",
    "hamshoulders": "",
    "hamchest": "",
    "hamstomach": "",
    "hambelowstomach": "",
    "hameyebrows": "",
    "hameyes": "",
    "hamear": "",
    "hamearlobe": "",
    "hamcheek": "",
    "hamupperarm": "",
    "hamelbowinside": "",
    "hamlowerarm": "",
    "hamwristback": "",
    "hamthumbball": "",
    "hampalm": "",
    "hamhandback": "",
    "hamthumbside": "",
    "hampinkyside": "",
    "hamclose": "",
    "hamtouch": "",
    "haminterlock": "",
    "hamcross": "",
    "hambrushing": "",
    "hambehind": "",
    "hamarmextended": "",
    "hamlrbeside": "",
    "hamlrat": "",
    "hamneutralspace": "",
    "hammoveu": "",
    "hammoveo": "",
    "hammoveul": "",
    "hammoveur": "",
    "hammoveol": "",
    "hammoveor": "",
    "hammovel": "",
    "hammover": "",
    "hammovedl": "",
    "hammovedr": "",
    "hammoveil": "",
    "hammoveir": "",
    "hammoved": "",
    "hammovei": "",
    "hamspace": " ",
    "hamfast": "",
    "hamslow": "",
    "hamtense": "",
    "hamrest": "",
    "hamhalt": "",
    "hammoveui": "",
    "hammoveuo": "",
    "hamrepeatfromstart": "",
    "hamrepeatfromstartseveral": "",
    "hamrepeatcontinue": "",
    "hamrepeatcontinueseveral": "",
    "hamrepeatreverse": "",
    "hamsmallmod": "",
    "hamlargemod": "",
    "hamnomotion": "",
    "hamincreasing": "",
    "hamdecreasing": "",
    "hammovedi": "",
    "hammovedo": "",
    "hamarcl": "",
    "hamarcu": "",
    "hamarcd": "",
    "hamarcr": "",
    "hamwavy": "",
    "hamellipsev": "",
    "hamellipseur": "",
    "hamellipseh": "",
    "hamellipseul": "",
    "hamzigzag": "",
    "hamcircleu": "",
    "hamcircleo": "",
    "hamcircleul": "",
    "hamcircleur": "",
    "hamcircleol": "",
    "hamcircleor": "",
    "hamcirclel": "",
    "hamcircler": "",
    "hamcircledl": "",
    "hamcircledr": "",
    "hamcircleil": "",
    "hamcircleir": "",
    "hamcircled": "",
    "hamcirclei": "",
    "hamstircw": "",
    "hamnodding": "",
    "hamtwisting": "",
    "hamreplace": "",
    "hamstirccw": "",
    "hamswinging": "",
    "hamfingerplay": "",
    "hamclocku": "",
    "hamcircleui": "",
    "hamcircleuo": "",
    "hamclockul": "",
    "hamclockur": "",
    "hamclockl": "",
    "hamclockfull": "",
    "hamclockr": "",
    "hamcircledi": "",
    "hamcircledo": "",
    "hamclockdl": "",
    "hamclockdr": "",
    "hamclockd": "",
    "hamsymmpar": "",
    "hamsymmlr": "",
    "hamsymmlr,hamfingerstraightmod,hamlargemod": "",
    "hamparbegin": "",
    "hamplus": "",
    "hamparend": "",
    "hamalternatingmotion": "",
    "hamnonipsi": "",
    "hamnondominant": "",
    "hametc": "",
    "hamseqbegin": "",
    "hamseqend": "",
    "hamfusionbegin": "",
    "hamfusionend": "",
    "hamaltbegin": "{",
    "hamaltend": "}",
    "hammetaalt": "|",
    "hamcoreftag": "",
    "hamcorefref": "",
    "hamcomma": ",",
    "hamfullstop": ".",
    "hamexclaim": "!",
    "hamquery": "?",
    "hammime": ""
  }

  class HamSigns extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      let hamnosysSent = [];
      for (let sign of this.textContent.split(new RegExp('\\s+'))) {
        let hamnosysSign = "";
        for (let symbolName of sign.split(new RegExp(','))) {
          if (symbolName in HAMNOSYS_NAMES) {
            hamnosysSign = hamnosysSign + HAMNOSYS_NAMES[symbolName];
          } else {
            hamnosysSign = hamnosysSign + symbolName;
          }
        }
        hamnosysSent.push(hamnosysSign);
      }
      this.textContent = hamnosysSent.join(' ');;
    }
  }

  customElements.define("ham-signs", HamSigns);
})();