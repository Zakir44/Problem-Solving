function LeapYear(years){
    let leapYear=[];
    for(let i=0; i < years.length; i++){

        if(years[i] % 4==0 && years[i] % 400 ==0 || years[i] % 4==0 || years[i] % 400 ==0);
        {
            if(years[i] %100==0 && years[i] % 400 !=0)
            {
                continue;
            }
            else{
                leapYear.push(years[i]);
            }
          
        }
    }
    return leapYear;
    
}
const years = [2001, 2002, 2003, 2004, 2005];
console.log(LeapYear(years));
