
let str = ["alice and bob love leetcode","i think so too","my name is shrikant kajale","this is great thanks very much"]

function max(str) {
    let prevCount = 0
    let result = ""
    for (let i = 0; i < str.length; i++) {
        let exp = /a/
        let currentCount = 0
        for (let j = 0; j < str[i].length; j++) {
            let words = str[i][j].match(exp)
            if (words) {
                currentCount++
            }
        }
        if(prevCount < currentCount) {
            prevCount = currentCount
            result = str[i]
        }
    }
    console.log(result)
}
max(str)


        









                
                
    

