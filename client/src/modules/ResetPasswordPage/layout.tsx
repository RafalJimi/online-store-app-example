import React, { ChangeEvent } from "react";
import {
  ResetPasswordContainer,
  ResetPasswordContent,
  ResetPasswordForm,
  ResetPasswordInputContainer,
  ResetPasswordInput,
  ResetPasswordInputErrorMessage,
  ImageContainer,
  ResetPasswordButton,
} from "./layout.styled";
import ResetPasswordImg from "../../assets/ResetPasswordPage/ResetPasswordPageIMG.jpg";

type ResetPasswordPageLayoutProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handlePasswordInput: (
    text: string
  ) => (e: ChangeEvent<HTMLInputElement>) => void;
  password: string;
  passwordError: string;
  showPassword: boolean;
  handleToggleShowPassword: (e: React.MouseEvent) => void;
};

export const ResetPasswordPageLayout = ({
  handleSubmit,
  handlePasswordInput,
  password,
  passwordError,
  showPassword,
  handleToggleShowPassword,
}: ResetPasswordPageLayoutProps) => (
  <ResetPasswordContainer>
    <ResetPasswordContent>
      <ResetPasswordForm onSubmit={handleSubmit}>
        <h4>Reset your password</h4>
        <ResetPasswordInputContainer prop={password}>
          <ResetPasswordInput
            type={showPassword ? "text" : "password"}
            placeholder="New password *"
            onChange={handlePasswordInput("value")}
            value={password}
          />
          {showPassword ? (
            <i
              onClick={handleToggleShowPassword}
              className="far fa-eye-slash"
            />
          ) : (
            <i onClick={handleToggleShowPassword} className="far fa-eye" />
          )}
        </ResetPasswordInputContainer>
        <ResetPasswordInputErrorMessage>
          <p>{passwordError}</p>
        </ResetPasswordInputErrorMessage>
        <ResetPasswordButton type="submit">Submit</ResetPasswordButton>
      </ResetPasswordForm>
      <ImageContainer>
        <img loading="lazy" src={ResetPasswordImg} alt="" />
      </ImageContainer>
    </ResetPasswordContent>
  </ResetPasswordContainer>
);
