import IonicIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { colors, styles } from '../styles/styles'
import { Button, Checkbox, Input } from 'native-base';

const SignUp = ({navigation}) => {

    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);

    const handlePass = () => setShow(!show)

    const submitForm = () => {
        console.log(email, name, password, checked);
    }
    return (
        <ScrollView contentContainerStyle={{flex: 1}}>
            <View style={styles.container}>
                <View style={[styles.p1, styles.mT2]}>
                    <Text style={[styles.textBold, {fontSize: 35}]}>Let's Get Started</Text>
                    <Text>Sign up with Social or fill the form to continue</Text>
                </View>
                <View style={[styles.flexRow, styles.p1, styles.pB2]} >
                    <View style={[styles.iconCircle, styles.mR1]}>
                        <FontAwesomeIcon name="facebook" size={30} color={colors.blue}/>
                    </View>
                    <View style={styles.iconCircle} >
                        <FontAwesomeIcon name="google" size={30} color={colors.red}/>
                    </View>
                </View>
                <View style={{borderColor: 'black', borderWidth: 0.5}}></View>
                <View style={[styles.p1, styles.pY2, styles.alignCenter]}>
                    <Input
                        p={4}
                        mb={5}
                        w={{base: "90%", md: "25%",}}
                        style={{fontSize: 15}}
                        InputLeftElement={
                            <IonicIcon name="mail" size={40} style={styles.mL1} />
                        }
                        placeholder="Email"
                        variant="underlined"
                        name="email"
                        onChangeText={value => setEmail(value)}
                    />
                    <Input
                        p={4}
                        mb={5}
                        w={{base: "90%", md: "25%",}}
                        style={{fontSize: 15}}
                        InputLeftElement={
                            <IonicIcon name="person" size={40} style={styles.mL1} />
                        }
                        placeholder="Name"
                        variant="underlined"
                        name="name"
                        onChangeText={value => setName(value)}
                    />
                    <Input
                        p={4}
                        w={{base: "90%", md: "25%",}}
                        style={{fontSize: 15}}
                        placeholder="Password"
                        variant="underlined"
                        name="password"
                        type={show ? "text" : "password"}
                        overflow="visible"
                        InputLeftElement={
                            <FontAwesomeIcon name="lock" size={40} style={styles.mL1} />
                        }
                        InputRightElement={
                            <IonicIcon 
                                name={show ? "eye" : 'eye-off'} 
                                size={40} 
                                onPress={handlePass}
                                style={styles.mR1}/>

                        }
                        onChangeText={value => setPassword(value)}
                    />
                </View>
                <View>
                    <Checkbox 
                        width={'90%'}
                        alignSelf={'center'}
                        isChecked={checked}
                        onChange={value => setChecked(value)}
                    >
                        <Text style={styles.mL1}>By Signing up, you agree to the <Text style={styles.textBold} onPress={() => console.log('Terms')}>Terms of Services</Text> and <Text style={styles.textBold} onPress={() => console.log('Privacy')}>Privacy Policy</Text></Text>
                    </Checkbox>
                </View>
                <View style={styles.mT3}>
                    <Button 
                        colorScheme="secondary" 
                        onPress={() => submitForm()}
                        style={styles.roundedCornerBtn}
                        px={20}
                        py={5}
                    ><Text style={styles.startButtonText}>Sign Up</Text></Button>
                    <Button
                        colorScheme="primary"
                        variant="link" 
                        onPress={() => navigation.navigate('SignIn')}
                        mt={2}
                    >Already have an account?</Button>
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUp
