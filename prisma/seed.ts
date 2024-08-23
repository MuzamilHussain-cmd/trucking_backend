import { BaseExceptionFilter } from "@nestjs/core";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from 'bcrypt'
const prisma = new PrismaClient();

const roundOfHasing = 10;

async function main() {

  const passwordsabin = await bcrypt.hash('password-sabin',roundOfHasing);
  const passwordAlex = await bcrypt.hash('password-alex',roundOfHasing);

  const admin1 = await prisma.truckingUser.upsert({
    where:{email:'sabin@adams.com'},
    update:{
      password:passwordsabin,
    },
    create:{
      email:'sabin@adams.com',
      password:passwordsabin,
      role:'ADMIN'
    }
  })

  const admin2 = await prisma.truckingUser.upsert({
    where:{email:'alexn@adams.com'},
    update:{
      password:passwordAlex,
    },
    create:{
      email:'alex@adams.com',
      password:passwordAlex,
      role:'ADMIN'
    }
  })

  console.log(admin1,admin2);

}
  

  main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });