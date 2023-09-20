"use client";

import React from "react";
import SimpleMinimalistHero from "./SimpleMinimalistHero";
import SimpleMinimalistBrides from "./SimpleMinimalistBrides";
import SimpleMinimalistGallery from "./SimpleMinimalistGallery";
import SimpleMinimalistMap from "./SimpleMinimalistMap";

// INTERFACE PROPS
interface Props {
  brideData?: {};
}

const SimpleMinimalist: React.FC<Props> = ({ brideData }) => {
  return (
    <div className="w-full bg-simpleMinimalist-white">
      <SimpleMinimalistHero />
      <SimpleMinimalistBrides />
      <SimpleMinimalistGallery />
      <SimpleMinimalistMap />
    </div>
  );
};

export default SimpleMinimalist;
