import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { ChevronRightIcon } from 'react-native-heroicons/solid'

import ProfileCard from './ProfileCard'
import useFetch from '../../hook/apiRdv'
import colors from 'tailwindcss/colors'

const FeaturedRow = ({ id, title, description }) => {

   // Fetch API
   const { data, isLoading, error } = useFetch(
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

         <FlatList
            data={data}
            renderItem={ ({ item }) => <ProfileCard {...item} />}
            keyExtractor={item => item.id}
            contentContainerStyle={{ columnGap: 10}}
            horizontal
         /> 

         {/* Profile row */}
         {/* <ScrollView
            horizontal
            contentContainerStyle={{
               columnGap: 10
            }}
            showsHorizontalScrollIndicator={true}
            className="pb-5"
         >

            <ProfileCard
               id={1}
               imgUrl="https://cdn-devfr-img02.rendez-vous.be/photos/RV_BEFR_thumbs/P_1537812_1_991640.jpg"
               name="Dansceca"
               age="31 ans"
               city="Tournai"
            />

            <ProfileCard
               id={123}
               imgUrl="https://cdn-devfr-img02.rendez-vous.be/photos/RV_BEFR_thumbs/P_1489748_1_251885.jpg"
               name="Leynalou"
               age="35 ans"
               city="Bruxelles"
            />

            <ProfileCard
               id={3}
               imgUrl="https://cdn-devfr-img02.rendez-vous.be/photos/RV_BEFR_thumbs/P_1530337_1_231781.jpg"
               name="Tara"
               age="32 ans"
               city="Neder-Over-Embeek"
            />

            <ProfileCard
               id={2}
               imgUrl="https://cdn-devfr-img02.rendez-vous.be/photos/RV_BEFR_thumbs/P_1440531_1_324412.jpg"
               name="Miss1985"
               age="33 ans"
               city="Beez"
            />



         </ScrollView> */}
      </View>
  )
}

export default FeaturedRow