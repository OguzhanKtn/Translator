const fromLang = document.querySelector("#from-lang");
const toLang = document.querySelector("#to-lang");
const btnTranslate = document.querySelector("#btnTranslate");
const fromText = document.querySelector("#from-text");
const toText = document.querySelector("#to-text");

for(let lang in languages){
     let option = `<option value="${lang}">${languages[lang]}</option>`;
     fromLang.insertAdjacentHTML("beforeend",option);
     toLang.insertAdjacentHTML("beforeend",option);
    
}
btnTranslate.addEventListener("click",()=>{
     let text = fromText.value;
     let from = fromLang.value;
     let to = toLang.value;
     const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`;

     fetch(url)
     .then(res => res.json())
     .then(data => {
          toText.value = data.responseData.translatedText;
     })
});

