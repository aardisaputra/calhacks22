import InvoiceForm from './invoiceForm';
import PublicForm from './publicForm';
import Home from './home';
import { Routes, Route } from "react-router-dom"

function App() {

    return (
        <div ClassName = 'App'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='internal' element={<InvoiceForm/>}/>
                <Route path='public' element={<PublicForm/>}/>
            </Routes>
        </div>
    );
};

export default App;