(()=>{var o={521:o=>{"use strict";o.exports=require("readline")}},e={};function s(t){var r=e[t];if(void 0!==r)return r.exports;var c=e[t]={exports:{}};return o[t](c,c.exports,s),c.exports}(()=>{const o=s(521).createInterface({input:process.stdin,output:process.stdout});o.question("넓이를 구하고자 하는 도형의 종류를 입력해주세요. ( 정사각형, 원) :",(e=>{switch(console.log(`선택된 도형: ${e}`),e){case"정사각형":o.question("변의 길이를 입력 해 주세요. :",(e=>{console.log(`입력받은 값 : ${e}`),console.log(`정사각형의 넓이는 : ${e*e} 입니다.`),o.close()}));break;case"원":o.question("반지름의 길이를 입력 해 주세요. :",(e=>{console.log(`입력받은 값 : ${e}`),console.log(`원의 넓이는 : ${e*e*3.14} 입니다.`),o.close()}));break;default:console.log("지원되지 않는 도형입니다. '정사각형' 또는 '원'을 입력해주세요. \n커맨드 라인을 종료합니다."),o.close()}}))})()})();