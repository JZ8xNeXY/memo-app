import { 
  View,TextInput,StyleSheet,KeyboardAvoidingView
 } from "react-native"
import Header from "../../components/Header"
import CircleButton from "../../components/CircleButton"
import Icon from "../../components/Icon"
import { router } from "expo-router"


const handlePress = ():void =>{
  router.back()
 }
 


const Edit = ():JSX.Element => {
  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <Header />
      <View style={styles.inputContainer}>
        <TextInput multiline style={styles.input} value={'買い物\nリスト'}  />
      </View>
      <CircleButton onPress={handlePress}>
        <Icon name='check' size={40} color='#ffffff' />
      </CircleButton>
    </KeyboardAvoidingView>
  )
}

export default Edit

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffffff'
  },
  inputContainer:{
    paddingVertical:32,
    paddingHorizontal:27,
    flex:1
  },
  input:{
    flex:1,
    textAlignVertical:'top',
    fontSize:16,
    lineHeight:24
  }
})