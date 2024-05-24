"use client"
import Link from 'next/link';
import React, { useEffect } from 'react';

function SearchPageDefault() {

  return (
    <div>
      <p>Rentre des données Zehbi</p>
      <p>Tu cherche du vide ?</p>
      <p>Regarde dans ton crâne jpense tu vas trouver</p>
      <p className='underline'>
        <Link href={'/'}> Vazy bouge d&apos;ici</Link>
      </p>
    </div>
  );
}

export default SearchPageDefault;
