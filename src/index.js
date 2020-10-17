module.exports = function toReadable (n) {
    let str = n.toString()
    let arr = [...str]
    const unitArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const dozenArr = ['ten','teen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty','seventy', 'eighty', 'ninety']
    function getDozens(doz, un){
        if (arr[doz] === 1 && arr[un] === 0){
            return dozenArr[0]
        } else if(arr[doz] === 1 && (arr[un] < 4 || arr[un] === 5 || arr[un] === 8)){
            let number 
         switch(arr[un]) {
             case 1: 
             number = 'eleven'
             break;
             case 2:
             number = 'twelve'
            break;
            case 3:
            number = 'thirteen'
            break;
            case 5:
            number = 'fifteen'
            break;
            case 8: 
            number = 'eighteen'
            break;
         } 
         return number
    } else if(arr[doz] === 1) return `${unitArr[arr[un]]}${dozenArr[1]}`
        else if(unitArr[arr[un]] === 'zero') return `${dozenArr[arr[doz]]}`
        else return `${dozenArr[arr[doz]]} ${unitArr[arr[un]]}` }

    arr = arr.map(el => +el) //.reverse()
    if(arr.length === 1){
      return  unitArr[arr[0]]
    } else if (arr.length === 2){
         return getDozens(0, 1)
        } else if (arr.length === 3){
            if (arr[1]===0  && arr[2] === 0){
                return `${unitArr[arr[0]]} hundred`
            }else if (arr[1] === 0) return `${unitArr[arr[0]]} hundred ${unitArr[arr[2]]}`
             else return `${unitArr[arr[0]]} hundred ${getDozens(1, 2)}`
    } 
    }
