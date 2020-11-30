import React, { useState, useCallback, ChangeEvent } from "react";
import { toast } from "react-toastify";
import { email } from "../../../../helpers/formats";
import { NewsletterLayout } from "./layout";

export const Newsletter = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const [Email, setEmail] = useState("");
  const [Gender, setGender] = useState({ man: false, woman: false });
  const [ConfirmRules, setConfirmRules] = useState(false);

  const handleOnClick = useCallback(
    (e: React.MouseEvent) => {
      setIsOpen(!IsOpen);
    },
    [IsOpen]
  );
  
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "man") setGender({ ...Gender, man: !Gender.man });
    else if (e.target.value === "woman")
      setGender({ ...Gender, woman: !Gender.woman });
  };

  const handleConfirmRules = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setConfirmRules(!ConfirmRules);
    },
    [ConfirmRules]
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Email === "") toast.dark("Please fill e-mail input.");
    else if (!email.test(Email))
      toast.dark("Please enter a valid e-mail password.");
    else if (!Gender.man && !Gender.woman) toast.dark("Please check gender.");
    else if (!ConfirmRules) toast.dark("Accept terms and conditions.");
    else {
      let gender = [];
      if (Gender.man) gender.push("man");
      if (Gender.woman) gender.push("woman");
      const subscribeNewsletterData = {
        email: Email,
        gender: gender,
      };
    }
  };

  return (
    <NewsletterLayout
      isOpen={IsOpen}
      handleOnClick={handleOnClick}
      handleOnChange={handleOnChange}
      email={Email}
      handleCheckbox={handleCheckbox}
      gender={Gender}
      handleConfirmRules={handleConfirmRules}
      confirmRules={ConfirmRules}
      handleSubmit={handleSubmit}
    />
  );
};
