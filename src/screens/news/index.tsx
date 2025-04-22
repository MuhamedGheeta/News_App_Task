import {API_BASE_URL, API_KEY} from '@env';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '@common/colors';

import {ScaleHeight, ScaleWidth} from '@common/fitSize';
import SearchInput from '@components/searchInput';
import {t} from 'i18next';
import ButtonWithIcon from '@components/buttonWithIcon';
import {Svg_Filter} from '@assets/svgs';

import FilterModal from '@components/modals/FilterModal';
import SortModal from '@components/modals/SortModal';
import Icon from 'react-native-vector-icons/FontAwesome';
import NewsCard from '@components/newsCard';

import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const fetchNews = async ({queryKey}) => {
  const [, {query, selectedSortOption, fromDate, toDate}] = queryKey;
  const search = query?.trim() || 'apple';
  const sort = selectedSortOption || 'popularity';
  const formattedFromDate = fromDate ? fromDate : undefined;
  const formattedToDate = toDate ? toDate : undefined;
  const res = await axios.get(
    `${API_BASE_URL}?q=${search}&from${formattedFromDate}&to=${formattedToDate}&sortBy=${sort}&apiKey=${API_KEY}`,
  );
  return res.data;
};

const NewsScreen = () => {
  // --------- For Date Range ---------
  const [filterVisible, setFilterVisible] = useState(false);
  const [fromDate, setFromDate] = useState<Date | undefined>(undefined);
  const [toDate, setToDate] = useState<Date | undefined>(undefined);

  // ---------For Sort Modal---------
  const [sortVisible, setSortVisible] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState<string | null>(
    'popularity',
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const {data, isLoading, error, refetch} = useQuery({
    queryKey: [
      'news',
      {query: debouncedQuery, selectedSortOption, fromDate, toDate},
    ],
    queryFn: fetchNews,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  const handleSearch = value => {
    setSearchQuery(value);
  };

  const handleFilterApply = (fromDate, toDate) => {
    setFromDate(fromDate);
    setToDate(toDate);
    setFilterVisible(false);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await refetch(); // Trigger refetch of data
    setRefreshing(false); // Stop refreshing after data is fetched
  };
  return (
    <View className="flex-1 bg-white px-[15px] py-[10px]">
      <Text className="text-4xl font-bold text-center text-black py-[40px]">
        News List Task
      </Text>

      <SearchInput
        placeholder={t('search...')}
        onChangeText={handleSearch}
        style={{width: ScaleWidth('90%')}}
        value={searchQuery}
      />
      <View className="flex-1 items-center pt-[20px]">
        <View className="flex-row flex-wrap gap-[20px] justify-center">
          <ButtonWithIcon
            text="Filter"
            btnTitleStyle={{color: Colors.white}}
            btnStyle={{backgroundColor: Colors.primary, width: '42%'}}
            icon={<Icon name="filter" size={24} color={Colors.white} />}
            onPress={() => setFilterVisible(true)}
          />
          <FilterModal
            visible={filterVisible}
            onClose={() => setFilterVisible(false)}
            onApply={handleFilterApply}
          />
          <ButtonWithIcon
            text="Sort"
            btnTitleStyle={{color: Colors.white}}
            btnStyle={{backgroundColor: Colors.primary, width: '42%'}}
            icon={<Svg_Filter />}
            onPress={() => setSortVisible(true)}
          />
          <SortModal
            visible={sortVisible}
            onClose={() => setSortVisible(false)}
            selectedOption={selectedSortOption}
            setSelectedOption={option => {
              setSelectedSortOption(option);
              setSortVisible(false);
            }}
          />
        </View>
        {isLoading ? (
          <View className="pt-[20%]">
            <ActivityIndicator size="large" color={Colors.primary} />
          </View>
        ) : error ? (
          <Text className="text-center text-red-500 mt-[20%] text-lg">
            Failed to load news. Please try again.
          </Text>
        ) : data?.articles?.length === 0 ? (
          <Text className="text-center text-gray-500 mt-[20%] text-lg">
            No news found for the selected query.
          </Text>
        ) : (
          <FlatList
            data={data?.articles}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <NewsCard {...item} />}
            onRefresh={handleRefresh}
            refreshing={refreshing}
            className="mt-[10px]"
          />
        )}
      </View>
    </View>
  );
};

export default NewsScreen;
