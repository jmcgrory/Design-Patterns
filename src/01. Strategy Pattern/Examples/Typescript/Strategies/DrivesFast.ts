import DriveStrategy from "../Interfaces/DriveStrategy";

const DrivesFast: DriveStrategy = {
    execute: (distance: number) => distance/100
}

export default DrivesFast;
