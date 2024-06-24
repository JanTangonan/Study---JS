function removeStr(str, letter) {
    let str1 = ''
    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] != letter) {
            str1 += str[i];
        }
    }
    return str1;
}

console.log(removeStr('aaa3aa2a1aa', 'a'))