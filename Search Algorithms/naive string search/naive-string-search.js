// naive string search to search and return number of occurences of sub string in a main string
function childStringFreq(long,short) {
    let repeatStringPositions = [];
    let count = 0;
    for(let i = 0; i<long.length;i++)
    {
      for(let j = 0;j<short.length;j++)
      {
        if(short[j] !== long[i+j]) break;
        if(j ===short.length-1)
        {
          repeatStringPositions.push(i);
          count ++;
        }
      }
    }
    const arrToString = repeatStringPositions.toString();
    return "The string" + " " + short + " " + "is found at position" + " " + arrToString + " " + "and frequency of occurence is" + " " + count + ".";
    }

    console.log(childStringFreq("hellosriramhello how are you mr hello", "hello"));