'use client';

import { useAppSelector } from '@/features/hooks';
import { Category, Theme } from '@/types';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Button from '../UI/Button';
import { GiAlliedStar } from 'react-icons/gi';
import { useRouter } from 'next/navigation';

interface Props {
  item: Theme;
}

const ThemeCard: React.FC<Props> = ({ item }) => {
  const router = useRouter();

  // GLOBAL STATE
  const { data: categoryData } = useAppSelector((state) => state.category);

  // LOCAL STATE
  const [category, setCategory] = useState<Category | undefined>(undefined);

  // SET CATEGORY
  useEffect(() => {
    if (!categoryData) return;
    const choosedCategory = categoryData?.data.find(
      (cat: Category) => cat._id === item.category,
    );
    setCategory(choosedCategory);
  }, [categoryData, item.category]);

  return (
    <li
      key={item._id}
      className='w-full flex flex-col items-center rounded-lg shadow-lg bg-white overflow-hidden'
    >
      <div className='w-full h-[240px] overflow-hidden relative'>
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item.image}`}
          alt={item.title}
          sizes='true'
          fill
          priority
        />
      </div>
      <div className='w-full p-4 flex flex-col gap-2'>
        <h3 className='text-xl font-bold text-primaryBlack'>{item.title}</h3>
        <div className='flex items-center gap-2 text-primaryBlack'>
          <GiAlliedStar
            className={`${
              category?.title === 'silver'
                ? 'text-silver'
                : category?.title === 'gold'
                ? 'text-Gold'
                : 'text-platinum'
            }`}
          />
          {category?.title}
        </div>
        <div className='flex flex-col gap-2'>
          <Button
            variants='outline'
            type='button'
            className='w-full'
            onClick={() => router.push(`/example?preset_id=${item._id}`)}
          >
            Lihat Contoh
          </Button>
          <Button
            variants='primary'
            type='button'
            className='w-full'
            onClick={() => router.push('/couple-data')}
          >
            Buat
          </Button>
        </div>
      </div>
    </li>
  );
};

export default React.memo(ThemeCard);
