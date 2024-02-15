import { View, Text, ScrollView, Pressable, Dimensions, Button, TextInput } from 'react-native'
import { Image } from 'expo-image'
import React, { useLayoutEffect, useRef } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'

import colors from 'tailwindcss/colors'
import { ChevronLeftIcon, CameraIcon, EnvelopeIcon } from 'react-native-heroicons/solid'
import { Man, Woman } from '../../../constants/image'

import { ButtonChat, ButtonFlash, ButtonMicro, ButtonPlus, ModalMessage } from '../../../components/profile/common/'

// import ModalMessage from '../../../components/profile/common/ModalMessage'

import Animated, { interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from 'react-native-reanimated'
import Toast from 'react-native-toast-message'
import useRdv from '../../../hook/useRdv'


const ProfileDetailScreen = () => {
   
   const params = useLocalSearchParams()
   const { id, picture, thumb, name, age, type, city, pictureTotal } = params;

   let placeholder
   if( type === 'Man' ) {
      placeholder = Man
   } else {
      placeholder = Woman
   }

   // Fetch API
   const { data, isLoading, error } = useRdv(
      'GET',
      'getProfileDetail',
      { 
         idprofile: id
      }
   )

   // Navigation
   const navigation = useNavigation()
   useLayoutEffect(() => {
      navigation.setOptions({
         headerShown: false,
      })
   }, [])

   // Flash
   const flashProfile = () => Toast.show({
      type: 'info',
      text1: `Vous avez flashé sur ${name}`,
      topOffset: 70,
    }); 

   // Modal Message
   const modalMessageRef = useRef(null)
   const openModalMessage = () => modalMessageRef.current?.snapToIndex(0)
   
    
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
               <Animated.View style={imageAnimatedStyle}>
                  <Image
                     source={{
                        uri: picture,
                     }}
                     className="w-full aspect-square rounded-b-2xl bg-gray-200"
                     placeholder={placeholder}
                     placeholderContentFit='cover'
                     transition={500}
                  />
               </Animated.View>
               
               
               {/* Back button */}
               <Pressable
                  className="absolute top-14 left-3 bg-black/20 rounded-full w-14 h-14 border border-white/70 flex items-center justify-center active:bg-black active:border-white"
                  onPress={() => navigation.goBack()}
               >
                     <ChevronLeftIcon size={30} color={colors.white} />
               </Pressable>

               {/* Picture button */}
               { pictureTotal > 0 
                  ?  <Pressable
                        className="absolute top-14 right-3 bg-black/20 rounded-full w-14 h-14 border border-white/70 flex items-center justify-center active:bg-black active:border-white"
                     >
                           <CameraIcon size={30} color={colors.white} />
                           {/* Num picture */}
                           <View className="flex items-center justify-center rounded-full bg-amber-500 h-5 absolute -top-1 left-8 px-2">
                              <Text className='text-white'>{pictureTotal}</Text>
                           </View>
                     </Pressable>
                  : null
               }
                  
            </View>

            {/* Action view */}
            <View className="flex-row items-center justify-evenly -mt-7">

                  <ButtonChat onPress={openModalMessage} />
                  <ButtonMicro />
                  <ButtonFlash onPress={flashProfile} />
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
                  <Text className="text-lg text-justify leading-6 text-gray-400">
                     {data.profile?.COMMENTAIRE}
                  </Text>
               </View>

               <View className="mt-6 mb-3 p-2 bg-cyan-500">
                  <Text className="text-lg text-center leading-6 text-white">Indispensable</Text>
               </View>

               <View className="px-6 pb-3">
                  <Text className="text-xs text-amber-500">Je suis</Text>
                  <Text className="">{data.profile?.PEOPLETYPE}</Text>
               </View>

               <View className="px-6 pb-3">
                  <Text className="text-xs text-amber-500">Je cherche</Text>
                  <Text className="">{data.profile?.PREFPEOPLETYPE}</Text>
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

         <ModalMessage
            ref={modalMessageRef}
            name={name}
            picture={thumb}
         />
      </>
   )
}

export default ProfileDetailScreen