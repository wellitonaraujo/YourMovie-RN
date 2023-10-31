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
import BarIcon from '../components/BarIcon';
import React, {useState} from 'react';
import {styles} from '../styles';
import TrendingMovies from '../components/TrendingMovies';
import MovieList from '../components/MovieList';

const isOS = Platform.OS == 'ios';

const Home = () => {
  const [trending, setTrending] = useState([1, 2, 3]);
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
            <MagnifyingGlassIcon
              size={30}
              strokeWidth={2}
              color={styles.text}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        <TrendingMovies data={trending} />
        <MovieList />
      </ScrollView>
    </View>
  );
};

export default Home;
