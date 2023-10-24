'use client';

import React, { useEffect } from 'react';
import InputField from '../UI/InputField';
import { CoupleData } from '@/types';
import UploadImageField from '../UI/UploadImageField';
import { uploadImageCouple } from '@/features/couples/actions';
import { useAppSelector } from '@/features/hooks';

interface Props {
  coupleData: CoupleData;
  // eslint-disable-next-line no-unused-vars
  setCoupleData: (newState: CoupleData) => void;
  // eslint-disable-next-line no-unused-vars
  setFormValid: (formStatus: { status: boolean; message: string }) => void;
}

const AdditionalDataForm: React.FC<Props> = ({
  coupleData,
  setCoupleData,
  setFormValid,
}) => {
  const { imageCouple } = useAppSelector((state) => state.couples);

  // FUNCTION SCROLL TOP
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  // SET IMAGE TO THAT UPLOADED TO COUPLE DATA
  useEffect(() => {
    if (imageCouple && imageCouple.length !== 0) {
      setCoupleData({
        ...coupleData,
        wedding_photo: imageCouple,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageCouple]);

  // VALIDATION
  useEffect(() => {
    // Additional Validation
    const validBacksound = coupleData.backsound.trim().length !== 0;
    const validWeddingPhoto = coupleData.wedding_photo.length !== 0;

    // Check Validation
    if (!validBacksound) {
      return setFormValid({
        status: false,
        message: 'Isi Judul Lagu Backsound',
      });
    }

    if (!validWeddingPhoto) {
      return setFormValid({
        status: false,
        message: 'Masukan Foto - foto Pernikahan',
      });
    }

    setFormValid({ status: true, message: '' });
  }, [coupleData.backsound, coupleData.wedding_photo, setFormValid]);

  return (
    <>
      {/* BACKSOUND */}
      <InputField
        type='text'
        label='Backsound'
        id='backsound'
        placeholder='Isi Judul lagu'
        value={coupleData.backsound}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCoupleData({ ...coupleData, backsound: e.target.value })
        }
      />

      {/* UPLOAD IMAGE */}
      <div className='flex flex-col mt-8 gap-2 row-start-5 col-span-2 text-sm font-bold text-primaryBlack'>
        <h2>Foto - foto Pengantin</h2>
        <UploadImageField
          id='upload-foto-pengantin'
          multiple
          imageData={coupleData.wedding_photo}
          uploadAction={uploadImageCouple}
        />
      </div>
    </>
  );
};

export default AdditionalDataForm;
