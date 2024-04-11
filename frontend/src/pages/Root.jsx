import { Outlet, useSubmit } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { useEffect } from "react";
import { getAuthToken, getTokenDuration } from "../util/auth";

export default function RootPage() {
    const submit = useSubmit();
    const token = getAuthToken();

    useEffect(() => {
        if (!token) {
            return;
        }

        if (token === "EXPIRED") {
            submit(null, { action: "/logout", method: "post" });
            return;
        }

        const tokenDuration = getTokenDuration();

        setTimeout(() => {
            submit(null, { action: "/logout", method: "post" });
        }, tokenDuration);
    }, [token, submit]);

    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    );
}
