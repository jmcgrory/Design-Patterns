import OilChangeStrategy from "../Interfaces/OilChangeStrategy";

const OilChangeEasy: OilChangeStrategy = {
    execute: () => {
        console.log('Oil Change Done!');
        return true;
    }
}

export default OilChangeEasy;
