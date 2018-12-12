import { Spacecraft, Containership } from "./base-ships";

export class MillerniumFalcon extends Spacecraft implements Containership {
        
    cargoContainers: number
    
    constructor(){
        super('Hyperdrive')
        this.cargoContainers = 4
    }

    jumpIntoHyperspace(){
        if (Math.random() >= 0.5) {
            super.jumpIntoHyperspace()
        } else {
            console.log('Failed to jump into hyperspace')
        }
    }
}

