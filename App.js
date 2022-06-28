import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { styles } from "./src/Home/styles"; 

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function App(){
  const[numero, setNumero] = useState(0);
  const[botao, setBotao] = useState('Começar');
  const[ultimo, setUltimo] = useState(null);

  function vai(){

    if(timer !==null){
      //Aqui vai parar o timer
      clearInterval(timer);
      timer = null;

      setBotao('Começar');
    }else{
      //Comecar a girar o timer...
      timer = setInterval(()=>{
        ss++;

        if(ss == 60){
          ss = 0;
          mm++;
        }

        if(mm == 60){
          mm = 0;
          hh++;
        }


        let format =
        (hh < 10 ? '0' + hh : hh) + ':'
        + (mm < 10 ? '0' + mm : mm) + ':'
        + (ss < 10 ? '0' + ss : ss);

        setNumero(format);

      },100);
      setBotao('Parar');
    }
  }

  function limpar(){
    if(timer !==null){
      //Parar o timer
      clearInterval(timer);
      timer = null;
    }

    setUltimo(numero);
    setNumero(0);
    ss = 0;
    mm = 0;
    hh = 0;
    setBotao('Iniciar');
  }

  return(
    <View style={styles.container}>

      <Image
        source={require('./src/crono.png')}
      />

      <Text style={styles.timer}>{numero}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={vai}>
          <Text style={styles.btnTexto}>{botao}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={limpar}>
          <Text style={styles.btnTexto}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.areaUltima}>
        <Text style={styles.textoCorrida}>
          { ultimo ? 'Último tempo: ' + ultimo: '' }
        </Text>
      </View>
    </View>// { ultimo ? 'Ultimo tempo: ' + ultimo: '' } caso o ultimo esteja vazio, não apresentará nada
  );
}