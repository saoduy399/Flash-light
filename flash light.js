class FlashLight {
    constructor(status, battery){
        this.status=false;
        this.battery=Battery;
    }
    connectBattery(){
        this.battery=battery;
    }
    turnOff(){
        alert("turn off!");
    }
    turnOn(){
        this.status=true;
        if(!this.battery.isEmpty()){
            this.battery.decrease();
            alert('Flash light is on!' +' ' + 'battery:'+ ' ' + this.battery.getEnergy());
        } else {
            alert('out of battery. Please charge or buy a new battery');
        }

    }
}