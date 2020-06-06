import * as React from 'react';

type P = {
    isValid: (value: any) => boolean|Array<string>;
    value: any;
    errors: Array<string>;
}

const isArrayLike = (v: any): v is Array<any> => {
    return v.length;
}

const Input = (p: P) => {
    const { value, errors, isValid } = p;
    const [valid, setIsValid] = React.useState(false);
    function checkIfValid() {
        const valid = isValid(p.value);

        setIsValid(isArrayLike(valid) || valid);
    }

    return (<>
        <input onChange={checkIfValid} defaultValue={value}></input>
        {!valid && errors.map((it: string) => {
            <span>{it}</span>
        })}
    </>)
}

export default Input as React.FunctionComponent;