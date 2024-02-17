const fs = require("fs");

const likedDistricts = require("./data/data.json");

fs.mkdir("likedPlaces", () => {
  console.log("folder created");
});

likedDistricts.map((place) => {
  fs.mkdir(`./likedPlaces/${place.district}`, () => {
    console.log(`${place.district} folder created`);
  });
  place.mustVisit.map((tovisit) => {
    fs.writeFile(
      `./likedPlaces/${place.district}/${tovisit.name}.md`,
      `## ${place.district} \n ### ${tovisit.name} \n ${tovisit.description}`,
      () => {
        console.log(`${tovisit.name} file created`);
      }
    );
  });
});
