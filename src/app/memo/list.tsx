import { View, StyleSheet } from "react-native"
import  Header  from "../../components/Header"
import MemoListItem from "../../components/MemoListItem"
import CircleButton from "../../components/CircleButton"
import Feather from '@expo/vector-icons/Feather'

const List = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem /> 
      </View>
      <CircleButton>
        <Feather name='plus' size={40}/>
      </CircleButton>
    </View>
  )
}

export default List

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  }
})