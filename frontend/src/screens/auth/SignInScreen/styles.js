import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    title: {
      marginTop: '20%',
      width: '100%',
    },
    header: {
      fontSize: 40,
      fontWeight: '300',
      textAlign: 'center',
    },
    background: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute',
    },
    form: {
      width: '100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingRight: 40,
      paddingLeft: 40,
      marginTop: '10%'
    },
    inputGroup: {
      width: '100%',
      justifyContent: 'center',
      textAlign: 'left',
      padding: 8,
    },
    textInput: {
        height: 40,
        borderRadius: 10,
        fontSize: 12,
        fontWeight: '500',
        backgroundColor: 'black',
        color: 'white',
        paddingLeft: 10,
    },
    error: {
      fontSize: 10, 
      color: 'red',
      width: '100%'
    },
    actions: {
      width: '100%',
      alignItems: 'center'
    }
  });

export default styles