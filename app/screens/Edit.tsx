import * as Atoms from '@/components/Atoms';
import { useMenusQuery } from '@/hooks/api/menus';
import { Menu } from '@/types/menus';
import { api } from '@/utils/api';
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Pressable, TextInput, TextInputProps } from 'react-native';

function InputText({
  marginTop,
  label,
  value,
  onChangeText,
}: { marginTop?: string; label?: string } & TextInputProps) {
  return (
    <Atoms.View marginTop={marginTop}>
      <Atoms.Text>{label}</Atoms.Text>
      <TextInput
        style={{
          paddingTop: 8,
          paddingBottom: 12,
          fontSize: 28,
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}
        value={value}
        onChangeText={onChangeText}
      />
    </Atoms.View>
  );
}

export default function Edit() {
  const [form, setForm] = useState({
    title: '',
    image: '',
    difficulty: 5,
    ingredients: [],
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
        <Pressable onPress={onSubmit}>
          <Atoms.Text>저장</Atoms.Text>
        </Pressable>
      </Atoms.Wrap>
    </Atoms.View>
  );
}
