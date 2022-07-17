export const SignOut = () => {
    localStorage.removeItem("email")
    window.location.href = "http://localhost:3000/signin";
    return null
}
