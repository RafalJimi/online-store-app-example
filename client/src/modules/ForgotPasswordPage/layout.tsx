import React, { ChangeEvent } from "react";
import {
  ForgetPasswordContainer,
  ForgetPasswordContent,
  ForgetPasswordForm,
  ForgetPasswordInputContainer,
  ForgetPasswordInput,
  ForgetPasswordInputErrorMessage,
  ImageContainer,
  ForgetPasswordButton,
} from "./layout.styled";
import ForgetPasswordImg from "../../assets/ForgetPasswordPage/ForgetPasswordPageIMG.jpg";

type ForgetPasswordPageLayoutProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleEmailInput: (e: ChangeEvent<HTMLInputElement>) => void;
  email: string;
  emailError: string;
};

export const ForgetPasswordPageLayout = ({
  handleSubmit,
  handleEmailInput,
  email,
  emailError,
}: ForgetPasswordPageLayoutProps) => (
  <ForgetPasswordContainer>
    <ForgetPasswordContent>
      <ForgetPasswordForm onSubmit={handleSubmit}>
        <h4>Forgot password</h4>
        <ForgetPasswordInputContainer prop={email}>
          <ForgetPasswordInput
            type="email"
            placeholder="Email *"
            onChange={handleEmailInput}
            value={email}
          />
        </ForgetPasswordInputContainer>
        <ForgetPasswordInputErrorMessage>
          <p>{emailError}</p>
        </ForgetPasswordInputErrorMessage>
        <ForgetPasswordButton type="submit">Submit</ForgetPasswordButton>
      </ForgetPasswordForm>
      <ImageContainer>
        <img loading="lazy" src={ForgetPasswordImg} alt="" />
      </ImageContainer>
    </ForgetPasswordContent>
  </ForgetPasswordContainer>
);
