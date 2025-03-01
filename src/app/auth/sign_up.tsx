import { 
  View,Text,TextInput,StyleSheet,TouchableOpacity,Alert
 } from "react-native"
import Button from "../../components/Button"
import { Link,router } from "expo-router"
import { useState } from "react"
import { auth } from "../../config"
import { createUserWithEmailAndPassword } from "firebase/auth"

const handlePress = (email:string,password:string) :void => {
  console.log(email,password)
  createUserWithEmailAndPassword(auth,email,password)
  .then((userCredential) => {
    console.log(userCredential.user.uid)
    router.replace('/memo/list')
  })
  .catch((error) => {
    const {code,message} = error
    console.log(code,message)
    Alert.alert(message)
  })

} 



const SignUp = ():JSX.Element => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  return (
   <View style={styles.container}>
    <View style={styles.inner}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput 
        style={styles.input} 
        value={email}
        onChangeText={(e) => {setEmail(e)}}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Email Address"
        textContentType="emailAddress"
      />
      <TextInput 
        style={styles.input}  
        value={password}
        onChangeText={(e) => setPassword(e)}
        autoCapitalize="none"
        secureTextEntry
        placeholder="Password"
        textContentType="password"
      />
      <Button label='submit' onPress={() => {handlePress(email,password)}} />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Already registered?</Text>
        <Link href='/auth/log_in' asChild>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Log In</Text>
          </TouchableOpacity>
        </Link>


      </View>
    </View>
   </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f0f4f8'
  },
  inner:{
    paddingVertical:24,
    paddingHorizontal:27
  },
  title:{
    fontSize:24,
    lineHeight:32,
    fontWeight:'bold',
    marginBottom:24
  },
  input:{
    backgroundColor:'#ffffff',
    borderWidth:1,
    borderColor:'#dddddd',
    height:48,
    padding:8,
    fontSize:16,
    marginBottom:16
  },
  footer:{
    flexDirection:'row'
  },
  footerText:{
    fontSize:14,
    lineHeight:24,
    marginRight:8,
    color:'#000000'
  },
  footerLink:{
    fontSize:14,
    lineHeight:24,
    marginRight:8,
    color:'#467fd3'

  }
 
})