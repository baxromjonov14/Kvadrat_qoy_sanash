let num = +prompt("Qo'ylar sonini kiriting.")
while (isNaN(num) || num==0) {
    num = +prompt("Qo'ylar sonini kiriting.")
}

let qoyxona = ""

for (let i = 0; i < num; i++) {
    if (i+1==1) {
        qoyxona += `${i+1}ta qo'y... `
    } else {
        qoyxona += `${i+1}ta qo'ylar... `
    }
}
console.log(qoyxona);









let son = +prompt("Kvadrat tomoni uzunligini kiriting.")
while (isNaN(son) || son==0 ) {
    son = +prompt("Kvadrat tomoni uzunligini kiriting.")
}
if (son % 2 == 0) {
    son++; 
}
alert("Natijani ko'rish uchun Console oynasiga o'ting.")
let kvadrat = ""
for (let i = 0; i < son; i++) {
    for (let j = 0; j < son; j++) {
        if (i==j || i==0 || j==0 || i==son-1 || j==son-1 || i==son-1 || j==son-1-i ) {
            kvadrat += "{*}"
        } else {
            kvadrat += "   "
        }
    }
    console.log(kvadrat);
    kvadrat = ''
}

