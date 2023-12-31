import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {fallbackMovie} from '../constants/fallbackMovie';
import {useNavigation} from '@react-navigation/native';
import {TrendingMoviesProps} from '../models/movie';
import {image185} from '../constants/imagesPath';
import React from 'react';

const {width, height} = Dimensions.get('window');

const MovieList = ({title, data, hideSeeAll}: TrendingMoviesProps) => {
  const navigation = useNavigation();

  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-lg">{title}</Text>

        {/* {!hideSeeAll && (
          <TouchableOpacity>
            <Text style={styles.text} className="text-sg">
              Ver tudo
            </Text>
          </TouchableOpacity>
        )}
        */}
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
                <View className="space-y-1 mr-4">
                  <Image
                    source={{uri: image185(item.poster_path) || fallbackMovie}}
                    className="rounded-3xl"
                    style={{width: width * 0.33, height: height * 0.22}}
                  />
                </View>

                {/* <Text className="text-neutral-300 mt-2">
                  {item && item.title
                    ? item.title.length > 15
                      ? item.title.slice(0, 15) + '...'
                      : item.title
                    : 'Sem título'}
                </Text>
                */}
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
