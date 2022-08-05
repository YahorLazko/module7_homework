function ElectrEquip(name){
    this.name = name,
    this.enabling = 'on'
}

ElectrEquip.prototype.getPower = function(power){
    console.log(`the power of ${this.name} is equal to ${power} W`)
}

function IndustrEquip (name, objective){
    this.name =name,
    this.objective = objective
}

IndustrEquip.prototype = new ElectrEquip()

IndustrEquip.prototype.getPower = function(power){
    console.log (`the power of ${this.name} is equal to ${power} W`)
}

const refrigerator = new IndustrEquip('refrigerator', 'cooling');
const laptop = new ElectrEquip('laptop', 'on')

refrigerator.getPower(3500)
laptop.getPower(95)

console.log(refrigerator)
console.log(laptop)