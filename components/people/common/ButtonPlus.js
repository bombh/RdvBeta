import { Pressable } from 'react-native'
import { PlusIcon } from 'react-native-heroicons/solid'

const ButtonPlus = () => {

   return (
      <Pressable className="bg-white rounded-full w-12 h-12 border border-amber-500 flex items-center justify-center active:bg-amber-900 active:border-amber-900">
         <PlusIcon color={"#f59e0b"} />
      </Pressable>
   )
}

export default ButtonPlus