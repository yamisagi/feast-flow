import { useEffect } from 'react';

const useHideModalTimer = (
  successOpen,
  setSuccessOpen,
  cartFuncs,
  openChanged,
  setModalOpen
) => {
  useEffect(() => {
    if (successOpen) {
      setTimeout(() => {
        setSuccessOpen(false);
        setTimeout(() => {
          cartFuncs.clearCart();
          openChanged(false);
          setModalOpen(false);
        }, 1000);
      }, 2000);
    }
  });
};

export default useHideModalTimer;
