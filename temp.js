// let str = 'i am arjun'
// let result = str.split(' ').reverse().map((word)=>(Array.from(word).reverse().join(''))).toString().replaceAll(',',' ')

// console.log(result);

// let str = '121'

// function checkPalindrome(str) {
//     return str.split('').toString() ===  str.split('').reverse().toString()
// }

// console.log(checkPalindrome(str));

// const arr1 = [100,200,300,400]
// const arr2 = [100,200,300,400]

// console.log(JSON.stringify(arr1) === JSON.stringify(arr2));

// console.log(String(1) === ('1'));

// let val = null;
// console.log(val);

// let str1 = `arjun`
// let str2 = `prajapati`

// function merge(str1, str2) {
//     let result = ``
//     for (let i = 0; i < (str1.length + str2.length); i++) {
//         if (str1.charAt(i) != undefined) result += str1.charAt(i)
//         if (str2.charAt(i) != undefined) result += str2.charAt(i)
//     }
//     return result;
// }

// console.log(merge(str1, str2));

// let arr = [1, 2, 3,]
// console.log(arr.length);

const a = {
    age : 20
}

const b = {...a} // creates a shallow copy.
b.age = 32

console.log(a.age);
