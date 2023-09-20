"use client";

import SimpleMinimalist from "@/components/Presets/SimpleMinimalist";
import { useAppDispatch } from "@/features/hooks";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ExamplePreset = () => {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();

  // LOCAL STATE
  const [presetId, setPresetId] = useState<string | null>(null);

  useEffect(() => {
    const id = searchParams.get("preset_id");
    setPresetId(id);
  }, [searchParams]);

  return (
    <main className="min-h-screen w-full">
      {presetId === "64e1d749e8fb532268885220" && <SimpleMinimalist />}
    </main>
  );
};

export default ExamplePreset;
