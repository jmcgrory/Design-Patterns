import OilChangeStrategy from "../Interfaces/OilChangeStrategy";

const OilChangeDifficult: OilChangeStrategy = {
    execute: () => {
        console.log('Oil change complete.');
        console.warn('You are now covered in oil however...');
        return true;
    }
}

export default OilChangeDifficult;
