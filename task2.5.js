class ElectrEquip {
    constructor(name, enabling, power) {
    this.name = name;
    this.enabling = enabling;
    this.power = power;  
    }   
    getPower(){
        return `the power of ${this.name} is equal to ${this.power} W`   
   }      
   }

   class IndustrEquip extends ElectrEquip {
    constructor(name, objective, power, enabling){
        super(enabling);
        this.name = name;
        this.objective = objective;
        this.power = power;
 }	
 getInfo() {
        return `the purpose of this tool is to ${this.objective}`
 }
}


const refrigerator = new IndustrEquip('refrigerator', 'cooling', 1300, true);
const laptop = new ElectrEquip('laptop', true, 75);

refrigerator.getPower()
laptop.getPower()

console.log(refrigerator)
console.log(laptop)
