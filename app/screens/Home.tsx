import * as Atoms from '@/components/Atoms';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, FlatList, Image, Platform, Pressable } from 'react-native';

import IMG_BOOKMARK from '@/assets/bookmark.png';
import IMG_ADD from '@/assets/icon_add.png';
import IMG_LOGO from '@/assets/logo.png';
import IMG_STAR from '@/assets/star.png';
import EX_PHOTO1 from '@/assets/example/photo1.jpeg';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useMenusQuery } from '@/hooks/api/menus';
import { format } from 'date-fns';

const { width } = Dimensions.get('window');

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
  const { data } = useMenusQuery();

  function Item({ item }: any) {
    return (
      <Pressable
        android_ripple={{ color: '#0001', borderless: true }}
        onPress={() => {
          navigation.navigate('Recipt', { id: item.id });
        }}
        style={{
          ...Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 5 },
              shadowRadius: 10,
              shadowOpacity: 0.12,
            },
            android: { elevation: 15, backgroundColor: '#0000' },
          }),
        }}
      >
        <Atoms.View
          marginBottom='24px'
          style={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            overflow: 'hidden',
            marginRight: 24,
            marginLeft: 24,
          }}
        >
          <Atoms.View height='180px'>
            <Image
              style={{
                width: '100%',
                height: '100%',
              }}
              source={EX_PHOTO1}
            />
          </Atoms.View>
          <Atoms.View
            height='80px'
            background='white'
            flexDirection='row'
            stylePadding='20px'
            justifyContent='space-between'
            alignItems='center'
          >
            <Atoms.View justifyContent='space-between'>
              <Atoms.Text fontSize='12px' fontFamily='PreLight'>
                {format(new Date(item.createdAt), 'yyyy년 MM월 dd일')}
              </Atoms.Text>
              <Atoms.Text fontSize='20px' fontFamily='PreBold'>
                {item.title}
              </Atoms.Text>
            </Atoms.View>
            <Atoms.View marginTop='auto' flexDirection='row'>
              {[...Array(item.difficulty)].map((_, i) => (
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
        </Atoms.View>
      </Pressable>
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
          {format(new Date(), 'MM월 dd일')}
        </Atoms.Text>
        <Atoms.Text fontFamily='PreBold' color='#777'>
          {format(new Date(), 'E')}요일
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
          data={data?.payload?.menus ?? []}
          renderItem={Item}
          ListHeaderComponent={Header}
          keyExtractor={(item, index) => index.toString()}
        />
      </Atoms.View>
      <Pressable
        style={{
          position: 'absolute',
          bottom: 24,
          left: width / 2 - 60,
          width: 120,
          height: 120,
        }}
        onPress={() => {
          navigation.navigate('Edit');
        }}
      >
        <Image
          style={{
            width: '100%',
            height: '100%',
          }}
          source={IMG_ADD}
        />
      </Pressable>
    </SafeAreaView>
  );
}
