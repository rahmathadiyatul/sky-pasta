export interface OnlineFoodLinks {
    merchantName: string
    merchantUrl: string
}

export interface Outlet {
    name: string,
    onlineFoodUrl: Array<OnlineFoodLinks>
}

export interface MenuCard {
    Name: string,
    Price: number,
    Description: string,
    ImageUrl?: string
}

export interface MenuCategoryCard {
    CategoryName: string,
    MenuList: Array<MenuCard>
}

export const outlets: Array<Outlet> = [
    { name: "Sky Pasta - Bekasi", onlineFoodUrl: [{ merchantName: "GoFood", merchantUrl: "https://gofood.co.id/jakarta/restaurant/sky-pasta-taman-galaxy-bekasi-c4b7588e-a2e5-4fae-bd07-3a99c66edf22" }, { merchantName: "GrabFood", merchantUrl: "https://r.grab.com/g/6-20250401_234524_821A0C170C38448AB60EBBD45B7DB038_MEXMPS-6-C63GVP4JT2J2GJ" }, { merchantName: "ShopeeFood", merchantUrl: "shopeefoodUrl" }] },
    { name: "Sky Pasta - Binus Jakbar", onlineFoodUrl: [{ merchantName: "GoFood", merchantUrl: "https://gofood.co.id/jakarta/restaurant/sky-pasta-binus-jakbar-2e05c08c-0485-47a6-b128-acaf8d39271f" }, { merchantName: "GrabFood", merchantUrl: "https://r.grab.com/g/6-20250401_234354_821A0C170C38448AB60EBBD45B7DB038_MEXMPS-6-C3A3AFNUBBEDL6" }, { merchantName: "ShopeeFood", merchantUrl: "shopeefoodUrl" }] },
    { name: "Sky Pasta - Ciledug", onlineFoodUrl: [{ merchantName: "GoFood", merchantUrl: "https://gofood.co.id/jakarta/restaurant/sky-pasta-ciledug-423518a4-dea9-46b0-ab0e-015e0129a38f" }, { merchantName: "GrabFood", merchantUrl: "https://r.grab.com/g/6-20250401_234508_821A0C170C38448AB60EBBD45B7DB038_MEXMPS-6-CZMBUFTATB5HNN" }, { merchantName: "ShopeeFood", merchantUrl: "shopeefoodUrl" }] },
    { name: "Sky Pasta - Cinere", onlineFoodUrl: [{ merchantName: "GoFood", merchantUrl: "https://gofood.co.id/jakarta/restaurant/sky-pasta-cinere-43373425-c78e-4dd4-a4e5-23d58e701cae" }, { merchantName: "GrabFood", merchantUrl: "https://r.grab.com/g/6-20250401_234447_821A0C170C38448AB60EBBD45B7DB038_MEXMPS-6-CYNYJ2JBE6CKGT" }, { merchantName: "ShopeeFood", merchantUrl: "shopeefoodUrl" }] },
    { name: "Sky Pasta - Pamulang", onlineFoodUrl: [{ merchantName: "GoFood", merchantUrl: "https://gofood.co.id/id/jakarta/restaurant/sky-pasta-pamulang-bd96dd68-4bd3-41e2-8fde-ce7ea7b1c41c" }, { merchantName: "GrabFood", merchantUrl: "https://r.grab.com/g/6-20250401_234544_821A0C170C38448AB60EBBD45B7DB038_MEXMPS-IDGFSTI00000w7t" }, { merchantName: "ShopeeFood", merchantUrl: "shopeefoodUrl" }] },
    { name: "Sky Pasta - Petukangan", onlineFoodUrl: [{ merchantName: "GoFood", merchantUrl: "https://gofood.co.id/jakarta/restaurant/sky-pasta-petukangan-03ba0e0d-e52b-4531-a140-69cac28c986f" }, { merchantName: "GrabFood", merchantUrl: "https://r.grab.com/g/6-20250401_234434_821A0C170C38448AB60EBBD45B7DB038_MEXMPS-6-C2BDENKVLYN2A2" }, { merchantName: "ShopeeFood", merchantUrl: "shopeefoodUrl" }] },
    { name: "Sky Pasta - Tebet", onlineFoodUrl: [{ merchantName: "GoFood", merchantUrl: "https://gofood.co.id/jakarta/restaurant/sky-pasta-tebet-594d2e42-b1fd-44f2-83a9-da53b2210842" }, { merchantName: "GrabFood", merchantUrl: "https://r.grab.com/g/6-20250401_234421_821A0C170C38448AB60EBBD45B7DB038_MEXMPS-6-C6ADTJNYJFTKWA" }, { merchantName: "ShopeeFood", merchantUrl: "shopeefoodUrl" }] },
    { name: "Big Order", onlineFoodUrl: [] },
]

