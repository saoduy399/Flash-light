class Battery{
    constructor(energy){
        this.energy=100;
    }
    getEnergy(){
        return this.energy;
    }
    setEnergy(value){
        this.energy=value;
    }
    isEmpty(){
        return (this.energy<=0?true:false);
    }
    decrease(){
        this.energy-=10;
    }
}