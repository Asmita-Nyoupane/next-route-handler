"use client";

import { useState } from "react";

const ClientComponentOne = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState("Learner");
  return (
    <div>
      <h2>ClientComponentOne</h2>
      {children}
    </div>
  );
};

export default ClientComponentOne;
