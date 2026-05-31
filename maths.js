
 module.exports={
    sum:find this.sum,
    mul:find this.mul,
    div:find this.div,
    even:is even
 }

function FindSums(a,b){
    sum=a+b
    return sum
}
function FindMultiplications(a,b){
    multi=a*b
    return multi
}
function FindDivide(a,b){
    div=a/b
    return div
}
function IsEven(a){
    if(a%2==0){
        return "Even"
    }
    else{
        return "Odd"
    }
}
module.exports={
    sum:FindSums,
    div:FindDivide,
    multi:FindMultiplications,
    even:IsEven
}