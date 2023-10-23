'use client';

import { useAppDispatch } from '@/features/hooks';
import { RootState } from '@/features/store';
import { AsyncThunk } from '@reduxjs/toolkit';
import React, { HTMLProps, useEffect, useState } from 'react';
import { BsCloudUpload } from 'react-icons/bs';
import { MdAddCircleOutline } from 'react-icons/md';

interface Props extends HTMLProps<HTMLDivElement> {
  id: string;
  imageData: string | string[] | null;
  // eslint-disable-next-line no-unused-vars
  uploadAction: AsyncThunk<any, any, { state: RootState }>;
  className?: string;
  multiple?: boolean;
}

interface ImageList {
  id: string;
  name: string;
  url: string;
  show: boolean;
}

const UploadImageField: React.FC<Props> = ({
  className,
  multiple = false,
  id,
  imageData,
  uploadAction,
  ...rest
}) => {
  const dispatch = useAppDispatch();

  // const {selectedImage} = useAppSelector(state => state.couples);

  const [dragActive, setDragActive] = useState<boolean>(false);

  const [imageList, setImageList] = useState<ImageList[]>([]);

  // FUNCTION UPLOAD IMAGE
  const uploadImage = async (files: any) => {
    if (!multiple) {
      if (files[0].type.split('/')[0] !== 'image') return;

      const image = files[0];

      // upload image
      dispatch(uploadAction({ file: image }));
    } else {
      for (let image in files) {
        if (image !== 'length' && image !== 'item') {
          if (files[image].type.split('/')[0] !== 'image') continue;

          // upload image
          dispatch(uploadAction({ file: files[image] }));
        }
      }
    }
  };

  // FUNCTION DRAG IMAGE
  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  // UPLOAD IMAGE WITH DROP
  const dropImageHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const newImage = e.dataTransfer.files;
      uploadImage(newImage);
    }
  };

  // UPLOAD IMAGE WITH CLICK
  const changeImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newImage = e.target.files;
    uploadImage(newImage);
  };

  // SET IMAGE LIST IF THERE ARE IMAGE BEFORE
  useEffect(() => {
    if (!imageData || imageData.length === 0) return;

    if (imageData instanceof Array) {
      const newImageData = imageData.map((item: string, i: number) => ({
        id: Math.random() + i + '',
        name: item,
        url: `${process.env.NEXT_PUBLIC_IMAGE_URL}/${item}`,
        show: false,
      }));

      setImageList(newImageData);
    } else {
      const newImageData = {
        id: Math.random() + 1 + '',
        name: imageData,
        url: `${process.env.NEXT_PUBLIC_IMAGE_URL}/${imageData}`,
        show: false,
      };

      setImageList([newImageData]);
    }
  }, [imageData]);

  return (
    <>
      <div
        className={`${className} w-full flex flex-col gap-12 relative`}
        {...rest}
      >
        <div
          className={`w-full border-[2px] border-dashed border-black/20 rounded-lg ${
            dragActive ? 'bg-black/5' : 'bg-white'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={dropImageHandler}
        >
          <input
            type='file'
            name='upload-image'
            id={id ? id : 'upload-image'}
            multiple={multiple}
            accept='image/*'
            hidden
            onChange={changeImageHandler}
          />
          <div className='w-full flex flex-col gap-2 py-14 items-center justify-center text-black/70 pointer-events-none'>
            <BsCloudUpload className='text-[3rem]' />
            <span className='text-2xl font-normal'>Drop your files here</span>
            <span className='text-sm font-thin'>or Click</span>
          </div>
        </div>
        <label
          htmlFor={id ? id : 'upload-image'}
          className='absolute -bottom-6 left-1/2 flex flex-row items-center gap-2 -translate-x-1/2 py-3 px-12 font-semibold text-lg rounded-lg cursor-pointer text-white bg-darkBlue hover:brightness-90'
        >
          <MdAddCircleOutline />
          <span>Add File</span>
        </label>
      </div>
      <ul className='w-full mt-8 h-6 flex flex-wrap justify-start items-center'>
        {imageList.map((item: ImageList, i: number) => (
          <li
            key={item.id}
            className={`px-4 ${
              i === 0 ? 'border-l-none' : 'border-l-[1px] border-l-black/20'
            }`}
          >
            <span className='text-xs font-normal text-primaryBlack hover:underline'>
              <a href={item.url} target='blank'>
                {item.name}
              </a>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default React.memo(UploadImageField);
