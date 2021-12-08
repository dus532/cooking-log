import * as Atoms from '@/components/Atoms';
import InputText from '@/components/Molecules/InputText';
import { useMenusQuery } from '@/hooks/api/menus';
import { api } from '@/utils/api';
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Image, Pressable } from 'react-native';
import ICON_IMAGE from '@/assets/icon_image.png';

export default function Edit() {
  const [form, setForm] = useState({
    title: '',
    image: '',
    difficulty: 5,
    ingredients: '',
  });
  const { refetch } = useMenusQuery();
  const navigation = useNavigation();

  const handleChange = (name: string, value: any) => {
    setForm((v) => ({ ...v, [name]: value }));
  };

  const onSubmit = async () => {
    try {
      await api.post('/menus/create', form);
      refetch();
      navigation.goBack();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Atoms.View background='#f6f6f6' height='100%'>
      <Atoms.Wrap>
        <InputText
          label='요리 제목'
          marginTop='32px'
          value={form.title}
          onChangeText={(text) => handleChange('title', text)}
        />
        <Pressable>
          <Atoms.View
            marginTop='20px'
            width='100%'
            height='200px'
            background='white'
            borderRadius={20}
            borderColor='#e5e5e5'
            borderWidth={1}
            justifyContent='center'
            alignItems='center'
          >
            <Image
              source={ICON_IMAGE}
              width={24}
              height={24}
              style={{
                width: 24,
                height: 24,
                marginBottom: 8,
              }}
              resizeMode='cover'
            />
            <Atoms.Text fontSize='12px' color='#333'>
              대표 이미지를 추가하세요
            </Atoms.Text>
          </Atoms.View>
        </Pressable>
        <InputText
          label='준비물'
          marginTop='16px'
          value={form.ingredients}
          multiline
          onChangeText={(text) => handleChange('ingredients', text)}
        />
        <Pressable onPress={onSubmit}>
          <Atoms.Text>저장</Atoms.Text>
        </Pressable>
      </Atoms.Wrap>
    </Atoms.View>
  );
}
