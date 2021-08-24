import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Audio } from 'expo-av';

export default class PhonicSoundButton extends React.Component {
    playSound=async(soundB)=>{
        var soundLink = 'https://s3-whitehatjrcontent.whjr.online/phones/'+soundB+'.mp3'
        await Audio.Sound.createAsync(
            {uri: soundLink},
            {shouldPlay: true}
        )
    }
    render() {
        return (
            <TouchableOpacity style={styles.phonicB} 
            onPress={()=>{this.playSound(this.props.soundChunk)}}>
                <Text style={styles.displayText}>{this.props.wordChunk}</Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    displayText: {
        fontSize: 30,
        textAlign: 'center'
    },
    phonicB: {
        alignSelf: 'center',
        width: 100,
        height: 40,
        fontSize: 18,
        fontWeight: 'bold',
        borderRadius: 7,
        backgroundColor: 'red',
        margin: 20
    }
})