// 문자데이터를 작성할 때, 코드상에서 줄바꿈(enter)을 하고 싶을 때, 
// ''("")대신 ``(백틱)기호를 사용하여 준다.
let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`;

// const regexp = new RegExp('the', 'gi');
// const regexp = /the/gi;
// console.log(str.match(regexp));

// const regexp = /fox/gi;
// console.log(regexp.test(str));

// replace - 원본은 변환되지 않음
// console.log(str.replace(regexp, 'AAA'));
// console.log(str);

// replace사용시 변환된 내용을 원본에 할당할 때
// str = str.replace(regexp, 'AAA');
// console.log(str);

//////////////////////////////////////////////
// .은 임의의 한 문자와 일치한다는 뜻이므로 마침표 기호(.)를 찾으려면 앞에 백슬래쉬(이스케이프문자)를 넣어 준다. - \.
// console.log(str.match(/\.$/gim));

////////////////////////////////////////////
console.log(
  str.match(/d$/gm)
);
console.log(
  str.match(/^t/gim)
);
console.log(
  str.match(/h..p/g)
);
console.log(
  str.match(/fox|dog/g)
);
console.log(
  str.match(/http?/g)
);
console.log(
  str.match(/d{2,3}/g)
);
console.log(
  // \w = 숫자를 포함한, 영어 알파벳들을 의미
  str.match(/\w{2,3}/g)
);
console.log(
  str.match(/[fox]/g)
);
console.log(
  str.match(/[0-9]/g)
);
console.log(
  str.match(/[0-9]{1,}/g)
);
console.log(
  str.match(/[가-힣]{1,}/g)
);
console.log(
  str.match(/\w/g)
);
console.log(
  str.match(/\b/g)
);
console.log(
  // 63개의 문자가 아닌 경계에서 시작하여 
  // f라는 단어로 시작하고 
  // 뒤쪽에 그외에 63개의 문자가 1개 이상 오는 연속 일치를 시키고
  // 63개의 문자가 아닌 경계에서 끝나는 내용 검색
  // => 소문자 f로 시작하는 모든 영단어를 찾는 패턴
  str.match(/\bf\w{1,}\b/g)
);
console.log(
  str.match(/\d/g)
);
console.log(
  str.match(/\d{1,}/g)
);
const h = `  the hello  world  !

`
console.log(
  str.match(/\s/g)
);
console.log(
  h.match(/\s/g)
);
console.log(
  h.replace(/\s/g, '')
);

const str1 = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`;

console.log(
  str1.match(/.{1,}(?=@)/g)
);
console.log(
  str1.match(/(?<=@).{1,}/g)
);