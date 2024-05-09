import React, { useRef } from "react";
interface OtpComponentProps {
  noOfOtp: number;
  onComplete: (otp: number) => void;
  onChange?: (otp: number) => void;
  defaultValue?: number;
}

const OtpComponent = ({
  noOfOtp,
  onComplete,
  onChange,
  defaultValue,
}: OtpComponentProps) => {
  const OtpList = Array.from({ length: noOfOtp }, (_, index) => index + 1);
  const inputList = useRef<HTMLInputElement[]>([]);
  const handleOptChange = (newValue: number) => {
    onChange?.(newValue);
  };

  const onHandleChange = (value: string, index: number, e: any) => {
    if (Number.isInteger(Number(value))) {
      let otp = "";
      const currentElement = inputList.current[index];
      currentElement.value = value;
      inputList.current.forEach((item) => {
        otp += item.value;
      });
      handleOptChange(parseInt(otp));

      if (!value && index - 1 >= 0) {
        inputList.current[index - 1].focus();
      } else if (value && index + 1 <= inputList.current.length - 1) {
        inputList.current[index + 1].focus();
      }
      if (otp.length === inputList.current.length) {
        onComplete(parseInt(otp));
      }
    } else {
      const currentElement = inputList.current[index];
      currentElement.value = "";
    }
  };
  React.useEffect(() => {
    if (defaultValue) {
      const newValue = defaultValue?.toString().split("");
      inputList.current?.forEach((item, index) => {
        if (newValue[index]) {
          item.value = newValue[index];
        }
      });
    }
  }, [defaultValue]);

  return (
    <div className="flex gap-2">
      {OtpList?.map((otp, index) => {
        return (
          <div key={otp}>
            <input
              type="text"
              className="p-2 m-1 outline-none border border-gray-100"
              maxLength={1}
              ref={(el) => (inputList.current[index] = el as HTMLInputElement)}
              onChange={(e) => {
                onHandleChange(e.target.value, index, e);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default OtpComponent;
