const calculateSumNumberInString = function (sentence) {
    let sumOfNumber = 0;
    let temp = '';
  
    for (let i = 0; i < sentence.length; i++) {
      const currentIndex = sentence[i];
      const isNaN = Number.isNaN(+currentIndex)
      
      if (isNaN) {
        sumOfNumber += +temp;
        temp = '';
      }
      else if (sentence[i - 1] === '-' && temp === '') {
        temp += `-${currentIndex}`;
        }
      else {
        temp += currentIndex;
      }
    }
    return sumOfNumber += +temp;
  }
  const result = calculateSumNumberInString('Wert12lop2-12');
  console.log(result);
  