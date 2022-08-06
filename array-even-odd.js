function OddEven(numbers)
{
    for(let i=0;i<numbers .length; i++)
    {
        const index=i;
      var element=numbers[index];
      if( element %2 == 0){
        console.log('Even Number')
        console.log(index, element);
      }
      
    }
    return element;

}
const number = [10, 11, 20, 40, 50, 60];
OddEven(number);