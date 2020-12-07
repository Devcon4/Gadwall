import dayOneData from './day-one/day-one.data';
import { checkExpensesThree, checkExpensesTwo } from './day-one/day-one';
import dayTwoData from './day-two/day-two.data';
import { checkPolicy, checkPolicyStrict } from './day-two/day-two';
import dayThreeData from './day-three/day-three.data';
import { calcColissions, calcColissionsMultiple } from './day-three/day-three';
import dayFourData from './day-four/day-four.data';
import { parsePassports, parsePassportsStrict } from './day-four/day-four';
import dayFiveData from './day-five/day-five.data';
import { parsePassMax, parsePassMissing } from './day-five/day-five';
import { aggregateAnswers, aggregateAnswersAll } from './day-six/day-six';
import daySixData from './day-six/day-six.data';

type TableData = {
  [k: string]: { One: string | number; Two?: string | number };
};

export function app() {
  console.log(`Run all challenges! 🚀`);

  const res: TableData = {
    dayOne: {
      One: checkExpensesTwo(dayOneData),
      Two: checkExpensesThree(dayOneData),
    },
    dayTwo: {
      One: checkPolicy(dayTwoData),
      Two: checkPolicyStrict(dayTwoData),
    },
    dayThree: {
      One: calcColissions(dayThreeData),
      Two: calcColissionsMultiple(dayThreeData),
    },
    dayFour: {
      One: parsePassports(dayFourData),
      Two: parsePassportsStrict(dayFourData),
    },
    dayFive: {
      One: parsePassMax(dayFiveData),
      Two: parsePassMissing(dayFiveData),
    },
    daySix: {
      One: aggregateAnswers(daySixData),
      Two: aggregateAnswersAll(daySixData),
    },
  };

  console.table(res);
}

app();
