'use server';

import { cookies } from 'next/headers';

export const deleteCookies = async(keys: string[]) => {
   keys.forEach((key) => {
      cookies().delete(key);
   });
};
