import styled from "styled-components";

type LoginMenuProps = {
  isOpen: boolean;
};

export const LoginMenuContainer = styled.nav<LoginMenuProps>`
  display: flex;
  position: fixed;
  top: 0;
  margin-top: 0px;
  flex-direction: row;  
  justify-content: center;
  align-items: flex-end;
  background-color: transparent;
  color: #000000;
  width: 100%;
  height: 100%;
  text-align: left;
  z-index: 5;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-100%);
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0%)" : "translateX(100%)"};
  }
  font-family: "Ubuntu", sans-serif;
`;

export const CloseLoginMenu = styled.div`
  display: flex;
  width: calc(100% - 500px);
  height: 100%;
  background-color: transparent;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 100%;
  background-color: white;
  align-items: center;
  justify-content: start;
  -webkit-box-shadow: 3px 16px 20px 2px #000000; 
  box-shadow: 3px 16px 20px 2px #000000;
  z-index: 2;
  }
`;

export const CloseLoginMenuButton = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 20px;
    top: 20px;
    width: 40px;
    height: 40px;
    font-size: 1.5em;
    font-weight: 100;
  }
`;

export const LoginContainerTitle = styled.h2`
  position: relative;
  font-size: 1em;
  font-weight: 500;
  padding-top: 100px;
  }
`;

export const LoginContainerSubTitle = styled.h4`
  font-weight: 100;
  font-size: 0.9em;
  width: 360px;
  }
`;

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 360px;
  margin-top: 40px;
  }
`;

type LoginFormEmailInputContainerProps = {
  email: string;
};

export const LoginFormEmailInputContainer = styled.div<
  LoginFormEmailInputContainerProps
>`
  display: flex;
  justify-content: start;
  align-items: center;
  border: none;
  border-bottom: 1px solid #00000050;

  border-bottom: ${({ email }) =>
    email ? "1px solid #000000" : "1px solid #00000050"};

  :focus {
    border: 1px solid #000000;
  }

  i {
    text-align: center;
    font-size: 1.1em;
  }
`;

type LoginFormPasswordInputContainerProps = {
  password: string;
};

export const LoginFormPasswordInputContainer = styled.div<
  LoginFormPasswordInputContainerProps
>`
  display: flex;
  justify-content: start;
  align-items: center;
  border: none;
  border-bottom: 1px solid #00000050;

  border-bottom: ${({ password }) =>
    password ? "1px solid #000000" : "1px solid #00000050"};

  :focus {
    border: 1px solid #000000;
  }

  i {
    text-align: center;
    font-size: 1.1em;
  }
`;

export const LoginFormInput = styled.input`
  padding: 8px 0px;
  border: none;
  font-size: 1em;
  width: 335px;

  :focus {
    outline: none;
  }
`;

export const LoginFormInputIcon = styled.div`
  text-align: center;
`;

export const LoginFormInputErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  padding-bottom: 15px;
  font-size: 0.6em;
  border: none;
  color: red;
  margin: 0px 0px;
  height: 27px;

  p {
  position: absolute;
  padding-top: 5px;
  margin: 0px;
}
  }
`;

export const ForgotPasswordButton = styled.div`
  display: flex;
  justify-content: flex-end;
  color: black;
  font-weight: 500;
  width: 100%;

  p {
    text-decoration: underline;
  }

  p: hover {
    color: #00000050;
    cursor: pointer;
  }
`;

export const LoginFormSubmitButton = styled.button`
  width: 100%;
  margin-top: 30px;
  padding: 15px 0px;
  border: none;
  background-color: #ceba97;
  color: white;
  font-size: 1em;
  border-radius: 5px;

  :hover {
    cursor: pointer;
    background-color: #ceba9799;
  }
`;

export const CreateAccountTitle = styled.div`
  text-align: center;
  width: 360px;
  margin-top: 50px;
  padding: 15px 0px;
  color: black;
  font-size: 1em;
`;

export const CreateAccountButton = styled.button`
  width: 360px;
  margin-top: 30px;
  padding: 15px 0px;
  border: none;
  background-color: #070708;
  color: white;
  font-size: 1em;
  border-radius: 5px;

  :hover {
    cursor: pointer;
    background-color: #07070899;
  }
`;
