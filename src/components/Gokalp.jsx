import { useReducer } from "react"

const Gokalp = ({ defaultInsurenceTime }) => {

    // const insurancetime = defaultInsurenceTime;
    // const insurancetimeHistory = [];
    // function updateIU(){}
    // const setInsurancetime = (newvalue) => {
    //     if(newvalue >= 2034){
    //         console.log('bu poliçe problemli');
    //         return insurancetime
    //     } else {
    //         insurancetimeHistory.push(newvalue);
    //         updateIU();
    //         //send email to manager...
    //         return newvalue;
    //     }
    // }



    const ageReducer = (age, action) => {
        if (action.type === "arttır") {
            return age + 1
        } else if (action.type === "ekle") {
            return age + action.payload
        } else if (action.type === "azalt") {
            return age - 1
        }

        return age
    }

    const initialState = 61
    const [age, dispatchAge] = useReducer(ageReducer, initialState)

    //ageReducer(60, { type: "arttır" })
    //ageReducer(60, { type: "ekle", payload: 61 })

    return (

        <div className="ageClick">
            <h1>AGE: {age}</h1>
            <button onClick={() => { dispatchAge({ type: 'arttır' }) }}>
                count is {age}
            </button>
            <button onClick={() => { dispatchAge({ type: 'azalt' }) }}>
                count is {age}
            </button>
        </div>

    )
}

            export default Gokalp