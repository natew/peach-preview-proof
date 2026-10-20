import React, {useState} from 'react';
import {registerRootComponent} from 'expo';
import {View,Text,Pressable} from 'react-native';
function App(){const [count,setCount]=useState(0);return <View style={{flex:1,backgroundColor:'#eaf4ff',justifyContent:'center',alignItems:'center',gap:24}}><Text style={{fontSize:28}}>Counter preview version two</Text><Text style={{fontSize:24}}>Count: {count}</Text><Pressable testID="increment" accessibilityRole="button" accessibilityLabel="Increment count" onPress={()=>setCount(count+1)} style={{padding:20,backgroundColor:'#ffc28a',borderRadius:12}}><Text>Increment count</Text></Pressable></View>}
registerRootComponent(App);
