const checkResult = function (score) {
    return score / 3  ;
   };
   const finalResult = function (mgmgScores, aungaungScores) {
   const mgmgTotalScores = checkResult(mgmgScores);
   const aungaungTotalScores = checkResult(aungaungScores);
   const AeverageScore = `Mg Mg of scores ${mgmgTotalScores} marks and Aung Aung of scores ${aungaungTotalScores} marks`;
    return AeverageScore;
   };
   console.log(finalResult([50 + 20 + 10] , [10 + 30 + 50]));
   
   

   if(56.666 > 100){
    restaurant = 56.666 + 1500;
   }
   else if(56.666< 100){
    restaurant= 56.666 + 0;
   }

console.log( restaurant);

if(restaurant > 50){
    result = restaurant + 1000;
}else if(restaurant < 50){
    result = restaurant + 500;
}

console.log(result);

let finalScore = function score(){
    console.log(1850 * result);
}

finalScore();