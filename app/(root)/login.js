import { View, Text, Pressable } from 'react-native'
import { Stack, useRouter } from 'expo-router';

const router = useRouter()

const LogIn = () => {
  return (
   <>
      <Stack.Screen
         options={{
            headerShown: true,
            headerTitle: 'Log In',
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
         }} />
      <View className="flex-1 items-center justify-center bg-white">
         <Text className="text-gray-500 text-4xl mb-2">Log In</Text>
         <Text className="text-black text-md mb-6">Form login</Text>

         <View className="flex-row w-full justify-center">
            <Pressable
               className="w-3/5 bg-sky-500 p-2 active:bg-sky-600 rounded-md"
               onPress={() => router.replace('/auth/home')}>
                  <Text className="text-lg fonsem text-white text-center">Log in</Text>
            </Pressable>
         </View>
         
      </View>
   </>
  )
}

export default LogIn