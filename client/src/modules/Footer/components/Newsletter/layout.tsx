import React from "react";
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
};

export const NewsletterLayout = ({
  isOpen,
  handleOnClick,
}: NewsletterLayoutProps) => {
  return (
    <NewsletterContainer>
      <NewsletterTitle onClick={handleOnClick}>
        SUBSCRIBE TO NEWSLETTER
      </NewsletterTitle>
      <NewletterForm prop={isOpen}>
        <NewletterInput type="text" placeholder="E-mail" />
        <NewsletterInfo>
          If you select the sections that you are interested in, it will help us
          to send you the most relevant content
        </NewsletterInfo>
        <NewsletterFormCheckboxContainer>
          <label>
            <input
              name="rules"
              type="checkbox"
              checked={false}
              onChange={() => {}}
            />
            <span>MEN</span>
          </label>
          <label>
            <input
              name="rules"
              type="checkbox"
              checked={false}
              onChange={() => {}}
            />
            <span>WOMEN</span>
          </label>
        </NewsletterFormCheckboxContainer>
        <NewsletterFormRulesContainer>
          <label>
            <input
              name="rules"
              type="checkbox"
              checked={false}
              onChange={() => {}}
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
