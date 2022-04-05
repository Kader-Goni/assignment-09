import React from 'react';
import "./errHandel.css"
import NotFound from "../../asset/images/NotFound.jpg"

const ErrHandel = () => {
    return (
        <div className='text-center container'>
            <div className="w-75 mx-auto">
                <h1 className='text-danger fw-bold my-5'>404 Error... Page NOT Found.</h1>
                <img src={NotFound} className="img-fluid" alt="" />
            </div>
        </div>
    );
};

export default ErrHandel;