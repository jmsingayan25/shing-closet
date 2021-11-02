import { StyleSheet } from "react-native";
import { alignItems, padding, width } from "styled-system";

const baseWidth = 15;

const colors = {
    primary: "93af86",
    blue: "#3b5998",
    red: "#DB4437",
    black: "#000",
    white: "#fff"
}

const styles = StyleSheet.create({
    m0:{
        margin: 0
    },
    m1:{
        margin: baseWidth
    },
    m2: {
        margin: baseWidth * 2
    },
    m3: {
        margin: baseWidth * 3
    },
    m4: {
        margin: baseWidth * 4
    },
    m5: {
        margin: baseWidth * 5
    },
    mT0: {
        marginTop: 0
    },
    mT1: {
        marginTop: baseWidth
    },
    mT2: {
        marginTop: baseWidth * 2
    },
    mT3: {
        marginTop: baseWidth * 3
    },
    mT4: {
        marginTop: baseWidth * 4
    },
    mT5: {
        marginTop: baseWidth * 5
    },
    mB0: {
        marginBottom: 0
    },
    mB1: {
        marginBottom: baseWidth
    },
    mB2: {
        marginBottom: baseWidth * 2
    },
    mB3: {
        marginBottom: baseWidth * 3
    },
    mB4: {
        marginBottom: baseWidth * 4
    },
    mB5: {
        marginBottom: baseWidth * 5
    },
    mL0: {
        marginLeft: 0
    },
    mL1: {
        marginLeft: baseWidth
    },
    mL2: {
        marginLeft: baseWidth * 2
    },
    mL3: {
        marginLeft: baseWidth * 3
    },
    mL4: {
        marginLeft: baseWidth * 4
    },
    mL5: {
        marginLeft: baseWidth * 5
    },
    mR0: {
        marginRight: 0
    },
    mR1: {
        marginRight: baseWidth
    },
    mR2: {
        marginRight: baseWidth * 2
    },
    mR3: {
        marginRight: baseWidth * 3
    },
    mR4: {
        marginRight: baseWidth * 4
    },
    mR5: {
        marginRight: baseWidth * 5
    },
    mX1: {
        marginLeft: baseWidth,
        marginRight: baseWidth
    },
    mX2: {
        marginLeft: baseWidth * 2,
        marginRight: baseWidth * 2
    },
    mX3: {
        marginLeft: baseWidth * 3,
        marginRight: baseWidth * 3
    },
    mX4: {
        marginLeft: baseWidth * 4,
        marginRight: baseWidth * 4
    },
    mX5: {
        marginLeft: baseWidth * 5,
        marginRight: baseWidth * 5
    },
    mY1: {
        marginTop: baseWidth,
        marginBottom: baseWidth
    },
    mY2: {
        marginTop: baseWidth * 2,
        marginBottom: baseWidth * 2
    },
    mY3: {
        marginTop: baseWidth * 3,
        marginBottom: baseWidth * 3
    },
    mY4: {
        marginTop: baseWidth * 4,
        marginBottom: baseWidth * 4
    },
    mY5: {
        marginTop: baseWidth * 5,
        marginBottom: baseWidth * 5
    },
    p0:{
        padding: 0
    },
    p1:{
        padding: baseWidth
    },
    p2: {
        padding: baseWidth * 2
    },
    p3: {
        padding: baseWidth * 3
    },
    p4: {
        padding: baseWidth * 4
    },
    p5: {
        padding: baseWidth * 5
    },
    pL1:{
        paddingLeft: baseWidth
    },
    pL2:{
        paddingLeft: baseWidth * 2
    },
    pL3:{
        paddingLeft: baseWidth * 3
    },
    pL4:{
        paddingLeft: baseWidth * 4
    },
    pL5:{
        paddingLeft: baseWidth * 5
    },
    pR1:{
        paddingRight: baseWidth
    },
    pR2:{
        paddingRight: baseWidth * 2
    },
    pR3:{
        paddingRight: baseWidth * 3
    },
    pR4:{
        paddingRight: baseWidth * 4
    },
    pR5:{
        paddingRight: baseWidth * 5
    },
    pX1: {
        paddingLeft: baseWidth,
        paddingRight: baseWidth
    },
    pX2: {
        paddingLeft: baseWidth * 2,
        paddingRight: baseWidth * 2
    },
    pX3: {
        paddingLeft: baseWidth * 3,
        paddingRight: baseWidth * 3
    },
    pX4: {
        paddingLeft: baseWidth * 4,
        paddingRight: baseWidth * 4
    },
    pX5: {
        paddingLeft: baseWidth * 5,
        paddingRight: baseWidth * 5
    },
    pY1: {
        paddingTop: baseWidth,
        paddingBottom: baseWidth
    },
    pY2: {
        paddingTop: baseWidth * 2,
        paddingBottom: baseWidth * 2
    },
    pY3: {
        paddingTop: baseWidth * 3,
        paddingBottom: baseWidth * 3
    },
    pY4: {
        paddingTop: baseWidth * 4,
        paddingBottom: baseWidth * 4
    },
    pY5: {
        paddingTop: baseWidth * 5,
        paddingBottom: baseWidth * 5
    },
    pB1: {
        paddingBottom: baseWidth
    },
    pB2: {
        paddingBottom: baseWidth * 2
    },
    pB3: {
        paddingBottom: baseWidth * 3
    },
    pB4: {
        paddingBottom: baseWidth * 4
    },
    pB5: {
        paddingBottom: baseWidth * 5
    },
    pT1: {
        paddingTop: baseWidth
    },
    pT2: {
        paddingTop: baseWidth * 2
    },
    pT3: {
        paddingTop: baseWidth * 3
    },
    pT4: {
        paddingTop: baseWidth * 4
    },
    pT5: {
        paddingTop: baseWidth * 5
    },
    justifyCenter: {
        justifyContent: 'center'
    },
    justifyStart: {
        justifyContent: 'flex-start'
    },
    alignCenter: {
        alignItems: 'center'
    },
    alignFlexStart: {
        alignItems: 'flex-start'
    },
    justifySpaceBetween: {
        justifyContent: 'space-between'
    },
    justifySpaceAround: {
        justifyContent: 'space-around'
    },
    flexRow :{
        flexDirection: 'row',
    },
    flexColumn :{
        flexDirection: 'column',
    },
    flex1 :{
        flex: 1,
    },
    flexCol: {
        flexDirection: 'column'
    },
    flexRow: {
        flexDirection: 'row'
    },
    textCenter: {
        textAlign: 'center'
    },
    textUppercase: {
        textTransform: 'uppercase'
    },
    textLowercase: {
        textTransform: 'lowercase'
    },
    textBold: {
        fontWeight: 'bold'
    },
    container: {
        flex: 1, 
        padding: 15, 
    },
    startImage: {
        height: 300,
        width: 350,
        borderRadius: 25
    },
    startButtonContainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    startButtonText: {
        fontSize: 20, 
        color: 'white'
    },
    iconCircle: {
        borderRadius: 50,
        borderColor: 'gray', 
        borderWidth: 1,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    roundedCornerBtn: {
        borderRadius: 25,
        alignSelf: 'center'
    }
});


export {styles, colors}