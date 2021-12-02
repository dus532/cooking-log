import * as Atoms from '@/components/Atoms';

import { RouteProp } from '@react-navigation/native';

import React from 'react';
import ReciptToolbar from '@/components/Organisms/ReciptToolbar';
import ReciptList from '@/components/Organisms/ReciptList';

export default function Recipt({
  route,
}: {
  route: RouteProp<{ params: { id: number } }>;
}) {
  return (
    <Atoms.View alignItems='center' height='100%' justifyContent='center'>
      <ReciptToolbar />
      <ReciptList id={route.params.id} />
    </Atoms.View>
  );
}
