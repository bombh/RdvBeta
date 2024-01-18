import { Pressable, Text, View } from 'react-native'
import colors from 'tailwindcss/colors'
import { CameraIcon } from 'react-native-heroicons/solid'

const ButtonPicture = ( {onPress }) => {

   return (
      <Pressable onPress={onPress} className="bg-white rounded-full w-12 h-12 border border-neutral-300 flex items-center justify-center active:bg-neutral-900 active:border-neutral-900">
         <CameraIcon size={30} color={colors.neutral[400]} />

         {/* Online status */}
         <View className="flex items-center justify-center rounded-full bg-amber-500 h-5 absolute -top-1 left-8 px-2">
            <Text className='text-white'>4</Text>
         </View>

      </Pressable>
   )
}

export default ButtonPicture