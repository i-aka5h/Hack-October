exports.getDay= function (){
const today=new Date();
const CurrentDay=today.getDay();
const options={
    weekday:"long",
    day:"numeric",
    month:"long"

};

const day=today.toLocaleDateString("en-US",options)
const day_only=day.split(",");
return day_only[0];
}



exports.getDate=function (){
    const today=new Date();
    const CurrentDay=today.getDay();
    const options={
        weekday:"long",
        day:"numeric",
        month:"long"
    
    };
    
    const day=today.toLocaleDateString("en-US",options)
    const day_only=day.split(",");
    return day
    }