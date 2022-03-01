Default parameter

const getIntrest = (amount,time,rate=0.1)=>{
    const result = ( amount * time * rate) 
    return result;
};

console.log(getIntrest(10000,2,0.1))

Rest operator

const getSum = ( num1,num2,...nums)=>{ 
console.log(nums)
const numsSum = nums.reduce((acc,curr)=>acc+curr)
    return num1 + num2 + numsSum;
};
console.log(getSum(20,45,45,8,5,5,9,8,9,5,));


Constructer function

function GetCircleArea(radius){
    this.radius = radius;
    this.pi=3.14
    this.getArea=function(){
return this.pi*this.radius**2
    }
}

const newObj= new GetCircleArea(15);
console.log(newObj.getArea())
