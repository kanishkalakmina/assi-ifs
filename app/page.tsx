'use client'
import { fetchUserData } from "./FetchUserFn";
import { isPalindrome, flattenArray, deepClone } from "./Fns";


export default function Home() {

  // Check if the word is a palindrome
  console.log(isPalindrome("race a car"));
  console.log(isPalindrome("A man a plan a canal Panama"));
  console.log(isPalindrome("Was it a car or a cat I saw"));
  console.log(isPalindrome("No lemon no melon"));

  // Check if the array is flattened
  console.log(flattenArray([[1, 2], [3, 4], [5, 6]]));
  console.log(flattenArray(['a', ['b', 'c'], ['d', ['e', 'f', ['g']]], 'h']));
  console.log(flattenArray([1, [2], [3, [4, [5]]], 6]));

  // Check if the object is cloned
  const originalObj = {
    name: "John",
    age: 30,
    city: "New York",
    hobbies: ["reading", "traveling", "cooking"],
    address: {
      street: "123 Main St",
      zip: "10001"
    }
  };
  const clonedObj = deepClone(originalObj);
  clonedObj.hobbies.push("gaming");
  clonedObj.age = 34;

  console.log(originalObj)
  console.log(clonedObj);
  
// Example usage
  const userIds = [1, 2, 3, 4, 5];
  fetchUserData(userIds);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button Clicked: ', event.currentTarget.innerText);
  }
return (
  <div>
    <h1>Hello World..</h1>
    <button onClick={handleClick}> Button 1 </button>
    <button onClick={handleClick}> Button 2 </button>
    <button onClick={handleClick}> Button 3 </button>
    <button onClick={handleClick}> Button 4 </button>
  </div>
);
}
