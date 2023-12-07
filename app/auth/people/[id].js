import { View, Text, Image, ScrollView, Pressable } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from 'expo-router'

import { ChevronLeftIcon, CameraIcon } from 'react-native-heroicons/solid'

import ButtonChat from '../../../components/people/common/ButtonChat'
import ButtonFlash from '../../../components/people/common/ButtonFlash'
import ButtonMicro from '../../../components/people/common/ButtonMicro'
import ButtonPlus from '../../../components/people/common/ButtonPlus'

const ProfileDetail = () => {

   const navigation = useNavigation()

   useLayoutEffect(() => {
      navigation.setOptions({
         headerShown: false,
      })
   }, [])

   return (
      <ScrollView
         className="bg-white"
         contentContainerStyle={{
            paddingBottom: 30,
         }}   
      >
         
         <View className="relative">
            <Image
               source={{
                  uri: 'https://cdn-devfr-img02.rendez-vous.be/photos/RV_BEFR_thumbs/P_1537812_1_991640.jpg'
               }}
               className="w-full aspect-square rounded-2xl"
            />

               {/* Back button */}
               <Pressable
                  className="absolute top-12 left-3 bg-black/50 rounded-full w-10 h-10 border border-white/70 items-center justify-center active:bg-black active:border-white"
                  onPress={() => navigation.goBack()}
               >
                     <ChevronLeftIcon color={"#FFF"} size={20} />
               </Pressable>

               {/* Picture button */}
               <Pressable
                  className="absolute top-12 right-3 bg-black/50 rounded-full w-10 h-10 border border-white/70 items-center justify-center active:bg-black active:border-white"
               >
                     <CameraIcon color={"#FFF"} size={20} />
               </Pressable>
               
         </View>

         {/* Action view */}
         <View className="flex-row items-center justify-evenly -mt-5 ">

               <ButtonChat />
               <ButtonMicro />
               <ButtonFlash />
               <ButtonPlus />

         </View>

         {/* Infos */}
         <View className="px-3 pb-3">
            <Text className="text-center text-2xl pt-3 text-gray-400">Danscesca</Text>
            <Text className="text-sm text-center text-gray-600">31 ans - Bruxelles</Text>
         </View>

         <View className="px-6 pb-3">
            <Text className="text-lg text-justify leading-6 text-gray-400">Je suis une personne très gentille et je cherche à rencontrer des gens sympas. Je suis une personne très gentille et je cherche à rencontrer des gens sympas</Text>
         </View>

         <View className="my-5 p-2 bg-cyan-500">
            <Text className="text-lg text-center leading-6 text-white">Indispensable</Text>
         </View>

         <View className="px-6 pb-3">
            <Text className="text-xs text-amber-500">Je suis</Text>
            <Text className="">une femme</Text>
         </View>

         <View className="px-6 pb-3">
            <Text className="text-xs text-amber-500">Je cherche</Text>
            <Text className="">une homme</Text>
         </View>
         <View className="px-6 pb-3">
            <Text className="text-xs text-amber-500">Personnalité</Text>
            <Text className="">Optimiste</Text>
         </View>
         <View className="px-6 pb-3">
            <Text className="text-xs text-amber-500">Taille / Poids</Text>
            <Text className="">1m69 / 61kg</Text>
         </View>

         <View className="my-5 p-2 bg-cyan-500">
            <Text className="text-lg text-center leading-6 text-white">Indispensable</Text>
         </View>

         <View className="px-6 pb-3">
            <Text className="text-xs text-amber-500">Je suis</Text>
            <Text className="">une femme</Text>
         </View>

         <View className="px-6 pb-3">
            <Text className="text-xs text-amber-500">Je cherche</Text>
            <Text className="">une homme</Text>
         </View>
         <View className="px-6 pb-3">
            <Text className="text-xs text-amber-500">Personnalité</Text>
            <Text className="">Optimiste</Text>
         </View>
         <View className="px-6 pb-3">
            <Text className="text-xs text-amber-500">Taille / Poids</Text>
            <Text className="">1m69 / 61kg</Text>
         </View>

         <View className="my-5 p-2 bg-cyan-500">
            <Text className="text-lg text-center leading-6 text-white">Indispensable</Text>
         </View>

         <View className="px-6 pb-3">
            <Text className="text-xs text-amber-500">Je suis</Text>
            <Text className="">une femme</Text>
         </View>

         <View className="px-6 pb-3">
            <Text className="text-xs text-amber-500">Je cherche</Text>
            <Text className="">une homme</Text>
         </View>
         <View className="px-6 pb-3">
            <Text className="text-xs text-amber-500">Personnalité</Text>
            <Text className="">Optimiste</Text>
         </View>
         <View className="px-6 pb-3">
            <Text className="text-xs text-amber-500">Taille / Poids</Text>
            <Text className="">1m69 / 61kg</Text>
         </View>
      </ScrollView>
   )
}

export default ProfileDetail