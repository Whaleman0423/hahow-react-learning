import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

// 第一種寫法
// function MyButton(props) {
//     return (
//         <TouchableOpacity onPress={props.myOnPress}>
//             <Text>
//                 {props.myTitle}
//             </Text>
//         </TouchableOpacity>
//     )
// } 

// // 第二種寫法
// const MyButton = (props) => {
//     return (
//         <TouchableOpacity onPress={props.myOnPress}>
//             <Text>
//                 {props.myTitle}
//             </Text>
//         </TouchableOpacity>
//     )
// }

// 第二種寫法的省略括弧
const MyButton = props => (
    <TouchableOpacity onPress={props.myOnPress}>
        <Text>
            {props.myTitle}
        </Text>
    </TouchableOpacity>
)

export default MyButton;

MyButton.propTypes = {
    myTitle: PropTypes.string.isRequired,
    myOnPress: PropTypes.func,
}

MyButton.defaultProps = {
    myTitle: 'Hello',
}