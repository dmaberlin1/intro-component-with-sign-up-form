
import './App.css';
import Form from "./Components/Form/Form";
import {useState} from "react";




function App() {

    const [formdata, setFormdata] = useState([{name:'',lastname:'',email:'',password:''}]);
    return (
    <div className="App">
      <Form setFormdata={setFormdata} formdata={formdata}></Form>
    </div>
  );
}

export default App;
