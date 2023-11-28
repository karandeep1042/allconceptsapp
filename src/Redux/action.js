export const deposit = (amount) => {
    // console.warn("inside deposit action")
    return({
        type : 'deposit',
        money : amount
})
}

export const withdraw = (amount) => {
    return({
        type : 'withdraw',
        money : amount
})
}