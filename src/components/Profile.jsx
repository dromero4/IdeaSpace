export function Profile({ user = "unknown" }) {
    return (
        <>
            <h1 className="text-5xl m-5 flex">Howdy, {user} <img src="./img/wave.svg" alt="Hey" /></h1>
            <hr className="mx-4" />
        </>
    )
}