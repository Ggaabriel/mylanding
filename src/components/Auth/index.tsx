import React, { useEffect, useState } from "react";
import axios from "axios";
import { IUser } from "../../redux/comments/types";
import { XMarkIcon } from "@heroicons/react/24/outline";

type Props = {
    user: IUser;
    setUser: (value: any) => void;
    wannaLogin: boolean;

    setWannaLogin: (value: boolean) => void;
};

function Auth({ user, setUser, wannaLogin, setWannaLogin }: Props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [exist, setExist] = useState(false);

    const [animateFlag, setAnimateFlag] = useState(false);
    const [message, setMessage] = useState("");
    async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        try {
            const response = await axios.post(
                "http://localhost:8080/register",
                { email: username, password: password }
            );

            if (response.status === 201) {
                setUser(response.data.user);
                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data.user)
                );
                setMessage("User registered successfully")
                setTimeout(()=>{
                    setWannaLogin(!wannaLogin);
                },500)
                
            }
        } catch (error) {
            setMessage("Failed to register user")
            // alert("Failed to register user");
        }
    }

    async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        //
        try {
            const response = await axios.post("http://localhost:8080/login", {
                email: username,
                password: password,
            });

           
        if (response.status === 200) {
            setUser(response.data.user);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            setMessage("Login successful")
            setTimeout(()=>{
                setWannaLogin(!wannaLogin);
            },500)
            
            console.log(response);
            console.log(user);
            }
        } catch (error) {
            setMessage("Incorrect username or password")
        }
        //

    }
    useEffect(() => {
        const userString = localStorage.getItem("user");
        const user = userString
            ? JSON.parse(userString)
            : {
                  id: 0,
                  email: "",
                  password: "",
              };
        setUser(user);
    }, []);

    function turnAnimate() {
        setAnimateFlag(!animateFlag);
        setTimeout(() => {
            setWannaLogin(!wannaLogin);
        }, 500);
    }

    return (
        <div
            className={`fixed top-0 z-40 w-screen h-screen flex items-center justify-center flex-col text-2xl gap-16 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-500 ${
                animateFlag ? " animate-die" : " animate-born"
            }`}
        >
            <div className="p-6 bg-bodyColor rounded-xl flex flex-col items-center justify-center">
                <div className="items-end flex justify-end w-96">
                    <button onClick={() => turnAnimate()}>
                        <XMarkIcon className="w-12 h-12" />
                    </button>
                </div>
                <div className={`${localStorage.getItem("user")?"text-green-500":"text-red-600"} md:text-3xl text-2xl`}  >
                    {message}
                </div>
                
                {exist ? (
                    <div>
                        <h1 className="md:text-6xl text-4xl font-bold">
                            Авторизация
                        </h1>
                        <form
                            onSubmit={handleLogin}
                            className="flex flex-col gap-8"
                        >
                            <label htmlFor="email"> Email: </label>

                            <input
                                className="border-4 border-black bg-transparent rounded-xl p-3 tracking-wide  focus:outline-none focus:ring-2 focus:ring-gray-300 md:text-3xl text-2xl"
                                type="email"
                                name="email"
                                id="email"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />

                            <label htmlFor="password"> Password: </label>

                            <input
                                className="border-4 border-black bg-transparent rounded-xl p-3 tracking-wide  focus:outline-none focus:ring-2 focus:ring-gray-300 md:text-3xl text-2xl"
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <button
                                className="text-4xl font-bold  text-woodColor"
                                type="submit"
                            >
                                Вход
                            </button>
                        </form>
                        <button
                            className="text-lg"
                            onClick={() => setExist(false)}
                        >
                            Создать аккаунт
                        </button>
                    </div>
                ) : (
                    <div>
                        <h1 className=" font-bold md:text-6xl text-4xl">
                            Регистрация
                        </h1>
                        <form
                            onSubmit={handleRegister}
                            className="flex flex-col gap-8"
                        >
                            <label htmlFor="email"> Email: </label>

                            <input
                                className="border-4 border-black bg-transparent rounded-xl p-3 tracking-wide  focus:outline-none focus:ring-2 focus:ring-gray-300 md:text-3xl text-2xl"
                                type="email"
                                name="email"
                                id="email"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />

                            <label htmlFor="password"> Password: </label>

                            <input
                                className="border-4 border-black bg-transparent rounded-xl p-3 tracking-wide  focus:outline-none focus:ring-2 focus:ring-gray-300 md:text-3xl text-2xl"
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <button
                                className="text-4xl font-bold  text-woodColor"
                                type="submit"
                            >
                                Зарегистрироваться
                            </button>
                        </form>
                        <button
                            className=" text-lg"
                            onClick={() => setExist(true)}
                        >
                            Войти
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Auth;
