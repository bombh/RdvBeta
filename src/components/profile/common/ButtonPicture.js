import { Pressable, Text, View } from 'react-native'
import colors from 'tailwindcss/colors'
import { CameraIcon } from 'react-native-heroicons/solid'

const ButtonPicture = ({ total }) => {
   
   return (
      <View className="bg-white relative rounded-full w-12 h-12 border border-neutral-300 flex items-center justify-center">
         
         <CameraIcon size={30} color={colors.neutral[500]} />

         {/* Num picture */}
         { total > 0
            ? <View className="flex items-center justify-center rounded-full bg-amber-500 h-5 absolute -top-1 left-8 px-2">
               <Text className='text-white'>{total}</Text>
            </View>
            : null
         }

      </View>
   )
}

export default ButtonPicture