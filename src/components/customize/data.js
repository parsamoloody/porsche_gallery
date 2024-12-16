const showCars = [
    {
        porsche: [
        {
          id: 0,
          name: "porsche",
          model: "911 GT3",
          colors: [
            "white",
            "blue",
            "black",
            "cartagenagelbmetalic",
            "darkgreen",
            "gentianblue",
            "red",
            "slate", 
            "vanadium",
            "silver"
          ],
          wheels: [
            {
              name: "standard",
              description: "20-/21-inch 911 GT3 aluminum lightweight forged wheels",
              costExtra: 0
            },
            {
              name: "gold",
              description: "20-/21-inch 911 GT3 magnesium lightweight forged wheels",
              costExtra: 15_946.00
            }
          ],
          model_views: [
            "front","agab","jelo","side", "side-xl","top-xl", "insidefront", "insideside"
          ],
          imageId: "c",
        },
      ],
    },
  ];
  
  export default function carData() {
    return showCars;
  }
  