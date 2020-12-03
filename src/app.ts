import dayOneData from './day-one/day-one.data'; 
import {checkExpensesThree, checkExpensesTwo} from "./day-one/day-one";
import dayTwoData from './day-two/day-two.data'; 
import { checkPolicy, checkPolicyStrict } from "./day-two/day-two";
import dayThreeData from "./day-three/day-three.data";
import { calcColissions, calcColissionsMultiple } from "./day-three/day-three";

type TableData = {[k:string]: {One: string | number, Two?: string | number}};

export function app() {
    console.log(`Run all challenges! 🚀`);

    const res: TableData = {
        'dayOne': { One: checkExpensesTwo(dayOneData), Two: checkExpensesThree(dayOneData) },
        'dayTwo': { One: checkPolicy(dayTwoData), Two: checkPolicyStrict(dayTwoData) },
        'dayThree': { One: calcColissions(dayThreeData), Two: calcColissionsMultiple(dayThreeData) },
    };

    console.table(res);
}

app();
