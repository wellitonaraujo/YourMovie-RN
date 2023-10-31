import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Cast = ({cast, navigation}) => {
  let person = 'Keanu Reevs';
  let character = 'John Wick';

  return (
    <View className="my-6">
      <Text className="text-white text-lg mx-4 mb-5">Elenco principal</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {cast &&
          cast.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                className="mr-4 items-center"
                onPress={() => navigation.navigate('Person', person)}>
                <View className="overflow-hidden rounded-full h-20, w-20 items-center border border-neutral-500">
                  <Image
                    className="rounded-2xl  w-20 h-20"
                    source={require('../me.jpeg')}
                  />
                </View>

                <Text className="text-white text-xs mt-1">
                  {character.length > 10
                    ? character.slice(0, 10) + '...'
                    : character}
                </Text>

                <Text className="text-neutral-400 text-xs mt-1">
                  {person.length > 10 ? person.slice(0, 10) + '...' : person}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Cast;
