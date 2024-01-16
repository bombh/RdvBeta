import { Pressable } from 'react-native'
import colors from 'tailwindcss/colors'
import { ChatBubbleLeftEllipsisIcon } from 'react-native-heroicons/solid'

const ButtonChat = ( {onPress }) => {

   return (
      <Pressable onPress={onPress} className="bg-white rounded-full w-14 h-14 border border-cyan-500 flex items-center justify-center active:bg-cyan-900 active:border-cyan-900">
         <ChatBubbleLeftEllipsisIcon size={32} color={colors.cyan[500]} />
      </Pressable>
   )
}

export default ButtonChat