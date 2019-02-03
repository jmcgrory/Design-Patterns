import DriveStrategy from './Interfaces/DriveStrategy';
import OilChangeStrategy from "./Interfaces/OilChangeStrategy";

/**
 * Base Vehicle Class
 */
class Vehicle {

    // Driving Vehicle
    public drive = (distance: number) => this.driveStrategy.execute(distance);
    private driveStrategy: DriveStrategy;

    // Change Vehicle Oil
    public changeOil = () => this.changeOilStrategy.execute();
    private changeOilStrategy: OilChangeStrategy;

    public constructor(
        driveStrategy: DriveStrategy,
        changeOilStrategy: OilChangeStrategy
    ){
        this.driveStrategy = driveStrategy;
        this.changeOilStrategy = changeOilStrategy;
    }

}

export default Vehicle;
