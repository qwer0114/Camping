import React, { useState } from "react";

export default function useModal() {
  const [visibility, setVisibility] = useState(false);

  const openModal = () => setVisibility(true);
  const closeModal = () => setVisibility(false);

  return { visibility, openModal, closeModal };
}
