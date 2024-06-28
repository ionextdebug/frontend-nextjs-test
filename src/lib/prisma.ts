/**
 * Usando como referência o tutorial abaixo:
 * https://www.robinwieruch.de/next-prisma-sqlite/
 */


import {Prisma, PrismaClient} from "@prisma/client";

const prismaClientSingleton = () => {
    return new PrismaClient();
  };
  
  declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
  }
  
  export const prisma = globalThis.prisma ?? prismaClientSingleton();
  
  if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;