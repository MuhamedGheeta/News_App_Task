import Colors from '@common/colors';
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

export interface NewsCardProps {
  title: string;
  description?: string;
  urlToImage?: string;
  url: string;
  author?: string;
  sourceName?: string;
  publishedAt?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  description,
  urlToImage,
  url,
  author,
  sourceName,
  publishedAt,
}) => {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      {urlToImage ? (
        <Image source={{uri: urlToImage}} style={styles.image} />
      ) : null}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {description ? (
          <Text style={styles.description}>{description}</Text>
        ) : null}
        <View style={styles.meta}>
          {sourceName && (
            <Text style={styles.metaText}>Source: {sourceName}</Text>
          )}
          {author && <Text style={styles.metaText}>Author: {author}</Text>}
          {publishedAt && (
            <Text style={styles.metaText}>
              Published: {new Date(publishedAt).toLocaleString()}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
    color: Colors.black,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  meta: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 8,
  },
  metaText: {
    fontSize: 12,
    color: '#777',
  },
});

export default NewsCard;
