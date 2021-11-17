import * as Atoms from '@/components/Atoms';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, Platform } from 'react-native';

import IMG_BOOKMARK from '@/assets/bookmark.png';
import IMG_LOGO from '@/assets/logo.png';
import IMG_STAR from '@/assets/star.png';

import EX_PHOTO1 from '@/assets/example/photo1.jpeg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

function Header() {
  return (
    <Atoms.Wrap stylePadding='0 24px'>
      <Image
        style={{ width: 183, height: 56, marginTop: 76, marginBottom: 32 }}
        resizeMode='contain'
        source={IMG_LOGO}
      />
    </Atoms.Wrap>
  );
}

export default function Home() {
  const navigation = useNavigation<any>();

  const DATA = [
    {
      date: '2021-08-15',
      title: '에그 토스트',
      rate: 3,
    },
    {
      date: '2021-08-15',
      title: '에그 토스트',
      rate: 3,
    },
    {
      date: '2021-08-15',
      title: '에그 토스트',
      rate: 3,
    },
    {
      date: '2021-08-15',
      title: '에그 토스트',
      rate: 3,
    },
  ];

  function Item({ item }: any) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('Recipt');
        }}
      >
        <Atoms.Wrap
          stylePadding='0px'
          marginBottom='24px'
          style={{
            ...Platform.select({
              ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 5 },
                shadowRadius: 10,
                shadowOpacity: 0.12,
              },
              android: { elevation: 8, backgroundColor: '#0000' },
            }),
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            width: 'auto',
            height: 'auto',
            marginRight: 24,
            marginLeft: 24,
          }}
        >
          <Atoms.View
            width='100%'
            height='180px'
            style={{
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          >
            <Image
              style={{
                width: '100%',
                height: '100%',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
              source={EX_PHOTO1}
            />
          </Atoms.View>
          <Atoms.View
            width='100%'
            height='80px'
            background='white'
            style={{
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
            flexDirection='row'
            stylePadding='20px'
            justifyContent='space-between'
          >
            <Atoms.View justifyContent='space-between'>
              <Atoms.Text fontSize='12px' fontFamily='PreLight'>
                {item.date}
              </Atoms.Text>
              <Atoms.Text fontSize='20px' fontFamily='PreBold'>
                {item.title}
              </Atoms.Text>
            </Atoms.View>
            <Atoms.View marginTop='auto' flexDirection='row'>
              {[...Array(item.rate)].map((_, i) => (
                <Image
                  style={{
                    width: 14,
                    height: 14,
                  }}
                  key={i}
                  resizeMode='contain'
                  source={IMG_STAR}
                />
              ))}
            </Atoms.View>
          </Atoms.View>
        </Atoms.Wrap>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
      <Atoms.View
        height='52px'
        alignItems='flex-end'
        flexDirection='row'
        paddingLeft='24px'
        paddingBottom='8px'
        borderBottomColor='#eeeeee'
        borderBottomWidth='1px'
        zIndex={2}
      >
        <Atoms.Text fontFamily='PreBold' marginRight='4px'>
          11월 16일
        </Atoms.Text>
        <Atoms.Text fontFamily='PreBold' color='#777'>
          금요일
        </Atoms.Text>
        <Image
          style={{
            width: 60,
            height: 80,
            position: 'absolute',
            top: 20,
            right: 32,
            zIndex: 10,
          }}
          source={IMG_BOOKMARK}
        />
      </Atoms.View>
      <Atoms.View flex={1} background='#f6f6f6'>
        <FlatList
          data={DATA}
          renderItem={Item}
          ListHeaderComponent={Header}
          keyExtractor={(item, index) => index.toString()}
        />
      </Atoms.View>
    </SafeAreaView>
  );
}
