/*
 * Write a function list that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
 * An empty array should return an empty string.

 * Example: list(['Huey', 'Dewey', 'Louie']) should return 'Huey, Dewey and Louie'.
 */
 
function list(arr){
 if(arr.length === 0){
  return '';
 } else if (arr.length === 1){ 
  return arr.pop();
 } else if (arr.length === 2){ 
  return arr.join(' and ');
 } else {
  return arr.slice(0, -1).join(', ') + ' and ' + arr.slice(-1);
 }
}