export const imageUrls = [
    {
        menuName: "Mac n Cheese",
        imgUrl: "/recommended/sky1.png",
        description: "Creamy macaroni pasta smothered in rich cheese sauce and topped with savory cheddar cheese. A perfect balance of indulgent, cheesy goodness with a hint of sweetness—kid-approved and irresistibly delicious!",
        price: 33800
    },
    {
        menuName: "Japanese Creamy Miso",
        imgUrl: "/recommended/sky10.png",
        description: "A comforting fusion of savory miso and silky cream, creating a rich umami flavor with a touch of sweetness. This Japanese-inspired delight delivers a smooth and balanced taste, perfect for those who crave warmth and depth in every sip!",
        price: 38000
    },
    {
        menuName: "Spaghetti Aglio Olio Chilli Oil",
        imgUrl: "/recommended/sky6.png",
        description: "A fusion pasta with bold oriental flavors, featuring slow-infused chili oil, tender chicken, mushrooms, cherry tomatoes, and parmesan cheese. Every bite delivers a rich, spicy, and savory sensation with a delightfully indulgent touch!",
        price: 54375
    },
    {
        menuName: "Fettuccine Premium Crispy",
        imgUrl: "/recommended/sky5.png",
        description: "A rich and creamy pasta dish topped with premium smoked beef, mushrooms, and torched mozzarella. The perfect blend of creaminess, savory goodness, and deep umami flavors in every bite!",
        price: 51000
    },
    {
        menuName: "Tortilla Prime Cheese",
        imgUrl: "/recommended/sky2.png",
        description: "A delightful fusion of three types of cheese paired with sweet corn and crispy tortilla, topped with savory pepperoni, sausages, and melty mozzarella. This pizza delivers a cheesy, rich, and slightly sweet flavor that’s simply irresistible!",
        price: 109000
    },
    {
        menuName: "Ultimate Meat Lovers",
        imgUrl: "/recommended/sky3.png",
        description: "A bold and unique pizza with spicy sauce, ground beef, smoked beef, mushrooms, and onions—topped with fresh basil leaves, cherry tomatoes, real chili, and gooey mozzarella cheese. A perfect balance of heat, savory goodness, and pure addictiveness!",
        price: 102500
    },
    {
        menuName: "Tomato Grilled Chicken",
        imgUrl: "/recommended/sky4.png",
        description: "Juicy chicken thigh steak, coated in a rich and creamy tomato sauce that brings out a perfect blend of savory and umami flavors. Served with crispy french fries and fresh salad, making it a complete and satisfying dinner choice!",
        price: 48750
    },
    {
        menuName: "Crispy Chicken Sauce with Fries",
        imgUrl: "/recommended/sky7.png",
        description: "Golden crispy chicken paired with your choice of rich creamy mushroom, smoky BBQ, bold black pepper, or savory cheese sauce. Served with crispy french fries, making it the perfect lunch indulgence!",
        price: 43550
    },
    {
        menuName: "Milkshake Popcorn Caramel",
        imgUrl: "/recommended/sky8.png",
        description: "A luscious milkshake blend of fresh milk, salted caramel popcorn, creamy gelato, and rich caramel sauce, topped with a swirl of whipped cream. Indulge in its sweet, creamy, and slightly savory delight!",
        price: 38000
    },
    {
        menuName: "Milkshake Caramel Macchiato",
        imgUrl: "/recommended/sky9.png",
        description: "A harmonious blend of milk, coffee, and rich caramel sauce, topped with a velvety swirl of whipped cream. This creamy coffee treat offers a perfect balance of sweetness with a hint of salty caramel indulgence!",
        price: 38000
    },
]

