import Drives from './Interfaces/Drives';

/**
 * Base Vehicle Class
 */
class Vehicle {

    public drive: Drives;

    public constructor(driveStrategy: Drives){
        this.drive = driveStrategy;
    }

}

export default Vehicle;
