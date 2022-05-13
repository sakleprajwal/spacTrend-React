import React from 'react';
import { toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/base.css';

const Toaster = ({message, type}) => {
    return toast.success(message, {
        position: "bottom-center",
        autoClose: 1200,
        type: type,
        transition: Zoom,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
};

export default Toaster;