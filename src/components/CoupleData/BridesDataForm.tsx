'use client';

import React, { useEffect, useState } from 'react';
import InputField from '../UI/InputField';
import { CoupleData } from '@/types';
import UploadImageField from '../UI/UploadImageField';
import { uploadImageCouple } from '@/features/couples/actions';
import { useAppDispatch, useAppSelector } from '@/features/hooks';
import { resetImageUploaded } from '@/features/couples/coupleSlice';

interface Props {
  coupleData: CoupleData;
  // eslint-disable-next-line no-unused-vars
  setCoupleData: (newState: CoupleData) => void;
  // eslint-disable-next-line no-unused-vars
  setFormValid: (formStatus: { status: boolean; message: string }) => void;
}

const BridesDataForm: React.FC<Props> = ({
  coupleData,
  setCoupleData,
  setFormValid,
}) => {
  const dispatch = useAppDispatch();

  const { imageCouple } = useAppSelector((state) => state.couples);

  const [theImageThatUploadedOfCouple, setTheImageThatUploadedOfCouple] =
    useState<string>('');

  // FUNCTION SCROLL TOP
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  // SET THE COUPLE FOTO AFTER UPLOAD
  useEffect(() => {
    if (!imageCouple) return;
    if (imageCouple.length === 0) return;
    if (!theImageThatUploadedOfCouple) return;

    if (theImageThatUploadedOfCouple === 'bride') {
      setCoupleData({
        ...coupleData,
        bride_data: { ...coupleData.bride_data, photo: imageCouple[0] },
      });

      dispatch(resetImageUploaded());
    } else if (theImageThatUploadedOfCouple === 'groom') {
      setCoupleData({
        ...coupleData,
        groom_data: { ...coupleData.groom_data, photo: imageCouple[0] },
      });

      dispatch(resetImageUploaded());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageCouple, theImageThatUploadedOfCouple]);

  // Validation
  useEffect(() => {
    // Bride Validation
    const validBrideFullName =
      coupleData.bride_data.full_name.trim().length !== 0;
    const validBrideNickName =
      coupleData.bride_data.nick_name.trim().length !== 0;
    const validBrideFathersName =
      coupleData.bride_data.fathers_name.trim().length !== 0;
    const validBrideMothersName =
      coupleData.bride_data.mothers_name.trim().length !== 0;
    const validBrideBirthOrder = coupleData.bride_data.birth_order;
    const validBrideNoWA =
      coupleData.bride_data.wa_number.trim().length !== 0 &&
      coupleData.bride_data.wa_number.trim().length < 14;
    const validBridePhoto =
      coupleData.bride_data.photo &&
      coupleData.bride_data.photo.trim().length !== 0;

    // Groom Validation
    const validGroomFullName =
      coupleData.groom_data.full_name.trim().length !== 0;
    const validGroomNickName =
      coupleData.groom_data.nick_name.trim().length !== 0;
    const validGroomFathersName =
      coupleData.groom_data.fathers_name.trim().length !== 0;
    const validGroomMothersName =
      coupleData.groom_data.mothers_name.trim().length !== 0;
    const validGroomBirthOrder = coupleData.groom_data.birth_order;
    const validGroomNoWA =
      coupleData.groom_data.wa_number.trim().length !== 0 &&
      coupleData.groom_data.wa_number.trim().length < 14;
    const validGroomPhoto =
      coupleData.groom_data.photo &&
      coupleData.groom_data.photo.trim().length !== 0;

    // Check Validation
    if (!validBrideFullName) {
      return setFormValid({
        status: false,
        message: 'Nama Lengkap Pengantin Wanita Harus Diisi',
      });
    }

    if (!validBrideNickName) {
      return setFormValid({
        status: false,
        message: 'Nama Panggilan Pengantin Wanita Harus Diisi',
      });
    }

    if (!validBrideFathersName) {
      return setFormValid({
        status: false,
        message: 'Nama Bapak Pengantin Wanita Harus Diisi',
      });
    }

    if (!validBrideMothersName) {
      return setFormValid({
        status: false,
        message: 'Nama Ibu Pengantin Wanita Harus Diisi',
      });
    }

    if (!validBrideBirthOrder) {
      return setFormValid({
        status: false,
        message: 'Urutan Lahir Pengantin Wanita Harus Diisi',
      });
    }

    if (!validBrideNoWA) {
      return setFormValid({
        status: false,
        message: 'Nomor Whatsapp Pengantin Wanita Tidak Valid',
      });
    }

    if (!validBridePhoto) {
      return setFormValid({
        status: false,
        message: 'Foto Pengantin Wanita Harus Di Masukan',
      });
    }

    if (!validGroomFullName) {
      return setFormValid({
        status: false,
        message: 'Nama Lengkap Pengantin Pria Harus Diisi',
      });
    }

    if (!validGroomNickName) {
      return setFormValid({
        status: false,
        message: 'Nama Panggilan Pengantin Pria Harus Diisi',
      });
    }

    if (!validGroomFathersName) {
      return setFormValid({
        status: false,
        message: 'Nama Bapak Pengantin Pria Harus Diisi',
      });
    }

    if (!validGroomMothersName) {
      return setFormValid({
        status: false,
        message: 'Nama Ibu Pengantin Pria Harus Diisi',
      });
    }

    if (!validGroomBirthOrder) {
      return setFormValid({
        status: false,
        message: 'Urutan Lahir Pengantin Pria Harus Diisi',
      });
    }

    if (!validGroomNoWA) {
      return setFormValid({
        status: false,
        message: 'Nomor Whatsapp Pengantin Tidak Valid',
      });
    }

    if (!validGroomPhoto) {
      return setFormValid({
        status: false,
        message: 'Foto Pengantin Pria Harus Di Masukan',
      });
    }

    setFormValid({ status: true, message: '' });
  }, [coupleData.groom_data, coupleData.bride_data, setFormValid]);

  return (
    <>
      {/* BRIDE FORM */}
      <div className='w-full flex flex-col gap-6 mb-12'>
        <h2 className='text-darkBlue font-semibold text-lg'>
          Data Mempelai Wanita
        </h2>

        <div className='w-full grid grid-cols-2 gap-8'>
          <InputField
            label='Nama Lengkap'
            id='nama-mempelai-wanita'
            placeholder='Nama Lengkap Mempelai Wanita'
            type='text'
            value={coupleData.bride_data.full_name}
            onChange={(e) =>
              setCoupleData({
                ...coupleData,
                bride_data: {
                  ...coupleData.bride_data,
                  full_name: e.target.value,
                },
              })
            }
          />
          <InputField
            label='Nama Panggilan'
            id='nama-panggilan-mempelai-wanita'
            placeholder='Nama Panggilan Mempelai Wanita'
            type='text'
            value={coupleData.bride_data.nick_name}
            onChange={(e) =>
              setCoupleData({
                ...coupleData,
                bride_data: {
                  ...coupleData.bride_data,
                  nick_name: e.target.value,
                },
              })
            }
          />
          <InputField
            label='Nama Bapak'
            id='nama-bapak-mempelai-wanita'
            placeholder='Nama Bapak Mempelai Wanita'
            type='text'
            value={coupleData.bride_data.fathers_name}
            onChange={(e) =>
              setCoupleData({
                ...coupleData,
                bride_data: {
                  ...coupleData.bride_data,
                  fathers_name: e.target.value,
                },
              })
            }
          />
          <InputField
            label='Nama Ibu'
            id='nama-ibu-mempelai-wanita'
            placeholder='Nama Ibu Mempelai Wanita'
            type='text'
            value={coupleData.bride_data.mothers_name}
            onChange={(e) =>
              setCoupleData({
                ...coupleData,
                bride_data: {
                  ...coupleData.bride_data,
                  mothers_name: e.target.value,
                },
              })
            }
          />
          <InputField
            label='Anak Ke-'
            id='urutan-lahir-wanita'
            placeholder='Anak ke-'
            type='number'
            value={coupleData.bride_data.birth_order || ''}
            onChange={(e) =>
              setCoupleData({
                ...coupleData,
                bride_data: {
                  ...coupleData.bride_data,
                  birth_order: e.target.value,
                },
              })
            }
          />
          <InputField
            label='No Whatsapp'
            id='no-whatsapp-wanita'
            placeholder='No Wahtsapp'
            type='number'
            value={coupleData.bride_data.wa_number || ''}
            onChange={(e) =>
              setCoupleData({
                ...coupleData,
                bride_data: {
                  ...coupleData.bride_data,
                  wa_number: e.target.value,
                },
              })
            }
          />
          <InputField
            label='Akun Instagram'
            id='akun-instagram-wanita'
            placeholder='Akun Instagram'
            type='text'
            value={coupleData.bride_data.instagram_account}
            onChange={(e) =>
              setCoupleData({
                ...coupleData,
                bride_data: {
                  ...coupleData.bride_data,
                  instagram_account: e.target.value,
                },
              })
            }
          />

          {/* UPLOAD IMAGE */}
          <div className='flex flex-col gap-2 row-start-5 col-span-2 text-sm font-bold text-primaryBlack'>
            <h2>Foto Pengantin Wanita</h2>
            <UploadImageField
              id='upload-pengantin-wanita'
              uploadAction={uploadImageCouple}
              imageData={coupleData.bride_data.photo}
              onClick={() => setTheImageThatUploadedOfCouple('bride')}
            />
          </div>
        </div>
      </div>

      {/* GROOM FORM */}
      <div className='w-full flex flex-col gap-6'>
        <h2 className='text-darkBlue font-semibold text-lg'>
          Data Mempelai Pria
        </h2>

        <div className='w-full grid grid-cols-2 gap-8'>
          <InputField
            label='Nama Lengkap'
            id='nama-mempelai-pria'
            placeholder='Nama Lengkap Mempelai Pria'
            type='text'
            value={coupleData.groom_data.full_name}
            onChange={(e) =>
              setCoupleData({
                ...coupleData,
                groom_data: {
                  ...coupleData.groom_data,
                  full_name: e.target.value,
                },
              })
            }
          />
          <InputField
            label='Nama Panggilan'
            id='nama-panggilan-mempelai-pria'
            placeholder='Nama Panggilan Mempelai Pria'
            type='text'
            value={coupleData.groom_data.nick_name}
            onChange={(e) =>
              setCoupleData({
                ...coupleData,
                groom_data: {
                  ...coupleData.groom_data,
                  nick_name: e.target.value,
                },
              })
            }
          />
          <InputField
            label='Nama Bapak'
            id='nama-bapak-mempelai-pria'
            placeholder='Nama Bapak Mempelai Pria'
            type='text'
            value={coupleData.groom_data.fathers_name}
            onChange={(e) =>
              setCoupleData({
                ...coupleData,
                groom_data: {
                  ...coupleData.groom_data,
                  fathers_name: e.target.value,
                },
              })
            }
          />
          <InputField
            label='Nama Ibu'
            id='nama-ibu-mempelai-pria'
            placeholder='Nama Ibu Mempelai Pria'
            type='text'
            value={coupleData.groom_data.mothers_name}
            onChange={(e) =>
              setCoupleData({
                ...coupleData,
                groom_data: {
                  ...coupleData.groom_data,
                  mothers_name: e.target.value,
                },
              })
            }
          />
          <InputField
            label='Anak Ke-'
            id='urutan-lahir-pria'
            placeholder='Anak ke-'
            type='number'
            value={coupleData.groom_data.birth_order || ''}
            onChange={(e) =>
              setCoupleData({
                ...coupleData,
                groom_data: {
                  ...coupleData.groom_data,
                  birth_order: e.target.value,
                },
              })
            }
          />
          <InputField
            label='No Whatsapp'
            id='no-whatsapp-pria'
            placeholder='No Wahtsapp'
            type='number'
            value={coupleData.groom_data.wa_number || ''}
            onChange={(e) =>
              setCoupleData({
                ...coupleData,
                groom_data: {
                  ...coupleData.groom_data,
                  wa_number: e.target.value,
                },
              })
            }
          />
          <InputField
            label='Akun Instagram'
            id='akun-instagram-pria'
            placeholder='Akun Instagram'
            type='text'
            value={coupleData.groom_data.instagram_account}
            onChange={(e) =>
              setCoupleData({
                ...coupleData,
                groom_data: {
                  ...coupleData.groom_data,
                  instagram_account: e.target.value,
                },
              })
            }
          />

          {/* UPLOAD IMAGE */}
          <div className='flex flex-col gap-2 row-start-5 col-span-2 text-sm font-bold text-primaryBlack'>
            <h2>Foto Pengantin Pria</h2>
            <UploadImageField
              id='upload-pengantin-pria'
              uploadAction={uploadImageCouple}
              imageData={coupleData.groom_data.photo}
              onClick={() => setTheImageThatUploadedOfCouple('groom')}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BridesDataForm;
