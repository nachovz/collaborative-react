import React from "react";

function QuantityOfItems(props){
    
        return(
            <div style= {{float: "right", marginTop: "7px", backgroundColor: "#7b7e84", borderRadius: "40px", width: "40px", height: "30px"}}>
                <h5 style = {{textAlign: "center", marginTop: "2px", color: "white"}}>{props.number}</h5>
            </div>
            );
    }

export default QuantityOfItems;