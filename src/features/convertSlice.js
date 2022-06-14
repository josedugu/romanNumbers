import { createSlice } from '@reduxjs/toolkit'

let romans = new Map();
romans.set("I", 1);
romans.set("V", 5);
romans.set("X", 10);
romans.set("L", 50);
romans.set("C", 100);
romans.set("D", 500);
romans.set("M", 1000);


export const convertSlice = createSlice({

  name: 'convert',
  initialState: {
    value: '',
  },

  reducers: {
    romanToDecimal: (state,action) => {
      let counter = {
        I:0,
        V:0,
        X:0,
        L:0,
        C:0,
        D:0,
        M:0,
    }
      let counterValues = 0
      let wrongNumber = []

      let isNumber = parseInt(action.payload) ? true : false;
      let romNumbers = []
      let result = 0
      if(isNumber) {
        alert('No se aceptan números')} 
         
      let input = action.payload.toUpperCase();

      //setting the roman number into a list of integer numbers
      for (let i = 0; i < input.length; i++) {
      romNumbers.push(romans.get(input[i]))
      }

      //validate the roman number does not include more than 3 times the same number ex VIIII
      for (let i = 0; i < romNumbers.length; i++) {
        if(romNumbers[i] === 1){counter["I"]++}
        if(romNumbers[i] === 5){counter["V"]++}
        if(romNumbers[i] === 10){counter["X"]++}
        if(romNumbers[i] === 50){counter["L"]++}
        if(romNumbers[i] === 100){counter["C"]++}
        if(romNumbers[i] === 500){counter["D"]++}
        if(romNumbers[i] === 1000){counter["M"]++}
        }
    
      counterValues = Object.values(counter)
      for (let i = 0; i < counterValues.length; i++) {
          if(counterValues[i]>3){
            alert("Incorrect roman number");
          }
      
      }

      //validate the substractions are accurate ex IXIX is incorrect, but XVIV is correct 
      for (let i = 0; i < romNumbers.length; i++){
        if(romNumbers[i]<romNumbers[i +1]){
            wrongNumber.push(romNumbers[i])}
        }
        if (wrongNumber[0] <= wrongNumber[1]) {alert("Incorrect roman number")}


      //If the roman number is correct and does not include substractions, go to sum all numbers
      for (let i = 0; i < romNumbers.length; i++) {
        result += romNumbers[i]
        if(romNumbers[i]>=romNumbers[i +1]){return result}
      // when there is a low number before a bigger number ex: IV
        if(romNumbers[i]<romNumbers[i +1]){
          return result - romNumbers[i] -romNumbers[i]
        }
        } 
      },
    

      
    decimalToRoman: (state,action) => {
      
      let isLetter = parseInt(action.payload) ? false : true;
  
      if (isLetter) {
          alert('No se acepta letras')
        } else {
          state.value = []}  
  
          let romanUnits = {
            I:1, II:2, III:3, IV:4, V:5, VI:6, VII:7, VIII:8, XI:9, "":0
        }
        
        let romanTens= {
            X:10, XX:20, XXX:30, XL:40, L:50, LX:60, LXX:70, LXXX:80, XC:90,"":0
        }
        
        let romanHoundreds = {
            C:100, CC:200, CCC:300, CD:400, D:500, DC:600, DCC:700, DCCC:800, CM:900,"":0
        }
        
        let romanThousands = {
            M:1000, MM:2000, MMM:3000
        }
        
        let number = action.payload
        //let stringNumber = number.toString()
        let arrNumber =[]
        for (let i = 0; i < number.length; i++) {
        
            arrNumber.push(parseInt(number[i]))
        }
        
        let result = ""
        let size = arrNumber.length
        let romanNumber = []
        if(size === 1){
            for ( const [key, value] of Object.entries(romanUnits)){
                if (value == arrNumber[0]){romanNumber.push(key);}}
                result= romanNumber[0]
                return result
            }
        if(size === 2){
            arrNumber[0] = arrNumber[0]*10
            for ( const [key, value] of Object.entries(romanTens)){
                if (value == arrNumber[0]){romanNumber.push(key);}}
            for ( const [key, value] of Object.entries(romanUnits)){
                if (value == arrNumber[1]){romanNumber.push(key);}}
                result= romanNumber[0] + romanNumber[1];
                return result
            }
        
        if(size === 3){
            arrNumber[0] = arrNumber[0]*100
            arrNumber[1] = arrNumber[1]*10
            for ( const [key, value] of Object.entries(romanHoundreds)){
                if (value == arrNumber[0]){romanNumber.push(key);}}
            for ( const [key, value] of Object.entries(romanTens)){
                if (value == arrNumber[1]){romanNumber.push(key);}}
            for ( const [key, value] of Object.entries(romanUnits)){
                if (value == arrNumber[2]){romanNumber.push(key);}}
                result= romanNumber[0] + romanNumber[1]+romanNumber[2];
                return result
                }
        
        if(size === 4){
            arrNumber[0] = arrNumber[0]*1000
            arrNumber[1] = arrNumber[1]*100
            arrNumber[2] = arrNumber[2]*10
            for ( const [key, value] of Object.entries(romanThousands)){
                if (value == arrNumber[0]){romanNumber.push(key);}}
            for ( const [key, value] of Object.entries(romanHoundreds)){
                if (value == arrNumber[1]){romanNumber.push(key);}}
            for ( const [key, value] of Object.entries(romanTens)){
                if (value == arrNumber[2]){romanNumber.push(key);}}
            for ( const [key, value] of Object.entries(romanUnits)){
                if (value == arrNumber[3]){romanNumber.push(key);}}
                result= romanNumber[0] + romanNumber[1]+romanNumber[2]+ romanNumber[3];
                return result
                        }
      } 
    } 
})

export const { romanToDecimal, decimalToRoman } = convertSlice.actions

export default convertSlice.reducer