"use client";

import React, { ReactNode, useRef } from "react";

import useOutsideAlerter from "@/hooks/useOutsideAlerter";

interface Props {
  children: ReactNode;
  onClickOutside: () => void;
}

const ClickOutside: React.FC<Props> = ({ children, onClickOutside }) => {
  const ref = useRef(null);
  useOutsideAlerter(ref, onClickOutside);

  if (!children) {
    return null;
  }

  return <div ref={ref}>{children}</div>;
};

export default React.memo(ClickOutside);
