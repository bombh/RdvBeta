import { Pressable } from 'react-native'
import { ChatBubbleLeftEllipsisIcon } from 'react-native-heroicons/solid'

const ButtonFlash = () => {
  return (
   <Pressable className="bg-white rounded-full w-10 h-10 border border-sky-500 flex items-center justify-center active:bg-sky-900 active:border-sky-900">
      <ChatBubbleLeftEllipsisIcon color={"#0ea5e9"} />
   </Pressable>
  )
}

export default ButtonFlash