const faker = require('faker');

exports.generateLinks = (min = 3, max = 15) => {
  const categoriesList = [];
  const categoriesCount = Math.floor(Math.random() * max) + min;
  for (let i = 0; i < categoriesCount; i++) {
    let categoryName = faker.name.jobArea();
    let linksList = [];
    let linksCount = Math.floor(Math.random() * max) + min;
    for (let j = 0; j < linksCount; j++) {
      linksList.push({ url: faker.internet.url(), title: faker.company.companyName() });
    }
    categoriesList.push({
      category: categoryName,
      links: linksList
    });
  }

  return categoriesList;
};