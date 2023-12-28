import { useLayoutEffect } from 'react'
import { View, Text, Pressable } from 'react-native'
import { useRouter, useNavigation } from 'expo-router'

const DetailScreen = () => {

   const router = useRouter()
   const navigation = useNavigation()

   useLayoutEffect(() => {
      navigation.setOptions({
         headerShown: false,
      })
   }, [])

   return (
   
      <View className="flex-1 items-center justify-center bg-white">
         <Text className='text-2xl text-neutral-500 pb-3'>Detail</Text>
         <Text className='text-md text-neutral-800 pb-3'>(root)/auth/home/detail</Text>

         <View className="flex-row w-full justify-center">
            <Pressable
               className="w-3/5 bg-sky-500 p-2 active:bg-sky-600 rounded-md"
               onPress={() => router.back()}>
                  <Text className="text-lg fonsem text-white text-center">Back</Text>
            </Pressable>
         </View>
      </View>
      
   )
}

export default DetailScreen