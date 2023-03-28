import React, { useEffect, useState } from "react";
import axios from "axios";
import { IUser } from "../../redux/comments/types";
import { XMarkIcon } from "@heroicons/react/24/outline";

type Props = {
    user: IUser;
    setUser: (value:any) => void;
    wannaLogin: boolean;

    setWannaLogin: (value: boolean) => void;

};

function Auth({user, setUser, wannaLogin , setWannaLogin}: Props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [exist, setExist] = useState(false);

    async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:8080/register",
                { email: username, password: password }
            );

            if (response.status === 201) {
                setUser(response.data.user);
                localStorage.setItem("user",JSON.stringify(response.data.user))
                alert("User registered successfully");
                setWannaLogin(!wannaLogin)
            }
        } catch (error) {

            alert("Failed to register user");
        }
    }

    async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const response = await axios.post(
            "http://localhost:8080/login",
            { email: username, password: password }
        );

        if (response.status === 200) {
            setUser(response.data.user);
            localStorage.setItem("user",JSON.stringify(response.data.user))
            setWannaLogin(!wannaLogin)
            alert("Login successful");
            console.log(response);
            console.log(user);
            
            
        } else {

            alert("Incorrect username or password");
        }
    }
    useEffect(()=>{
        const userString = localStorage.getItem("user");
        const user = userString ? JSON.parse(userString) : {
            id: 0,
            email: "",
            password: "",
        };
        setUser(user);
    },[])
    return (
        <div className="fixed top-0 z-40 w-screen h-screen flex items-center justify-center flex-col text-2xl gap-16 bg-black bg-opacity-50 backdrop-blur-sm">
            <div  className="items-end flex justify-end w-96">
                 <button onClick={()=> setWannaLogin(!wannaLogin)}><XMarkIcon className="w-12 h-12" /></button>
            </div>
        
            {exist ? (
                <div>
                    <h1 className="text-4xl font-bold">Авторизация</h1>
                    <form onSubmit={handleLogin} className="flex flex-col gap-8">
                        <label>
                            Email:
                            <input
                            className="border-4 border-black bg-transparent rounded-xl focus:text-white focus:outline-none focus:ring-2 focus:ring-gray-300"
                                type="email"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                        <label>
                            Password:
                            <input
                                className="border-4 border-black bg-transparent rounded-xl focus:text-white focus:outline-none focus:ring-2 focus:ring-gray-300"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <button className="text-4xl font-bold  text-woodColor" type="submit">Вход</button>
                    </form>
                    <button className="text-lg" onClick={()=> setExist(false)}>Создать аккаунт</button>
                </div>
            ) : (
                <div>
                    <h1 className="text-4xl font-bold" >Регистрация</h1>
                    <form onSubmit={handleRegister} className="flex flex-col gap-8">
                        <label>
                            Email:
                            <input
                            className="border-4 border-black bg-transparent rounded-xl focus:text-white focus:outline-none focus:ring-2 focus:ring-gray-300"
                                type="email"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                        <label>
                            Password:
                            <input
                            className="border-4 border-black bg-transparent rounded-xl focus:text-white focus:outline-none focus:ring-2 focus:ring-gray-300"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <button className="text-4xl font-bold  text-woodColor" type="submit">Зарегистрироваться</button>
                    </form>
                    <button className=" text-lg" onClick={()=> setExist(true)}>Войти</button>
                </div>
            )}
            
        </div>
    );
}

export default Auth;
