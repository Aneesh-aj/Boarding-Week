const str = "htttjjjtttttttt"


let maxString = ""
let currentString = str[0]

for(let i=0;i <= str.length-1;i++){
    if(str[i] === currentString[0]){
        currentString = currentString+str[i]
    }else{
        maxString = currentString
        currentString = str[i]
    }
    
    if(currentString >= maxString){
        maxString = currentString
    }
}

console.log(" max ",maxString)