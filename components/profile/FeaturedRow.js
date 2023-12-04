import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import ProfileCard from './ProfileCard'

const FeaturedRow = ({ id, title, description }) => {
   return (
      <View>
         <View className="flex-row items-center justify-between ml-1 mt-6" >
            <Text className="font-bold text-lg">{title}</Text>
            <ArrowRightIcon color={"#00CCBB"} />
         </View>

         <Text className="text-xs text-gray-400 ml-1 pb-3">{description}</Text>

         <ScrollView
            horizontal
            contentContainerStyle={{
               columnGap: 12
            }}
            showsHorizontalScrollIndicator={false}
         >

            {/* ProfileCard */}
            <ProfileCard
               id={123}
               imgUrl="https://www.charleroi-metropole.be/app/uploads/2022/11/restaurant-GaultMillau.jpg"
               title="Les Brigitinnes"
               rating={4.5}
               genre="Belgian"
               address="Place de la Chapelle, 5"
               short_description="Miam maiam waow trop bon !"
               dishes={[]}
               long={50.8412795498955}
               lat={4.350572776708226}
            />

            <ProfileCard
               id={123}
               imgUrl="https://www.charleroi-metropole.be/app/uploads/2022/11/restaurant-GaultMillau.jpg"
               title="Les Brigitinnes"
               rating={4.5}
               genre="Belgian"
               address="Place de la Chapelle, 5"
               short_description="Miam maiam waow trop bon !"
               dishes={[]}
               long={50.8412795498955}
               lat={4.350572776708226}
            />

            <ProfileCard
               id={123}
               imgUrl="https://www.charleroi-metropole.be/app/uploads/2022/11/restaurant-GaultMillau.jpg"
               title="Les Brigitinnes"
               rating={4.5}
               genre="Belgian"
               address="Place de la Chapelle, 5"
               short_description="Miam maiam waow trop bon !"
               dishes={[]}
               long={50.8412795498955}
               lat={4.350572776708226}
            />

            <ProfileCard
               id={123}
               imgUrl="https://www.charleroi-metropole.be/app/uploads/2022/11/restaurant-GaultMillau.jpg"
               title="Les Brigitinnes"
               rating={4.5}
               genre="Belgian"
               address="Place de la Chapelle, 5"
               short_description="Miam maiam waow trop bon !"
               dishes={[]}
               long={50.8412795498955}
               lat={4.350572776708226}
            />


         </ScrollView>
      </View>
  )
}

export default FeaturedRow