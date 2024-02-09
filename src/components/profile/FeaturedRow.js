import { View, Text, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import { ChevronRightIcon } from 'react-native-heroicons/solid'

import ProfileCard from './ProfileCard'
import useRdv from '../../hook/useRdv'
import colors from 'tailwindcss/colors'

const FeaturedRow = ({ id, title, description }) => {

   // Fetch API
   const { data, isLoading, error } = useRdv(
      'GET',
      'getProfileList',
      { }
   )

   return (
      <View className="mt-2 px-2">
         
         {/* Title */}
         <View className="flex-row items-center justify-between mb-2">
            <Text className="text-gray-500 text-xl">{title} </Text>
            <ChevronRightIcon color={colors.gray[500]} />
         </View>

         <View className='flex justify-center items-center h-72'>
            {/* Profile row */}
            { isLoading ? (
                  <ActivityIndicator className='' size="large" color={colors.amber[500]} /> 
               ) : (
                  <FlatList
                     data={data.profile}
                     renderItem={ ({ item }) => <ProfileCard {...item} />}
                     keyExtractor={item => item.id}
                     contentContainerStyle={{ columnGap: 10}}
                     horizontal
                  />
               )
            }
         </View>
      </View>
  )
}

export default FeaturedRow