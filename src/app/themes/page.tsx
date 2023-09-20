"use client";

import React, { useEffect, useState } from "react";
import ThemeCard from "@/components/ThemePage/ThemeCard";
import SearchInput from "@/components/UI/SearchInput";
import { useAppDispatch, useAppSelector } from "@/features/hooks";
import { getAllTheme } from "@/features/theme/actions";
import { Theme } from "@/types";
import { getAllCategory } from "@/features/category/actions";
import Pagination from "@/components/UI/Pagination";
import SkeletonLoadingThemeCard from "@/components/ThemePage/SkeletonLoadingThemeCard";

const Themes = () => {
  const dispatch = useAppDispatch();

  // GLOBAL STATE
  const { data: themeData, isLoading } = useAppSelector((state) => state.theme);
  const { data: authData } = useAppSelector((state) => state.auth);

  // LOCAL STATE
  const [searchInput, setSearchInput] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  // INVOKE ALL THEME
  useEffect(() => {
    dispatch(getAllTheme(currentPage));
    dispatch(getAllCategory(currentPage));
  }, [dispatch, authData, currentPage]);

  return (
    <div className="w-full min-h-screen pt-24">
      {/* TITLE */}
      <div className="py-8 max-w-[1200px] flex flex-col items-center gap-4 mx-auto ">
        <h1 className="text-4xl font-bold text-primaryBlack">
          Variasi Tema Yang <span className="text-darkBlue">Unik</span> dan{" "}
          <span className="text-darkBlue">Praktis</span>
        </h1>
        <p className="text-lg font-thin text-primaryBlack/50">
          Kumpulan Tema yang menarik dan dapat dipakai dengan mudah, siap di
          gunakan untuk hari istimewa
        </p>

        {/* CONTENT */}
        <div className="w-full mt-12 py-2 flex justify-between items-center gap-2">
          <h2 className="text-2xl text-darkBlue font-semibold">Themes</h2>
          <SearchInput
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>

        {/* LIST */}
        <div className="py-8 border-y-[1px] border-y-black/10 w-full">
          <ul className="w-full grid grid-cols-4 gap-x-6">
            {themeData
              ? themeData.data.map((item: Theme) => (
                  <ThemeCard item={item} key={item._id} />
                ))
              : Array.from({ length: 4 }, (_, i) => (
                  <SkeletonLoadingThemeCard key={i + Math.random() + ""} />
                ))}
          </ul>
        </div>

        {/* PAGINATION */}
        <Pagination
          totalPage={
            themeData ? Math.ceil(themeData?.total / themeData?.limit) : 0
          }
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Themes;
