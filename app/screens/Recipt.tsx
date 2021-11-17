import * as Atoms from '@/components/Atoms';
import Button from '@/components/Molecules/Button';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

export default function Recipt() {
  const navigation = useNavigation<any>();

  return (
    <Atoms.View alignItems='center' height='100%' justifyContent='center'>
      <Button fontSize='30px' onPress={() => navigation.goBack()}>
        뒤로
      </Button>
    </Atoms.View>
  );
}
