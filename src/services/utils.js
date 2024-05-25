import { array_units } from "./constants"

const evaluate = ({ val, unitfrom, unitTo }) => {
  console.clear();
  console.log({
    val,
    unitfrom,
    unitTo,
  });

  let ans;

  if (unitfrom > unitTo) {
    ans = val * unitfrom;
  } else if (unitfrom < unitTo) {
    ans = val / unitTo;
  } else {  // when unitfrom === unitTo
    ans = val;
  }

  return ans;
};

export {
  evaluate,
}