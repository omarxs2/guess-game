import { useState } from 'react'
import Colors from '../util/colors';
import PrimaryButton from '../components/PrimaryButton';
import {
    StyleSheet,
    Alert,
    View,
    Text,
    TextInput,
    Dimensions,
    useWindowDimensions,
    KeyboardAvoidingView,
    ScrollView,
    Platform
} from 'react-native';


function StartGameScreen({ onConfirm }) {

    const [enteredNumber, setEnteredNumber] = useState('');
    const { width, height } = useWindowDimensions();

    const numberInputHandler = (value) => {
        setEnteredNumber(value);
    }
    const resetInputHandler = () => {
        setEnteredNumber('');
    }
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber)
        if (isNaN(chosenNumber) || chosenNumber > 99 || chosenNumber < 0) {
            Alert.alert(
                'Ivalid number',
                'The number has to be between 0-99',
                [{ text: 'Okay', style: 'cancel', onPress: resetInputHandler }]
            );
            return;
        }
        onConfirm(chosenNumber)

    }

    const marginTopDist = height < 400 ? 10 : 100;

    return (
        <ScrollView style={[styles.screen, { marginBottom: 50 }]}>
            <KeyboardAvoidingView style={styles.screen} behavior='height'>
                <View style={[styles.mainContainer, { marginTop: marginTopDist }]}>
                    <View style={styles.titleContainer}>
                        <Text style={[styles.title, { width: width * 0.6 }]}>Guess My Number !!</Text>

                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.header}>Pick a number:</Text>
                        <TextInput style={styles.numberInput}
                            maxLength={2}
                            keyboardType='number-pad'
                            autoCapitalize='none'
                            autoCorrect={false}
                            onChangeText={numberInputHandler}
                            value={enteredNumber}
                        />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                            </View>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default StartGameScreen;

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    screen: { flex: 1 },
    mainContainer: {
        flex: 1,
        alignItems: 'center',
    },
    titleContainer: {
        padding: 8,
        borderColor: Platform.select({ ios: Colors.secondary, android: Colors.primaryDark }),
        borderRadius: 8,
        borderWidth: 4,
        margin: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Platform.OS == 'android' ? Colors.primaryDark : Colors.secondary,
        textAlign: 'center'
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 10,
        marginHorizontal: 20,
        backgroundColor: Colors.primaryDark,
        borderRadius: 8,
        elevation: 1, //android specific concept
        shadowColor: '#414040',
        shadowOffset: { width: 5, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.7
    },
    numberInput: {
        borderBottomColor: Colors.secondary,
        borderBottomWidth: 2,
        paddingHorizontal: 3,
        marginVertical: 10,
        color: Colors.secondary,
        fontSize: 32,
        height: 50,
        width: 50,
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
    header: {
        fontSize: 32,
        textAlign: 'center',
        color: '#ffffff'
    }
});
