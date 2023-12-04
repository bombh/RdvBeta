import { Pressable, Button, Text, View } from "react-native";
import {API_URL} from "@env"
import { styled } from 'nativewind';

// Quel interet ???
const TWPressable = styled(Pressable)
const TWText = styled(Text)


const Page = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-gray-500 text-5xl">Rendez-Vous</Text>
      <Text className="text-amber-500 text-lg mb-5">A new story starts now...</Text>

      
      <View className="flex-row mb-3">
            <Pressable className="w-3/5 bg-amber-500 p-2 active:bg-amber-600 rounded-md">
               <Text className="text-lg text-white text-center">Français</Text>
            </Pressable>
      </View>

      <View className="flex-row">
         <Pressable className="w-3/5 bg-amber-500 p-2 active:bg-amber-600 rounded-md">
               <Text className="text-lg fonsem text-white text-center">Nederlands</Text>
         </Pressable>
      </View>
      
    </View>
  );
}

export default Page
