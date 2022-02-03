const getRanges = (array) => {
    const ranges = [];
    let rstart, rend;
    for (var i = 0; i < array.length; i++) {
      rstart = array[i];
      rend = rstart;
      while (array[i + 1] - array[i] === 1) {
        rend = array[i + 1]; // increment the index if the numbers sequential
        i++;
      }
      ranges.push(rstart === rend ? rstart + '' : rstart + '-' + rend);
    }
    return ranges;
  };
  
  export default getRanges;