module.exports = function toReadable(number) {
   function numTemp(number) {
      switch (number) {
         case 0: return "zero";
         case 1: return "one";
         case 2: return "two";
         case 3: return "three";
         case 4: return "four";
         case 5: return "five";
         case 6: return "six";
         case 7: return "seven";
         case 8: return "eight";
         case 9: return "nine";
         case 10: return "ten";
         case 11: return "eleven";
         case 12: return "twelve";
         case 13: return "thirteen";
         case 14: return "fourteen";
         case 15: return "fifteen";
         case 16: return "sixteen";
         case 17: return "seventeen";
         case 18: return "eighteen";
         case 19: return "nineteen";
         case 20: return "twenty";
         case 30: return "thirty";
         case 40: return "forty";
         case 50: return "fifty";
         case 60: return "sixty";
         case 70: return "seventy";
         case 80: return "eighty";
         case 90: return "ninety";
      }
   } function more20less100(number) {
      if (number % 10 != 0) {
         return (numTemp(number - number % 10) + " " + numTemp(number % 10));
      }
      else {
         return numTemp(number);
      }
   }
   function equalHundred(number) {
      return ((numTemp(number / 100)) + " hundred");
   }

   if (number < 21 || (number % 10 === 0 && number < 100)) {
      return numTemp(number);
   }
   else if (number < 100 && number > 20 && number % 10 != 0) {
      return more20less100(number);
   }
   else {
      if (number % 100 === 0) {
         return equalHundred(number);
      }
      else if (number > 100 && number % 100 < 21) {
         return (equalHundred(number - number % 100) + " " + numTemp(number % 100));

      }
      else {
         return (equalHundred(number - number % 100) + " " + more20less100(number % 100));
      }
   }
}