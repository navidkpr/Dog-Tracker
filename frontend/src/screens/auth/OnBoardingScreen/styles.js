import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    background: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute',
    },
    titles: {
      marginTop: '30%',
      width: '100%',
    },
    header: {
      fontSize: 40,
      fontWeight: '500',
      textAlign: 'center',
    },
    actions: {
      marginTop: '120%',
      width: '100%',
      alignItems: 'center'
    }
  });

export default styles