function convertFahrToCelsius(arg) {
  if (isNaN(arg) && Array.isArray(arg)) {
      let arrValue = (JSON.stringify(arg))
      console.log( `${arrValue} is not a valid number but a/an array`);
  }
  else if (isNaN(arg)) {
      let objValue = (JSON.stringify(arg))
      console.log( `${objValue} is not a valid number but a/an ${typeof arg}`);
  }
  else {
      let result = (arg - 32) * (5/9);
      console.log(result.toFixed(4));
  }
}
convertFahrToCelsius(0);
convertFahrToCelsius("0");
convertFahrToCelsius([1, 2, 3]);
convertFahrToCelsius({"temp" : 0});



function checkYuGiOh(val) {

  let num = [];
  let answer;
  if(typeof val === "string") {
    console.log(`Invalid parameter: ${val}`);
  } else {
      for(let i = 1; i <= val; i++) {
          let answer =  num.push(i);

          for(let i = 0; i < num.length; i++) {
            if(num[i] % 2 === 0 && num[i] % 3 === 0 && num[i] % 5 === 0 ) {
                num[i] = "yu-gi-oh";
            }
            if(num[i] % 2 === 0 && num[i] % 3 === 0 ) {
                num[i] = "yu-gi";
            }
            if(num[i] % 2 === 0 && num[i] % 5 === 0 ) {
                num[i] = "yu-oh";
            }
            if(num[i] % 3 === 0 && num[i] % 5 === 0 ) {
                num[i] = "gi-oh";
            }
            if(num[i] % 2 === 0) {
              num[i] = "yu";
            }
            if(num[i] % 3 === 0) {
              num[i] = "gi";
            }
            if(num[i] % 5 === 0) {
               num[i] = "oh";
            }
          }

      }
        console.log(num);
  }


}
checkYuGiOh(10);
checkYuGiOh(5);
checkYuGiOh("fizzbuzz is meh");
