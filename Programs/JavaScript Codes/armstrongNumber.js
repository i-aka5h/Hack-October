const isArmstrong = (a) => {
    let sum = 0, temp = a
    while(temp > 0){
        digit = temp % 10
        sum += digit ** 3
        temp = Math.floor(temp / 10)
    }
    if(a === sum)
        console.log(a,"is an Armstrong number")
    else
        console.log(a,"is not an Armstrong number")
}

export default isArmstrong;
