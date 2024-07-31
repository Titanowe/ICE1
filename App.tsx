import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>I will pass all the moduals</Text>
      <Text style={styles.subheadingText}>1.starting with MAST2115</Text>
      <Text style={styles.subheadingText}>2.UI & UX design</Text>
      <Text style={styles.subheadingText}>3.WED</Text>
      <Text style={styles.subheadingText}>4.XHAW</Text>


      <Text></Text>
      <Text></Text>
      <Text style={styles.hobbiesText}>HOBBIES</Text>
      <Text style={styles.hobbiesText}>Gamming</Text>
      <Text style={styles.hobbiesText}>Combat sports</Text>
      <Text style={styles.hobbiesText}>reading</Text>
      <Text style={styles.hobbiesText}>Cooking</Text>
      <Text style={styles.headingText2}>TASK</Text>
      <Text style={styles.taskText}>1.cooking</Text>
      <Text style={styles.taskText}>2.washing the car</Text>
      <Text style={styles.taskText}>3.make bread</Text>


   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    alignContent:'center',
   
  },
  headingText:{
    fontSize:30,
    color:"white",
    fontWeight:'bold',
    justifyContent:'center',
    alignContent:'center'
  },
  subheadingText:{
    fontSize:20,
    color:"lime",
    fontStyle:"italic",
    fontWeight:"bold"
  },
  hobbiesText:{
    fontSize:30,
    color:'pink',
    fontStyle:"normal",
    fontWeight:"600",
    textAlign:"right"
  },
  taskText:{
    fontSize:60,
    color:'yellow',
    fontWeight:'800',
    textAlign:'center',
    
  },
  headingText2:{
    fontSize:50,
    fontWeight:'500',
    textAlign:"center",
    color:'red'
  }

});
