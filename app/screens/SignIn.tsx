import * as Atoms from '@/components/Atoms';
import InputText from '@/components/Molecules/InputText';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignIn() {
  const [form, setForm] = useState({
    id: '',
    password: '',
  });

  const handleChange = (name: string, value: any) => {
    setForm((v) => ({ ...v, [name]: value }));
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#f6f6f6', height: '100%' }}>
      <Atoms.Wrap stylePadding='0 24px'>
        <Atoms.View marginTop='100px' marginBottom='20px'>
          <Atoms.Text fontFamily='PreBold' color='#ff5757' fontSize='40px'>
            쿠킹로그에
          </Atoms.Text>
          <Atoms.Text fontSize='40px'>로그인하세요!</Atoms.Text>
        </Atoms.View>
        <InputText
          label='아이디'
          value={form.id}
          returnKeyType='next'
          onChangeText={(text) => handleChange('id', text)}
        />
        <InputText
          label='비밀번호'
          marginTop='16px'
          secureTextEntry
          returnKeyType='done'
          value={form.password}
          onChangeText={(text) => handleChange('password', text)}
          onSubmitEditing={() => {
            console.log(form);
          }}
        />
      </Atoms.Wrap>
    </SafeAreaView>
  );
}
