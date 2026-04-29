import { redirect } from "react-router-dom";
import { removeAuthToken } from "../../util/AuthUtil";

export async function action({ request }) {
  removeAuthToken();
  redirect("/");
}
