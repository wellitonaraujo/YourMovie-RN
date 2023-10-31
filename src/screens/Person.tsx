import {
  View,
  Text,
  Dimensions,
  Platform,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {ChevronLeftIcon, HeartIcon} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');
const isOS = Platform.OS == 'ios';
const verticalMargin = isOS ? '' : 'my-3';

const Person = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();
  return (
    <ScrollView className="flex-1 bg-neutral-900">
      {/* back button */}

      <SafeAreaView
        className={
          'z-20 w-full flex-row justify-between items-center px-4' +
          verticalMargin
        }>
        <TouchableOpacity
          className="rounded-xl p-1"
          onPress={() => navigation.goBack()}>
          <ChevronLeftIcon size={28} strokeWidth={2.5} color={'#ff8a01'} />
        </TouchableOpacity>

        <TouchableOpacity
          className="rounded-xl p-1"
          onPress={() => setIsFavorite(!isFavorite)}>
          <HeartIcon
            size={35}
            strokeWidth={2.5}
            color={isFavorite ? '#ff8a01' : 'white'}
          />
        </TouchableOpacity>
      </SafeAreaView>
      {/* person details */}
      <View>
        <View
          className="flex-row justify-center"
          style={{
            shadowColor: 'gray',
            shadowRadius: 40,
            shadowOffset: {width: 0, height: 5},
            shadowOpacity: 0.3,
          }}>
          <View className="items-center rounded-full overflow-hidden w-70 h-70 border-2 border-neutral-500">
            <Image
              source={require('../me.jpeg')}
              style={{width: width * 0.74, height: height * 0.43}}
            />
          </View>
        </View>
        <View className="mt-6">
          <Text className="text-3xl text-yellow-500 font-bold text-center">
            Welliton Araujo
          </Text>
          <Text className="text-base text-neutral-500 text-center">
            Teresina, PI
          </Text>

          <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
            <View className="border-r-2 border-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Gebder</Text>
              <Text className="text-neutral-300 text-sm">Maler</Text>
            </View>

            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Gebder</Text>
              <Text className="text-neutral-300 text-sm">Maler</Text>
            </View>

            <View className="border-r-2 border-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Gebder</Text>
              <Text className="text-neutral-300 text-sm">Maler</Text>
            </View>
          </View>

          <View className="my-6 mx-4 space-y-2">
            <Text className="text-white font-semibold text-lg">Biografia</Text>
            <Text className="text-neutral-300 tracking-wide">
              Biografia texto aqui
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Person;
