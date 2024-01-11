import { View, Text, Image, ScrollView, Pressable, Dimensions, Button } from 'react-native'
import React, { useLayoutEffect, useMemo, useRef } from 'react'
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router'

import { ChevronLeftIcon, CameraIcon } from 'react-native-heroicons/solid'

import ButtonChat from '../../../components/profile/common/ButtonChat'
import ButtonFlash from'../../../components/profile/common/ButtonFlash'
import ButtonMicro from'../../../components/profile/common/ButtonMicro'
import ButtonPlus from'../../../components/profile/common/ButtonPlus'

import Animated, { interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from 'react-native-reanimated'
import BottomSheet from '@gorhom/bottom-sheet/'


const ProfileDetailScreen = () => {
   
   const params = useLocalSearchParams()
   const { id, imgUrl, name, age, city } = params;

   // Navigation
   const navigation = useNavigation()
   useLayoutEffect(() => {
      navigation.setOptions({
         headerShown: false,
      })
   }, [])
   
   // Bottomsheet
   const snapPoints =useMemo( () => ['60%'], [] )
   const bottomSheetRef = useRef(null)

   const handleCloseBottomMessage = () => bottomSheetRef.current?.close()
   const handleOpenBottomMessage = () => bottomSheetRef.current?.expand()

   // Parallax Effect
   const { width } = Dimensions.get("window")
   const scrollRef = useAnimatedRef()
   const scrollOffset = useScrollViewOffset(scrollRef)

   const imageAnimatedStyle = useAnimatedStyle( () => {
      return {
         transform:[
            {
               scale: interpolate(
                  scrollOffset.value,
                  [-width, 0, width],
                  [3, 1, 1]
               )
            }
         ]
      }
   })

   return (
      <>
         <Animated.ScrollView
            ref={scrollRef}
            scrollEventThrottle={16}
            className="bg-white"
            contentContainerStyle={{
               paddingBottom: 30,
            }}
         >
            
            <View className="relative">
               <Animated.Image
                  source={{
                     uri: imgUrl,
                  }}
                  className="w-full aspect-square rounded-b-2xl"
                  style={imageAnimatedStyle}
               />
               
               {/* Back button */}
               <Pressable
                  className="absolute top-12 left-3 bg-black/20 rounded-full w-14 h-14 border border-white/70 flex items-center justify-center active:bg-black active:border-white"
                  onPress={() => navigation.goBack()}
               >
                     <ChevronLeftIcon size={30} color={"#FFF"} />
               </Pressable>

               {/* Picture button */}
               <Pressable
                  className="absolute top-12 right-3 bg-black/20 rounded-full w-14 h-14 border border-white/70 flex items-center justify-center active:bg-black active:border-white"
               >
                     <CameraIcon size={30} color={"#FFF"} />
               </Pressable>
                  
            </View>

            {/* Action view */}
            <View className="flex-row items-center justify-evenly -mt-7">

                  <ButtonChat onPress={handleOpenBottomMessage} />
                  <ButtonMicro />
                  <ButtonFlash />
                  <ButtonPlus />

            </View>

            {/* Infos */}
            <View className='bg-white mt-2'>
               <View className="p-2">
                  <Text
                     className="text-center text-3xl font-light text-gray-400"
                     numberOfLines={1}>
                        {name}
                  </Text>
                  <Text className="text-sm text-center text-gray-600">{age} - {city}</Text>
               </View>

               <View className="px-6">
                  <Text className="text-lg text-justify leading-6 text-gray-400">Je suis une personne très gentille et je cherche à rencontrer des gens sympas. Je suis une personne très gentille et je cherche à rencontrer des gens sympas</Text>
               </View>

               <View className="mt-6 mb-3 p-2 bg-cyan-500">
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

               <View className="mt-6 mb-3 p-2 bg-cyan-500">
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

               <View className="mt-6 mb-3 p-2 bg-cyan-500">
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
            </View>
         </Animated.ScrollView>

         <BottomSheet ref={bottomSheetRef}
            // index={-1}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            handleIndicatorStyle={{
               backgroundColor: '#FFF'
            }}
            backgroundStyle={{
               backgroundColor: '#06b6d4'
            }}
         >
            <Text>Waoow</Text>
            <Pressable onPress={handleCloseBottomMessage}>
               <Text>Close</Text>
            </Pressable>
         </BottomSheet>
      </>
   )
}

export default ProfileDetailScreen