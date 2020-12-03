import checkExpenses from "./day-one";
import checkPolicy from './day-two';
import dayOneData from './data/day-one.data'; 
import dayTwoData from './data/day-two.data'; 

export function app() {
    console.log(`Run all tests! 🚀`);

    const res = {
        'dayOne': { resuts: checkExpenses(dayOneData) },
        'dayTwo': { resuts: checkPolicy(dayTwoData) },
    };

    console.table(res);
}

app();
