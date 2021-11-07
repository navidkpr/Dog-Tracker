import React from "react"
import { View, Text, Pressable } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import styles from './styles'

const StyledTextInput = (props) => {

    const type = props.type
    const placeholder = props.placeholder
    const textColor = props.textColor
    const backgroundColor = props.backgroundColor

    var fontSize, fontWeight, textTransform

    if (type == 'primary') {
        fontSize = 12
        fontWeight = '500'
        textTransform = 'uppercase'
    } else if (type == 'noBorder') {
        fontSize = 13
        fontWeight = '300'
        textTransform = 'default'
    }

    return (
        <View style={styles.container}>
                <TextInput
                    style={[styles.text, {backgroundColor: backgroundColor, color: textColor, fontSize: fontSize, fontWeight: fontWeight, textTransform: textTransform}]}
                    placeholder={placeholder}
                    placeholderTextColor='gray'
                />
        </View>
    )
}

export default StyledTextInput