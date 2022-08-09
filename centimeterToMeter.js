function centimeterToMeter(centimeter) {

    let meter = centimeter / 100;

    return meter;

}

const centimeter = 20;

let result = centimeterToMeter(centimeter);

console.log("Meter", result);