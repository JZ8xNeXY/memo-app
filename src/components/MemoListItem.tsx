import {View, Text, StyleSheet,TouchableOpacity} from 'react-native'
import Icon from './Icon'

const MemoListItem = ():JSX.Element => {
  return (
    <View style={styles.memoListItem}>
    <View>
      <Text style={styles.memoListItemTitle}>買い物リスト</Text>
      <Text style={styles.memoListItemDate}>2023年10月1日10:00</Text>
    </View>
    <TouchableOpacity>
      <Icon name='delete' size={32} color='#B0B0B0' />
    </TouchableOpacity>
  </View>
  )
}

export default MemoListItem



const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 19,
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.15)"
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: "#848484"
  }
})