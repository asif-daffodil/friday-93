import { useRef } from "react"

const UseRef = () => {
    const countRef = useRef(0)
    const displayRef = useRef(null)
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const inrement = () => {
        countRef.current++
        displayRef.current.textContent = countRef.current
    }
    const decrement = () => {
        countRef.current--
        displayRef.current.textContent = countRef.current
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = nameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value

        console.log({ name, email, password })
        nameRef.current.value = ""
        emailRef.current.value = ""
        passwordRef.current.value = ""
    }
    return (
        <div>
            <div>
                <button onClick={inrement}>Increment</button>
                <p ref={displayRef}>0</p>
                <button onClick={decrement}>Decrement</button>
            </div>
            <form action="" className="border p-4 rounded m-4 w-max" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text" ref={nameRef} placeholder="Name" className="border rounded p-2" />
                </div>
                <div className="mb-3">
                    <input type="email" ref={emailRef} placeholder="Email" className="border rounded p-2" />
                </div>
                <div className="mb-3">
                    <input type="password" ref={passwordRef} placeholder="Password" className="border rounded p-2" />
                </div>
                <button type="submit" className="border rounded px-4 py-2">Submit</button>
            </form>
        </div>
    );
};

export default UseRef;