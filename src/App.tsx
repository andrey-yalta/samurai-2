import React from 'react';
import logo from './logo.svg';
import './App.css';
import {isNumber} from "util";

function App() {
    //ПРИМЕРЫ TS
    let a = 0;
    // a = "hello"; ошибка - не получается т.к мы присваиваем не тот тип данных
    let z: string = "hello";
    // указание типа массивов
    let names: Array<string> = ["hello", "my", "name",];
    // жетское уточнение значения для переменных
    let sex: "male" | "female";
    sex = "male";


    type adress = {
        city: string
    }

    type UserType = {
        age?: number // знак вопроса зеачит что не обязательно
        name: string
        merryed: boolean
        adress: object | number
        // sayHello: any| adress
        sayHello: Function
    }

    let User: UserType = {
        age: 31,
        name: "Dimych",
        merryed: false,
        sayHello: () => {
            console.log("hello")
        },
        adress: {
            city: "Minsk"
        }
    }
    // если мы обьявляем ФУНКЦИЮ и она ПРИНИМАЕТ АРГУМЕНТЫ, то НАДО УКАЗЫВАТЬ ТИП !

    // лайфхак как сделать быстро чтобы воспринималось и null и нужный тип
    let initialState = {
        names: [] as Array<string> | null,
        age: null as number | null,
        items: null as object | null,
    }
    // быстрый способ сгенерировать тайп
    type initialStateType = typeof initialState;
    // CTRL + ALT +L = ВЫРОВНЯТЬ ТЕКСТ


    // ПРИКОЛ ДЛЯ ЭКШ КРЕАТОРА
    const GET_TASKS ="GET_TASKS";
    let action:getTaskAction ={
      type: typeof GET_TASKS, // так надо делатть для вызовов экшн креатора
      id : 12,
    }
    type getTaskAction ={
      id:number,
      type:string
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
