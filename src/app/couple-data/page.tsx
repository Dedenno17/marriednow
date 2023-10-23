'use client';

import React, { useState } from 'react';
import Container from '@/components/Container';
import ProgressBar from '@/components/UI/ProgressBar';
import Button from '@/components/UI/Button';
import BridesDataForm from '@/components/CoupleData/BridesDataForm';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import EventDataForm from '@/components/CoupleData/EventDataForm';
import { CoupleData } from '@/types';
import AdditionalDataForm from '@/components/CoupleData/AdditionalDataForm';
import { useAppDispatch } from '@/features/hooks';
import { resetImageUploaded } from '@/features/couples/coupleSlice';
import { format } from 'date-fns';
import { createCouple } from '@/features/couples/actions';
import { useRouter } from 'next/navigation';

// PAGE NAME ARRAY
const formPageData: string[] = [
  'Data Pengantin',
  'Detail Acara',
  'Data Pelengkap Lainnya',
];

// INITAL VALUE
const initialValueCoupleData: CoupleData = {
  bride_data: {
    full_name: '',
    nick_name: '',
    fathers_name: '',
    mothers_name: '',
    birth_order: null,
    wa_number: '',
    instagram_account: '',
    photo: '',
  },
  groom_data: {
    full_name: '',
    nick_name: '',
    fathers_name: '',
    mothers_name: '',
    birth_order: null,
    wa_number: '',
    instagram_account: '',
    photo: '',
  },
  marriage_settlement_date: undefined,
  marriage_settlement_time: '',
  marriage_settlement_location: '',
  marriage_settlement_link_maps: '',
  marriage_reception_date: undefined,
  marriage_reception_time: '',
  marriage_reception_location: '',
  marriage_reception_link_maps: '',
  love_gift_1: { bank_name: '', account_name: '', account_number: '' },
  love_gift_2: { bank_name: '', account_name: '', account_number: '' },
  backsound: '',
  wedding_photo: [],
};

const CoupleData = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [coupleData, setCoupleData] = useState<CoupleData>(
    initialValueCoupleData,
  );

  const [sameEventData, setSameEventData] = useState<boolean>(false);

  const [formValid, setFormValid] = useState<{
    status: boolean;
    message: string;
  }>({ status: false, message: '' });

  // PREV PAGE FUNCTION
  const handleBack = () => {
    if (currentPage === 1) return;

    setCurrentPage((prevState) => prevState - 1);
    dispatch(resetImageUploaded());
  };

  // NEXT PAGE FUNCTION
  const handleNext = () => {
    if (currentPage === formPageData.length) return;

    // check validation of form and show message
    if (!formValid.status) {
      alert(formValid.message);
      return;
    }

    setCurrentPage((prevState) => prevState + 1);
    dispatch(resetImageUploaded());
  };

  // SUBMIT FUNCTION
  const submitHandler = async () => {
    // check validation of form and show message
    if (!formValid.status) {
      alert(formValid.message);
      return;
    }

    // payload
    const payload: any = {
      ...coupleData,
    };

    payload.bride_data.birth_order =
      coupleData.bride_data.birth_order && +coupleData.bride_data.birth_order;
    payload.groom_data.birth_order =
      coupleData.groom_data.birth_order && +coupleData.groom_data.birth_order;
    payload.marriage_settlement_date = format(
      coupleData.marriage_settlement_date,
      'Y/MM/dd',
    );
    payload.marriage_reception_date = format(
      coupleData.marriage_reception_date,
      'Y/MM/dd',
    );

    try {
      const response = await dispatch(createCouple(payload));

      if (response.meta.requestStatus === 'fulfilled') {
        alert('Invitation Success created');
        router.push('/success-create-couple');
        return;
      }

      alert('Invitaion failed to create');
    } catch (err) {
      alert('Something went wrong');
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  return (
    <div className='w-full min-h-screen pt-24'>
      <Container>
        <div className='w-full'>
          <ProgressBar
            currentPage={currentPage}
            pageData={formPageData}
            arrowBack
            onBack={handleBack}
          />

          {/* FORM */}
          <div className='w-full mt-8 flex flex-col gap-6'>
            {/* title */}
            <h1 className='text-2xl text-primaryBlack'>
              {formPageData[currentPage - 1]}
            </h1>

            <form className='w-full border-y-[1px] border-black/10 py-8'>
              {currentPage === 1 ? (
                <BridesDataForm
                  coupleData={coupleData}
                  setCoupleData={setCoupleData}
                  setFormValid={setFormValid}
                />
              ) : currentPage === 2 ? (
                <EventDataForm
                  coupleData={coupleData}
                  setCoupleData={setCoupleData}
                  setFormValid={setFormValid}
                  sameEventData={sameEventData}
                  setSameEventData={setSameEventData}
                />
              ) : (
                <AdditionalDataForm
                  coupleData={coupleData}
                  setCoupleData={setCoupleData}
                  setFormValid={setFormValid}
                />
              )}
            </form>

            {/* button */}
            <div className='w-full flex items-center justify-end gap-6'>
              {currentPage !== 1 && (
                <Button
                  type='button'
                  variants='outline'
                  onClick={handleBack}
                  className='flex items-center justify-center gap-2'
                >
                  <FaAngleLeft />
                  <span>Prev</span>
                </Button>
              )}
              {currentPage !== 3 && (
                <Button
                  type='button'
                  variants='primary'
                  onClick={handleNext}
                  className='flex items-center justify-center gap-2'
                >
                  <span>Next</span>
                  <FaAngleRight />
                </Button>
              )}
              {currentPage === 3 && (
                <Button
                  type='button'
                  variants='primary'
                  onClick={submitHandler}
                  className='flex items-center justify-center w-36'
                >
                  Submit
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CoupleData;
