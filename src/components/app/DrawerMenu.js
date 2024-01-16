import React from 'react'
import { View, Text, Image, Pressable, Linking } from 'react-native'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { Link, useNavigation, useRouter } from 'expo-router'
import { SparklesIcon, LinkIcon, XCircleIcon, GlobeAltIcon } from 'react-native-heroicons/solid'
import colors from 'tailwindcss/colors'

const DrawerMenu = (props) => {

   const navigation = useNavigation()

   const goToProfile = function(){
      navigation.navigate('me')
   }

   return (
      <DrawerContentScrollView {...props}>
    
         {/* Profile Box */}
         <DrawerItem
            label={ (focused, color) => (
               <View className='w-full flex-row items-center space-x-4  pl-0 pb-2'>
                  <Image
                     source={{
                        uri:'https://cdn-devfr-img02.rendez-vous.be/photos/RV_BEFR/1365176_14_638391.jpg'
                     }}
                     className='w-16 h-16 rounded-full'
                  />
                  
                  <View>
                     <Text className='text-neutral-400 text-lg' numberOfLines={1}>Faaab</Text>
                     <Text className='text-neutral-600 text-sm' numberOfLines={1}>47 ans • Bruxelles</Text>
                  </View>
               </View>
            )}
            onPress={goToProfile}          
         />
         
         {/* Drawers menus */}
         <DrawerItemList {...props} />

         {/* Links to web */}
         <DrawerItem
            label="Events Rendez-Vous" 
            onPress={() => Linking.openURL('https://fr.rendez-vous.be/events')}
            inactiveTintColor={colors.neutral[400]}
            labelStyle= {{
               marginLeft: -20,
            }}
            icon={({ color }) => (
               <SparklesIcon color={color} size={20} />
            )}
         />

         <DrawerItem
            label="Déconnexion" 
            onPress={() => Linking.openURL('https://fr.rendez-vous.be/app/free/rules.cfm#anchorRules_2')}
            inactiveTintColor={colors.neutral[400]}
            labelStyle= {{
               marginLeft: -20,
            }}
            icon={({ color }) => (
               <XCircleIcon color={color} size={20} />
            )}
         />

         {/* <DrawerItem
            label="Aide" 
            onPress={() => Linking.openURL('https://fr.rendez-vous.be/events')}
            inactiveTintColor={colors.neutral[500]}
            labelStyle= {{
               marginLeft: -16,
               fontSize: 13,
            }}
            icon={({ color }) => (
               <LinkIcon color={color} size={14} />
            )}
         /> */}

         <DrawerItem
            label="Confidentialité" 
            onPress={() => Linking.openURL('https://fr.rendez-vous.be/app/free/privacy.cfm')}
            inactiveTintColor={colors.neutral[500]}
            labelStyle= {{
               marginLeft: -16,
               fontSize: 13,
            }}
            icon={({ color }) => (
               <LinkIcon color={color} size={14} />
            )}
         />
         <DrawerItem
            label="Infos légales" 
            onPress={() => Linking.openURL('https://fr.rendez-vous.be/app/free/rules.cfm#anchorRules_3')}
            inactiveTintColor={colors.neutral[500]}
            labelStyle= {{
               marginLeft: -16,
               fontSize: 13,
            }}
            icon={({ color }) => (
               <LinkIcon color={color} size={14} />
            )}
         />

         <DrawerItem
            label="Nos abonnements" 
            onPress={() => Linking.openURL('https://fr.rendez-vous.be/app/free/rules.cfm#anchorRules_4')}
            inactiveTintColor={colors.neutral[500]}
            labelStyle= {{
               marginLeft: -16,
               fontSize: 13,
            }}
            icon={({ color }) => (
               <LinkIcon color={color} size={14} />
               )}
               />

         <DrawerItem
            label="Conditions générales" 
            onPress={() => Linking.openURL('https://fr.rendez-vous.be/app/free/rules.cfm#anchorRules_2')}
            inactiveTintColor={colors.neutral[500]}
            labelStyle= {{
               marginLeft: -16,
               fontSize: 13,
            }}
            icon={({ color }) => (
               <LinkIcon color={color} size={14} />
            )}
         />

         <View className='h-14' />

      </DrawerContentScrollView>
   )
}

export default DrawerMenu