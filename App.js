import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import LanguageCard from './components/LanguageCard';

const languages = [
  {
    title: 'JavaScript',
    text: '2 year',
    logo: require('./assets/javascript.png')
  },
  {
    title: 'Python',
    text: '1 year',
    logo: require('./assets/python.png')
  },
  {
    title: 'Go',
    text: '1 month',
    logo: require('./assets/go.png')
  }
]

export default function App() {
  const [refreshing, setRefreshing] = React.useState(false)

  const onRefresh = () => {
    setRefreshing(true)
    setTimeout(() => setRefreshing(false), 2000)
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {languages.map((language, index) => {
        <LanguageCard
          key={index}
          title={language.title}
          text={language.text}
          logo={language.logo}
        />
      })}
    </ScrollView>
  );
}