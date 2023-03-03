var cubeChecker = function(volume, side){
    let square = volume / side
    // ()
    // **
    // * /
    // + -

    let sideX = square**(1/2)
    if (sideX == side){
      return true
    } 
    return false;
  };

  // https://www.codewars.com/kata/58d248c7012397a81800005c/train/javascript