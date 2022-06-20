import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function App(){
  return(
    <View style={styles.container}>

      <Image
        source={require('./src/crono.png')}
      />

      <Text style={styles.timer}>00:00:00</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTexto}>Iniciar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTexto}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.areaUltima}>
        <Text style={styles.textoCorrida}>Ultima marcação 00:00:30</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer:{
    marginTop: -160,
    fontSize: 45,
    fontWeight: 'bold',
    color: '#FFF',
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 130,
    height: 40,
  },
  btn:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  areaUltima:{
    marginTop: 40,
  },
  textoCorrida:{
    fontSize: 23,
    color: '#FFF',
    fontStyle: 'italic',
  },
})