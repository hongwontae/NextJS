import { logout } from "@/actions/auth-action";

function AuthLayout({children}){

    return(
        <>
            <header id="auth-header">
                <p>Welcome back!</p>
                <form action={logout}>
                    <button type="submit">Logout</button>
                </form>
            </header>
            {children}
        </>
    )
}

export default AuthLayout;