// Increment the Array Elements
// You are provided an array of integers and you have to increment all array elements by 1 and then print whole array

const Inc_Arr = (array,N) => 
{
  let arr=[]
  let k=0
let jump= ""
for(i=0; i<N; i++){
  arr[k]= array[i]+1
  jump= jump+" "+arr[k]
  k++
}
console.log(jump)
};