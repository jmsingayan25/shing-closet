import { Button } from 'native-base'
import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { styles } from '../styles/styles'

const Start = ({navigation}) => {
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.container}>
                <View style={styles.startButtonContainer}>
                    <Image
                        source={require('../assets/images/logo.jpg')}
                        style={styles.startImage}
                    />
                </View>
                <View style={styles.startButtonContainer}>
                    <Button 
                        colorScheme="primary" 
                        onPress={() => navigation.navigate('SignIn')}
                        style={styles.roundedCornerBtn}
                        width={'80%'}
                        px={20}
                        py={5}
                        mb={2}
                    ><Text style={styles.startButtonText}>Sign In</Text></Button>
                    <Button 
                        colorScheme="secondary" 
                        onPress={() => navigation.navigate('SignUp')}
                        style={styles.roundedCornerBtn}
                        width={'80%'}
                        px={20}
                        py={5}
                    ><Text style={styles.startButtonText}>Sign Up</Text></Button>
                </View>
            </View>
        </ScrollView>
    )
}

export default Start
