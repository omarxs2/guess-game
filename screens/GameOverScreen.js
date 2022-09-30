import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import Colors from '../util/colors';
import PrimaryButton from '../components/PrimaryButton';

function GameOverScreen({ guessRounds, userNumber, onRestart }) {


    return (
        <View style={styles.screen}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>GAME OVER !!</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>
            <View>
                <Text style={styles.summaryText}>Your phone needed
                    <Text style={styles.highlightedText}> {guessRounds} </Text>
                    rounds to guess the number
                    <Text style={styles.highlightedText}> {userNumber}</Text>.
                </Text>
                <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
            </View>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    titleContainer: {
        padding: 16,
        borderRadius: 8,
        borderWidth: 4,
        borderColor: Colors.secondary,
        backgroundColor: Colors.primartShadow,

    },

    title: {
        fontSize: 32,
        textAlign: 'center',
        color: Colors.secondary,
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 5,
        borderColor: Colors.primartShadow,
        overflow: 'hidden',
        margin: 15
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontSize: 24,
        margin: 15
    },
    highlightedText: {
        color: Colors.primaryDark,
        fontWeight: 'bold'
    }

})