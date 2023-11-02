import {useNavigation} from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel-v4';
import {TrendingMoviesProps} from '../models/movie';
import {Dimensions, Text, View} from 'react-native';
import MovieCard from './MovieCard';
import React from 'react';

const {width} = Dimensions.get('window');

const TrendingMovies: React.FC<TrendingMoviesProps> = ({data}) => {
  const navigation = useNavigation();

  const handleClick = item => {
    navigation.navigate('Movie', item);
  };

  return (
    <View className="mt-8">
      <Text className="text-white text-xl mx-4 mb-5">Filmes populares</Text>
      <Carousel
        data={data}
        renderItem={({item}) => (
          <MovieCard item={item} handleClick={() => handleClick(item)} />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
      />
    </View>
  );
};

export default TrendingMovies;
