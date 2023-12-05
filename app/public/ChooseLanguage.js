import { View, Text, Pressable } from 'react-native'
import { Stack } from 'expo-router/stack'
import { useRouter } from "expo-router"

const router = useRouter()


const ChooseLanguage = () => {
  return (
   <>
      <Stack.Screen options={{
         headerTitle: 'Rendez-Vous',
      }} />
      
      <View className="flex-1 items-center justify-center bg-white">
         <Text className="text-gray-500 text-4xl mb-2">Home</Text>
         <Text className="text-black text-md mb-6">Choix de langue</Text>

         
         <View className="flex-row mb-3">
            <Pressable
               className="w-3/5 bg-sky-500 p-2 active:bg-sky-600 rounded-md"
               onPress={ () => router.push(`/public/SignIn`)}>
               <Text className="text-lg text-white text-center">Français</Text>
            </Pressable>
         </View>

         <View className="flex-row">
         <Pressable
               className="w-3/5 bg-sky-500 p-2 active:bg-sky-600 rounded-md"
               onPress={ () => router.push(`/public/SignIn`)}>
                  <Text className="text-lg fonsem text-white text-center">Nederlands</Text>
            </Pressable>
         </View>
         
      </View>
   </>
  )
}

export default ChooseLanguage