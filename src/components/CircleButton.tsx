import {View,Text,StyleSheet} from 'react-native'


interface Props{
  children: string
}

const CircleButton = (props:Props):JSX.Element => {
  const {children} = props
  
  return (
    <View style={styles.circleButton}>
      <Text style={styles.circleButtonLabel}>{children}</Text>
    </View>
  )
}

export default CircleButton

const styles = StyleSheet.create({
  circleButton: {
    width: 64,
    height: 64,
    backgroundColor: "#467FD3",
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 40,
    bottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.65,
    elevation: 6
  },
  circleButtonLabel: {
    color: "#ffffff",
    fontSize: 40,
    lineHeight: 40
  }
})