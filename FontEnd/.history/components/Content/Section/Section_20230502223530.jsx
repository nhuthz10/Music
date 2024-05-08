import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './style';
import SectionItem from '../SectionItem/SectionItem';

const Section = ({handleClick, title, items}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.section__heading}>{title}</Text>
      <View style={styles.sectionList}>
        {items.map((item, index) => {
          return (
            <SectionItem
              onPress={()=>handleClick(item.encodeId)},
              id={item.encodeId}
              url={item.thumbnailM}
              title={item.title}
              singers={item.artists}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Section;
