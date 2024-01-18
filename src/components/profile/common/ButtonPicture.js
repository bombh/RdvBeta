import { Pressable, Text, View } from 'react-native'
import colors from 'tailwindcss/colors'
import { CameraIcon } from 'react-native-heroicons/solid'

const ButtonPicture = ( {onPress }) => {

   return (
      <View className="bg-white rounded-full w-12 h-12 border border-neutral-300 flex items-center justify-center">
         
         <CameraIcon size={30} color={colors.neutral[400]} />

         {/* Num picture */}
         <View className="flex items-center justify-center rounded-full bg-amber-500 h-5 absolute -top-1 left-8 px-2">
            <Text className='text-white'>4</Text>
         </View>

      </View>
   )
}

export default ButtonPicture