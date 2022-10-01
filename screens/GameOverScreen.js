import Colors from '../util/colors';
import PrimaryButton from '../components/PrimaryButton';
import {
    StyleSheet, Text, View, Image, Dimensions,
    useWindowDimensions,
    ScrollView
} from 'react-native';

function GameOverScreen({ guessRounds, userNumber, onRestart }) {

    const { width, height } = useWindowDimensions();

    let imageSize = 300;
    if (width < 400) imageSize = 200;
    if (height < 400) imageSize = 120;

    const imageDimen = {
        width: imageSize,
        height: imageSize ,
        borderRadius: imageSize  * 0.5
    }
    return (
        <ScrollView style={styles.scroller}>
            <View style={styles.screen}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>GAME OVER !!</Text>
                </View>
                <View style={[styles.imageContainer, imageDimen]}>
                    <Image style={[styles.image,]} source={require('../assets/images/success.png')} />
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
        </ScrollView>
    )
}

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

// width: deviceWidth * 0.5, //or deviceWidth < 380 ? 150 : 300
// height: deviceWidth * 0.5,
// borderRadius: deviceWidth * 0.25,

const styles = StyleSheet.create({
    scroller: {
        flex: 1,
    },
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