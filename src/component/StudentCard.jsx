import { useState } from "react";

// function StudentCard(props) {
//    const [showDetails,setshowDetails] = useState(false)
//   return (
//     <>
//       <div className="main">
//         <img src={props.img}/>
//         <h2>{props.name}</h2>
//         <h3>🤵🏻 Age: {props.age}</h3>
//         <h3>📖 Course: {props.course}</h3>
//         <hr />
//         <h4 style={{color:props.isOnline?"green":"red"}}>{props.isOnline === true  ? " 🟢Online" : " 🔴Offline"}</h4>
//         <button onClick={()=>{
//           setshowDetails(!showDetails)
//         }}>{showDetails ? "Hide": "Show" } Details</button>

//         {showDetails && <p>{props.details}</p>}
//       </div>
//     </>
//   );
// }

// export default StudentCard

function studentsCard(props) {
  const [showDetails, setshowDetails] = useState(false);
  return (
    <>
      <div className="main">
        <img src={props.img} />
        <h2>{props.name}</h2>
        <h3>👨🏻‍🎓  Age : {props.age}</h3>
        <h3>📖 Course : {props.course}</h3>
        <h4 style={{ color: props.isOnline ? "green" : "red" }}>
          {props.isOnline === true ? "🟢Online" : "🔴Offline"}
        </h4>
        <button
          onClick={() => {
            setshowDetails(!showDetails);
          }}
        >
          {" "}
          {showDetails ? "Hide" : "Show"} Details
        </button>
        {showDetails && <p>{props.details}</p>}
      </div>
    </>
  );
}

export default studentsCard;