export const menuCategory: Array<MenuCategoryCard> = [
    {
        CategoryName: "Fusion Pasta",
        MenuList: [
            {
                Name: "Japanese Chicken Creamy Miso",
                Price: 48000,
                Description: "A comforting fusion of savory miso and silky cream, creating a rich umami flavor with a touch of sweetness. This Japanese-inspired delight delivers a smooth and balanced taste, perfect for those who crave warmth and depth in every sip!",
                ImageUrl: "/menu2/87.png",
            },
            {
                Name: "Spaghetti Aglio Olio Chili Oil",
                Price: 44500,
                Description: "A fusion of aglio e olio and chili oil, featuring spaghetti tossed with succulent chicken thigh, mushrooms, butter, parmesan cheese, homemade chili oil, and fresh parsley.",
                ImageUrl: "/menu2/19.png",
            }
        ]
    },
    {
        CategoryName: "Creamy Sauced Pasta",
        MenuList: [
            {
                Name: "Fettuccine Carbonara",
                Price: 34450,
                Description: "Smooth fettuccine pasta coated in a rich and creamy carbonara sauce, topped with savory smoked beef and cheese for an irresistible flavor.",
                ImageUrl: "/menu2/1.png",
            },
            {
                Name: "Penne Creamy Mushroom",
                Price: 33150,
                Description: "Tender penne pasta enveloped in a luscious creamy sauce, combined with champignon mushrooms and cheese for a delightful, earthy taste.",
                ImageUrl: "/menu2/6.png",
            },
            {
                Name: "Mac N Cheese",
                Price: 33800,
                Description: "Classic macaroni pasta smothered in a rich, velvety cheese sauce, topped with grated cheese for an extra cheesy and comforting bite.",
                ImageUrl: "/menu2/7.png",
            },
            {
                Name: "Fettuccine Creamy Chicken",
                Price: 35100,
                Description: "Silky fettuccine pasta in a creamy sauce, paired with juicy chicken fillet and melted cheese for a satisfying and flavorful experience.",
                ImageUrl: "/menu2/13.png",
            },
            {
                Name: "Fettuccine Alfredo",
                Price: 37050,
                Description: "A timeless Alfredo dish featuring fettuccine pasta tossed in a creamy, buttery sauce with tender chicken fillet, fresh spinach, and cheese.",
                ImageUrl: "/menu2/14.png",
            },
            {
                Name: "Penne Carbonara Sweet Corn",
                Price: 37050,
                Description: "A twist on the classic carbonara with penne pasta, creamy sauce, smoked beef, and sweet corn, adding a touch of sweetness to the rich flavors.",
                ImageUrl: "/menu2/9.png",
            },
            {
                Name: "Fettuccine Spicy Creamy Chicken",
                Price: 35100,
                Description: "Fettuccine pasta in a creamy yet spicy sauce, complemented by tender chicken fillet, fresh chili, and cheese for a bold and indulgent taste.",
                ImageUrl: "/menu2/10.png",
            },
            {
                Name: "Fettuccine Spicy Carbonara",
                Price: 35750,
                Description: "A fiery take on carbonara, featuring fettuccine pasta in a creamy, spicy sauce with smoked beef, fresh chili, and cheese for a flavorful kick.",
                ImageUrl: "/menu2/11.png",
            },
            {
                Name: "Fusilli Spicy Tuna Cream",
                Price: 51350,
                Description: "Spiral fusilli pasta coated in a spicy, creamy sauce, mixed with tender tuna chunks, fresh chili, and melted cheese for a perfect balance of heat and richness.",
                ImageUrl: "/menu2/15.png",
            }
        ]
    },
    {
        CategoryName: "Authentic Sauced Pasta",
        MenuList: [
            {
                Name: "Spaghetti Aglio e Olio Chicken",
                Price: 34450,
                Description: "Classic spaghetti aglio e olio with tender, juicy chicken fillet, infused with garlic, chili, parsley, and cheese. A perfect balance of flavors with a local authentic touch.",
                ImageUrl: "/menu2/16.png",
            },
            {
                Name: "Spaghetti Aglio e Olio Smoked Beef",
                Price: 35750,
                Description: "Delightfully simple spaghetti aglio e olio, featuring smoky, savory smoked beef, infused oil, garlic, chili, parsley, and cheese for a rich and aromatic experience.",
                ImageUrl: "/menu2/17.png",
            },
            {
                Name: "Spaghetti Aglio e Olio Tuna",
                Price: 38350,
                Description: "A flavorful twist on aglio e olio with tender tuna chunks, garlic, chili, parsley, and cheese. A light yet satisfying dish with an authentic local touch.",
                ImageUrl: "/menu2/20.png",
            },
            {
                Name: "Spaghetti Chilli Con Carne",
                Price: 37050,
                Description: "Spaghetti tossed with hearty ground beef, chili flakes, and cheese, creating a bold and flavorful dish with a hint of local spice.",
                ImageUrl: "/menu2/21.png",
            },
            {
                Name: "Spaghetti BBQ Bolognese",
                Price: 37050,
                Description: "A smoky BBQ-inspired take on classic Bolognese, featuring ground beef, carrots, onions, and a rich BBQ sauce, topped with cheese for extra indulgence.",
                ImageUrl: "/menu2/18.png",
            },
            {
                Name: "Fusilli Spicy Tuna",
                Price: 43550,
                Description: "Twisted fusilli pasta mixed with tender tuna chunks, garlic, chili, parsley, and cheese. A spicy and savory delight with an authentic touch.",
                ImageUrl: "/menu2/8.png",
            }
        ]
    },
    {
        CategoryName: "Special Premium Pasta",
        MenuList: [
            {
                Name: "Fettuccine Special Premium Creamy Smoked Beef",
                Price: 51000,
                Description: "Silky fettuccine coated in a rich and creamy sauce, topped with torched mozzarella, sautéed mushrooms, and premium smoked beef. A generous portion for a truly indulgent experience.",
                ImageUrl: "/menu2/5.png",
            },
            {
                Name: "Fettuccine Special Premium Creamy Chicken Crispy Mushroom",
                Price: 51000,
                Description: "Creamy fettuccine pasta served with crispy golden chicken, torched mozzarella, and flavorful mushrooms. A premium dish with extra portions to satisfy your cravings.",
                ImageUrl: "/menu2/3.png",
            },
            {
                Name: "Spaghetti Special Premium BBQ Bolognese",
                Price: 51000,
                Description: "Classic spaghetti with a smoky BBQ-infused Bolognese sauce, loaded with ground beef, torched mozzarella, and mushrooms. A hearty and premium delight.",
                ImageUrl: "/menu2/2.png",
            }
        ]
    },
    {
        CategoryName: "Beef & Rice",
        MenuList: [
            {
                Name: "Italian Classic Fried Rice",
                Price: 35750,
                Description: "A fusion of classic Italian and local flavors, this aromatic fried rice is a delightful twist on a timeless favorite.",
                ImageUrl: "/menu2/31.png",
            },
            {
                Name: "Authentic Beef Blackpepper Rice",
                Price: 46150,
                Description: "Savor tender beef slices with carrots and oyster mushrooms, served over fluffy rice and coated in rich, savory black pepper sauce.",
                ImageUrl: "/menu2/29.png",
            },
            {
                Name: "Spicy Blackpepper Beef",
                Price: 48750,
                Description: "A bold and fiery dish featuring juicy beef slices, oyster mushrooms, and a tantalizingly spicy black pepper sauce over steamed rice.",
                ImageUrl: "/menu2/30.png",
            },
            {
                Name: "Classic Lasagna",
                Price: 58500,
                Description: "Layers of rich meat sauce, creamy béchamel, and melted cheese, all baked to perfection for a comforting Italian classic.",
                ImageUrl: "/menu2/43.png",
            },
            {
                Name: "Australian Beef Saikoro",
                Price: 67000,
                Description: "Premium Australian diced beef, pan-seared to perfection and served with rice and a luscious mushroom sauce.",
                ImageUrl: "/menu2/32.png",
            }
        ]
    },
    {
        CategoryName: "Pizza Lovers",
        MenuList: [
            {
                Name: "Pizza Full Lovers",
                Price: 90090,
                Description: "A perfect blend of flavors featuring tomato sauce, mushrooms, smoked beef, mozzarella, sausage, and paprika for a satisfying bite.",
                ImageUrl: "/menu2/23.png",
            },
            {
                Name: "Pizza Chicken Lovers",
                Price: 88725,
                Description: "A delicious combination of tomato sauce, tender chicken, sausages, and gooey mozzarella for true chicken lovers.",
                ImageUrl: "/menu2/25.png",
            },
            {
                Name: "Pizza Cheezy Melt",
                Price: 88725,
                Description: "For cheese lovers! Indulge in a rich mix of tomato sauce, cheddar, and melted mozzarella for an irresistible cheesy experience.",
                ImageUrl: "/menu2/26.png",
            },
            {
                Name: "Pizza Pepperoni",
                Price: 88725,
                Description: "A classic favorite with tangy tomato sauce, savory pepperoni, and perfectly melted mozzarella cheese on a crispy crust.",
                ImageUrl: "/menu2/24.png",
            },
            {
                Name: "Pizza Ultimate Meat Lovers",
                Price: 102500,
                Description: "A feast for meat lovers! Packed with pepperoni, smoked beef, sausage, and melted cheese over a rich tomato base.",
                ImageUrl: "/menu2/28.png",
            },
            {
                Name: "Pizza Tortila Prime Cheese",
                Price: 109000,
                Description: "A gourmet delight with a thin, crispy tortilla crust, layered with premium cheese blends for an indulgent cheesy treat.",
                ImageUrl: "/menu2/27.png",
            }
        ]
    },
    {
        CategoryName: "Chicken Steak Crispy",
        MenuList: [
            {
                Name: "Chicken Crispy Sauce With Rice",
                Price: 38350,
                Description: "Crispy chicken fillet drizzled with our signature special sauce, served with fluffy white rice for a satisfying meal.",
                ImageUrl: "/menu2/33.png",
            },
            {
                Name: "Chicken Crispy Sauce With French Fries",
                Price: 43550,
                Description: "Golden crispy chicken fillet topped with special sauce, paired with crispy French fries for a perfect crunch.",
                ImageUrl: "/menu2/34.png",
            },
            {
                Name: "Tomato Grilled Chicken",
                Price: 48750,
                Description: "Tender grilled chicken infused with smoky flavors, topped with a rich marinara cream sauce for a delightful Italian-inspired taste.",
                ImageUrl: "/menu2/42.png",
            },
            {
                Name: "Chicken Cordon Bleu With Fries",
                Price: 51350,
                Description: "Juicy chicken breast stuffed with smoked beef and Swiss cheese, served with crispy fries and a velvety mushroom cream sauce.",
                ImageUrl: "/menu2/38.png",
            }
        ]
    },
    {
        CategoryName: "Snacks",
        MenuList: [
            {
                Name: "Otak - Otak",
                Price: 19000,
                Description: "Savory fish cakes fried to perfection, served with a side of zesty dipping sauce.",
                ImageUrl: "/menu2/52.png",
            },
            {
                Name: "Beef Sausage",
                Price: 24100,
                Description: "Juicy and flavorful beef sausage, grilled or fried to perfection.",
                ImageUrl: "/menu2/51.png",
            },
            {
                Name: "French Fries Original",
                Price: 20800,
                Description: "Classic golden fries with a crispy outside and fluffy inside.",
                ImageUrl: "/menu2/44.png",
            },
            {
                Name: "French Fries BBQ",
                Price: 22100,
                Description: "Crispy fries coated with smoky BBQ seasoning and served with BBQ sauce.",
                ImageUrl: "/menu2/45.png",
            },
            {
                Name: "French Fries Cheese",
                Price: 22750,
                Description: "Golden fries topped with a generous sprinkle of cheesy goodness.",
                ImageUrl: "/menu2/46.png",
            },
            {
                Name: "Cireng Bumbu Rujak",
                Price: 22750,
                Description: "Crispy fried tapioca snacks served with a sweet and spicy rujak sauce.",
                ImageUrl: "/menu2/53.png",
            },
            {
                Name: "Beef Nachos",
                Price: 34450,
                Description: "Crispy tortilla chips topped with special ground beef and drizzled with creamy mayonnaise sauce.",
                ImageUrl: "/menu2/54.png",
            },
            {
                Name: "Chicken Wings Original",
                Price: 33150,
                Description: "Three pieces of classic fried chicken wings, split into six, crispy and flavorful.",
                ImageUrl: "/menu2/47.png",
            },
            {
                Name: "Chicken Wings BBQ",
                Price: 35750,
                Description: "Three pieces of chicken wings, split into six, coated in rich BBQ sauce.",
                ImageUrl: "/menu2/49.png",
            },
            {
                Name: "Chicken Wings Crispy",
                Price: 37050,
                Description: "Three pieces of chicken wings, split into six, fried to crispy perfection.",
                ImageUrl: "/menu2/48.png",
            },
            {
                Name: "Chicken Wings Spicy BBQ",
                Price: 37050,
                Description: "Three pieces of crispy chicken wings, split into six, tossed in a spicy BBQ sauce.",
                ImageUrl: "/menu2/50.png",
            },
            {
                Name: "Crispy Mushroom",
                Price: 24700,
                Description: "Crispy-coated mushrooms with a crunchy bite and delicious seasoning.",
                ImageUrl: "/menu2/55.png",
            }
        ]
    },
    {
        CategoryName: "Beverages",
        MenuList: [
            {
                Name: "Teh Tawar",
                Price: 9375,
                Description: "Refreshing plain tea with a natural taste, served hot or cold.",
                ImageUrl: "/menu2/61.png",
            },
            {
                Name: "Air Mineral",
                Price: 9375,
                Description: "Pure and refreshing mineral water to keep you hydrated.",
                ImageUrl: "/menu2/86.png",
            },
            {
                Name: "Sweet Ice Tea",
                Price: 13125,
                Description: "Classic sweet iced tea, a perfect thirst quencher.",
                ImageUrl: "/menu2/61.png",
            },
            {
                Name: "Blackcurrant Tea",
                Price: 18750,
                Description: "Delicious blackcurrant-infused tea with a fruity aroma.",
                ImageUrl: "/menu2/63.png",
            },
            {
                Name: "Lychee Tea",
                Price: 18750,
                Description: "Refreshing tea infused with the sweet and floral taste of lychee.",
                ImageUrl: "/menu2/62.png",
            },
            {
                Name: "Peach Tea",
                Price: 18750,
                Description: "Aromatic peach-flavored tea, a perfect blend of sweet and tangy.",
                ImageUrl: "/menu2/64.png",
            },
            {
                Name: "Lemon Tea",
                Price: 18750,
                Description: "Classic tea with a zesty lemon twist, served iced or hot.",
                ImageUrl: "/menu2/65.png",
            },
            {
                Name: "Root Beer",
                Price: 18750,
                Description: "Classic root beer with a bold and creamy taste.",
                ImageUrl: "/menu2/69.png",
            },
            {
                Name: "Teh Tarik",
                Price: 18750,
                Description: "Smooth and creamy pulled tea with a rich flavor.",
                ImageUrl: "/menu2/77.png",
            },
            {
                Name: "Ice Milo",
                Price: 18750,
                Description: "Chilled Milo chocolate malt drink, a nostalgic favorite.",
                ImageUrl: "/menu2/60.png",
            },
            {
                Name: "Ice Cappuccino",
                Price: 30000,
                Description: "Chilled cappuccino with a smooth coffee flavor.",
                ImageUrl: "/menu2/80.png",
            },
            {
                Name: "Virgin Mojito",
                Price: 30000,
                Description: "Refreshing blend of lime, mint, and soda for a zesty kick.",
                ImageUrl: "/menu2/75.png",
            },
            {
                Name: "Iced Chocolate Mint",
                Price: 28125,
                Description: "Smooth iced chocolate infused with a cool minty flavor.",
                ImageUrl: "/menu2/84.png",
            },
            {
                Name: "Greentea Vanilla Latte",
                Price: 26250,
                Description: "Premium green tea blended with creamer and fresh milk, with a hint of vanilla.",
                ImageUrl: "/menu2/57.png",
            },
            {
                Name: "Ice Sky Latte",
                Price: 26250,
                Description: "Smooth and creamy latte with a unique sky-blue twist.",
                ImageUrl: "/menu2/81.png",
            },
            {
                Name: "Kopi Susu Aren Rajawali",
                Price: 26250,
                Description: "Rich and creamy coffee with natural palm sugar sweetness.",
                ImageUrl: "/menu2/85.png",
            },
            {
                Name: "Purple Taro",
                Price: 26250,
                Description: "Premium taro blend with creamer and fresh milk for a smooth, sweet taste.",
                ImageUrl: "/menu2/58.png",
            },
            {
                Name: "Sweet Strawberry",
                Price: 23750,
                Description: "Refreshing strawberry drink with a naturally sweet flavor.",
                ImageUrl: "/menu2/82.png",
            },
            {
                Name: "Red Velvet",
                Price: 23750,
                Description: "Premium red velvet drink blended with creamer and fresh milk.",
                ImageUrl: "/menu2/59.png",
            },
            {
                Name: "Choco Oreo Crumb",
                Price: 31875,
                Description: "Delicious chocolate drink with fresh milk and crushed Oreo cookies.",
                ImageUrl: "/menu2/83.png",
            },
            {
                Name: "Ice Tiramisu",
                Price: 29375,
                Description: "Smooth and creamy tiramisu-flavored iced drink.",
                ImageUrl: "/menu2/81.png",
            },
            {
                Name: "Mochachino",
                Price: 33125,
                Description: "Rich mocha cappuccino blend with a bold coffee and chocolate taste.",
                ImageUrl: "/menu2/80.png",
            },
            {
                Name: "Royal Choco Signature",
                Price: 26250,
                Description: "Premium chocolate drink blended with fresh milk for a rich taste.",
                ImageUrl: "/menu2/73.png",
            },
            {
                Name: "Royal Choco Caramel",
                Price: 33125,
                Description: "Luxurious chocolate drink infused with sweet caramel.",
                ImageUrl: "/menu2/76.png",
            },
            {
                Name: "Royal Choco Hazelnut",
                Price: 33125,
                Description: "Smooth chocolate drink enhanced with the nutty taste of hazelnut.",
                ImageUrl: "/menu2/73.png",
            },
            {
                Name: "Sky Caramel Latte",
                Price: 33125,
                Description: "Espresso blended with caramel syrup and fresh milk for a smooth finish.",
                ImageUrl: "/menu2/79.png",
            },
            {
                Name: "Sky Hazelnut Latte",
                Price: 33125,
                Description: "Espresso with a rich hazelnut syrup twist, served with fresh milk.",
                ImageUrl: "/menu2/78.png",
            },
            {
                Name: "Vanilla Cookies",
                Price: 33125,
                Description: "Smooth vanilla-flavored drink with a hint of cookie sweetness.",
                ImageUrl: "/menu2/56.png",
            },
            {
                Name: "Guava Juice",
                Price: 26000,
                Description: "Freshly blended guava juice, packed with natural sweetness and vitamins.",
                ImageUrl: "/menu2/71.png",
            },
            {
                Name: "Mango Juice",
                Price: 26000,
                Description: "Smooth and tropical mango juice, naturally sweet and refreshing.",
                ImageUrl: "/menu2/70.png",
            },
            {
                Name: "Orange Juice",
                Price: 26000,
                Description: "Freshly squeezed orange juice with a vibrant citrus flavor.",
                ImageUrl: "/menu2/72.png",
            }
        ]
    }
]

