'use client';

import React, { useEffect } from 'react';
import InputField from '../UI/InputField';
import SelectFieldDate from '../UI/SelectFieldDate';
import SelectFieldTime from '../UI/SelectFieldTime';
import { CoupleData } from '@/types';
import CheckboxField from '../UI/CheckboxField';

interface Props {
  coupleData: CoupleData;
  sameEventData: boolean;
  // eslint-disable-next-line no-unused-vars
  setSameEventData: (sameData: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  setCoupleData: (newState: CoupleData) => void;
  // eslint-disable-next-line no-unused-vars
  setFormValid: (formStatus: { status: boolean; message: string }) => void;
}

const EventDataForm: React.FC<Props> = ({
  coupleData,
  setCoupleData,
  setFormValid,
  sameEventData,
  setSameEventData,
}) => {
  // FUNCTION SCROLL TOP
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  // WILL SET RECEPTION DATA SAME WITH SETTLEMENT DATA
  useEffect(() => {
    if (sameEventData) {
      setCoupleData({
        ...coupleData,
        marriage_reception_date: coupleData.marriage_settlement_date,
        marriage_reception_link_maps: coupleData.marriage_settlement_link_maps,
        marriage_reception_location: coupleData.marriage_settlement_location,
        marriage_reception_time: coupleData.marriage_settlement_time,
      });
    } else {
      setCoupleData({
        ...coupleData,
        marriage_reception_date: undefined,
        marriage_reception_link_maps: '',
        marriage_reception_location: '',
        marriage_reception_time: '',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sameEventData]);

  // VALIDATION
  useEffect(() => {
    // Event Validation
    const validStlmntDate = coupleData.marriage_settlement_date;
    const validStlmntTime =
      coupleData.marriage_settlement_time.trim().length !== 0;
    const validStlmntMaps =
      coupleData.marriage_settlement_link_maps.trim().length !== 0;
    const validStlmntLocations =
      coupleData.marriage_settlement_location.trim().length !== 0;
    const validRcptnDate = coupleData.marriage_reception_date;
    const validRcptnTime =
      coupleData.marriage_reception_time.trim().length !== 0;
    const validRcptnMaps =
      coupleData.marriage_reception_link_maps.trim().length !== 0;
    const validRcptnLocations =
      coupleData.marriage_reception_location.trim().length !== 0;
    const validLoveGift1BankName =
      coupleData.love_gift_1.bank_name.trim().length !== 0;
    const validLoveGift1AccountName =
      coupleData.love_gift_1.account_name.trim().length !== 0;
    const validLoveGift1AccountNumber =
      coupleData.love_gift_1.account_number.trim().length !== 0;

    // Check Validation
    if (!validStlmntDate) {
      return setFormValid({ status: false, message: 'Pilih Tanggal Akad' });
    }

    if (!validStlmntTime) {
      return setFormValid({ status: false, message: 'Pilih Waktu Akad' });
    }

    if (!validStlmntMaps) {
      return setFormValid({
        status: false,
        message: 'Isi Link Google Maps Akad',
      });
    }

    if (!validStlmntLocations) {
      return setFormValid({ status: false, message: 'Isi Alamat Tempat Akad' });
    }

    if (!validRcptnDate) {
      return setFormValid({ status: false, message: 'Pilih Tanggal Resepsi' });
    }

    if (!validRcptnTime) {
      return setFormValid({ status: false, message: 'Pilih Waktu Resepsi' });
    }

    if (!validRcptnMaps) {
      return setFormValid({
        status: false,
        message: 'Isi link Google Maps Resepsi',
      });
    }

    if (!validRcptnLocations) {
      return setFormValid({
        status: false,
        message: 'Isi Alamat Tempat Resepsi',
      });
    }

    if (!validLoveGift1BankName) {
      return setFormValid({ status: false, message: 'Isi Nama Bank' });
    }

    if (!validLoveGift1AccountName) {
      return setFormValid({ status: false, message: 'Isi Nama Rekening' });
    }

    if (!validLoveGift1AccountNumber) {
      return setFormValid({ status: false, message: 'Isi Nomor Rekening' });
    }

    setFormValid({ status: true, message: '' });
  }, [
    coupleData.marriage_settlement_date,
    coupleData.marriage_settlement_time,
    coupleData.marriage_settlement_link_maps,
    coupleData.marriage_settlement_location,
    coupleData.marriage_reception_date,
    coupleData.marriage_reception_time,
    coupleData.marriage_reception_link_maps,
    coupleData.marriage_reception_location,
    coupleData.love_gift_1,
    setFormValid,
  ]);

  return (
    <>
      {/* WEDDING FORM */}
      <div className='w-full flex flex-col gap-6 mb-12'>
        <h2 className='text-darkBlue font-semibold text-lg'>
          Data Akad Pernikahan
        </h2>

        <div className='w-full grid grid-cols-3 gap-8'>
          <SelectFieldDate
            label='Hari & Tanggal Acara'
            id='hari-dan-tanggal-akad'
            placeholder='Pilih Hari dan Tanggal'
            fromDate={new Date()}
            value={coupleData.marriage_settlement_date}
            onChooseDate={(date) =>
              setCoupleData({ ...coupleData, marriage_settlement_date: date })
            }
          />
          <SelectFieldTime
            label='Waktu'
            id='waktu-akad'
            placeholder='Pilih Waktu Acara'
            value={coupleData.marriage_settlement_time}
            onChooseTime={(time) =>
              setCoupleData({ ...coupleData, marriage_settlement_time: time })
            }
          />
          <InputField
            type='text'
            label='Link Google Maps'
            id='link-maps-acara'
            placeholder='Masukan Link Google Maps'
            value={coupleData.marriage_settlement_link_maps}
            onChange={(e) =>
              setCoupleData({
                ...coupleData,
                marriage_settlement_link_maps: e.target.value,
              })
            }
          />
          <InputField
            type='text'
            label='Tempat'
            id='tempat-akad'
            placeholder='Tuliskan Alamat dan Tempat'
            value={coupleData.marriage_settlement_location}
            onChange={(e) =>
              setCoupleData({
                ...coupleData,
                marriage_settlement_location: e.target.value,
              })
            }
          />
        </div>
      </div>

      {/* RECEPTION FORM*/}
      <div className='w-full flex flex-col gap-6 mb-12'>
        <div className='w-full flex items-center justify-between'>
          <h2 className='text-darkBlue font-semibold text-lg'>
            Data Resepsi Pernikahan
          </h2>

          <CheckboxField
            label='Data sama dengan Data Akad'
            id='check-same-data'
            className='w-[20%]'
            checked={sameEventData}
            onChecked={(e) => setSameEventData(e.target.checked)}
          />
        </div>

        <div className='w-full grid grid-cols-3 gap-8'>
          <SelectFieldDate
            label='Hari & Tanggal Acara'
            id='hari-dan-tanggal-resepsi'
            placeholder='Pilih Hari dan Tanggal'
            fromDate={new Date()}
            value={coupleData.marriage_reception_date}
            onChooseDate={(date) =>
              setCoupleData({ ...coupleData, marriage_reception_date: date })
            }
          />
          <SelectFieldTime
            label='Waktu'
            id='waktu-resepsi'
            placeholder='Pilih Waktu Acara'
            value={coupleData.marriage_reception_time}
            onChooseTime={(time) =>
              setCoupleData({ ...coupleData, marriage_reception_time: time })
            }
          />
          <InputField
            type='text'
            label='Link Google Maps'
            id='link-maps-acara-resepsi'
            placeholder='Masukan Link Google Maps'
            value={coupleData.marriage_reception_link_maps}
            onChange={(e) =>
              setCoupleData({
                ...coupleData,
                marriage_reception_link_maps: e.target.value,
              })
            }
          />
          <InputField
            type='text'
            label='Tempat'
            id='tempat-resepsi'
            placeholder='Tuliskan Alamat dan Tempat'
            value={coupleData.marriage_reception_location}
            onChange={(e) =>
              setCoupleData({
                ...coupleData,
                marriage_reception_location: e.target.value,
              })
            }
          />
        </div>
      </div>

      {/* LOVE GIFT FORM */}
      <div className='w-full flex flex-col gap-6 mb-12'>
        <h2 className='text-darkBlue font-semibold text-lg'>Love Gift</h2>

        <div className='w-full grid grid-cols-3 gap-8'>
          {/* FIRST ACCOUNT */}
          <InputField
            type='text'
            label='Nama Bank'
            id='nama-bank-1'
            placeholder='Isikan Nama Bank'
            value={coupleData.love_gift_1.bank_name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCoupleData({
                ...coupleData,
                love_gift_1: {
                  ...coupleData.love_gift_1,
                  bank_name: e.target.value,
                },
              })
            }
          />
          <InputField
            type='text'
            label='Nama Pemilik Rekening'
            id='nama-pemilik-rekening-1'
            placeholder='Isikan Nama Pemilik Rekening'
            value={coupleData.love_gift_1.account_name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCoupleData({
                ...coupleData,
                love_gift_1: {
                  ...coupleData.love_gift_1,
                  account_name: e.target.value,
                },
              })
            }
          />
          <InputField
            type='number'
            label='No Rekening'
            id='no-rekening-1'
            placeholder='Isikan Nomor Rekening'
            value={coupleData.love_gift_1.account_number || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCoupleData({
                ...coupleData,
                love_gift_1: {
                  ...coupleData.love_gift_1,
                  account_number: e.target.value,
                },
              })
            }
          />

          {/* SECOND ACCOUNT */}
          <InputField
            type='text'
            label='Nama Bank'
            id='nama-bank-2'
            placeholder='Isikan Nama Bank'
            value={coupleData.love_gift_2.bank_name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCoupleData({
                ...coupleData,
                love_gift_2: {
                  ...coupleData.love_gift_2,
                  bank_name: e.target.value,
                },
              })
            }
          />
          <InputField
            type='text'
            label='Nama Pemilik Rekening'
            id='nama-pemilik-rekening-2'
            placeholder='Isikan Nama Pemilik Rekening'
            value={coupleData.love_gift_2.account_name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCoupleData({
                ...coupleData,
                love_gift_2: {
                  ...coupleData.love_gift_2,
                  account_name: e.target.value,
                },
              })
            }
          />
          <InputField
            type='number'
            label='No Rekening'
            id='no-rekening-2'
            placeholder='Isikan Nomor Rekening'
            value={coupleData.love_gift_2.account_number || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCoupleData({
                ...coupleData,
                love_gift_2: {
                  ...coupleData.love_gift_2,
                  account_number: e.target.value,
                },
              })
            }
          />
        </div>
      </div>
    </>
  );
};

export default EventDataForm;
