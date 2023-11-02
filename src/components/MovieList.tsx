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
import {image500, image342, image185} from '../services/api';
import {styles} from '../styles';
interface TrendingMoviesProps {
  title: string;
  hideSeeAll: boolean;
  data: any[];
}

const {width, height} = Dimensions.get('window');

const MovieList = ({title, data, hideSeeAll}: TrendingMoviesProps) => {
  const navigation = useNavigation();

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
        {data && Array.isArray(data) ? (
          data.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate('Movie', item)}>
                <View className="space-y-1 mr-1">
                  <Image
                    source={{uri: image185(item.poster_path)}}
                    className="rounded-3xl"
                    style={{width: width * 0.33, height: height * 0.22}}
                  />
                </View>

                <Text className="text-neutral-300 ml-1">
                  {item && item.title
                    ? item.title.length > 14
                      ? item.title.slice(0, 14) + '...'
                      : item.title
                    : 'Item sem título'}
                </Text>
              </TouchableOpacity>
            );
          })
        ) : (
          <Text>'Nenhum dado disponível'</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default MovieList;
