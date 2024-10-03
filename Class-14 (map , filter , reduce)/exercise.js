const transactions = [-1000 , 2000 , 8000 , -4000]

// get the Desposits Convert to USD and 
//provide the total sum

function getDeposits(amount){
    return amount>0
}
function convertToUSD(amount){
    return amount/83
}

function sumAmounts(acc , currEle){
    acc = acc+currEle
    return acc
  }

let deposits = transactions.filter(getDeposits).map(convertToUSD).reduce(sumAmounts).toFixed(2)
console.log(deposits)





