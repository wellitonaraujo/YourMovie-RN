import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import TrendingMovies from '../components/TrendingMovies';
import MovieList from '../components/MovieList';
import BarIcon from '../components/BarIcon';
import React, {useEffect, useState} from 'react';
import {styles} from '../styles';
import {
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from '../services/api';

const isOS = Platform.OS == 'ios';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();
  }, []);

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    if (data && data.results) setTrending(data.results);

    setLoading(false);
  };

  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies();
    if (data && data.results) setUpcoming(data.results);
    setLoading(false);
  };

  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();

    if (data && data.results) setTopRated(data.results);
    setLoading(false);
  };

  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className={isOS ? '-m-2' : '-mb-3'}>
        <StatusBar barStyle={'light-content'} />
        <View className="flex-row justify-between items-center mx-4">
          <BarIcon />

          <Text className="text-white text-3xl font-semibold">
            <Text style={styles.text}>F</Text>ilmes
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color={'#ff8a01'} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        {trending.length > 0 && <TrendingMovies data={trending} />}

        {/* Trending Movies carousel */}
        <MovieList title={'Em breve'} hideSeeAll={false} data={upcoming} />

        {/* top rated movies */}
        <MovieList
          title={'Melhores avaliados'}
          hideSeeAll={false}
          data={topRated}
        />
      </ScrollView>
    </View>
  );
};

export default Home;
