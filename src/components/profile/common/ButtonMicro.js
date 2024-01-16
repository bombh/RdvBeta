import { Pressable } from 'react-native'
import { MicrophoneIcon } from 'react-native-heroicons/solid'
import colors from 'tailwindcss/colors'

const ButtonPlus = () => {

   return (
      <Pressable className="bg-white rounded-full w-14 h-14 border border-blue-500 flex items-center justify-center active:bg-blue-900 active:border-blue-900">
         <MicrophoneIcon size={32} color={colors.blue[500]} />
      </Pressable>
   )
}

export default ButtonPlus