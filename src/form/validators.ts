import * as yup from 'yup';

const FormData = yup.object({
    variant: yup.number().positive(),
    valueA: yup.string().when("variant", {
        is: 1,
        then: yup.string().required(),
        otherwise: yup.string().notRequired()
    }),
    valueB: yup.string().when("variant", {
        is: 2,
        then: yup.string().required(),
        otherwise: yup.string().notRequired()
    }).url(),
    valueC: yup.string().notRequired(),
    valueD: yup.string().oneOf(["a", "b", "c", "d"]).required()
});

export default FormData;