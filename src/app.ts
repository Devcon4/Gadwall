import {checkExpensesThree, checkExpensesTwo} from "./day-one/day-one";
import dayOneData from './day-one/day-one.data'; 
import { checkPolicy, checkPolicyStrict } from "./day-two/day-two";
import dayTwoData from './day-two/day-two.data'; 

type TableData = {[k:string]: {One: string | number, Two: string | number}};

export function app() {
    console.log(`Run all challenges! 🚀`);

    const res: TableData = {
        'dayOne': { One: checkExpensesTwo(dayOneData), Two: checkExpensesThree(dayOneData) },
        'dayTwo': { One: checkPolicy(dayTwoData), Two: checkPolicyStrict(dayTwoData) },
    };

    console.table(res);
}

app();
