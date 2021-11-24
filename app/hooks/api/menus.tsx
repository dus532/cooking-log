import { CommonResponse } from '@/types/common';
import { Menu, Menus } from '@/types/menus';
import { api } from '@/utils/api';
import { useQuery } from 'react-query';

export const useMenusQuery = () => {
  return useQuery(
    'menus',
    async () => {
      try {
        const response = await api.get<CommonResponse<Menus>>('/menus');
        return response.data;
      } catch (e) {
        console.log(e);
      }
    },
    {}
  );
};

export const useMenuQuery = (id: number) => {
  return useQuery(
    ['menu', id],
    async () => {
      try {
        const response = await api.get<CommonResponse<Menu>>(`/menus/${id}`);
        return response.data;
      } catch (e) {
        console.log(e);
      }
    },
    {}
  );
};
