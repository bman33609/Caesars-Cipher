function rot13(str) {
  function shiftChar(char){
    const charCode = char.charCodeAt()
    if (charCode >= 65 && charCode <= 90){
    return String.fromCharCode((charCode - 65 + 13)% 26 + 65)
    }
  return char
}
let changed = [...str].map(shiftChar).join('')

return changed

}
rot13("enter cipher here");

// 83 - 65 = 18
// 10 + 13 = 31
// 31 / 26 = 1 R 5
// 0 1 2 3 4 5 = A B C D E F
// 5 + 65 = 70
