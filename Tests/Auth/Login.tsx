
import { useSearchParams } from "react-router-dom";
import { useAuth } from "./Authcontext";

export default function Login() {
  const { login } = useAuth();
  const [params] = useSearchParams();
  const authFailed = params.get("error") === "auth_failed";

  return (
    <div className="centered">
      <h1>Sign in</h1>
      {authFailed && (
        <p className="error">Google sign-in failed. Please try again.</p>
      )}
      <button onClick={login}>Continue with Google</button>
    </div>
  );
}