import * as yup from "yup";

export const validateRequest = (reflection) => {
  const schema = yup.object().shape({
    requesterId: yup.string().required(),
    requesteeId: yup.string().required()
  });

  return schema.isValid(reflection);
}
