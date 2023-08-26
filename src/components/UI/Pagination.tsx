import React from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

interface Props {
  totalPage: number | undefined;
  currentPage: number;
  setCurrentPage: (newPage: number) => void;
}

const Pagination: React.FC<Props> = ({
  totalPage,
  currentPage,
  setCurrentPage,
}) => {
  // PREVPAGE FUNCTION
  const prevPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  // NEXTPAGE FUNCTION
  const nextPage = () => {
    if (currentPage === totalPage) return;
    setCurrentPage(currentPage + 1);
  };

  //  GO TO SPECIFIC PAGE FUNCTION
  const goToSpecificPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {totalPage ? (
        <div className="w-full flex justify-center">
          <ul className="flex gap-4">
            <li
              onClick={prevPage}
              className="w-8 h-8 flex rounded-lg justify-center items-center text-xs text-darkBlue border-[1px] border-darkBlue cursor-pointer"
            >
              <BsFillCaretLeftFill />
            </li>
            {Array.from({ length: totalPage }, (_, i) => (
              <li
                key={i + ""}
                className={`w-8 h-8 flex rounded-lg justify-center items-center text-xs font-bold border-[1px] border-darkBlue cursor-pointer ${
                  currentPage == i + 1
                    ? "text-white bg-darkBlue"
                    : "text-darkBlue bg-white"
                }`}
                onClick={() => goToSpecificPage(i + 1)}
              >
                {i + 1}
              </li>
            ))}
            <li
              onClick={nextPage}
              className="w-8 h-8 flex rounded-lg justify-center items-center text-xs text-darkBlue border-[1px] border-darkBlue cursor-pointer"
            >
              <BsFillCaretRightFill />
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Pagination;
