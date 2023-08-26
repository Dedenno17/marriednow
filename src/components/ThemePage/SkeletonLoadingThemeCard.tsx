import React from "react";

const SkeletonLoadingThemeCard = () => {
  return (
    <li className="w-full flex flex-col items-center rounded-lg shadow-lg bg-white overflow-hidden animate-pulse border-[1px] border-black/10">
      <div className="w-full h-[240px] overflow-hidden relative">
        <div className="bg-slate-200 w-full h-full" />
      </div>
      <div className="w-full p-4 flex flex-col gap-2">
        <div className="w-full h-8 bg-slate-200" />
        <div className="w-full h-6 bg-slate-200" />
        <div className="flex flex-col gap-2">
          <div className="w-full h-12 bg-slate-200 rounded-xl" />
          <div className="w-full h-12 bg-slate-200 rounded-xl" />
        </div>
      </div>
    </li>
  );
};

export default SkeletonLoadingThemeCard;
