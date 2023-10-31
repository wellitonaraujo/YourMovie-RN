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
import React, {useState} from 'react';
import {styles} from '../styles';

const isOS = Platform.OS == 'ios';

const Home = () => {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([1, 2, 3]);
  const [topRated, setTopRated] = useState([1, 2, 3]);

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
        <TrendingMovies data={trending} />
        <MovieList title={'Em breve'} hideSeeAll={false} data={upcoming} />
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
