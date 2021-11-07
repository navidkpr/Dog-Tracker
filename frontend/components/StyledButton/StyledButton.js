import React from "react"
import { View, Text, Pressable } from "react-native"
import styles from './styles'

const StyledButton = (props) => {

    const type = props.type
    const content = props.content
    const onPress = props.onPress
    const backgroundColor = props.backgroundColor
    const textColor = props.textColor
    const disabled = props.disabled? props.disabled : false

    var fontSize, fontWeight, textTransform

    if (type == 'primary') {
        fontSize = 12
        fontWeight = '500'
        textTransform = 'uppercase'
    } else if (type == 'noBorder') {
        fontSize = 14
        fontWeight = '300'
        textTransform = 'none' 
    }

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={onPress}
                disabled={disabled}
            >
                <Text 
                    style={[styles.text, {color: textColor, fontSize: fontSize, fontWeight: fontWeight, textTransform: textTransform}]}
                >
                    {content}
                </Text>
            </Pressable>
        </View>
    )
}

export default StyledButton