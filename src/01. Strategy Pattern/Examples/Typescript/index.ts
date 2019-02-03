import Vehicle from './Vehicle';

// Strategies
import DrivesFast from './Strategies/DrivesFast';
import DrivesSlow from './Strategies/DrivesSlow';

// Implement Sports Car
const sportsCar = new Vehicle(DrivesFast);
sportsCar.drive(50);

// Implement Tractor
const tractor = new Vehicle(DrivesSlow);
tractor.drive(20);
