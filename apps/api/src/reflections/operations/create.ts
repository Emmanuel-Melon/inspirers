import * as yup from "yup";

const reflectionSchema = yup.object().shape({
  userId: yup.string().required(),
  description: yup.string().required(),
  type: yup.string().required(),
});

export const createReflection = async (reflection) => {
  const isValid = await reflectionSchema.isValid(reflection);
  console.log(isValid);
  if (isValid) {
    return prisma.reflection.create({
      data: reflection,
    });
  } else {
    throw new Error("Invalid input");
  }
};
