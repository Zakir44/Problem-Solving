// function EvenOdd(numbers){

// }


function callEven(number)
{
  const bakithake= number % 2;
  if(bakithake===0){
    return true;
    //console.log('Number is even.');
  }
  else{
    return false;
    //console.log('Number is odd.')
  }
  console.log(bakithake);
}
const mynumber=callEven(100);
console.log(mynumber);