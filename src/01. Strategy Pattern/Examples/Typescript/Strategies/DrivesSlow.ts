import DriveStrategy from "../Interfaces/DriveStrategy";

const DrivesSlow: DriveStrategy = {
    execute: (distance: number) => distance/25
}

export default DrivesSlow;
