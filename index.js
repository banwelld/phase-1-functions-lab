const streetHq = 42
let travFt

function distanceFromHqInBlocks(streetDropoff) {

    let travBlocks = Math.abs(streetDropoff - streetHq)

    return travBlocks
}

function distanceFromHqInFeet(streetDropoff) {

    travFt = Math.abs(streetDropoff - streetHq) * 264

    return travFt
}

function distanceTravelledInFeet(streetPickup, streetDropoff) {

    travFt = Math.abs(streetPickup - streetDropoff) * 264

    return travFt
}

function calculatesFarePrice(streetPickup, streetDropoff) {

    const tierOne = 400
    const tierTwo = 2000
    const maxDist = 2500
    let farePrice

    travFt = Math.abs(streetPickup - streetDropoff) * 264

    if (travFt > maxDist) {

        return 'cannot travel that far'

    } else if (travFt > 2000) {

        farePrice = 25

    } else if (travFt > 400) {

        farePrice = (travFt - tierOne) * .02

    } else farePrice = 0

    return farePrice
    
}