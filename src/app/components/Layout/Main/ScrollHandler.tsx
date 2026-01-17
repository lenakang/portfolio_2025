"use client";

import { useEffect } from "react";
import scrollToSection from "@/app/lib/scrollToSection";

export default function ScrollHandler() {
  useEffect(() => {
    const target = sessionStorage.getItem("nextScrollTarget");
    if (target) {
      const timer = setTimeout(() => {
        scrollToSection(target);
        sessionStorage.removeItem("nextScrollTarget");
      }, 150);
      return () => clearTimeout(timer);
    }
  }, []);

  return null; // 화면에 아무것도 그리지 않음
}
