export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const oneSingleArray = (valL, valV) => {
  let res = [];

  for (let i = 0; i < valL; i++) {
    res.push("L");
  }

  for (let i = 0; i < valV; i++) {
    res.push("V");
  }

  shuffle(res);

  return res;
};
