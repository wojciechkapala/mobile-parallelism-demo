import { StyleSheet, TextInput } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function SearchScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#E0E0FF', dark: '#1B1B2F' }}
      headerImage={null}
    >
      <ThemedView style={styles.container}>
        <ThemedText type="title">Search</ThemedText>
        <TextInput
          placeholder="Type to search..."
          style={styles.input}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});
