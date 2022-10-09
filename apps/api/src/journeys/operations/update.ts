export const createBlueprint = async (blueprint) => {
    return prisma.journeyBluePrint.create({
      data: blueprint,
    });
  };