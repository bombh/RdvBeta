import { Pressable } from 'react-native'
import { ChatBubbleLeftEllipsisIcon } from 'react-native-heroicons/solid'

const ButtonChat = () => {

   return (
      <Pressable className="bg-white rounded-full w-10 h-10 border border-cyan-500 flex items-center justify-center active:bg-cyan-900 active:border-cyan-900">
         <ChatBubbleLeftEllipsisIcon color={"#06b6d4"} />
      </Pressable>
   )
}

export default ButtonChat