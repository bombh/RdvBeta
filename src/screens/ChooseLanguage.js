import { View, Text, Pressable } from 'react-native'
import { Stack } from 'expo-router/stack'
import { useRouter } from "expo-router"


const ChooseLanguage = () => {
   
   const router = useRouter()
   
   return (
   <> 
      <View className="flex-1 items-center justify-center bg-white">
         <Text className="text-gray-500 text-4xl mb-2">Rendez-Vous</Text>
         <Text className="text-black text-sm mb-6">Select your language</Text>

         
         <View className="flex-row w-full justify-center mb-3">
            <Pressable
               className="w-3/5 bg-sky-500 p-2 active:bg-sky-600 rounded-md"
               onPress={ () => router.push(`/register`)}>
               <Text className="text-lg text-white text-center">Français</Text>
            </Pressable>
         </View>

         <View className="flex-row w-full justify-center">
            <Pressable
               className="w-3/5 bg-sky-500 p-2 active:bg-sky-600 rounded-md"
               onPress={ () => router.push(`/register`)}>
                  <Text className="text-lg fonsem text-white text-center">Nederlands</Text>
            </Pressable>
         </View>
         
      </View>
   </>
  )
}

export default ChooseLanguage