import React from 'react'
import {View,Text,ImageBackground} from 'react-native';
import styles from './style'
import StyledButton from '../styledButton'
const CarItem = (props)=>{
    return(
        <View style={styles.carContainer}>
        <ImageBackground
          source={require('../../assets/ModelX.jpeg')}
          style={styles.image}
        />
            <View style={styles.titles}>
              <Text style={styles.title}>Model S</Text>
              <Text style={styles.subtitle}>Starting at $69000</Text>
            </View>
            <StyledButton 
                    type="primary" 
                    content="Custom order"
                    onPress={()=>{
                        console.warn("custom order button pressed")
                    }}            
            />
            <StyledButton 
                type="secondary" 
                content="existing inventory"
                onPress={()=>{
                    console.warn("existing inventory button pressed")
                }}
            />
      </View>
      
      
    );
};

export default CarItem;
