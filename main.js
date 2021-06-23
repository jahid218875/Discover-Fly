function ticketCount(isIncrease, ticketClass) {
    const ClassCount = document.getElementById(ticketClass + '-count')
    const ClassCountNumber = parseInt(ClassCount.value)
    let newClassCount = ClassCountNumber
    if (isIncrease == true) {
        newClassCount = ClassCountNumber + 1
    }
    if (isIncrease == false && ClassCountNumber > 0) {
        newClassCount = ClassCountNumber - 1
    }
    ClassCount.value = newClassCount
    let classAmount = 0

    if (ticketClass == 'first-class') {
        classAmount = newClassCount * 150
    }
    if (ticketClass == 'economy') {
        classAmount = newClassCount * 100
    }

    const ClassAmount = document.getElementById(ticketClass + '-amount')
    ClassAmount.innerText = classAmount

    subtotal()
}

function subtotal() {
    const firstClassCountNumber = ticketNumber('first-class')
    const economyClassCountNumber = ticketNumber('economy')

    const subtotal = document.getElementById('subtotal')
    const calculateSubtotal = firstClassCountNumber * 150 + economyClassCountNumber * 100
    subtotal.innerText = calculateSubtotal

    const vat = document.getElementById('vat')
    const vatCalculate = calculateSubtotal * 0.10
    vat.innerText = vatCalculate

    const total = document.getElementById('total')
    total.innerText = calculateSubtotal + vatCalculate
}

function ticketNumber(ticket) {
    const ClassCount = document.getElementById(ticket + '-count')
    const ClassCountNumber = parseFloat(ClassCount.value)
    return ClassCountNumber
}



