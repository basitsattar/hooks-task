import { toast } from 'react-toastify';

export const errorNotification = (error) => {
  if (error?.response?.data?.message) {
    toast.error(error.response?.data.message, {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else {
    toast.error(error.message, {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export const successNotification = (response, message = 'Api call succeeded') => {
  const msg = response?.data?.message ? response.data.message : message;
  toast.success(msg, {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
