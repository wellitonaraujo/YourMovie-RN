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
import {
  fetchMovieCredits,
  fetchMovieDetails,
  fetchMovieSimular,
} from '../services';
import {ChevronLeftIcon, HeartIcon} from 'react-native-heroicons/solid';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {image500} from '../constants/imagesPath';
import MovieList from '../components/MovieList';
import {CastMember, MovieProps} from '../models/castMember';
import Cast from '../components/Cast';
import {fallbackMovie} from '../constants/fallbackMovie';

const {width, height} = Dimensions.get('window');
const isOS = Platform.OS == 'ios';
const topMargin = isOS ? '' : 'mt-3';

type RouteParams = {
  RouteProp: {
    id: number;
  };
};

const Movie = () => {
  const [similarMovies, setSimilarMovies] = useState<MovieProps[]>([]);
  const [movie, setMovie] = useState<MovieProps>();
  const [isFavorite, setIsFavorite] = useState(false);
  const [cast, setCast] = useState<CastMember[]>([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const {params: item} = useRoute<RouteProp<RouteParams>>();

  const getMovieDetails = async (id: number) => {
    const data = await fetchMovieDetails(id);
    if (data) setMovie(data);
    setLoading(false);
  };

  const getMovieCredits = async (id: number) => {
    const data = await fetchMovieCredits(id);
    if (data && data.cast) setCast(data.cast);
    setLoading(false);
  };

  const getSimilarMovies = async (id: number) => {
    const data = await fetchMovieSimular(id);
    if (data && data.results) setSimilarMovies(data.results);
    setLoading(false);
  };

  useEffect(() => {
    getMovieDetails(item.id);
    getMovieCredits(item.id);
    getSimilarMovies(item.id);
  }, [item]);

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
            source={{
              uri:
                image500(
                  movie?.poster_path ? movie?.poster_path : fallbackMovie,
                ) || fallbackMovie,
            }}
            style={{width, height: height * 0.55}}
          />
        </View>
      </View>

      {/* movie details */}
      <View className="space-y-3">
        {/* movie title */}
        <Text className="text-white text-center text-2xl mt-3 font-bold tracking-wider">
          {movie?.title}
        </Text>

        {/* movie status */}
        {movie?.id ? (
          <Text className="text-neutral-400 text-center font-semibold">
            {movie?.status} - {movie?.release_date?.split('-')[0]} -{' '}
            {movie?.runtime} min
          </Text>
        ) : null}

        {/* movie genres */}
        <View className="flex-row justify-center mx-4 space-x-2">
          {movie?.genres?.map((genre, index) => {
            let shotLine = index + 1 != movie.genres.length;
            return (
              <Text
                key={index}
                className="text-neutral-400 text-center font-semibold">
                {genre?.name} {shotLine ? '-' : null}
              </Text>
            );
          })}
        </View>
        <Text className="text-neutral-400 mx-4 tracking-wide">
          {movie?.overview}
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
