"use client";
import React from "react";
import { useTheme } from "../../Global/ThemeContext";
const ProfilePage = () => {
  const theme = useTheme();
  return (
    <div>
      <h2 style={{ color: theme.colors.primary }}>Profile Page</h2>
      <p>{theme.message}</p>
    </div>
  );
};

export default ProfilePage;
