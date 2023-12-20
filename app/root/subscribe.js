import { View, Text, Pressable } from 'react-native'
import { Stack, useRouter } from 'expo-router';

const router = useRouter()

const Subscribe = () => {
  return (
   <>
      <Stack.Screen
         options={{
            headerTitle: 'Subscribe',
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
         }}/>
      <View className="flex-1 items-center justify-center bg-white">
         <Text className="text-gray-500 text-4xl mb-2">Sign In</Text>
         <Text className="text-black text-md mb-6">Funnel d'inscription</Text>

         <View className="flex-row w-full justify-center">
            <Pressable
               className="w-3/5 bg-sky-500 p-2 active:bg-sky-600 rounded-md"
               onPress={() => router.push(`/root/login`)}>
                  <Text className="text-lg fonsem text-white text-center">Déjà membre ?</Text>
            </Pressable>
         </View>
         
      </View>
   </>
  )
}

export default Subscribe