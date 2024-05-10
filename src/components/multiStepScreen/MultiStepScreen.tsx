"use client";
import React, { useState } from "react";
import Step from "../step/Step";

enum ScreenKey {
  Step0 = 0,
  Step1 = 1,
  Step2 = 2,
}

type StepScreen = {
  [key in ScreenKey]: JSX.Element;
};

interface StepFormData {
  name?: string;
  email?: string;
  address?: {
    city?: string;
    state?: string;
    country?: string;
    india?: {
      m: string;
    };
  };
  employeeId?: string;
  code?: string;
}

const First = ({
  formData,
  onChange,
}: {
  formData: StepFormData;
  onChange: (key: string, value: string) => void;
}) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <label htmlFor="email">
        Name:
        <input
          className="p-2 border rounded"
          value={formData.name}
          onChange={(e) => {
            onChange("name", e.target.value);
          }}
        />
      </label>

      <label htmlFor="email">
        Email:
        <input
          className="p-2 border rounded "
          type="email"
          value={formData.email}
          onChange={(e) => {
            onChange("email", e.target.value);
          }}
        />
      </label>
    </div>
  );
};

const Second = ({
  formData,
  onChange,
}: {
  formData: StepFormData;
  onChange: (key: string, value: string) => void;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h1>Please fill the address here</h1>
      <label htmlFor="">
        City:
        <input
          className="p-2 border rounded"
          value={formData.address?.city}
          onChange={(e) => {
            onChange("address.city", e.target.value);
          }}
        />
      </label>
      <label htmlFor="">
        State:
        <input
          className="p-2 border rounded"
          value={formData.address?.state}
          onChange={(e) => {
            onChange("address.state", e.target.value);
          }}
        />
      </label>
      <label htmlFor="">
        Country:
        <input
          className="p-2 border rounded"
          value={formData.address?.country}
          onChange={(e) => {
            onChange("address.country", e.target.value);
          }}
        />
      </label>
      <div>
        <label htmlFor="">
          India:
          <input
            className="p-2 border rounded"
            value={formData.address?.india?.m}
            onChange={(e) => {
              onChange("address.india.m", e.target.value);
            }}
          />
        </label>
      </div>
    </div>
  );
};

const Third = ({
  formData,
  onChange,
}: {
  formData: StepFormData;
  onChange: (key: string, value: string) => void;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h1>Third</h1>
      <label htmlFor="">
        EmployeeId:
        <input
          className="p-2 border rounded"
          value={formData.employeeId}
          onChange={(e) => {
            onChange("employeeId", e.target.value);
          }}
        />
      </label>
      <label htmlFor="">
        Code:
        <input
          className="p-2 border rounded"
          value={formData.code}
          onChange={(e) => {
            onChange("code", e.target.value);
          }}
        />
      </label>
    </div>
  );
};

const MultiStepScreen = () => {
  const [step, setStep] = useState<ScreenKey>(ScreenKey.Step0);
  const [formData, setFormData] = useState<StepFormData>({
    name: "",
    email: "",
    address: {
      city: "",
      state: "",
      country: "",
    },
    employeeId: "",
    code: "",
  });

  console.log("formData", formData);

  const handleOnChange = (key: string, value: string) => {
    const updateNestedState = (
      currentState: any,
      keys: string[],
      value: string
    ): any => {
      if (keys.length === 1) {
        return { ...currentState, [keys[0]]: value };
      }
      const [currentKey, ...remainingKeys] = keys;
      return {
        ...currentState,
        [currentKey]: updateNestedState(
          currentState[currentKey] || {},
          remainingKeys,
          value
        ),
      };
    };
    const keys = key.split(".");
    setFormData((prevState) => updateNestedState(prevState, keys, value));
  };

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    console.log("event", event.target.value);
  };

  const onNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const onPrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const screenList: StepScreen = {
    [ScreenKey.Step0]: <First formData={formData} onChange={handleOnChange} />,
    [ScreenKey.Step1]: <Second formData={formData} onChange={handleOnChange} />,
    [ScreenKey.Step2]: <Third formData={formData} onChange={handleOnChange} />,
  };

  return (
    <div className="p-1">
      <form onSubmit={handleOnSubmit}>
        <Step
          heading={"Multi step form"}
          step={step}
          total={Object.keys(screenList).length}
          onNext={onNext}
          onPrev={onPrev}
        >
          {screenList[step]}
        </Step>
      </form>
    </div>
  );
};

export default MultiStepScreen;
