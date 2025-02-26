import {View, Text,StyleSheet} from 'react-native'

const Header = () :JSX.Element=> {
  return (
    <View style={styles.header}>
      <View style={styles.headerInner}>
        <Text style={styles.headerTitle}>Memo App</Text>
        <Text style={styles.headerRight}>ログアウト</Text>
      </View>
    </View>
  )
}

export default Header


const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 104,
    backgroundColor: "#467FD3",
    justifyContent: "flex-end"
  },
  headerInner: {
    alignItems: "center"
  },
  headerTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: "bold",
    color: "#ffffff"
  },
  headerRight: {
    position: "absolute",
    right: 16,
    bottom: 16,
    color: "rgba(255,255,255,0.7)"
  }
})