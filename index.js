const withoutTwoZeros = (zero, one) => {
  const countWays = (zero, one, prevDigit) => {
    if (zero < 0 || one < 0) {
      return 0;
    }

    if (zero === 0 && one === 0) {
      return 1;
    }

    let ways = 0;

    if (prevDigit !== 0) {
      ways += countWays(zero - 1, one, 0);
    }

    ways += countWays(zero, one - 1, 1);

    return ways;
  };

  return countWays(zero, one, undefined);
}

const answer = withoutTwoZeros(0, 3);
console.log(answer)

