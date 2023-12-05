import { View, Text, Pressable } from 'react-native'
import { Stack, useRouter } from 'expo-router';

const router = useRouter()

const SignIn = () => {
  return (
   <>
      <Stack.Screen
         options={{
            headerTitle: 'Sign In',
            headerBackTitleVisible: false,
         }}/>
      <View className="flex-1 items-center justify-center bg-white">
         <Text className="text-gray-500 text-4xl mb-2">Sign In</Text>
         <Text className="text-black text-md mb-6">Funnel d'inscription</Text>


         <View className="flex-row">
         <Pressable
            className="w-3/5 bg-sky-500 p-2 active:bg-sky-600 rounded-md"
            onPress={() => router.push(`/public/LogIn`)}>
                  <Text className="text-lg fonsem text-white text-center">Déjà membre ?</Text>
            </Pressable>
         </View>
         
      </View>
   </>
  )
}

export default SignIn