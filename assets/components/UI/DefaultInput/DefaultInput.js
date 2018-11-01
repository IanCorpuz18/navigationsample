import React from 'react';
import { TextInput, StyleSheet } from 'react-native';


const defaultInput = props => (
    <TextInput 
       underlineColorAndroid="transparent" 
       {...props}
       style={[styles.input,props.style]} 
/>
);

const styles = StyleSheet.create({
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "black",
        padding: 5,
        margin:5,
        
         
    }
  });


export default defaultInput;