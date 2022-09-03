import * as yup from "yup";

export const validateReflection = (reflection) => {
  const reflectionSchema = yup.object().shape({
    userId: yup.string().required(),
    description: yup.string().required(),
    type: yup.string().required(),
  });

  return reflectionSchema.isValid(reflection);
}
