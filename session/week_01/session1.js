const arr = [100,[200,300],["javascript",'jquery']];
console.log(arr[0]);
console.log(arr[1][0]);
console.log(arr[1][1]);
console.log(arr[2][0]);
console.log(arr[2][1]);
// 단축키: control -> alt -> n


const num = 100;
if(num==100){
    document.write("실행되었습니다.(true)");
}
if(num==100)document.write("실행되었습니다.(true)");

if(num==100)document.write("실행되었습니다.(false)");
else document.write("실행되었습니다.(false)");

//삼항 연산자(조건식 연산자)
(num==100)?document.write("true"):document.write(false);
