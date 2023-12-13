export type FromEarthProduct = {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
  activeIngrediants?: string;
  variations?: string[];
  tags: ProductTags[];
};

export enum ProductTags {
  OIL_SOAP,
  GLYCERIN_SOAP,
  GIFT,
  CANDLE,
  BESTSELLER,
}

export const products: FromEarthProduct[] = [
  {
    id: 1,
    name: "Camel Milk Herbal Soap",
    description:
      "Unlock radiant skin with Camel Milk, a natural source of Alpha-Hydroxy acids for anti-aging and antioxidant benefits. Experience a plumper, smoother complexion, complemented by Tulsi's deep cleansing effects for ultimate skin nourishment.",
    activeIngrediants:
      "Camel Milk, Coconut oil, Shea Butter, Olive Oil, Palm Oil, Lye, Tulsi, Basil & Lemongrass Extract.",
    price: 285,
    image: "/images/oil_soap_camel_milk_herbal_soap.jpg",
    tags: [ProductTags.OIL_SOAP, ProductTags.BESTSELLER],
  },
  {
    id: 2,
    name: "Goat Milk and Honey Soap",
    description:
      "Discover the perfect gift! Fresh Goat Milk offers rich, gentle cleansing with added benefits. Enhance your skin with natural exfoliation, improving various skin conditions for a radiant glow.",
    activeIngrediants:
      "Saponified natural fats, Coconut oil, Palm oil, Canola oil, Rice bran oil, Olive oil, Fresh goat milk, Honey, Lye, Essential oils.​",
    price: 265,
    image: "/images/oil_soap_GoatMilk_HoneySoap.jpg",
    tags: [ProductTags.OIL_SOAP, ProductTags.BESTSELLER],
  },
  {
    id: 3,
    name: "Almond & Olive Soap",
    description:
      "Almond & Olive Soap offers you holistic skin care. Bathing with this herbal soap will give back to your skin all the lost nutrients as well as its natural sheen.",
    activeIngrediants:
      "Aqua, Coconut oil, Almond Oil, Olive Oil, Shea Butter, Lye, Vetiver extract.​",
    price: 265,
    image: "/images/oil_soap_almond_olive_soap.jpg",
    tags: [ProductTags.OIL_SOAP],
  },
  {
    id: 4,
    name: "Milky Lavender Soap",
    description:
      "This soap balances the natural oils of your skin, leaving it feeling soft. The lavender essential oil calms your senses and leaves you feeling relaxed.",
    activeIngrediants:
      "Coconut oil, Canola oil, Olive oil, Castor Oil,  Milk Fat, Honey, Lavender essential oil (CG).​",
    price: 285,
    image: "/images/oil_soap_milky_lavender_soap.jpg",
    tags: [ProductTags.OIL_SOAP],
  },
  {
    id: 5,
    name: "Basil Peppermint Soap",
    description:
      "This uplifting blend of basil mixed with peppermint is super gentle. The moisturizing blend of canola and olive oil adds an extra layer of protection to your skin without stripping it of its natural oils.",
    activeIngrediants:
      "Coconut oil, Canola oil, Olive oil, Basil extract, Peppermint essential oil.​",
    price: 270,
    image: "/images/oil_soap_basil_peppermint_soap.jpg",
    tags: [ProductTags.OIL_SOAP],
  },
  {
    id: 6,
    name: "Tripple Butter Soap",
    description:
      "From Earth's Triple Butter Soap deeply hydrates your skin on multiple levels and won’t dry it out like commercially available soaps. ",
    activeIngrediants:
      "Aqua, Coconut Oil, Cocoa Butter, Shea Butter, Avocado Butter, Olive Oil, Castor Oil, Lye, Honey, Honeysuckle oil.​",
    price: 279,
    image: "/images/oil_soap_tripple_butter_soap.jpg",
    tags: [ProductTags.OIL_SOAP],
  },
  {
    id: 7,
    name: "Creamy Coconut Soap (2 Bars)",
    description:
      "Coconut Milk is rich in vitamins and fatty acids that our skin loves. It's also a wonderful natural moisturizer. Honey is a popular additive for soap. It has various properties that makes it appealing for skincare.",
    activeIngrediants:
      "Aqua, Avocado Butter,Shea butter, Olive Oil, Castor Oil, Palm Oil, Lye, Coconut cream, Honey & Geranium Extract.​",
    price: 490,
    image: "/images/oil_soap_creamy_coconut_soap.jpg",
    tags: [ProductTags.OIL_SOAP],
  },
  {
    id: 8,
    name: "Marble Tea Tree Soap",
    description:
      "From Earth's Marble Tea Tree Soap is rich in carotenoids and antioxidants which provides supple, rejuvenating moisture for the appearance of firmer and healthier looking skin.",
    activeIngrediants:
      "Aqua, Coconut Oil, Mango Butter, Sunflower Oil, Canola Oil, Olive Oil, Tea-tree essential Oil.​",
    price: 265,
    image: "/images/oil_soap_marble_tea_tree_soap.jpg",
    tags: [ProductTags.OIL_SOAP,]
  },
  {
    id: 9,
    name: "Orange Charcoal Soap (2 Soaps)",
    description:
      "Orange Charcoal Soap improves most skin conditions and is a natural skin exfoliate. Activated Charcoal removes impurities and control oiliness.",
    activeIngrediants:
      "Aqua, Coconut oil ,Palm oil ,Canola oil ,Olive oil, Rice bran oil, Activated charcoal, Orange & Cinnamon Extract.​",
    price: 500,
    image: "/images/oil_soap_orange_charcoal.jpg",
    tags: [ProductTags.OIL_SOAP,]
  },
  {
    id: 10,
    name: "Rose Soap",
    description: "One shower with this soap and you’ll feel great! The carefully chosen blend of oils & glycerin, leaves your skin with a soft and radiant look.",
    activeIngrediants: "Glycerin, Rose extract, Rose petals, Vitamin E",
    price: 270,
    image: "/images/glycerin_rose_soap.jpg",
    tags: [ProductTags.GLYCERIN_SOAP, ProductTags.BESTSELLER],
  },
  {
    id: 11,
    name: "Jasmine Soap",
    description: "Great for all seasons! This soap is as simple as it can get. You’ll leave the shower feeling clean and refreshed.",
    activeIngrediants: " Veg.glycerin, jasmine flower extract & Vitamin E",
    price: 330,
    image: "/images/glycerin_jasmine_soap.jpg",
    tags: [ProductTags.GLYCERIN_SOAP, ProductTags.BESTSELLER],
  },
  {
    id: 12,
    name: "Lemon Grass and Tulsi Soap",
    description: "Great for summers! This soap is as simple as it can get. You’ll leave the shower feeling clean and refreshed.",
    activeIngrediants: "Veg. Glycerin, Lemongrass and Tulsi extract, Vitamin E.",
    price: 165,
    image: "/images/glycerin_Lemon)Grass_and_Tulsi_Soap.jpg",
    tags: [ProductTags.GLYCERIN_SOAP],
  },
  {
    id: 13,
    name: "Marigold and Jasmine Soap",
    description: "The scent of sweet jasmine growing wild along a winding country lane mingles with a loosely-gathered bouquet of marigold. This soap will take you on a journey of the senses.",
    activeIngrediants: "Veg.Glycerin, Jasmine and marigold extract, marigold petals, Vitamin E",
    price: 270,
    image: "/images/glycerin_marigold_and_jasmine_soap.jpg",
    tags: [ProductTags.GLYCERIN_SOAP]
  },
  {
    id: 14,
    name: "Egyptian Musk Soap",
    description: "This soap is enriched with Shea butter, Musk oil and Vitamin E. The Musk scent has a bit of floral nuance and something of a bite to it. ",
    activeIngrediants: "Veg Glycerin, Shea Butter, Musk Oil, Vitamin E",
    price: 299,
    image: "/images/glycerin_egyptian_musdk_soap.jpg",
    tags: [ProductTags.GLYCERIN_SOAP]
  },
  {
    id: 15,
    name: "Lavender Soap",
    description: "This gentle handmade Lavender Soap made with lavender oil can help people suffering from skin conditions such as mild burns, scabies and dermatitis.",
    activeIngrediants: "Veg. Glycerin, Lavender essential oil, Vitamin E, Lavender buds.",
    price: 270,
    image: "/images/glycerin_lavendar_soap.jpg",
    tags: [ProductTags.GLYCERIN_SOAP]
  },
  {
    id: 16,
    name: "Orange Soap",
    description: "This summer, pamper yourself with this Orange Soap! This soap is as simple as it can get. You’ll leave the shower feeling clean and refreshed.",
    activeIngrediants: "Veg.Glycerin, Orange extract, Orange peel scrubs, Vitamin E",
    price: 165,
    image: "/images/glycerin_orange_soap.jpg",
    tags: [ProductTags.GLYCERIN_SOAP]
  },
  {
    id: 17,
    name: "Neem Glycerin Soap with Scrub",
    description: "From Earth's Neem Soap moisturizes your skin and protects your skin from 99.9% germs. Scrubs in the soap exfoliates the skin and removes dead skin cells and encourage the healthy production of new ones.",
    activeIngrediants: "Veg.Glycerine, Neem Extract, Essential Oil, Neem leaves Paste, Vitamin E",
    price: 165,
    image: "/images/glycerin_neem_with_scrub.jpg",
    tags: [ProductTags.GLYCERIN_SOAP]
  },
  {
    id: 18,
    name: "Yellow Basil Soap (Set of 2)",
    description: "Great year round! Basil protects the skin from the harmful effects of pollution, and skin infections due to its detoxifying properties. The acid in lemons is antibacterial as well as antiseptic, resulting in a stronger, longer-lasting and sanitizing clean skin.",
    activeIngrediants: "Glycerin, Basil, Cinnamon & Lemon Extract.",
    price: 330,
    image: "/images/glycerin_yellow_basil.jpg",
    tags: [ProductTags.GLYCERIN_SOAP]
  },
  {
    id: 19,
    name: "Gift Box (Set of 3)",
    description: "A Classy box of three natural soaps. - Lavender, Rose & Marigold",
    price: 825,
    image: "/images/gift_box_of_3.jpg",
    tags: [ProductTags.GLYCERIN_SOAP, ProductTags.GIFT]
  },
  {
    id: 20,
    name: "Soy Wax Candles",
    description: "Produces no soot and is long lasting.",
    price: 1299,
    image: "/images/candle_big_lavender.jpg",
    variations: ["Lavendar", "Vanilla"],
    tags: [ProductTags.CANDLE, ProductTags.GIFT, ProductTags.BESTSELLER]
  },
];
