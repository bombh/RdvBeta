import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import ProfileCard from './ProfileCard'

const FeaturedRow = ({ id, title, description }) => {
   return (
      <View>
         <View className="flex-row items-center justify-between mt-6 mb-3">
            <Text className="text-gray-500 text-xl">{title}</Text>
            <ArrowRightIcon color={"#BBB"} />
         </View>

         {/* <Text className="text-xs text-gray-400 ml-1 pb-3">{description}</Text> */}

         <ScrollView
            horizontal
            contentContainerStyle={{
               columnGap: 12
            }}
            showsHorizontalScrollIndicator={false}
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
               city="Bruxelles"
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

export default FeaturedRow