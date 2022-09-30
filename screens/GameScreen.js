import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import Colors from '../util/colors';
import NumberContainer from './NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import { Ionicons } from '@expo/vector-icons'

const generateRandomNumber = (min, max, exclude) => {
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    if (randomNum === exclude) {
        return generateRandomNumber(min, max, exclude)
    } else {
        return randomNum;
    }
}

let min = 1;
let max = 100;

function GameScreen({ userNumber, gameOverHandler }) {

    const initialGuess = generateRandomNumber(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        min = 1;
        max = 100;
    }, []);


    useEffect(() => {
        if (currentGuess === userNumber) {
            gameOverHandler(guessRounds.length)
        }
    }, [currentGuess, userNumber, gameOverHandler]);

    const nextGuessHandler = (direction) => { // direction => lower / greater

        if (min === max) {
            Alert.alert(
                'Game Over',
                'do not lie, Im smarter than you think',
                [{ text: 'restart' }]
            );
            return;
        }

        if ((direction === 'lower' && currentGuess < userNumber)
            ||
            (direction === 'grater' && currentGuess > userNumber)) {
            Alert.alert(
                'Lier',
                'do not lie, Im smarter than you think',
                [{ text: 'sorry' }]
            );
            return;
        }


        if (direction === 'lower') {
            max = currentGuess;
        } else {
            min = currentGuess + 1;
        }

        const newRandom = generateRandomNumber(min, max, currentGuess)
        setCurrentGuess(newRandom);
        setGuessRounds((prev) => [newRandom, ...prev])
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Oponent Guess ! </Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={styles.actionContainer}>
                <Text style={styles.title_2}>Is You Number Greater or Lower?</Text>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={() => nextGuessHandler('lower')}>
                            <Ionicons size={24} name='md-remove' />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={() => nextGuessHandler('grater')}>
                            <Ionicons size={24} name='md-add' />
                        </PrimaryButton>
                    </View>
                </View>
            </View>

            <View style={styles.flatList}>

                <FlatList

                    data={guessRounds}
                    renderItem={(itemData) => (
                        <View style={styles.round}>
                            <Text style={styles.roundText} >#{guessRounds.length - itemData.index}</Text>
                            <Text style={styles.roundText} >Phone Guess: {itemData.item}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item}
                />

            </View>
        </View >
    );
}

export default GameScreen;


const styles = StyleSheet.create({
    screen: {
        flex:1,
        alignItems: 'center',
        padding: 16,
        marginHorizontal: 20,
        borderRadius: 8,
        elevation: 1, //android specific concept
        shadowColor: '#414040',
        shadowOffset: { width: 5, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.7
    },
    flatList:{
        flex:1,
        padding:16
    },
    round: {
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: Colors.secondary,
        borderWidth: 1,
        borderColor: Colors.primaryDark,
        borderRadius: 16,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        width: '100%',

    },
    roundText: {
        fontSize: 18,
        color: Colors.primaryDark
    },

    title: {
        fontSize: 24,
        textAlign: 'center',
        color: Colors.secondary,
        borderWidth: 2,
        borderColor: Colors.secondary,
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 4
    },
    actionContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title_2: {
        fontSize: 24,
        textAlign: 'center',
        color: Colors.primaryDark,
    },

    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
        maxWidth: 100
    },

});
