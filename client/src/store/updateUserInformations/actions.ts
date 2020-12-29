import { createAction } from "typesafe-actions";
import { UPDATE_USER_INFORMATIONS } from "./consts";

export type UpdateUserDataProps = {
  user: {
    firstName: string;
    lastName: string;
    city: string;
    address: string;
    postCode: string;
  };
};

export const updateUserInformationsStarted = createAction(
  UPDATE_USER_INFORMATIONS.started,
  (user): UpdateUserDataProps => ({
    user,
  })
)();
