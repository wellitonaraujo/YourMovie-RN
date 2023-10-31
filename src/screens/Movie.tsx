import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ChevronLeftIcon, HeartIcon} from 'react-native-heroicons/solid';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Cast from '../components/Cast';
import MovieList from '../components/MovieList';

const {width, height} = Dimensions.get('window');
const isOS = Platform.OS == 'ios';
const topMargin = isOS ? '' : 'mt-3';

const Movie = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [cast, setCast] = useState([1, 2, 3, 4, 5]);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);

  const movie = 'Um fime top e muito maluco pode pah';
  const navigation = useNavigation();

  const {params: item} = useRoute();

  useEffect(() => {}, [item]);

  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 20}}
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-neutral-900">
      <View className="w-full">
        <SafeAreaView
          className={
            'absolute z-20 w-full flex-row justify-between items-center px-4' +
            topMargin
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
              color={isFavorite ? '#ff8a01' : 'black'}
            />
          </TouchableOpacity>
        </SafeAreaView>

        <View>
          <Image
            source={require('../me.jpeg')}
            style={{width, height: height * 0.55}}
          />
        </View>
      </View>

      {/* movie details */}
      <View className="space-y-3">
        {/* movie title */}
        <Text className="text-white text-center text-3xl font-bold tracking-wider">
          {movie}
        </Text>

        {/* movie status */}
        <Text className="text-neutral-400 text-center font-semibold">
          Released - 2022
        </Text>

        {/* movie genres */}
        <View className="flex-row justify-center mx-4 space-x-2">
          <Text className="text-neutral-400 text-center font-semibold">
            Ação
          </Text>

          <Text className="text-neutral-400 text-center font-semibold">
            Suspense
          </Text>

          <Text className="text-neutral-400 text-center font-semibold">
            Comédia
          </Text>
        </View>
        <Text className="text-neutral-400 mx-4 tracking-wide">
          Marvel's Spider-Man é uma série de videogames de ação e aventura
          desenvolvidos pela Insomniac Games e publicados pela Sony Interactive
          Entertainment para consoles PlayStation e Microsoft Windows
        </Text>
      </View>

      {/* cast */}
      <Cast cast={cast} navigation={navigation} />

      <MovieList
        title="Filmes similares"
        hideSeeAll={true}
        data={similarMovies}
      />
    </ScrollView>
  );
};

export default Movie;
