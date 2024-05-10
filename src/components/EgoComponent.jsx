import { useReducer } from "react";

const Egocomponent = () => {
  const UiName = "ego";
  let varHistory = [];

  //     function updateIU(NametoBeDisplayed){
  //         return (
  //             <h1>{NametoBeDisplayed}</h1>
  //         )
  //     }

  //     function setUiName(str) {
  //     if (typeof str !== "string") {
  //       console.log("Yazı yaz sayı değil!");
  //       return str
  //     } else if (str.length() > 10) {
  //         console.log("O kadar da uzun değil, insan okuyacak bunu");
  //         return str
  //     } else {
  //       let desiredOutcome = str.upperCase();
  //       desiredOutcome.push(varHistory)
  //       updateIU(desiredOutcome);
  //       return desiredOutcome;
  //     }
  //   }
  //   setUiName(UiName)
  const initalStr = "eGo kEskin";
  const UpperCaseReducer = (str = initalStr, action) => {
    varHistory.push(str);
    if (action.type === "Turn it all caps") {
      return str.toUpperCase();
    } else if (action.type === "first letter Capital") {
      return str.toLowerCase();
    }
    return str;
  };

  const [str, dispatchStr] = useReducer(UpperCaseReducer, initalStr);

  return (
    <>
      <div className="egoCart">
        <h1>{str}</h1>
        <button
          onClick={() =>
            dispatchStr({
              type: "Turn it all caps",
            //   payload: "Keskin",
            })
          }
        >
          Hepsini Büyült
        </button>
        <button
          onClick={() =>
            dispatchStr({
              type: "first letter Capital",
            //   payload: "Keskin",
            })
          }
        >
          Küçült
        </button>
      </div>
    </>
  );
};
export default Egocomponent;