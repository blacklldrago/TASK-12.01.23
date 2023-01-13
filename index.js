//1 PROBLEM
// let N = +prompt()
// let K = +prompt()
// alert(Math.floor(N/K))

//2 PROBLEM
// let N = +prompt()
// let K = +prompt()
// alert(Math.floor(N%K))

//3 PROBLEM
// let N = +prompt()
// alert(N%10)

//4 PROBLEM
// let N = +prompt()
// alert(Math.floor(N/10))

//5 PROBLEM
// let N = +prompt()
// alert(Math.floor((N/10)%10))

//6 PROBLEM
// let A = +prompt()
// let firstNum = Math.floor (A/100)
// let secondNum = Math.floor ((A/10)%10)
// let thirdNum = Math.floor (A%10)
// alert(firstNum+secondNum+thirdNum)

//7 PROBLEM
// let a = +prompt()
// let P = a*4
// alert(P)

//8 PROBLEM
// let a = +prompt()
// let b = +prompt()
// let S = a*b
// let P = 2*(a+b)
// alert(S)
// alert(P)

//9 PROBLEM
// let a = +prompt()
// let b = +prompt()
// alert(Math.round((a+b)/2))

//10 PROBLEM
// let a = +prompt()
// let b = +prompt()
// let c = Math.sqrt((a*a)+(b*b))
// alert(Math.round(c))



//// IF ELSE
// 1 problem
// let a = +prompt()
// let b = +prompt()
// if(a>b){
//     alert(a)
// }
// else if(a<b){
//     alert(b)
// }

//2 problem
// let a = +prompt()
// let b = +prompt()
// if(a>b){
//     alert(b)
// }
// else if(a<b){
//     alert(a)
// }

//3 problem
// let a = +prompt()
// if(a>0){
//     a++;
//     alert(a)
// }
// else{
//     alert(a)
// }

//4 problem
// let a = +prompt()
// if(a>0){
//     a++;
//     alert(a)
// }
// else{
//     a+=2;
//     alert(a)
// }

//5 problem 
// let a = +prompt();
// let b = +prompt();
// let c = +prompt();
// let cnt = 0;
// if(a>0){
//     cnt++;
// }
// if(b>0){
//     cnt++;
// }
// if(c>0){
//     cnt++;
// }
// alert(cnt)

//6 problem
// let a = +prompt();
// let b = +prompt();
// let c = +prompt();
// if(a>b && a>c){
//     alert(a)
// }
// else if(b>a && b>c){
//     alert(b)
// }
// else if(c>a && c>b){
//     alert(c)
// }
// else{
//     alert(a)
// }

//7 problem
// let a = +prompt()
// let b = +prompt()
// let c = +prompt()
// let d = +prompt()
// let money = c-a
// if (b>d){
//     money--;
//     d+=100
//     coin = d-b
// }
// else{    
//     coin = d-b
// }
// alert(money)
// alert(coin)



//// FOR

// PROBLEM 1
// let start = 0;
// let end = 9;
// for(let i = start; i<=end; i++){
//     alert(i)
// }

// PROBLEM 2
// let K = +prompt();
// let N = +prompt();
// for(let i = 0; i<N; i++)
// {
//     alert(K)
// }

// PROBLEM 3
// let sum = 0
// for(let i = 200; i<=600; i++){
//     sum+=i;
// }
// alert(sum)

// PROBLEM 4
// let a = +prompt()
// let b = +prompt()
// for(let i = a; i<=b; i++){
//     if(i%2 == 0){
//         alert(i)
//     }
// }

// PROBLEM 5
// let sum = 0
// let a = +prompt()
// let b = +prompt()
// for(let i = a; i<=b; i++){
//     sum+=i;
// }
// alert(sum)

// PROBLEM 6
// let a = +prompt()
// let b = +prompt()
// for(let i = a; i<=b; i++){
//     if((Math.sqrt(i))*(Math.sqrt(i)) == i){
//         alert(i)
//     }
// }

// PROBLEM 7
// let t
// let y
// for(let i = 4; i<=28; i++){
//     t = i+3;
//     y = (3*(t*t)+(4.87*t)-3)
//     alert(y)
// } 


//TASK 2

//1 problem
// let s = prompt()
// let firstNum = Math.floor(s/1000)
// let secondNum = Math.floor((s/100)%10)
// let thirdNum = Math.floor((s/10)%10)
// let fourthNum = (s%10)
// if(firstNum == fourthNum && secondNum == thirdNum){
//     alert("YES")
// }
// else{
//     alert("NO")
// }

//2 problem
// let a = +prompt();
// let b = +prompt();
// let c = +prompt();
// let cnt = 0;
// if(a>0){
//     cnt++;
// }
// if(b>0){
//     cnt++;
// }
// if(c>0){
//     cnt++;
// }
// alert(cnt)

// 3 problem
// let a = prompt()
// for(let i = 1; i<=a; i++){
//     alert(i);
// }
// for(let i = a; i>=1; i--){
//     alert(i);
// }

//4 problem
// let A = +prompt()
// let B = +prompt()
// let sum = 0
// for(let i = A; i<=B; i++){
//     sum+=(i*i);
// }
// alert(sum)

//5 problem
// let a = +prompt()
// let b = +prompt()
// let n = +prompt()
// let money = a*n;
// let penny = b*n;
// while(penny>=100){ 
//     money++;
//     penny-=100;
// }
// alert(money+" "+penny)

