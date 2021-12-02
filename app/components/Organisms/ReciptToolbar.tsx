import * as Atoms from '@/components/Atoms';

import { useNavigation } from '@react-navigation/native';
import ICON_CLOSE from '@/assets/icon_close.png';
import ICON_EDIT from '@/assets/icon_edit.png';

import React from 'react';
import { Image, Pressable } from 'react-native';

export default function ReciptToolbar() {
  const navigation = useNavigation<any>();

  return (
    <Atoms.View
      position='absolute'
      flexDirection='row'
      justifyContent='space-between'
      top='78px'
      width='100%'
      zIndex={2}
      stylePadding='0 40px'
    >
      <Pressable
        style={{
          width: 42,
          height: 42,
          backgroundColor: 'rgba(0,0,0,0.3)',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 42,
        }}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={{
            width: 24,
            height: 24,
          }}
          resizeMode='cover'
          source={ICON_CLOSE}
        />
      </Pressable>
      <Pressable
        style={{
          width: 42,
          height: 42,
          backgroundColor: 'rgba(0,0,0,0.3)',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 42,
        }}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={{
            width: 24,
            height: 24,
          }}
          resizeMode='cover'
          source={ICON_EDIT}
        />
      </Pressable>
    </Atoms.View>
  );
}
