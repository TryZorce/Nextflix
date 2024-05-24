"use client"
import React from 'react';
import Link from 'next/link';

const Error = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-red-600">Erreur</h1>
                <p className=" mt-4">Une erreur s&apos;est produite. Veuillez réessayer plus tard.</p>
                <Link
                    className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-600" href={'/'}                >
                    Retour à l&apos;accueil
                </Link>
            </div>
        </div>
    );
};

export default Error;
