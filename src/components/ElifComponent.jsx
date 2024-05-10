import { useReducer, useState } from 'react'
 const ElifComponent = (newPuan) => {

  /*  const Puan = 0;
    let PuanHistory = [];
    function updateUI(){}

    function setPuan(newPuan) { 
        if (newPuan === "number") {
            newPuan = newPuan + 2;
            updateUI();
            PuanHistory.push(newPuan);
            //tast 1
            //task 2
            //task n
            return newPuan; 
        } else {
            console.log("sayı yazınız");
            return Puan;
        }
    }


}
 */

const ElifAge = (age, action) => {
    if (action.type === "azalt") {
        return age - 1;
    }
    else if (action.type === "fazlaAzalt") {
        return age - action.payload;
    }
    return age;
}

const initialState = 0;
const [ageState, dispatchCount] = useReducer(ElifAge, initialState);

//ElifAge(23, "azalt");
//ElifAge(40, { type: "fazlaAzalt", payload: 4 })
return (
    <>
        <p> elif deneme {ageState} </p>
      
            <button onClick={() => { dispatchCount({ type: 'fazlaAzalt', payload: 2 }) }}>
                ageState is {ageState}
            </button>
        

    </>
);

 }

export default ElifComponent;