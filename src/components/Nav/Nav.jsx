import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from './Nav.module.css'

const Nav = ({ onSearch }) => { //Se pasa onSearch como prop desde el componente app.jsx
    return (
        <div className={styles.franja}>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}

export default Nav;

// class Nav extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <SearchBar onSearch={this.props.onSearch}/> //Va this por que es un componente de clase
//             </div>
//         )
//     }
// }
