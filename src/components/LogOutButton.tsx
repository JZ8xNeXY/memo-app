import {TouchableOpacity,Text,StyleSheet,Alert} from 'react-native'
import { signOut } from 'firebase/auth'
import { auth } from '../config'
import { router, Router } from 'expo-router'


const handlePress = ():void => {
  signOut(auth)
  .then(() =>{
    router.replace('/auth/log_in')
  })
  .catch((error) => {
    Alert.alert('ログアウトに失敗しました')
  })

}

const LogOutButton = ():JSX.Element => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>ログアウト</Text>
    </TouchableOpacity>
  )
}

export default LogOutButton

const styles = StyleSheet.create({
  text:{
    fontSize:12,
    lineHeight:24,
    color:'rgba(255,255,255,0.7)'
  }
})