export const gradients = [
    "conic-gradient(from 0deg at 50% 50%, #a766ff, #7abfff, #4ff0e6,rgb(234, 114, 118), #a766ff)",
    "conic-gradient(from 40deg at 50% 50%, #a766ff, #7abfff, #4ff0e6, rgb(234, 114, 118), #a766ff)",
    "conic-gradient(from 80deg at 50% 50%, #a766ff, #7abfff, #4ff0e6, rgb(234, 114, 118), #a766ff)",
    "conic-gradient(from 120deg at 50% 50%, #a766ff, #7abfff, #4ff0e6, rgb(234, 114, 118), #a766ff)",
    "conic-gradient(from 160deg at 50% 50%, #a766ff, #7abfff, #4ff0e6, rgb(234, 114, 118), #a766ff)",
    "conic-gradient(from 200deg at 50% 50%, #a766ff, #7abfff, #4ff0e6, rgb(234, 114, 118), #a766ff)",
    "conic-gradient(from 240deg at 50% 50%, #a766ff, #7abfff, #4ff0e6, rgb(234, 114, 118), #a766ff)",
    "conic-gradient(from 300deg at 50% 50%, #a766ff, #7abfff, #4ff0e6, rgb(234, 114, 118), #a766ff)",
    "conic-gradient(from 360deg at 50% 50%, #a766ff, #7abfff, #4ff0e6, rgb(234, 114, 118), #a766ff)",
]

