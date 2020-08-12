function shuffle(arr) {
  // this function randomly shuffles an array, returning a new copy

  // copy the original array (so we can alter it without changing the original)
  const unshuffled = arr.slice();
  
  // create empty array to store solution
  const shuffled = [];

  // while unshuffled is not empty
  while (unshuffled.length > 0) {
    // choose a random element from unshuffled to add to the shuffled array
    const index = Math.floor(Math.random() * unshuffled.length);
    // push that element to the end of the shuffled array
    shuffled.push(unshuffled[index]);
    // quickly remove the used element by replacing it with the last element
    const lastElement = unshuffled.pop();
    // only replace unshuffled[index] if it index is in range
    if (index < unshuffled.length) {
      unshuffled[index] = lastElement;
    }
    // if index is not in range, the popped element was the one we want to remove anyway
  }
  // return shuffled array
  return shuffled;
}

export default shuffle;