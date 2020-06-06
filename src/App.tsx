import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './form/form';
import Template from './form/form-template';
import FormData from './form/validators';

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
    const [errors, setErrors] = useState([] as any);
    
    function updateFormData(key: string, value: any) {
        setFormData({
            ...formData,
            [key]: value
        });
    }

    // Perform model validations
    useEffect(() => {
        FormData.validate(formData).then((it) => {
            console.log(it);
        })
    }, [formData])

    return [formData, errors, updateFormData];
}

function App() {
    const [formData, errors, updateFormData] = useFormData();
    
    return (<>
        <div>
            Form Data: {JSON.stringify(formData)}
            Form Errors: {JSON.stringify(errors)}
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
    