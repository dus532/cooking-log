import * as Atoms from '@/components/Atoms';

import { RouteProp, useNavigation } from '@react-navigation/native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import EX_PHOTO1 from '@/assets/example/photo1.jpeg';

import React from 'react';
import { Dimensions, Image } from 'react-native';
import { useMenuQuery } from '@/hooks/api/menus';

const { width } = Dimensions.get('window');

export default function Recipt({
  route,
}: {
  route: RouteProp<{ params: { id: number } }>;
}) {
  const navigation = useNavigation<any>();
  const { data } = useMenuQuery(route.params.id);

  console.log(data?.payload);

  return (
    <Atoms.View alignItems='center' height='100%' justifyContent='center'>
      <SwiperFlatList>
        <Atoms.View background='black' width={width}>
          <Atoms.View
            position='absolute'
            width='100%'
            bottom={98}
            stylePadding='0 40px'
            left={0}
            zIndex={2}
          >
            <Atoms.Text color='white' fontSize='32px' fontFamily='PreBold'>
              {data?.payload?.title}
            </Atoms.Text>
          </Atoms.View>
          <Image
            style={{
              width: '100%',
              height: '100%',
            }}
            resizeMode='cover'
            source={EX_PHOTO1}
          />
        </Atoms.View>
        <Atoms.View background='white' width={width}></Atoms.View>
      </SwiperFlatList>
    </Atoms.View>
  );
}
