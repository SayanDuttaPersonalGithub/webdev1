function myfunction()
{
    let inputElement=document.querySelector('.js-in')
    console.log(inputElement);
    let input =(inputElement.value);
    let index = 0;
let sIndex = 0;
input += "+";
let nums = [];
let operation = [];
while (index < input.length) {
  if (
    input[index] === "+" ||
    input[index] === "-" ||
    input[index] === "/" ||
    input[index] === "*"
  ) {
    nums.push(input.substring(sIndex, index + 1));
    operation.push(input[index]);
    sIndex = index + 1;
  }
  index++;
}
let ans;
operation.pop();
let temp = [];
for (let i = 0; i < nums.length; i++) {
  let tempo = parseInt(nums[i]);
  temp.push(tempo);
}
for (let i = 0; i < operation.length; i++) {
  if (operation[i] === "/") {
    let x = temp[i] / temp[i + 1];
    temp.splice(i, 2);
    temp.splice(i, 0, x);
    operation.splice(i, 1);
  }
}
for (let i = 0; i < operation.length; i++) {
  if (operation[i] === "*") {
    let x = temp[i] * temp[i + 1];
    temp.splice(i, 2);
    temp.splice(i, 0, x);
    operation.splice(i, 1);
  }
}
for (let i = 0; i < operation.length; i++) {
  if (operation[i] === "+") {
    let x = temp[i] + temp[i + 1];
    temp.splice(i, 2);
    temp.splice(i, 0, x);
    operation.splice(i, 1);
  }
}
for (let i = 0; i < operation.length; i++) {
  if (operation[i] === "-") {
    let x = temp[i] - temp[i + 1];
    temp.splice(i, 2);
    temp.splice(i, 0, x);
    
}
}
console.log(temp[0]);
const finalAns=document.querySelector('.ans')
finalAns.innerHTML=`your answer is ${temp[0]}`;
inputElement.value=temp[0];

}

function takeKeyPad(n){
    let inputElement=document.querySelector('.js-in');
    
    inputElement.value+=n;
}
function getsquare()
{
    let inputElement=document.querySelector('.js-in');
    let input=inputElement.value;
    Number(input);
    let temp=input*input;
    inputElement.value=temp;
    const finalAns=document.querySelector('.ans')
    finalAns.innerHTML=`your answer is ${temp}`;
}
function resetContent()
{
    let inputElement=document.querySelector('.js-in');
    inputElement.value=null;
    const finalAns=document.querySelector('.ans')
    finalAns.innerHTML=` `;

}
function handle(event)
{
    console.log(event.key);
    if(event.key==='Enter')
    {
        myfunction();
    }
}
