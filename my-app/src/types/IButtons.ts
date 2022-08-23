import React from "react";

export interface IButton {
    children: React.ReactNode;
    onClick: () => void;
  }