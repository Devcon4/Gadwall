import checkExpenses from "./day-one/day-one";
import checkPolicy from './day-two/day-two';
import dayOneData from './day-one/day-one.data'; 
import dayTwoData from './day-two/day-two.data'; 

export function app() {
    console.log(`Run all challenges! 🚀`);

    const res = {
        'dayOne': { resuts: checkExpenses(dayOneData) },
        'dayTwo': { resuts: checkPolicy(dayTwoData) },
    };

    console.table(res);
}

app();
