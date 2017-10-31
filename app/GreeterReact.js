import React, {Component} from 'react';
import config from './conf/config.json';

import "./css/Greeter.css"
import styles from './css/Greeter.css';

console.log(styles)

class GreeterReact extends Component{
    render(){
        return (
            <div className={styles.root}>
                {config.greetText}
            </div>
        )
    }
}

export default GreeterReact