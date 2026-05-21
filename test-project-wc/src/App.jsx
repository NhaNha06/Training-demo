import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { use } from 'react'
import { useEffect } from 'react'

function App() { //cách tạo component trong React
    const url = "https://jsonplaceholder.typicode.com/todos/";

    const [counter, setCounter] = useState(0); //state khoong theer thay doi 
    //truc tiep duojc, phai co ham thay doi theo

    const [animals, setAnimals] = useState(['dog', 'cat', 'bird']);
    //muốn sử dụng biến bên trong HTML dùng ngoặc nhọn, in list thì gọi tên biến .map
    //muon truy cap truc tiep vao useState thi dung ham luc khai bao (vd: setCounter, setAnimals)

    const [user, setUser] = useState({
      id: "12",
      name: "John",
      address: "15 tran bach dang"
    })

    const [todos, setTodos] = useState({}); //tao list todos




    const handleOnClick = () => {
       setCounter(counter + 1);
    }

    const handleOnAddSheep = () => {
      // 1. Dùng spread operation: tạo một mảng hoàn toàn mới
        setAnimals([...animals, 'sheep']);
      //2. Cách này add được sheep nhưng Js sẽ dựa vào
      //reference của một biến, tuy nhiên referebce
      // của nó vẫn nằm yên
          // animals.push('Sheep');
          // animals.setAnimals(animals);
    }

    const handleOnUser = () => {
        setUser({
          ...user,
          name: "Peter",
        })
    }
    
    const fetchTodos = async () => {
      const todos = await fetch(url);
      return todos;
    }

    //use Effect k có tham số thì chỉ chạy một lần khi browser render web
    //dùng để lưu data khi fetch từ API về
    useEffect {() =>  {
       const fetchTodos = async() => {
          const response = await fetch(url);
          const todos = await response.json();
          setTodos = todos;
       };
       fetchTodos()
    }, []} 



    

    return ( //quyết định UI render thế nào
      <div>
        <div>{counter}</div>
      {/* <button onClick={() => {handleOnClick()}}>Click to add one</button> */}
      {/* <button onClick={() => {handleOnAddSheep()}}>Click to add one</button> */}
      <p>{user.id} {user.name} {user.address}</p>
      <button style={(

      )} onClick={() => {handleOnUser()}}>Click to add one</button>
      <ul>
          {animals.map((animal, index) => {
            return <li key={index}>
              {animal}
            </li>
          })}
      </ul>

      </div>
    )
}

// export default App

//STYLE CSS 'DƠ' NHẤT =))


//CÁCH BTHG: IN-LINE
//style = {
//    backgroundColor: "#000000"
//    padding: "2em"
//} -> sẽ nhận vào object khác với HTML
