function grade(number){
    if(number >= 33 && number <= 40)
{
    console.log('Your grade is D')
}
if(number >=41  && number <= 50)
{
    console.log('Your grade is C')
}
if(number >= 51 && number < 60)
{
    console.log('Your grade is B')
}
if(number >= 60 && number < 69)
{
    console.log('Your grade is B-')
}
if(number >= 70 && number < 79)
{
    console.log('Your grade is A-')
}
if(number >= 80 && number < 100)
{
    console.log('Your grade is A+')
}

}
var result=grade(67);
console.log(result);