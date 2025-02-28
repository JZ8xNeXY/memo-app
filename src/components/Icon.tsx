import {createIconSetFromIcoMoon} from '@expo/vector-icons'
import {useFonts} from 'expo-font'

// 実際のアイコンフォントデータ
import fontData from '../../assets/fonts/icomoon.ttf'

//アイコンの「名前」と「フォントのコード」を定義
import fontSelection from '../../assets/fonts/selection.json'

//createIconSetFromIcoMoon でカスタムアイコンを作成
const CustomIcon = createIconSetFromIcoMoon(
  fontSelection,  // selection.json（アイコンの辞書）
  "IcoMoon",      // フォント名
  "icomoon.ttf"   // 実際のアイコンフォント
)

interface Props{
  name:string
  size:number
  color:string
}

const Icon = (props:Props):JSX.Element | null => {
  const {name,size,color} = props

  // useFontsを使用してカスタムフォントを読み込む
  const [fontLoaded] = useFonts({
    IcoMoon:fontData
  })
  //フォントが読みこまれなかったらnullを返す
  if (!fontLoaded){
    return null
  }

  return (
    < CustomIcon name = {name} size ={size} color = {color}/>
  )
}

export default Icon