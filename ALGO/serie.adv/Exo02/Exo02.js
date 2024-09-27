const isPalindrome=(str)=>{
    let arrWord=keepOnlyLetters(str.toLowerCase());
    let arrReverseWord=[...arrWord].reverse();
    return arrWord.join("")===arrReverseWord.join("");
}

const keepOnlyLetters=(word)=>word.split("").filter(elem=> elem.toLowerCase()>= "a" && elem.toLowerCase()<= "z");