function largeNumber(n1,n2,n3)
{
    if(n1 > n2 && n1 > n3)
    {
        console.log("N1 is the largest Number");
    }
    else if(n2 > n1 && n2 > n3)
    {
        console.log("N2 is the largest Number");
    }
    else{
        console.log("N3 is the largest number");
    }
}

largeNumber(10, 11, 12);
console.log(largeNumber);