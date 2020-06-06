import * as yup from 'yup';

const FormData = yup.object({
    variant: yup.number().positive().required(),
    valueA: yup.string().when("variant", {
        is: (it) => it === 1,
        then: yup.string().required(),
        otherwise: yup.string().notRequired()
    }),
    URL: yup.string().when("variant", {
        is: (it) => it === 2,
        then: yup.string().required(),
        otherwise: yup.string().notRequired()
    }).url(),
    valueC: yup.string().required('Custom error message to indicate the fact that value C is required!'),
    valueD: yup.string().required().oneOf(["a", "b", "c", "d"]),
});

export default FormData;
export type Entity = yup.InferType<typeof FormData>;
