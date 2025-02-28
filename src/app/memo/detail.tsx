import { View,Text,ScrollView,StyleSheet } from "react-native" 
import  Header  from "../../components/Header"
import CircleButton from "../../components/CircleButton"
import Feather from '@expo/vector-icons/Feather'
import Icon from '../../components/Icon'


const Detail = ():JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2023年10月14日 10:00</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          買い物リスト
          書体やレイアウトなどを確認するために用います。書体やレイアウトなどを確認するために用います。書体やレイアウトなどを確認するために用います。</Text>
      </ScrollView>
      <CircleButton style={{top:160,bottom:'auto'}}>
      <Icon  name='pencil' size={40} color='#ffffff' />
      </CircleButton>
    </View>
    
  )
}

export default Detail

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  memoHeader:{
    backgroundColor:'#467FD3',
    height:96,
    justifyContent:'center',
    paddingVertical:24,
    paddingHorizontal:19
  },
  memoTitle:{
    color:'#fff',
    fontSize:20,
    lineHeight:32,
    fontWeight:'bold'
  },
  memoDate:{
    color:'#ffff',
    fontSize:12,
    lineHeight:16
  },
  memoBody:{
    paddingVertical:32,
    paddingHorizontal:27
  },
  memoBodyText:{
    fontSize:16,
    lineHeight:24,
    color:'#000'
  }
})