import { View, Text } from "react-native";
import PropTypes from 'prop-types';

import coloredBoxStyle from '../styles/coloredBoxStyle';

// // 第一種寫法
// function MyColoredBox(props) {
//     return (
//         <View
//             style={[
//                 coloredBoxStyle.baseBox,
//                 {
//                     backgroundColor: props.myColor,
//                 }
//             ]}
//         >
//             <Text style={{ textAlign: 'center' }}>
//                 {props.myColor}
//             </Text>
//         </View>
//     )
// }
// MyColoredBox.defaultProps = {
//     myColor: 'white',
// }


// // 第一種寫法, 將參數設定為預設值
// function MyColoredBox({ myColor = 'white' }) {
//     return (
//         <View
//             style={[
//                 coloredBoxStyle.baseBox,
//                 {
//                     backgroundColor: myColor,
//                 }
//             ]}
//         >
//             <Text style={{ textAlign: 'center' }}>
//                 {myColor}
//             </Text>
//         </View>
//     )
// }

// // 第二種寫法
// const MyColoredBox = (props) => {
//     return (
//         <View
//             style={[
//                 coloredBoxStyle.baseBox,
//                 {
//                     backgroundColor: props.myColor,
//                 }
//             ]}
//         >
//             <Text style={{ textAlign: 'center' }}>
//                 {props.myColor}
//             </Text>
//         </View>
//     )
// }

// 第二種寫法, 移除括弧
const MyColoredBox = props =>
(
    <View
        style={[
            coloredBoxStyle.baseBox,
            {
                backgroundColor: props.myColor,
            }
        ]}
    >
        <Text style={{ textAlign: 'center' }}>
            {props.myColor}
        </Text>
    </View>
)

export default MyColoredBox;

MyColoredBox.protoTypes = {
    myColor: PropTypes.string,
}

