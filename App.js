import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { Dimensions } from 'react-native'

const {height, width} = Dimensions.get('window')

export default class App extends React.Component {
  render() {
    return(
      <View style={{height, width}}>
        <View style={{backgroundColor: 'red', flex:1, flexDirection: 'row'}}>
          <View style={{backgroundColor: 'black', flex:1, alignItems: 'center', justifyContent: 'center'}}>
         
          </View>
          <View style={{backgroundColor: 'black', flex:1, alignItems: 'center', justifyContent: 'center'}}>
            
          </View>
          <View style={{backgroundColor: 'black', flex:1, alignItems: 'center', justifyContent: 'center'}}>
            
          </View>
        </View>
        <View style={{backgroundColor: 'orange', flex:1, flexDirection: 'row'}}>
          <View style={{backgroundColor: 'black', flex:1}}/>
          <View style={{backgroundColor: 'black', flex:1}}/>
          <View style={{backgroundColor: 'black', flex:1}}/>
          <View style={{backgroundColor: 'black', flex:1, alignItems: 'center', justifyContent: 'center'}}><Text style={{fontSize: 80, color: 'white'}}>0</Text></View>
        </View>
        <View style={{backgroundColor: 'black', flex:1, flexDirection: 'row'}}>
        <TouchableOpacity style={{backgroundColor: '#A6A6A6', borderWidth:4, width:(Dimensions.get('window').height/7),height:(Dimensions.get('window').height/7), alignItems: 'center', justifyContent: 'center', flex:1,borderRadius:100}}><Text style={{fontSize: 30, color: 'black'}}>AC</Text></TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#A6A6A6', borderWidth:4, width:(Dimensions.get('window').height/7),height:(Dimensions.get('window').height/7), alignItems: 'center', justifyContent: 'center', flex:1,borderRadius:100}}><Text style={{fontSize: 40, color: 'black'}}>+/-</Text></TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#A6A6A6', borderWidth:4, width:(Dimensions.get('window').height/7),height:(Dimensions.get('window').height/7), alignItems: 'center', justifyContent: 'center', flex:1,borderRadius:100}}><Text style={{fontSize: 40, color: 'black'}}>%</Text></TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: 'orange', borderWidth:4, width:(Dimensions.get('window').height/7),height:(Dimensions.get('window').height/7), alignItems: 'center', justifyContent: 'center', flex:1,borderRadius:100}}><Text style={{fontSize: 40, color: 'white'}}>/</Text></TouchableOpacity>
        </View>
        <View style={{backgroundColor: 'black', flex:1, flexDirection: 'row'}}>
        <TouchableOpacity style={{backgroundColor: '#333333', borderWidth:4, width:(Dimensions.get('window').height/7),height:(Dimensions.get('window').height/7), alignItems: 'center', justifyContent: 'center', flex:1,borderRadius:100}}><Text style={{fontSize: 40, color: 'white'}}>7</Text></TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#333333', borderWidth:4, width:(Dimensions.get('window').height/7),height:(Dimensions.get('window').height/7), alignItems: 'center', justifyContent: 'center', flex:1,borderRadius:100}}><Text style={{fontSize: 40, color: 'white'}}>8</Text></TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#333333', borderWidth:4, width:(Dimensions.get('window').height/7),height:(Dimensions.get('window').height/7), alignItems: 'center', justifyContent: 'center', flex:1,borderRadius:100}}><Text style={{fontSize: 40, color: 'white'}}>9</Text></TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: 'orange', borderWidth:4, width:(Dimensions.get('window').height/7),height:(Dimensions.get('window').height/7), alignItems: 'center', justifyContent: 'center', flex:1,borderRadius:100}}><Text style={{fontSize: 40, color: 'white'}}>X</Text></TouchableOpacity>
        </View>
        <View style={{backgroundColor: 'black', flex:1, flexDirection: 'row'}}>
          <TouchableOpacity style={{backgroundColor: '#333333', borderWidth:4, width:(Dimensions.get('window').height/7),height:(Dimensions.get('window').height/7), alignItems: 'center', justifyContent: 'center', flex:1,borderRadius:100}}><Text style={{fontSize: 40, color: 'white'}}>4</Text></TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#333333', borderWidth:4, width:(Dimensions.get('window').height/7),height:(Dimensions.get('window').height/7), alignItems: 'center', justifyContent: 'center', flex:1,borderRadius:100}}><Text style={{fontSize: 40, color: 'white'}}>5</Text></TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#333333', borderWidth:4, width:(Dimensions.get('window').height/7),height:(Dimensions.get('window').height/7), alignItems: 'center', justifyContent: 'center', flex:1,borderRadius:100}}><Text style={{fontSize: 40, color: 'white'}}>6</Text></TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: 'orange', borderWidth:4, width:(Dimensions.get('window').height/7),height:(Dimensions.get('window').height/7), alignItems: 'center', justifyContent: 'center', flex:1,borderRadius:100}}><Text style={{fontSize: 40, color: 'white'}}>-</Text></TouchableOpacity>
        </View>
        <View style={{backgroundColor: 'black', flex:1, flexDirection: 'row'}}>
          <TouchableOpacity style={{backgroundColor: '#333333', borderWidth:4, width:(Dimensions.get('window').height/7),height:(Dimensions.get('window').height/7), alignItems: 'center', justifyContent: 'center', flex:1,borderRadius:100}}><Text style={{fontSize: 40, color: 'white'}}>1</Text></TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#333333', borderWidth:4, width:(Dimensions.get('window').height/7),height:(Dimensions.get('window').height/7), alignItems: 'center', justifyContent: 'center', flex:1,borderRadius:100}}><Text style={{fontSize: 40, color: 'white'}}>2</Text></TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#333333', borderWidth:4, width:(Dimensions.get('window').height/7),height:(Dimensions.get('window').height/7), alignItems: 'center', justifyContent: 'center', flex:1,borderRadius:100}}><Text style={{fontSize: 40, color: 'white'}}>3</Text></TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: 'orange', borderWidth:4, width:(Dimensions.get('window').height/7),height:(Dimensions.get('window').height/7), alignItems: 'center', justifyContent: 'center', flex:1,borderRadius:100}}><Text style={{fontSize: 40, color: 'white'}}>+</Text></TouchableOpacity>
        </View>
        <View style={{backgroundColor: 'black', flex:1, flexDirection: 'row'}}>
        <TouchableOpacity style={{backgroundColor: '#333333', borderWidth:4, width:(Dimensions.get('window').height/7),height:(Dimensions.get('window').height/7), alignItems: 'center', justifyContent: 'center', flex:2,borderRadius:100}}><Text style={{fontSize: 40, color: 'white'}}>0</Text></TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#333333', borderWidth:4, width:(Dimensions.get('window').height/7),height:(Dimensions.get('window').height/7), alignItems: 'center', justifyContent: 'center', flex:1,borderRadius:100}}><Text style={{fontSize: 40, color: 'white'}}>.</Text></TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: 'orange', borderWidth:4, width:(Dimensions.get('window').height/7),height:(Dimensions.get('window').height/7), alignItems: 'center', justifyContent: 'center', flex:1,borderRadius:100}}><Text style={{fontSize: 40, color: 'white'}}>=</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}