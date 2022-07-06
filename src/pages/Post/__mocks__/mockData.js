import { faker } from "@faker-js/faker";

const posts = [
  {
    id: "12a8fas71389asgas",
    content: [
      "https://picsum.photos/300/600",
      "https://picsum.photos/500/501",
      "https://picsum.photos/500/502",
    ],
    post_by: {
      name: faker.name.firstName().toLowerCase(),
      image: "http://picsum.photos/49/49",
    },
    location: faker.address.country(),
  },
];

export default posts;
