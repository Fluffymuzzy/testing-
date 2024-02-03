import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const authorBooks = [
  {
    author: {
      name: "John",
      surname: "Tolkien",
      email: "tolkien@example.com",
      phoneNumber: "+1234567890",
    },
    books: [
      { name: "The Lord of the Rings", content: "A high-fantasy epic" },
      { name: "The Hobbit", content: "A fantasy novel" },
    ],
  },
  {
    author: {
      name: "George",
      surname: "Martin",
      email: "martin@example.com",
      phoneNumber: "+1908989898",
    },
    books: [
      { name: "Game of Thrones", content: "A high-fantasy epic" },
      { name: "The Winds of Winter", content: "A fantasy novel" },
    ],
  },
  {
    author: {
      name: "Charles",
      surname: "Dickens",
      email: "dickens@example.com",
      phoneNumber: "+1245698364",
    },
    books: [
      {
        name: "The Adventures of Oliver Twist",
        content: "A high-fantasy epic",
      },
      { name: "A Christmas Carol", content: "A fantasy novel" },
    ],
  },
  {
    author: {
      name: "Fyodor",
      surname: "Dostoevsky",
      email: "dostoevsky@example.com",
      phoneNumber: "+1234577890",
    },
    books: [{ name: "The Idiot", content: "A novel" }],
  },
  {
    author: {
      name: "Leo",
      surname: "Tolstoy",
      email: "tolstoy@example.com",
      phoneNumber: "+1254567890",
    },
    books: [{ name: "War and Peace", content: "Epic" }],
  },
  {
    author: {
      name: "Emily",
      surname: "Dickinson",
      email: "dickinson@example.com",
      phoneNumber: "+1235567890",
    },
    books: [{ name: "Poems", content: "A poetry" }],
  },
  {
    author: {
      name: "Lewis",
      surname: "Caroll",
      email: "caroll@example.com",
      phoneNumber: "+1233567890",
    },
    books: [{ name: "Alices Adventures in Wonderland", content: "A novel" }],
  },
  {
    author: {
      name: "Mark",
      surname: "Twain",
      email: "twain@example.com",
      phoneNumber: "+1234567770",
    },
    books: [{ name: "Adventures of Huckleberry Finn", content: "A novel" }],
  },
  {
    author: {
      name: "Bram",
      surname: "Stoker",
      email: "stoker@example.com",
      phoneNumber: "+1222567770",
    },
    books: [{ name: "Dracula", content: "A novel" }],
  },
  {
    author: {
      name: "Oscar",
      surname: "Wilde",
      email: "wilde@example.com",
      phoneNumber: "+1234555770",
    },
    books: [
      { name: "The Picture of Dorian Gray", content: "A philosofical novel" },
    ],
  },
  {
    author: {
      name: "Herbert",
      surname: "Wells",
      email: "wells@example.com",
      phoneNumber: "+1234568880",
    },
    books: [{ name: "A Modern Utopia", content: "A novel" }],
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const { author, books } of authorBooks) {
    const authorRecord = await prisma.author.create({
      data: {
        ...author,
        books: {
          create: books,
        },
      },
    });
    console.log(`Created author with id: ${authorRecord.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
