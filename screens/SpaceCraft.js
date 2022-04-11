import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class SpaceCraftScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>SpaceCraft Screen!</Text>
            </View>
        )
    }
    getData=()=>{
        azios.get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
                .then(response => {

                    this.setState({ aircrafts: response.data.results})
                    console.log(response.data.results)
                })
                .catch(error =>{
                    console.log(error.message)
                })
    }
    renderItem = ({item}) =>{
        return(
            <View style={{borderWidth:1, justifyContent:'center', alignItems:'center', marginBottom:10,elevation:10}}>
                <Image
                source={{uri:item.agency.image_url}} style={{ width: "100%", height: 200, marginTop: 15, marginBotton: 15, marginRight: 10}}></Image>
            
            <Text styles ={{fonthWeight:'bold', fontSize:20}}>{item.name}</Text>
            </View>

        )
    }
    
}