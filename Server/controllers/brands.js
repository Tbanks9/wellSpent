exports.getBrands = (req, res) => {
  const Brands = {
    name: 'Zara',
    overallscore: 95,
    enviormentscore: 70,
    labourscore: 95,
    discription:
      'Adidas SA is a Spanish fast fashion retailer based in Arteixo in Galicia.',
  };

  res.json(Brands);
};
