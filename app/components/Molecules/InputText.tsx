import * as Atoms from '@/components/Atoms';
import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

export default function InputText({
  marginTop,
  label,
  value,
  onChangeText,
  multiline,
  returnKeyType,
  returnKeyLabel,
  onSubmitEditing,
  secureTextEntry = false,
}: { marginTop?: string; label?: string } & TextInputProps) {
  return (
    <Atoms.View marginTop={marginTop}>
      <Atoms.Text>{label}</Atoms.Text>
      <TextInput
        style={{
          paddingTop: 8,
          paddingBottom: 4,
          fontSize: 28,
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        value={value}
        onChangeText={onChangeText}
        returnKeyType={returnKeyType}
        returnKeyLabel={returnKeyLabel}
        onSubmitEditing={onSubmitEditing}
      />
    </Atoms.View>
  );
}
