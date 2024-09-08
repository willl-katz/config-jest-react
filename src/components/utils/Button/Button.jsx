//import { Component } from "react";
import React from "react";

export const Button = ({ text, onClick, disabled }) => {
    return (
        <button onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
};

// export class Button extends Component {
//     // constructor(props) {
//     //     super(props);
//     // }

//     render() {
//         // eslint-disable-next-line react/prop-types
//         const { text, onClick, disabled } = this.props;

//         return (
//             <button onClick={onClick} disabled={disabled}>
//                 {text}
//             </button>
//         );
//     }
// }
