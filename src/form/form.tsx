import * as React from 'react';
import { FormCTX } from './index.d';

interface P {
    data: any;
    Template: React.FunctionComponent<any>;
    onUpdateData(name: string, value: any): void
}

const formCTX = React.createContext<FormCTX>(null as any);
const Form = (p: Pick<P, "Template" | "data">) => {
    const { Template, data } = p;

    return (<Template data={data} />);
}


const onChangeHandlerBuilder = (onChange: Function) =>
    (name: string) =>
        (e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(name, e.target.value);

const wrappedForm = (p: P) => {
    const { onUpdateData, ...rest } = p;
    return (
        <formCTX.Provider value={{
            onItemChange: onChangeHandlerBuilder(p.onUpdateData),
        }}>
            <Form {...rest} />
        </formCTX.Provider>
    )
};

export default wrappedForm as React.FunctionComponent<P>;
export {
    formCTX
}