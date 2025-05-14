function mapLetters(word) {
  const result = {};
  
  // Iterate through the word with index
  word.split('').forEach((letter, index) => {
    // Create symbol for the letter
    const symbol = Symbol(letter);
    
    // If symbol doesn't exist in result, initialize array
    if (!result[symbol]) {
      result[symbol] = [];
    }
    
    // Push current index to the array
    result[symbol].push(index);
  });
  
  return result;
}