/**
 * Behaviour for Vehicle Driving
 */
interface DriveStrategy {
    execute(distance: number): number;
}

export default DriveStrategy;
