import {Dimensions, Text, View} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel-v4';
import MovieCard from './MovieCard';
import {useNavigation} from '@react-navigation/native';

interface Movie {
  // Defina aqui a estrutura dos dados do filme.
  // Por exemplo: title, poster, rating, etc.
}

interface TrendingMoviesProps {
  data: Movie[];
}
const {width, height} = Dimensions.get('window');

const TrendingMovies: React.FC<TrendingMoviesProps> = ({data}) => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate('Movie', item);
  };

  return (
    <View className="mt-8">
      <Text className="text-white text-xl mx-4 mb-5">Filmes populares</Text>
      <Carousel
        data={data}
        renderItem={({item}) => (
          <MovieCard item={item} handleClick={handleClick} />
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
