import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ChevronRightIcon } from 'react-native-heroicons/solid'

import ProfileCard from './Card';

const HomeRow = ({ id, title, description }) => {
   return (
      <View className="mt-2 px-2">
         {/* Title */}
         <View className="flex-row items-center justify-between mb-1">
            <Text className="text-gray-500 text-xl">{title}</Text>
            <ChevronRightIcon color={"#999"} />
         </View>

         {/* Profile row */}
         <ScrollView
            horizontal
            contentContainerStyle={{
               columnGap: 15
            }}
            showsHorizontalScrollIndicator={false}
            className="pb-5"
         >

            {/* ProfileCard */}
            <ProfileCard
               id={1}
               imgUrl="https://cdn-devfr-img02.rendez-vous.be/photos/RV_BEFR_thumbs/P_1537812_1_991640.jpg"
               title="Dansceca"
               age="31 ans"
               city="Tournai"
            />

            <ProfileCard
               id={123}
               imgUrl="https://cdn-devfr-img02.rendez-vous.be/photos/RV_BEFR_thumbs/P_1489748_1_251885.jpg"
               title="Leynalou"
               age="35 ans"
               city="Bruxelles"
            />

            <ProfileCard
               id={3}
               imgUrl="https://cdn-devfr-img02.rendez-vous.be/photos/RV_BEFR_thumbs/P_1530337_1_231781.jpg"
               title="Tara"
               age="32 ans"
               city="Neder-Over-Embeek"
            />

            <ProfileCard
               id={2}
               imgUrl="https://cdn-devfr-img02.rendez-vous.be/photos/RV_BEFR_thumbs/P_1440531_1_324412.jpg"
               title="Miss1985"
               age="33 ans"
               city="Beez"
            />



         </ScrollView>
      </View>
  )
}

export default HomeRow