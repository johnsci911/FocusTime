import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  if (! history || ! history.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>We haven't focused on anything yet.</Text>
      </View>
    )
  }

  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList 
        data={history} 
        renderItem={renderItem} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    textAlign: 'left',
    paddingTop: spacing.sm
  }
})
