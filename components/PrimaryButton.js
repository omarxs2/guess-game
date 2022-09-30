import { StyleSheet, Text, View, Pressable } from 'react-native';
import Colors from '../util/colors';

function PrimaryButton({ children, onPress }) {

    return (

        <View style={styles.outerContainer}>
            <Pressable
                style={({ pressed }) => pressed ?
                    [styles.buttonContainer,
                    styles.pressed] :
                    styles.buttonContainer}
                onPress={onPress}
                android_ripple={{ color: Colors.primartShadow }}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View >
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    outerContainer: {
        borderRadius: 20,
        margin: 4,
        overflow: 'hidden'
    },
    buttonContainer: {
        backgroundColor: Colors.primaryLight,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 20
    },
    pressed: {
        opacity: 0.7
    }
});
