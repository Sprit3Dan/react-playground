import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './form/form';
import Template from './form/form-template';
import FormData, { Entity } from './form/validators';

function useFormData() {
    const [formData, setFormData] = useState({} as Entity);
    const [errors, setErrors] = useState([] as any);
    
    function updateFormData(key: string, value: any) {
        setFormData({
            ...formData,
            [key]: value
        });
    }

    useEffect(() => {
        const validate = async () => {
            try {
                await FormData.validate(formData, {
                    abortEarly: false
                })
                setErrors([]);
            } catch (validationExc) {
                setErrors(validationExc.errors);
            }
        }

        validate()
    }, [formData]);

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
    