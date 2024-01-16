import { Pressable } from 'react-native'
import { HeartIcon } from 'react-native-heroicons/solid'
import colors from 'tailwindcss/colors'

const ButtonFlash = ( size ) => {

  return (
   <Pressable className="bg-white rounded-full w-14 h-14 border border-pink-500 items-center justify-center active:bg-pink-900 active:border-pink-900">
      <HeartIcon size={32} color={colors.pink[500]} />
   </Pressable>
  )
}

export default ButtonFlash