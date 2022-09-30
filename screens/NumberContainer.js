import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Colors from '../util/colors';

function NumberContainer({ children }) {

    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View >
    );
}

export default NumberContainer;


const styles = StyleSheet.create({
    container: {
        borderWidth:4,
        borderColor:Colors.primaryLight,
        backgroundColor:Colors.primartShadow,
        paddingHorizontal:86,
        paddingVertical:24,
        borderRadius:8,
        margin:24,
        alignItems:'center',
        justifyContent:'center'
    },
    numberText: {
        color:Colors.secondary,
        fontSize:36,
        fontWeight:'bold'
    }

});
