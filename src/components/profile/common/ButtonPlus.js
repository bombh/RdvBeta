import { Pressable } from 'react-native'
import { PlusIcon } from 'react-native-heroicons/solid'
import colors from 'tailwindcss/colors'

const ButtonPlus = () => {

   return (
      <Pressable className="bg-white rounded-full w-14 h-14 border border-amber-500 flex items-center justify-center active:bg-amber-900 active:border-amber-900">
         <PlusIcon size={32} color={colors.amber[500]} />
      </Pressable>
   )
}

export default ButtonPlus