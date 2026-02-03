import { StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function SettingsScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F5F5F5', dark: '#202020' }}
      headerImage={null}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Settings</ThemedText>
      </ThemedView>
      <Collapsible title="Account">
        <ThemedText>Manage your account preferences here.</ThemedText>
      </Collapsible>
      <Collapsible title="Notifications">
        <ThemedText>Control how you receive notifications.</ThemedText>
      </Collapsible>
      <Collapsible title="Appearance">
        <ThemedText>Switch between light and dark themes.</ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
});