export const gradients2 = [
    "conic-gradient(from 0deg at 50% 50%, #8a2be2, #5dade2, #48d1cc, rgb(234, 114, 118), #8a2be2)",
    "conic-gradient(from 40deg at 50% 50%, #8a2be2, #5dade2, #48d1cc, rgb(234, 114, 118), #8a2be2)",
    "conic-gradient(from 80deg at 50% 50%, #8a2be2, #5dade2, #48d1cc, rgb(234, 114, 118), #8a2be2)",
    "conic-gradient(from 120deg at 50% 50%, #8a2be2, #5dade2, #48d1cc, rgb(234, 114, 118), #8a2be2)",
    "conic-gradient(from 160deg at 50% 50%, #8a2be2, #5dade2, #48d1cc, rgb(234, 114, 118), #8a2be2)",
    "conic-gradient(from 200deg at 50% 50%, #8a2be2, #5dade2, #48d1cc, rgb(234, 114, 118), #8a2be2)",
    "conic-gradient(from 240deg at 50% 50%, #8a2be2, #5dade2, #48d1cc, rgb(234, 114, 118), #8a2be2)",
    "conic-gradient(from 300deg at 50% 50%, #8a2be2, #5dade2, #48d1cc, rgb(234, 114, 118), #8a2be2)",
    "conic-gradient(from 360deg at 50% 50%, #8a2be2, #5dade2, #48d1cc, rgb(234, 114, 118), #8a2be2)",
]

