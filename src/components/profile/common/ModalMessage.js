import { View, Text, Image, Keyboard } from 'react-native'
import React, { forwardRef, useCallback, useMemo } from 'react'

import { styled } from 'nativewind'
import colors from 'tailwindcss/colors'
import ButtonChat from '../../../components/profile/common/ButtonChat'

import BottomSheet, { BottomSheetBackdrop, BottomSheetFooter, BottomSheetTextInput, BottomSheetView } from '@gorhom/bottom-sheet/'

const ModalMessage = forwardRef( (props, ref) => {

   const StyledBottomSheetTextInput = styled(BottomSheetTextInput)
   const snapPoints = useMemo( () => ['50%', '100%'], [] )

   const name = props.name
   const closeModal = () => {
      ref.current?.close()
   }

   // callbacks
   const handleSheetChanges = useCallback((index) => {
      if(index === -1) {
         Keyboard.dismiss()
      }
   }, [])

   //BottomSheetBackdrop
   const renderBackdrop = useCallback(
      (props) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />,
      []
   )

   //BottomSheetFooter
   const renderFooter = useCallback(
      (props) => (
         <BottomSheetFooter bottomInset={32} {...props}>
            <View className='flex items-center justify-center py-3'>
               <ButtonChat onPress={closeModal} />
            </View>
         </BottomSheetFooter>
      ),
      []
   )

   return (
      <BottomSheet ref={ref}
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
                  <View className='w-28 h-28 rounded-full border border-cyan-200 overflow-hidden mt-3'>
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
   )

})

export default ModalMessage