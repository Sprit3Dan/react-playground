import * as React from 'react';
import { FormCTX } from './index.d';
import { formCTX } from './form';

type P = {
    data: any
}

const FormTemplate: React.FunctionComponent<P> = ({ data }: P) => {
    const ctx = React.useContext<FormCTX>(formCTX);

    return (<>
        <select defaultValue={data.variant} onChange={ctx.onItemChange("variant")}>
            <option value={1}>template A</option>
            <option value={2}>template B</option>
            <option value={3}>template C</option>
            <option value={4}>template D</option>
        </select>
        {!!data.variant && dependentPart(ctx, data)}
    </>)
}


function dependentPart(formCTX: FormCTX, data: any) {
    switch (Number(data.variant)) {
        case 1:
            return (<>
                <label>value A</label>
                <input
                    key="valueA"
                    defaultValue={data.valueA}
                    onChange={formCTX.onItemChange("valueA")} />
            </>);
        case 2:
            return (<>
                <label>Value B</label>
                <input
                    key="URL"
                    defaultValue={data.URL}
                    onChange={formCTX.onItemChange("URL")} />
            </>);
        case 3:
            return (<>
                <label>Value C</label>
                <input
                    key="valueC"
                    defaultValue={data.valueC}
                    onChange={formCTX.onItemChange("valueC")} />
            </>);
        case 4:
            return (<>
                <label>Value D</label>
                <input
                    key="valueD"
                    defaultValue={data.valueD}
                    onChange={formCTX.onItemChange("valueD")} />
            </>);
        default:
            return null
    }

}

export default FormTemplate;