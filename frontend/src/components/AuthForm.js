import {
  Form,
  Link,
  useSearchParams,
  useActionData,
  useNavigation,
} from "react-router-dom";

import classes from "./AuthForm.module.css";

function AuthForm() {
  const [params] = useSearchParams();
  const isLogin =
    (params.get("mode") ?? "login").toLocaleLowerCase() === "login";

  const data = useActionData();

  const navigation = useNavigation();
  const isSubmitting = navigation.isSubmitting;

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        {data && data.errors ? (
          <ul>
            {Object.values(data.errors).map((e) => {
              return <li key={e}>{e}</li>;
            })}
          </ul>
        ) : null}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link
            to={`/auth?mode=${isLogin ? "signup" : "login"}`}
            disabled={isSubmitting}
          >
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button disabled={isSubmitting}>
            {isSubmitting ? "Submitting.." : "Save"}
          </button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
