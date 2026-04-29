import AuthForm from "../../components/AuthForm";
import { redirect } from "react-router-dom";
import { setAuthToken } from "../../util/AuthUtil";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export const action = async ({ request }) => {
  const paramsSearch = new URL(request.url).searchParams;
  const isLogin =
    (paramsSearch.get("mode") ?? "login").toLocaleLowerCase() === "login";
  console.log(isLogin);

  const data = await request.formData();

  const user = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch(
    `http://localhost:8080/${isLogin ? "login" : "signup"}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    },
  );

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "failed to authenticate." }), {
      status: 500,
    });
  }

  const dataResponse = await response.json();
  const token = dataResponse.token;
  if (token) {
    setAuthToken(token);
  }

  return redirect("/");
};
