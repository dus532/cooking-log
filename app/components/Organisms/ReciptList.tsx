import * as Atoms from '@/components/Atoms';

import { SwiperFlatList } from 'react-native-swiper-flatlist';
import EX_PHOTO1 from '@/assets/example/photo1.jpeg';
import IMG_STAR from '@/assets/star.png';
import ICON_ARROW from '@/assets/icon_arrow.png';

import React, { useRef } from 'react';
import { Dimensions, Image, Pressable } from 'react-native';
import { useMenuQuery } from '@/hooks/api/menus';
import { format } from 'date-fns';

const { width } = Dimensions.get('window');

export default function ReciptList({ id }: { id: number }) {
  const { data } = useMenuQuery(id);
  const scrollRef = useRef<SwiperFlatList>(null);

  const ArrowButton = () => (
    <>
      <Pressable
        style={{
          position: 'absolute',
          zIndex: 2,
          bottom: 180,
          right: 40,
          width: 60,
          height: 60,
          backgroundColor: '#FF5757',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 42,
        }}
        onPress={() => {
          console.log(scrollRef.current?.getCurrentIndex());
        }}
        android_ripple={{
          color: '#000',
          borderless: true,
        }}
      >
        <Image
          style={{
            width: 40,
            height: 40,
          }}
          resizeMode='cover'
          source={ICON_ARROW}
        />
      </Pressable>
      <Pressable
        style={{
          position: 'absolute',
          zIndex: 2,
          bottom: 180,
          left: 40,
          width: 60,
          height: 60,
          backgroundColor: '#FF5757',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 42,
        }}
        onPress={() => {
          scrollRef.current?.scrollToIndex({
            index: scrollRef.current?.getCurrentIndex() - 1,
          });
        }}
        android_ripple={{
          color: '#000',
          borderless: true,
        }}
      >
        <Image
          style={{
            width: 40,
            height: 40,
            transform: [{ rotate: '180deg' }],
          }}
          resizeMode='cover'
          source={ICON_ARROW}
        />
      </Pressable>
    </>
  );

  if (!data?.payload) return <></>;
  return (
    <SwiperFlatList ref={scrollRef}>
      {/* 헤더 부분 */}
      <Atoms.View background='black' width={width}>
        <Atoms.View
          position='absolute'
          width='100%'
          bottom={98}
          stylePadding='0 40px'
          left={0}
          zIndex={2}
        >
          <Atoms.Text fontSize='16px' fontFamily='PreMedium' color='white'>
            {format(new Date(data.payload.createdAt), 'yyyy년 MM월 dd일')}
          </Atoms.Text>
          <Atoms.Text color='white' fontSize='32px' fontFamily='PreBold'>
            {data.payload.title}
          </Atoms.Text>
          <Atoms.View marginTop='4px' flexDirection='row'>
            {[...Array(data?.payload?.difficulty)].map((_, i) => (
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
        <Pressable
          style={{
            position: 'absolute',
            zIndex: 2,
            bottom: 180,
            right: 40,
            width: 60,
            height: 60,
            backgroundColor: '#FF5757',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 42,
          }}
          onPress={() => {
            scrollRef.current?.scrollToIndex({ index: 1 });
          }}
          android_ripple={{
            color: '#000',
            borderless: true,
          }}
        >
          <Image
            style={{
              width: 40,
              height: 40,
            }}
            resizeMode='cover'
            source={ICON_ARROW}
          />
        </Pressable>
        <Image
          style={{
            width: '100%',
            height: '100%',
          }}
          resizeMode='cover'
          source={EX_PHOTO1}
        />
      </Atoms.View>
      {/* 준비물 부분 */}
      <Atoms.View background='white' width={width}>
        <Atoms.View width='100%' height='30%' marginBottom='12px'>
          <Image
            style={{
              width: '100%',
              height: '100%',
            }}
            resizeMode='cover'
            source={EX_PHOTO1}
          />
        </Atoms.View>
        <Atoms.View stylePadding='0 40px' marginTop='32px'>
          <Atoms.Text fontSize='48px' fontFamily='PreLight' marginBottom='20px'>
            준비물
          </Atoms.Text>
          {data.payload.ingredients.map((ingredient, i) => (
            <Atoms.Text fontSize='20px' fontFamily='PreBold' key={i}>
              {ingredient}
            </Atoms.Text>
          ))}
        </Atoms.View>
        <ArrowButton />
      </Atoms.View>
      {/* 페이지 부분 */}
      {data.payload.recipes.map((recipe, i) => {
        return (
          <Atoms.View background='white' key={i} width={width}>
            <Atoms.View width='100%' height='30%' marginBottom='12px'>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                }}
                resizeMode='cover'
                source={EX_PHOTO1}
              />
            </Atoms.View>
            <Atoms.View stylePadding='0 40px' marginTop='32px'>
              <Atoms.Text
                fontSize='48px'
                fontFamily='PreLight'
                marginBottom='20px'
              >
                {i + 1 > 10 ? i + 1 : `0${i + 1}`}
              </Atoms.Text>
              <Atoms.Text fontSize='20px' fontFamily='PreBold' key={i}>
                {recipe.description}
              </Atoms.Text>
            </Atoms.View>
          </Atoms.View>
        );
      })}
    </SwiperFlatList>
  );
}
