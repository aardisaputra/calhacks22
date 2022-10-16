import InvoiceForm from './invoiceForm';
import PublicForm from './publicForm';
import Choice from './choice';
import Home from './home';
import { Routes, Route } from "react-router-dom"
import "./cards.css";

function App() {

    return (
        <div ClassName = 'App'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='internal' element={<InvoiceForm/>}/>
                <Route path='public' element={<PublicForm/>}/>
                <Route path='choice' element={<Choice/>}/>
            </Routes>
        </div>
    );
};

export default App;