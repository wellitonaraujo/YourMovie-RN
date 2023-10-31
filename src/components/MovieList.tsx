import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../styles';
interface TrendingMoviesProps {
  title: string;
  hideSeeAll: boolean;
  data: any[];
}

const {width, height} = Dimensions.get('window');

const MovieList: React.FC<TrendingMoviesProps> = ({
  title,
  hideSeeAll,
  data,
}) => {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const movie = 'Um fime top e muito maluco pode pah';

  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-xl">{title}</Text>

        {!hideSeeAll && (
          <TouchableOpacity>
            <Text style={styles.text} className="text-lg">
              Ver tudo
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {data.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('Movie', item)}>
              <View className="space-y-1 mr-1">
                <Image
                  source={require('../me.jpeg')}
                  className="rounded-3xl"
                  style={{width: width * 0.33, height: height * 0.22}}
                />
              </View>

              <Text className="text-neutral-300 ml-1">
                {movie.length > 14 ? movie.slice(0, 14) + '...' : movie}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MovieList;
