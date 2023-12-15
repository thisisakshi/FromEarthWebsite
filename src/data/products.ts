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
  FLUFFY_SOAP,
  BATH_SALTS,
  FACE_AND_BODY
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
  {
    id: 21,
    name: "Fluffy Whipped Lavender Soap",
    description: "Indulge in our luxurious Fluffy Whipped Soap. This extra creamy, thick and gentle cleaning soap can be used as a bath wash or even a as shaving cream. Enhanced with natural oils to soften, smooth, and moisturize. Great with a bath sponge for maximum lather.",
    price: 355,
    activeIngrediants: "Aqua, Olive oil, Veg Glycerine, EDTA, CAPB, SCI, Essential Oil",
    image: "/images/fluffy_whipped_soap_english_lavender.jpg",
    tags: [ProductTags.FLUFFY_SOAP]
  },
  {
    id: 22,
    name: "Fluffy Whipped Floral Soap",
    description: "Indulge in our luxurious Fluffy Whipped Soap. This extra creamy, thick and gentle cleaning soap can be used as a bath wash or even a as shaving cream. Enhanced with natural oils to soften, smooth, and moisturize. Great with a bath sponge for maximum lather.",
    price: 355,
    activeIngrediants: "Aqua, Olive oil, Veg Glycerine, EDTA, CAPB, SCI, Essential Oil",
    image: "/images/fluffy_whipped_soap_floral_bouquet.jpg",
    tags: [ProductTags.FLUFFY_SOAP]
  },
  {
    id: 23,
    name: "Lavender Bath Salts",
    description: "A truly soothing & calming bath agent providing relaxation to the mind & body. Ease painful joints and sore muscles with our highest quality bath salts. Soothe back pain and tired feet, calm the nervous system, and promote beautiful skin with our From Earth Bath Salt collection.",
    price: 325,
    activeIngrediants: "Dead Sea Salts, pink Himalayan Salt, Epsom Salt, Clay, Baking Soda, Boric acid, Flower Petals, Essential Oils, Vitamin E",
    image: "/images/bath_salt_lavender.jpg",
    tags: [ProductTags.BATH_SALTS]
  },
  {
    id: 24,
    name: "Citrus Bath Salts",
    description: "A truly soothing & calming bath agent providing relaxation to the mind & body. Ease painful joints and sore muscles with our highest quality bath salts. Soothe back pain and tired feet, calm the nervous system, and promote beautiful skin with our From Earth Bath Salt collection.",
    price: 325,
    activeIngrediants: "Dead Sea Salts, pink Himalayan Salt, Epsom Salt, Clay, Baking Soda, Boric acid, Flower Petals, Essential Oils, Vitamin E",
    image: "/images/bath_salt_citrus.jpg",
    tags: [ProductTags.BATH_SALTS]
  },
  {
    id: 25,
    name: "Rose Bath Salts",
    description: "A truly soothing & calming bath agent providing relaxation to the mind & body. Ease painful joints and sore muscles with our highest quality bath salts. Soothe back pain and tired feet, calm the nervous system, and promote beautiful skin with our From Earth Bath Salt collection.",
    price: 325,
    activeIngrediants: "Dead Sea Salts, pink Himalayan Salt, Epsom Salt, Clay, Baking Soda, Boric acid, Flower Petals, Essential Oils, Vitamin E",
    image: "/images/bath_salt_rose.jpg",
    tags: [ProductTags.BATH_SALTS]
  },
  {
    id: 26,
    name: "Lip Balm",
    description: "Say hello to healthy and fuller lips. Our lip balm comes packed with the goodness of natural butters and oils.",
    price: 150,
    variations: ["Pineapple", "Orange", "Cranberry Kiss", "Pink Lemonade"],
    activeIngrediants: "Natural oils, Bees wax, Shea butter, Mica, Lip Safe essential oil.",
    image: "/images/lip_balm.jpg",
    tags: [ProductTags.FACE_AND_BODY]
  },
  {
    id: 27,
    name: "Sandalwood Body Scrub",
    description: "From Earth Body Scrub aims at removing dead skin from the surface and allows new cells to grow. It helps in skin firming, moisturizing, repairing sun-damage, and improving oxygen supply to the skin, repairing damaged and dehydrated skin. It is safe and highly effective, if done by trained therapists, and following the right procedure. It is generally advisable to get a body-scrub done twice a month.",
    price: 450,
    activeIngrediants: "Herbal Aqua, Sandalwood extract. Kaolin Clay, Turmeric, Kumkumadi Oil, Turmeric Oil, Saffron, Vitamin E, walnut scrub calendula oil, glycerin",
    image: "/images/body_scrub_sandalwood_and_saffron.jpg",
    tags: [ProductTags.FACE_AND_BODY]
  },
  {
    id: 28,
    name: "Cracked Heels Repair Lotion",
    description: "Powered by rich natural oils, this From Earth's Heel Repair Lotion helps soften and smooth rough patches . Daily use can ensure that your feet remain healthy and happy forever! Vitamin E & other natural emollients provide a deep penetrating treatment for the feet.",
    price: 270,
    activeIngrediants: "Rose Water, Citrus essential Oil, Veg.Glycerine, Tocopheryl Acetate (Vitamin E)",
    image: "/images/cracked_heel_repair_lotion.jpg",
    tags: [ProductTags.FACE_AND_BODY]
  },
  {
    id: 29,
    name: "Body Butter",
    description: "This is not your regular body butter. If you’ve got dry skin, this rich butter is packed with oils that will nourish your skin and restore the balance of your body’s natural oils.",
    price: 500,
    activeIngrediants: "Tamanu oil, Meadowfoam Oil, Safflower Oil, Shea Butter, Cocoa Butter, Coconut virgin oil, , Jojoba oil, Argon Oil, Vitamin E & A, BTMS 50.",
    image: "/images/body_butter.jpg",
    tags: [ProductTags.FACE_AND_BODY]
  },
  {
    id: 30,
    name: "Aloe-Vera and Shea Soap",
    description: "Aloe-Vera soap protects the skin's moisture balance by accelerating blood circulation. It is therefore very suitable for dry and allergy prone skin.",
    price: 265,
    activeIngrediants: "Tamanu oil, Meadowfoam Oil, Safflower Oil, Shea Butter, Cocoa Butter, Coconut virgin oil, , Jojoba oil, Argon Oil, Vitamin E & A, BTMS 50.",
    image: "/images/aloe_vera_and_shea_soap.jpg",
    tags: [ProductTags.OIL_SOAP]
  },
  {
    id: 31,
    name: "Neem Scrub Soap",
    description: "The From Earth Original! This soap was created for the sole purpose of healing your skin. It helps remove blemishes from breakouts and is great if you have a combination skin type. It’s the best one if you have eczema. (Note this is not a replacement for any treatment your dermatologist may have prescribed)",
    price: 265,
    activeIngrediants: "Cocoa Butter, Neem Oil, Coconut oil, Sunflower oil, dry neem extract, Geranium, Star-Anis & Basil essential oil",
    image: "/images/neem_scrub_soap.jpg",
    tags: [ProductTags.OIL_SOAP]
  },
  {
    id: 32,
    name: "Shea-Mud Soap",
    description: "Kaolin clay in the soap helps to withdraw any toxins and impurities in the skin. Shea Butter helps the skin retain moisture, preventing it from drying out. Shea-Mud Soap is gentle and great for sensitive skin",
    price: 265,
    activeIngrediants: "Aqua, Shea Butter, Coconut Oil, Olive Oil, Castor Oil, Palm Oil, Sunflower Oil, Lye, Kaolin Clay, Neroli Essential Oil.",
    image: "/images/shea_mud_soap.jpg",
    tags: [ProductTags.OIL_SOAP]
  },
  {
    id: 33,
    name: "Kokum & Honey Soap",
    description: "Owing to the antioxidant and anti-inflammatory properties, Kokum Butter heals, soothes inflamed and damaged skin. Honey helps to calm down hormonal skin, and as a natural humectant, helps to attract moisture into the skin and keep it there.",
    price: 265,
    activeIngrediants: " Coconut oil, Kokum  Butter, Olive oil,  Palm oil, Rice bran oil, Castor oil, Honey, Ashwagandha & Ylang-Ylang essential oil.",
    image: "/images/kokum_and_honey_soap.jpg",
    tags: [ProductTags.OIL_SOAP]
  },
  {
    id: 34,
    name: "Green Wave Soap",
    description: "Green Wave Soap softens and lubricates the skin. Cocoa & Shea Butters in this soap act as a superb moisturizer which slows down moisture loss. It is gentle on the skin and has a pleasing aroma.",
    price: 265,
    activeIngrediants: "Aqua, Coconut Oil, Almond Oil, Cocoa butter, Shea butter, Olive oil, Lye, Neroli extract.",
    image: "/images/green_wave_soap.jpg",
    tags: [ProductTags.OIL_SOAP]
  },
  {
    id: 35,
    name: "Citrus Gold",
    description: "Lemongrass protects the skin from the harmful effects of pollution, and skin infections due to its detoxifying properties. The acid in lemons is antibacterial as well as antiseptic, resulting in a stronger, longer-lasting and sanitizing clean skin.",
    price: 265,
    activeIngrediants: "Almond Oil, Olive oil, Coconut oil, Sunflower oil, Rice bran oil, Aqua, Lye, Cinnamon, Lemon & Lemongrass essential oil.",
    image: "/images/citrus_gold.jpg",
    tags: [ProductTags.OIL_SOAP]
  },
  {
    id: 36,
    name: "Camel Milk Breeze Soap",
    description: "Made by hand and crafted with the finest oils and pure fresh Camel Milk. A natural source of Alpha-Hydroxy acids – known to plump the skin and smooth fine lines ... Camel milk is saturated with proteins, it is rich in Vitamin C (a natural anti-oxidant) and Vitamin A, B1, B2, B12 and carotin. This unique soap not only keeps your skin beautiful but also can be used to treat skin disorders such as Acne and Eczema.",
    price: 285,
    activeIngrediants: "Camel Milk,Coconut oil, Shea Butter, Olive Oil, Palm Oil, Lye, Essential Oil.",
    image: "/images/camel_milk_breeze_soap.jpg",
    tags: [ProductTags.OIL_SOAP]
  },
  {
    id: 37,
    name: "Tomato & Goat Milk Moisturing Soap",
    description: "Organic tomato juice in the soap tightens and brightens your skin. Goat milk leaves your skin healthy and nourished and relieves irritation and inflammation.",
    price: 265,
    activeIngrediants: "Aqua, Coconut Oil, Olive Oil, Almond Oil, Goat Milk, Tomato Juice, Rice bran Oil, Lye, Basil essential Oil.",
    image: "/images/tomato_and_goap_soap.jpg",
    tags: [ProductTags.OIL_SOAP]
  },
  {
    id: 38,
    name: "Pumpkin and Green Tea Soap",
    description: "Sometimes two things that seem so different do pair nicely! The Pumpkin and Green Tea Soap is packed with oils that are good for your skin. Take a look at the ingredients. They won’t disappoint.",
    price: 265,
    activeIngrediants: "Shea Butter, Olive oil, Coconut Oil, Castor Oil,  Pumpkin Extract, Green Tea, Turmeric, Mint & Eucalyptus essential oil.",
    image: "/images/pumpkin_and_green_tea_soap.jpg",
    tags: [ProductTags.OIL_SOAP]
  },
  {
    id: 39,
    name: "Pumpkin Spice Soap",
    description: "Vitamin A and Vitamin C in Pumpkin Spice Soap help to soothe irritated skin,  keep it youthful and refreshed! it is the perfect bar for chilly and dry weather.",
    price: 275,
    activeIngrediants: "Shea Butter, Olive oil, Coconut Oil, Castor Oil, Pumpkin puree, Cinnamon & Eucalyptus essential oil.",
    image: "/images/pumpkin_spice_soap.jpg",
    tags: [ProductTags.OIL_SOAP]
  },
];
