import { useReducer } from "react"
const Sinan = () => {


    const ageReducer = (age=39, action) => {
        if (action.type === "increase") {
            return age + 1
        } else if (action.type === "add") {
            return age + action.payload
        } else if(action.type === "decrease") {
            return age - 1
        } else if(action.type === "kill") {
            return 0
        }
        return age;
            
    }
    const initialAge = 34;
    const [age, dispatchAge] = useReducer(ageReducer, initialAge);

    
   

    /* const myVariable = 0;
    let myVariableHistory = []

    // function updateValue (newValue) {
    //     myVariable = newValue
    // }

    function updateIU(){}

    function changeMyVariable (newValue) {
        if (typeof(newValue) !== "string") {
            console.log("incorrect type, enter a string value");
            return myVariable;
        } else {
            myVariableHistory.push(newValue)
            updateIU();
            return newValue
        }
    } */
    return (
        <>
        <h1>Sinan was here.</h1>
        <p>My age is: {age}</p>
        <button onClick={()=>{dispatchAge({type: "increase"})}} >Yaşlandır</button>
        <button onClick={()=> {dispatchAge({type: "add", payload: 5})}} > Hızlı yaşlandır </button>
        <button onClick={()=>{dispatchAge({type: "decrease"})}} >Gençleştir</button>
        <button onClick={()=>{dispatchAge({type: "kill"})}} >El Fatiha</button>
        </>
    )
}

export default Sinan