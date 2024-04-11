import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
    return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get("mode") || "login";

    const data = await request.formData();

    const userData = {
        email: data.get("email"),
        password: data.get("password"),
    };

    if (mode !== "signup" && mode !== "login") {
        throw json({ message: "Unsupported mode" }, { status: 422 });
    }

    const response = await fetch("http://localhost:8080/" + mode, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    if (response.status === 422 || response.status === 401) {
        return response;
    }

    if (!response.ok) {
        throw json({ message: "Signing up was failed" }, { status: 500 });
    }

    return redirect('/');

}
