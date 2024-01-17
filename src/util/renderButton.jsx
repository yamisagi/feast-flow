import React from 'react';
import { Button } from '@/components/ui/button';
import LoadingButton from '@/components/product/main/LoadingButton';
import SuccessModal from '@/components/product/dialogs/SuccessModal';

const renderButton = (form, isLoading, successOpen, setSuccessOpen, error) => {
  // It is not the best way but, the way of Modal component is designed
  // Makes hard to control from button
  const isValid = form.formState.isValid;

  if (isLoading) {
    return <LoadingButton />;
  }

  if (isValid && error === null) {
    return (
      <SuccessModal successOpen={successOpen} setSuccessOpen={setSuccessOpen}>
        <Button type='submit'>Proceed</Button>
      </SuccessModal>
    );
  }

  return <Button type='submit'>Proceed</Button>;
};

export default renderButton;
