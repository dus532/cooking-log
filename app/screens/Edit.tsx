import * as Atoms from '@/components/Atoms';
import Button from '@/components/Molecules/Button';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Atoms.Text fontFamily='PreBold'>Edit</Atoms.Text>
      <Button
        onPress={() => {
          navigation.goBack();
        }}
      >
        뒤로
      </Button>
    </SafeAreaView>
  );
}
