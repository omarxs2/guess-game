import { StyleSheet, Alert, View, Text, TextInput } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react'
import Colors from '../util/colors';

function StartGameScreen({ onConfirm }) {

    const [enteredNumber, setEnteredNumber] = useState('');

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

    return (
        <View style={styles.mainContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Guess My Number !!</Text>

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

    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
    },
    titleContainer: {
        padding: 16,
        borderColor: Colors.secondary,
        borderRadius: 8,
        borderWidth: 4,
        margin: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.secondary,

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
