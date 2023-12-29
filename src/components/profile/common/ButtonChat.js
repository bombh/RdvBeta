import { Pressable } from 'react-native'
import { ChatBubbleLeftEllipsisIcon } from 'react-native-heroicons/solid'

const ButtonChat = () => {

   return (
      <Pressable className="bg-white rounded-full w-14 h-14 border border-cyan-500 flex items-center justify-center active:bg-cyan-900 active:border-cyan-900">
         <ChatBubbleLeftEllipsisIcon size={32} color={"#06b6d4"} />
      </Pressable>
   )
}

export default ButtonChat