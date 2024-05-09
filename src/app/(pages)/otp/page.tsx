"use client";
import OtpComponent from "@/components/otp/Otp";
import React from "react";

const OtpPage = () => {
  const handleOnComplete = (otp: number) => {
    console.log("[Otp]", otp);
  };

  return (
    <div>
      <OtpComponent
        noOfOtp={4}
        defaultValue={123}
        onComplete={handleOnComplete}
      />
    </div>
  );
};

export default OtpPage;
