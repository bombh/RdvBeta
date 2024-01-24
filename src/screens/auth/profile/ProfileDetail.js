import { View, Text, Image, ScrollView, Pressable, Dimensions, Button, TextInput } from 'react-native'
import React, { useCallback, useLayoutEffect, useMemo, useRef } from 'react'
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router'
import BottomSheet, { BottomSheetBackdrop, BottomSheetFooter, BottomSheetTextInput, BottomSheetView } from '@gorhom/bottom-sheet/'

import { styled, StyledComponent } from 'nativewind';
import colors from "tailwindcss/colors"
import { ChevronLeftIcon, CameraIcon, EnvelopeIcon } from 'react-native-heroicons/solid'

import ButtonChat from '../../../components/profile/common/ButtonChat'
import ButtonFlash from'../../../components/profile/common/ButtonFlash'
import ButtonMicro from'../../../components/profile/common/ButtonMicro'
import ButtonPlus from'../../../components/profile/common/ButtonPlus'

import Animated, { interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from 'react-native-reanimated'


const ProfileDetailScreen = () => {

   //console.log(tw('bg-white'))
   
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
   const StyledBottomSheetTextInput = styled(BottomSheetTextInput)
   const snapPoints = useMemo( () => ['50%', '90%'], [] )

   // callbacks
   const handleSheetChanges = useCallback((index) => {
      //console.log('handleSheetChanges', index);
   }, []);

   const modalMessageRef = useRef(null)
   
   const closeModalMessage = () => modalMessageRef.current?.close()
   const openModalMessage = () => modalMessageRef.current?.expand()
   
   const renderBackdrop = useCallback(
      (props) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1}  {...props} />,
      []
   )

   const renderFooter = useCallback(
      (props) => (
         <BottomSheetFooter bottomInset={32} {...props}>
            <View className='flex items-center justify-center py-3'>
               <ButtonChat />
            </View>
         </BottomSheetFooter>
      ),
      []
   )
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
                  className="absolute top-14 left-3 bg-black/20 rounded-full w-14 h-14 border border-white/70 flex items-center justify-center active:bg-black active:border-white"
                  onPress={() => navigation.goBack()}
               >
                     <ChevronLeftIcon size={30} color={colors.white} />
               </Pressable>

               {/* Picture button */}
               <Pressable
                  className="absolute top-14 right-3 bg-black/20 rounded-full w-14 h-14 border border-white/70 flex items-center justify-center active:bg-black active:border-white"
               >
                     <CameraIcon size={30} color={colors.white} />
               </Pressable>
                  
            </View>

            {/* Action view */}
            <View className="flex-row items-center justify-evenly -mt-7">

                  <ButtonChat onPress={openModalMessage} />
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

         <BottomSheet ref={modalMessageRef}
            // index={-1}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            index={-1}
            keyboardBehavior='extend'
            onChange={handleSheetChanges}
            backdropComponent={renderBackdrop}
            footerComponent={renderFooter}
            handleIndicatorStyle={{
               backgroundColor: colors.cyan[200]
            }}
            backgroundStyle={{
               backgroundColor: colors.cyan[500]
            }}
         >
            <BottomSheetView>
               <View className='flex items-center my-5'>
                  <View className='w-24 h-24 rounded-full border border-cyan-200 overflow-hidden'>
                     <Image source={{ uri: 'https://cdn-devfr-img02.rendez-vous.be/photos/RV_BEFR_thumbs/P_1530337_1_231781.jpg' }} className='w-full h-full' />
                  </View>
                  <Text className='text-white text-xl'>{name}</Text>
               </View>

               <StyledBottomSheetTextInput
                  placeholder={`Votre message à ${name}`}
                  placeholderTextColor={colors.white}
                  maxLength={200}
                  multiline={true}
                  className='text-cyan-800 bg-cyan-400 focus:bg-cyan-200 m-5 px-3 py-2 rounded-lg'
               />
            </BottomSheetView>

         </BottomSheet>
      </>
   )
}

export default ProfileDetailScreen