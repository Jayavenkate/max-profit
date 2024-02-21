function calculatemaxProfit(timeUnit) {
  let maxProfit = 0;
  let propertyMix = [];
  for (let numTheatres = 0; numTheatres <= timeUnit / 5; numTheatres++) {
    for (let numPub = 0; numPub <= timeUnit / 4; numPub++) {
      for (let numPark = 0; numPark <= timeUnit / 10; numPark++) {
        const timespent = numTheatres * 5 + numPub * 4 + numPark * 10;
        if (timespent <= timeUnit) {
          const earings =
            (timeUnit - timespent) *
            (1500 * numTheatres + 1000 * numPub + 3000 * numPark);
          if (earings > maxProfit) {
            maxProfit = earings;
            propertyMix = [];
            propertyMix.push(`T:${numTheatres} p:${numPub} C:${numPark}`);
          } else if (earings === maxProfit) {
            propertyMix.push(`T:${numTheatres} p:${numPub} C:${numPark}`);
          }
        }
      }
    }
  }
  console.log(`Earings:${maxProfit}`);
  propertyMix.forEach((property) => {
    console.log(property);
  });
}
calculatemaxProfit(7);
