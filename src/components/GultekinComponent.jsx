// import React, { useState } from 'react';


// const gValue = 0;
// const gHistoricalValue = [];

// function gUpdateValueUI (){
//     //
// }

// function gUpdateValue (gNewValue){
//     if(typeof(gNewValue) !== 'number'){
//       console.log("It is not a number!");
//       return gValue;
//     } else {
//         //todo : create variable to hold histortical value array
//         gHistoricalValue.push(gNewValue);
//         gUpdateValueUI(gNewValue);
//         return gNewValue;
//     }
// }

const gAgeReducer = (gAge, gAction ) => {
    if (gAction.type === 'increase'){

        if(gAction.payload === undefined || gAction.payload === null){
            return gAge+1;
        } else {
            return gAge + gAction.payload;
        }
    }
    return gAge;
}

console.log(gAgeReducer(15, { type: 'increase' }));
console.log(gAgeReducer(15, { type: 'increase', payload: 5 })); 


// const GultekinComponent = () =>{
//     function Counter() {
//         const [count, setCount] = useState(0);
      
//         const increment = () => {
//           /setCount(count + 1);
//         };
      
//         return (
//           <div>
//             <p>Sayaç: {count}</p>
//             <button onClick={increment}>Arttır</button>
//           </div>
//         );
//       }
//     };
// export default GultekinComponent; 

//1900
