import React, { useState } from 'react';
import './App.css';
import Form from './form/form';
import Template from './form/form-template';

type FormData = {
    variant: string;
} & Partial<{
    valueA: string;
    valueB: string;
    valueC: string;
    valueD: string;
}>

function useFormData() {
    const [formData, setFormData] = useState({} as FormData);
    
    function updateFormData(key: string, value: any) {
        setFormData({
            ...formData,
            [key]: value
        });
    }

    return [formData, updateFormData];
}

function App() {
    const [formData, updateFormData] = useFormData();
    
    return (<>
        <div>
            {JSON.stringify(formData)}
        </div>
        <div className="app">
            <Form
                Template={Template}
                data={formData}
                onUpdateData={updateFormData as (name: string, value: any) => void}
            />
        </div>
    </>);
}
    
export default App;
    