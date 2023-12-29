import { Pressable } from 'react-native'
import { HeartIcon } from 'react-native-heroicons/solid'

const ButtonFlash = ( size ) => {

  return (
   <Pressable className="bg-white rounded-full w-14 h-14 border border-pink-500 items-center justify-center active:bg-pink-900 active:border-pink-900">
      <HeartIcon size={30} color={"#EC4899"} />
   </Pressable>
  )
}

export default ButtonFlash