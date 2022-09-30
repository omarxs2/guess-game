import { useState } from 'react'

import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

import Colors from './util/colors';

// import { useFonts } from 'expo-font';
// const [fontLoaded] = useFonts({
//   'open-sens': require('./assets/fonts/OpenSans-Regular.ttf'),
//   'open-sens-bold': require('./assets/fonts/OpenSans-Bold.ttf')

// })

export default function App() {

  const [userNumber, setUserNumber] = useState(null);
  const [gameOver, setGameOver] = useState(true);
  const [guessRounds, setGuessRoundsCount] = useState(0);

  const pickedNumberHandler = (value) => {
    setUserNumber(value);
    setGameOver(false);
  }
  const gameOverHandler = (val) => {
    setGuessRoundsCount(val);
    setGameOver(true);
  }
  const onRestart = () => {
    setUserNumber(null);
    setGuessRoundsCount(0);
  }


  let screen = <StartGameScreen onConfirm={pickedNumberHandler} />
  if (userNumber) {
    screen = <GameScreen gameOverHandler={gameOverHandler} userNumber={userNumber} />
  }
  if (gameOver && userNumber && guessRounds > 0) {
    screen = <GameOverScreen guessRounds={guessRounds} onRestart={onRestart} userNumber={userNumber} />
  }

  return (
    <LinearGradient colors={['#535151', Colors.secondary]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/dices.jpg')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.35 }}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
} ``

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
