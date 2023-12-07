import { Pressable } from 'react-native'
import { HeartIcon } from 'react-native-heroicons/solid'

const ButtonFlash = () => {
  return (
   <Pressable className="bg-white rounded-full w-10 h-10 border border-pink-500 items-center justify-center active:bg-pink-900 active:border-pink-900">
      <HeartIcon color={"#EC4899"} />
   </Pressable>
  )
}

export default ButtonFlash