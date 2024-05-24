"use client"
import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                <h2 className="text-xl font-semibold ">Chargement...</h2>
                <p>Veuillez patienter</p>
            </div>
        </div>
    );
};

export default Loading;