export const cards = [
    {
        id: 1,
        title: 'Vision',
        imageUrl: '/visi-card.png',
        bg: '/vision.png',
        description: "Sky Pasta is here to serve the ultimate pasta fusion experience with high-quality taste, affordable, and perfect for your mood-boosting craving moments, supporting your modern lifestyle."
    },
    {
        id: 2,
        title: 'History',
        imageUrl: '/history-card.png',
        bg: 'history-bg-2.jpeg',
        // bg2: 'sejarah2-bg.jpg',
        description: "Sky Pasta was born from a small dream in a humble kitchen back in 2016 — driven only by the belief that food can be a language of love and a bridge between people. We began this journey with so many limitations: a small team, basic equipment, and just a handful of customers. But from that, we learned one important truth — that sincerity in serving flavor never lies.",
        // description2: (
        //     <>
        //         Di 2025 Sky Pasta telah sukses mengembangkan 7 cabang outlet yaitu: <strong>Pamulang, Cinere, Ciledug, Petukangan, Binus Jakbar, Tebet, dan Bekasi.</strong>
        //     </>
        // ),
    },
    {
        id: 3,
        title: 'The Team',
        imageUrl: '/team-card.png',
        bg: '/team-bg.jpg',
        description: ''
    },
    {
        id: 4,
        title: 'Honours',
        imageUrl: '/award-card.png',
        bg: '/prestasi-bg.jpg',
        description: (
            <>
                <strong>Agus Setiawan</strong> - Barista Sky Pasta yang berhasil meraih Juara 3 kompetisi JCC (Jakarta Coffee Championship)- Kota Kasablanka 8 September 2024.
            </>
        )
    },
    {
        id: 5,
        title: 'Events',
        imageUrl: '/event-card.png',
        bg: 'event-bg.jpg',
        bg2: 'event2-bg.jpg',
        description: "Berikut merupakan beberapa event yang telah diselenggarakan oleh Sky Pasta.",
        description2: (<></>),
    },
    {
        id: 6,
        title: 'Reviews',
        imageUrl: '/testi-card.png',
        bg: '/testi-bg.png',
        bg2: '/testi2-bg.jpg',
        description: (
            <>
                <strong>Rika Agustina on Google</strong> - Kesan pertama langsung dibuat nyaman, pelayanannya ramah banget..
            </>
        ),
        description2: (
            <>
                <strong>Kaarpuut on Tiktok</strong> - Semua menu di Sky Pasta tidak ada yang mengecewakan. Rasa? Enak. Harga? Affordable. Tempat? Super duper nyaman. Pelayanan? Bintang 100 seluruh staff ramah.
            </>
        )
    },
]