import React, { ChangeEvent } from "react";
import {
  NewsletterContainer,
  NewsletterTitle,
  NewletterForm,
  NewletterInput,
  NewsletterInfo,
  NewsletterFormCheckboxContainer,
  NewsletterFormRulesContainer,
  NewsletterFormSubmitButton,
} from "./layout.styled";

type NewsletterLayoutProps = {
  isOpen: boolean;
  handleOnClick: (e: React.MouseEvent) => void;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  email: string;
  handleCheckbox: (e: ChangeEvent<HTMLInputElement>) => void;
  gender: { man: boolean; woman: boolean };
  handleConfirmRules: (e: React.ChangeEvent<HTMLInputElement>) => void;
  confirmRules: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const NewsletterLayout = ({
  isOpen,
  handleOnClick,
  handleOnChange,
  email,
  handleCheckbox,
  gender,
  handleConfirmRules,
  confirmRules,
  handleSubmit,
}: NewsletterLayoutProps) => {
  return (
    <NewsletterContainer>
      <NewsletterTitle onClick={handleOnClick}>
        SUBSCRIBE TO NEWSLETTER
      </NewsletterTitle>
      <NewletterForm prop={isOpen} onSubmit={handleSubmit}>
        <NewletterInput
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={handleOnChange}
        />
        <NewsletterInfo>
          If you select the sections that you are interested in, it will help us
          to send you the most relevant content
        </NewsletterInfo>
        <NewsletterFormCheckboxContainer>
          <label>
            <input
              name="rules"
              type="checkbox"
              checked={gender.man}
              onChange={handleCheckbox}
              value="man"
            />
            <span>MAN</span>
          </label>
          <label>
            <input
              name="rules"
              type="checkbox"
              checked={gender.woman}
              onChange={handleCheckbox}
              value="woman"
            />
            <span>WOMAN</span>
          </label>
        </NewsletterFormCheckboxContainer>
        <NewsletterFormRulesContainer>
          <label>
            <input
              name="rules"
              type="checkbox"
              checked={confirmRules}
              onChange={handleConfirmRules}
            />
            <span>
              I have been able to read and understand the information on the use
              of my personal data explained in the Privacy policy and agree to
              receive customised commercial communications from STORE EXAMPLE
              via email and other means
            </span>
          </label>
        </NewsletterFormRulesContainer>
        <NewsletterFormSubmitButton type="submit">
          Subscribe
        </NewsletterFormSubmitButton>
      </NewletterForm>
    </NewsletterContainer>
  );
};
