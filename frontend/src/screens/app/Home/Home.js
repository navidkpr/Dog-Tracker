import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import MapView from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

import { logout } from '../../../store/actions/auth';
import StyledButton from '../../../../components/StyledButton/StyledButton';
import styles from './style';
// import schedule from 'node-schedule';

// const RUN_EVERY_SECOND = '0/1 * * * * *';

// schedule.scheduleJob(RUN_EVERY_SECOND, () => {
//     console.log('hi');
// });

const Home = () => {
    
    const dispatch = useDispatch();
    const navigation = useNavigation()

    const handleSubmit = () => {
        dispatch(logout())
    }
    return (
        <View style={styles.container}>
            <Text>Home (Logged in)</Text>
            <View style={styles.actions}>
            <StyledButton
            content="Map"
            textColor="white"
            backgroundColor="black"
            type="primary"
            onPress={() => {navigation.navigate('Map')}}
            />
            <StyledButton
            content="Signout"
            textColor="white"
            backgroundColor="black"
            type="primary"
            onPress={handleSubmit}
            />

            </View>
        </View>
    )
}

export default Home