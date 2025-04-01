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

export const recommendedImages: Array<string> = [
    "testi-bg.PNG",
    "testi2-bg.jpg",
    "changing1.jpg",
    "changing2.jpg",
    "changing3.jpg",
    "changing4.jpg",
    "changing5.jpg",
    "changing6.jpg",
    "changing7.jpeg",
    "changing8.png",
];

export const outlets: Array<Outlet> = [
    { name: "Sky Pasta - Bekasi", onlineFoodUrl: [{ merchantName: "GoFood", merchantUrl: "https://gofood.co.id/jakarta/restaurant/sky-pasta-taman-galaxy-bekasi-c4b7588e-a2e5-4fae-bd07-3a99c66edf22" }, { merchantName: "GrabFood", merchantUrl: "grabfoodUrl" }, { merchantName: "ShopeeFood", merchantUrl: "shopeefoodUrl" }] },
    { name: "Sky Pasta - Binus Jakbar", onlineFoodUrl: [{ merchantName: "GoFood", merchantUrl: "gofoodUrl" }, { merchantName: "GrabFood", merchantUrl: "grabfoodUrl" }, { merchantName: "ShopeeFood", merchantUrl: "shopeefoodUrl" }] },
    { name: "Sky Pasta - Ciledug", onlineFoodUrl: [{ merchantName: "GoFood", merchantUrl: "gofoodUrl" }, { merchantName: "GrabFood", merchantUrl: "grabfoodUrl" }, { merchantName: "ShopeeFood", merchantUrl: "shopeefoodUrl" }] },
    { name: "Sky Pasta - Cinere", onlineFoodUrl: [{ merchantName: "GoFood", merchantUrl: "gofoodUrl" }, { merchantName: "GrabFood", merchantUrl: "grabfoodUrl" }, { merchantName: "ShopeeFood", merchantUrl: "shopeefoodUrl" }] },
    { name: "Sky Pasta - Pamulang", onlineFoodUrl: [{ merchantName: "GoFood", merchantUrl: "gofoodUrl" }, { merchantName: "GrabFood", merchantUrl: "grabfoodUrl" }, { merchantName: "ShopeeFood", merchantUrl: "shopeefoodUrl" }] },
    { name: "Sky Pasta - Petukangan", onlineFoodUrl: [{ merchantName: "GoFood", merchantUrl: "gofoodUrl" }, { merchantName: "GrabFood", merchantUrl: "grabfoodUrl" }, { merchantName: "ShopeeFood", merchantUrl: "shopeefoodUrl" }] },
    { name: "Sky Pasta - Tebet", onlineFoodUrl: [{ merchantName: "GoFood", merchantUrl: "gofoodUrl" }, { merchantName: "GrabFood", merchantUrl: "grabfoodUrl" }, { merchantName: "ShopeeFood", merchantUrl: "shopeefoodUrl" }] },
    { name: "Big Order", onlineFoodUrl: [] },
];

export const menuCategory: Array<MenuCategoryCard> = [
    {
        CategoryName: "Creamy Sauced Pasta",
        MenuList: [
            {
                Name: "Fettuccine Carbonara",
                Price: 34450,
                Description: "Smooth fettuccine pasta coated in a rich and creamy carbonara sauce, topped with savory smoked beef and cheese for an irresistible flavor.",
                ImageUrl: "/menu/Fettuccine Carbonara.jpg",
            },
            {
                Name: "Penne Creamy Mushroom",
                Price: 33150,
                Description: "Tender penne pasta enveloped in a luscious creamy sauce, combined with champignon mushrooms and cheese for a delightful, earthy taste.",
                ImageUrl: "/menu/Penne Creamy Mushroom.jpg",
            },
            {
                Name: "Mac N Cheese",
                Price: 33800,
                Description: "Classic macaroni pasta smothered in a rich, velvety cheese sauce, topped with grated cheese for an extra cheesy and comforting bite.",
                ImageUrl: "/menu/Mac N Cheese.jpg",
            },
            {
                Name: "Fettuccine Creamy Chicken",
                Price: 35100,
                Description: "Silky fettuccine pasta in a creamy sauce, paired with juicy chicken fillet and melted cheese for a satisfying and flavorful experience.",
                ImageUrl: "/menu/Fettuccine Creamy Chicken.jpg",
            },
            {
                Name: "Fettuccine Alfredo",
                Price: 37050,
                Description: "A timeless Alfredo dish featuring fettuccine pasta tossed in a creamy, buttery sauce with tender chicken fillet, fresh spinach, and cheese.",
                ImageUrl: "/menu/Fettuccine Alfredo.jpg",
            },
            {
                Name: "Penne Carbonara Sweet Corn",
                Price: 37050,
                Description: "A twist on the classic carbonara with penne pasta, creamy sauce, smoked beef, and sweet corn, adding a touch of sweetness to the rich flavors.",
                ImageUrl: "/menu/Penne Carbonara Sweet Corn.jpg",
            },
            {
                Name: "Fettuccine Spicy Creamy Chicken",
                Price: 35100,
                Description: "Fettuccine pasta in a creamy yet spicy sauce, complemented by tender chicken fillet, fresh chili, and cheese for a bold and indulgent taste.",
                ImageUrl: "/menu/Fettuccine Spicy Creamy Chicken.jpg",
            },
            {
                Name: "Fettuccine Spicy Carbonara",
                Price: 35750,
                Description: "A fiery take on carbonara, featuring fettuccine pasta in a creamy, spicy sauce with smoked beef, fresh chili, and cheese for a flavorful kick.",
                ImageUrl: "/menu/Fettuccine Spicy Carbonara.jpg",
            },
            {
                Name: "Fusilli Spicy Tuna Cream",
                Price: 51350,
                Description: "Spiral fusilli pasta coated in a spicy, creamy sauce, mixed with tender tuna chunks, fresh chili, and melted cheese for a perfect balance of heat and richness.",
                ImageUrl: "/menu/Fusilli Spicy Tuna Cream.jpg",
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
                ImageUrl: "/menu/Spaghetti Aglio e Olio Chicken.jpg",
            },
            {
                Name: "Spaghetti Aglio e Olio Smoked Beef",
                Price: 35750,
                Description: "Delightfully simple spaghetti aglio e olio, featuring smoky, savory smoked beef, infused oil, garlic, chili, parsley, and cheese for a rich and aromatic experience.",
                ImageUrl: "/menu/Spaghetti Aglio e Olio Smoked Beef.jpg",
            },
            {
                Name: "Spaghetti Aglio e Olio Tuna",
                Price: 38350,
                Description: "A flavorful twist on aglio e olio with tender tuna chunks, garlic, chili, parsley, and cheese. A light yet satisfying dish with an authentic local touch.",
                ImageUrl: "/menu/Spaghetti Aglio e Olio Tuna.jpg",
            },
            {
                Name: "Spaghetti Chilli Con Carne",
                Price: 37050,
                Description: "Spaghetti tossed with hearty ground beef, chili flakes, and cheese, creating a bold and flavorful dish with a hint of local spice.",
                ImageUrl: "/menu/Spaghetti Chilli Con Carne.jpg",
            },
            {
                Name: "Spaghetti BBQ Bolognese",
                Price: 37050,
                Description: "A smoky BBQ-inspired take on classic Bolognese, featuring ground beef, carrots, onions, and a rich BBQ sauce, topped with cheese for extra indulgence.",
                ImageUrl: "/menu/Spaghetti BBQ Bolognese.jpg",
            },
            {
                Name: "Fusilli Spicy Tuna",
                Price: 43550,
                Description: "Twisted fusilli pasta mixed with tender tuna chunks, garlic, chili, parsley, and cheese. A spicy and savory delight with an authentic touch.",
                ImageUrl: "/menu/Fusilli Spicy Tuna.jpg",
            },
            {
                Name: "Spaghetti Aglio Chili Oil",
                Price: 54375,
                Description: "A fusion of aglio e olio and chili oil, featuring spaghetti tossed with succulent chicken thigh, mushrooms, butter, parmesan cheese, homemade chili oil, and fresh parsley.",
                ImageUrl: "/menu/Spaghetti Aglio Chili Oil.jpg",
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
                ImageUrl: "/menu/Fettuccine Special Premium Creamy Smoked Beef.jpg",
            },
            {
                Name: "Fettuccine Special Premium Creamy Chicken Crispy Mushroom",
                Price: 51000,
                Description: "Creamy fettuccine pasta served with crispy golden chicken, torched mozzarella, and flavorful mushrooms. A premium dish with extra portions to satisfy your cravings.",
                ImageUrl: "/menu/Fettuccine Special Premium Creamy Chicken Crispy Mushroom.jpg",
            },
            {
                Name: "Spaghetti Special Premium BBQ Bolognese",
                Price: 51000,
                Description: "Classic spaghetti with a smoky BBQ-infused Bolognese sauce, loaded with ground beef, torched mozzarella, and mushrooms. A hearty and premium delight.",
                ImageUrl: "/menu/Spaghetti Special Premium BBQ Bolognese.jpg",
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
                ImageUrl: "/menu/Italian Classic Fried Rice.jpg",
            },
            {
                Name: "Authentic Beef Blackpepper Rice",
                Price: 46150,
                Description: "Savor tender beef slices with carrots and oyster mushrooms, served over fluffy rice and coated in rich, savory black pepper sauce.",
                ImageUrl: "/menu/Authentic Beef Blackpepper Rice.jpg",
            },
            {
                Name: "Spicy Blackpepper Beef",
                Price: 48750,
                Description: "A bold and fiery dish featuring juicy beef slices, oyster mushrooms, and a tantalizingly spicy black pepper sauce over steamed rice.",
                ImageUrl: "/menu/Spicy Blackpepper Beef.jpg",
            },
            {
                Name: "Classic Lasagna",
                Price: 58500,
                Description: "Layers of rich meat sauce, creamy béchamel, and melted cheese, all baked to perfection for a comforting Italian classic.",
                ImageUrl: "/menu/Classic Lasagna.jpg",
            },
            {
                Name: "Australian Beef Saikoro",
                Price: 67000,
                Description: "Premium Australian diced beef, pan-seared to perfection and served with rice and a luscious mushroom sauce.",
                ImageUrl: "/menu/Australian Beef Saikoro.jpg",
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
                ImageUrl: "/menu/Pizza Full Lovers.jpg",
            },
            {
                Name: "Pizza Chicken Lovers",
                Price: 88725,
                Description: "A delicious combination of tomato sauce, tender chicken, sausages, and gooey mozzarella for true chicken lovers.",
                ImageUrl: "/menu/Pizza Chicken Lovers.jpg",
            },
            {
                Name: "Pizza Cheezy Melt",
                Price: 88725,
                Description: "For cheese lovers! Indulge in a rich mix of tomato sauce, cheddar, and melted mozzarella for an irresistible cheesy experience.",
                ImageUrl: "/menu/Pizza Cheezy Melt.jpg",
            },
            {
                Name: "Pizza Pepperoni",
                Price: 88725,
                Description: "A classic favorite with tangy tomato sauce, savory pepperoni, and perfectly melted mozzarella cheese on a crispy crust.",
                ImageUrl: "/menu/Pizza Pepperoni.jpg",
            },
            {
                Name: "Pizza Ultimate Meat Lovers",
                Price: 102500,
                Description: "A feast for meat lovers! Packed with pepperoni, smoked beef, sausage, and melted cheese over a rich tomato base.",
                ImageUrl: "/menu/Pizza Ultimate Meat Lovers.jpg",
            },
            {
                Name: "Pizza Tortila Prime Cheese",
                Price: 109000,
                Description: "A gourmet delight with a thin, crispy tortilla crust, layered with premium cheese blends for an indulgent cheesy treat.",
                ImageUrl: "/menu/Pizza Tortila Prime Cheese.jpg",
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
                ImageUrl: "/menu/Chicken Crispy Sauce With Rice.jpg",
            },
            {
                Name: "Chicken Crispy Sauce With French Fries",
                Price: 43550,
                Description: "Golden crispy chicken fillet topped with special sauce, paired with crispy French fries for a perfect crunch.",
                ImageUrl: "/menu/Chicken Crispy Sauce With French Fries.jpg",
            },
            {
                Name: "Tomato Grilled Chicken",
                Price: 48750,
                Description: "Tender grilled chicken infused with smoky flavors, topped with a rich marinara cream sauce for a delightful Italian-inspired taste.",
                ImageUrl: "/menu/Tomato Grilled Chicken.jpg",
            },
            {
                Name: "Chicken Cordon Bleu With Fries",
                Price: 51350,
                Description: "Juicy chicken breast stuffed with smoked beef and Swiss cheese, served with crispy fries and a velvety mushroom cream sauce.",
                ImageUrl: "/menu/Chicken Cordon Bleu With Fries.jpg",
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
                ImageUrl: "/menu/Otak - Otak.jpg",
            },
            {
                Name: "Beef Sausage",
                Price: 24100,
                Description: "Juicy and flavorful beef sausage, grilled or fried to perfection.",
                ImageUrl: "/menu/Beef Sausage.jpg",
            },
            {
                Name: "French Fries Original",
                Price: 20800,
                Description: "Classic golden fries with a crispy outside and fluffy inside.",
                ImageUrl: "/menu/French Fries Original.jpg",
            },
            {
                Name: "French Fries BBQ",
                Price: 22100,
                Description: "Crispy fries coated with smoky BBQ seasoning and served with BBQ sauce.",
                ImageUrl: "/menu/French Fries BBQ.jpg",
            },
            {
                Name: "French Fries Cheese",
                Price: 22750,
                Description: "Golden fries topped with a generous sprinkle of cheesy goodness.",
                ImageUrl: "/menu/French Fries Cheese.jpg",
            },
            {
                Name: "Cireng Bumbu Rujak",
                Price: 22750,
                Description: "Crispy fried tapioca snacks served with a sweet and spicy rujak sauce.",
                ImageUrl: "/menu/Cireng Bumbu Rujak.jpg",
            },
            {
                Name: "Beef Nachos",
                Price: 34450,
                Description: "Crispy tortilla chips topped with special ground beef and drizzled with creamy mayonnaise sauce.",
                ImageUrl: "/menu/Beef Nachos.jpg",
            },
            {
                Name: "Chicken Wings Original",
                Price: 33150,
                Description: "Three pieces of classic fried chicken wings, split into six, crispy and flavorful.",
                ImageUrl: "/menu/Chicken Wings Original.jpg",
            },
            {
                Name: "Chicken Wings BBQ",
                Price: 35750,
                Description: "Three pieces of chicken wings, split into six, coated in rich BBQ sauce.",
                ImageUrl: "/menu/Chicken Wings BBQ.jpg",
            },
            {
                Name: "Chicken Wings Crispy",
                Price: 37050,
                Description: "Three pieces of chicken wings, split into six, fried to crispy perfection.",
                ImageUrl: "/menu/Chicken Wings Crispy.jpg",
            },
            {
                Name: "Chicken Wings Spicy BBQ",
                Price: 37050,
                Description: "Three pieces of crispy chicken wings, split into six, tossed in a spicy BBQ sauce.",
                ImageUrl: "/menu/Chicken Wings Spicy BBQ.jpg",
            },
            {
                Name: "Crispy Mushroom",
                Price: 24700,
                Description: "Crispy-coated mushrooms with a crunchy bite and delicious seasoning.",
                ImageUrl: "/menu/Crispy Mushroom.jpg",
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
                ImageUrl: "/menu/Teh Tawar.jpg",
            },
            {
                Name: "Air Mineral",
                Price: 9375,
                Description: "Pure and refreshing mineral water to keep you hydrated.",
                ImageUrl: "/menu/Air Mineral.jpg",
            },
            {
                Name: "Sweet Ice Tea",
                Price: 13125,
                Description: "Classic sweet iced tea, a perfect thirst quencher.",
                ImageUrl: "/menu/Teh Tawar.jpg",
            },
            {
                Name: "Blackcurrant Tea",
                Price: 18750,
                Description: "Delicious blackcurrant-infused tea with a fruity aroma.",
                ImageUrl: "/menu/Blackcurrant Tea.jpg",
            },
            {
                Name: "Lychee Tea",
                Price: 18750,
                Description: "Refreshing tea infused with the sweet and floral taste of lychee.",
                ImageUrl: "/menu/Lychee Tea.jpg",
            },
            {
                Name: "Peach Tea",
                Price: 18750,
                Description: "Aromatic peach-flavored tea, a perfect blend of sweet and tangy.",
                ImageUrl: "/menu/Blackcurrant Tea.jpg",
            },
            {
                Name: "Lemon Tea",
                Price: 18750,
                Description: "Classic tea with a zesty lemon twist, served iced or hot.",
                ImageUrl: "/menu/Lemon Tea.jpg",
            },
            {
                Name: "Root Beer",
                Price: 18750,
                Description: "Classic root beer with a bold and creamy taste.",
                ImageUrl: "/menu/Root Beer.jpg",
            },
            {
                Name: "Teh Tarik",
                Price: 18750,
                Description: "Smooth and creamy pulled tea with a rich flavor.",
                ImageUrl: "/menu/Teh Tarik.jpg",
            },
            {
                Name: "Ice Milo",
                Price: 18750,
                Description: "Chilled Milo chocolate malt drink, a nostalgic favorite.",
                ImageUrl: "/menu/Ice Milo.jpg",
            },
            {
                Name: "Ice Cappuccino",
                Price: 30000,
                Description: "Chilled cappuccino with a smooth coffee flavor.",
                ImageUrl: "/menu/Ice Cappuccino.jpg",
            },
            {
                Name: "Virgin Mojito",
                Price: 30000,
                Description: "Refreshing blend of lime, mint, and soda for a zesty kick.",
                ImageUrl: "/menu/Virgin Mojito1.jpg",
            },
            {
                Name: "Iced Chocolate Mint",
                Price: 28125,
                Description: "Smooth iced chocolate infused with a cool minty flavor.",
                ImageUrl: "/menu/Iced Chocolate Mint.jpg",
            },
            {
                Name: "Greentea Vanilla Latte",
                Price: 26250,
                Description: "Premium green tea blended with creamer and fresh milk, with a hint of vanilla.",
                ImageUrl: "/menu/Greentea Vanilla Latte.jpg",
            },
            {
                Name: "Ice Sky Latte",
                Price: 26250,
                Description: "Smooth and creamy latte with a unique sky-blue twist.",
                ImageUrl: "/menu/Ice Cappuccino.jpg",
            },
            {
                Name: "Kopi Susu Aren Rajawali",
                Price: 26250,
                Description: "Rich and creamy coffee with natural palm sugar sweetness.",
                ImageUrl: "/menu/Kopi Susu Aren Rajawali.jpg",
            },
            {
                Name: "Purple Taro",
                Price: 26250,
                Description: "Premium taro blend with creamer and fresh milk for a smooth, sweet taste.",
                ImageUrl: "/menu/Purple Taro.jpg",
            },
            {
                Name: "Sweet Strawberry",
                Price: 23750,
                Description: "Refreshing strawberry drink with a naturally sweet flavor.",
                ImageUrl: "/menu/Sweet Strawberry.jpg",
            },
            {
                Name: "Red Velvet",
                Price: 23750,
                Description: "Premium red velvet drink blended with creamer and fresh milk.",
                ImageUrl: "/menu/Red Velvet.jpg",
            },
            {
                Name: "Choco Oreo Crumb",
                Price: 31875,
                Description: "Delicious chocolate drink with fresh milk and crushed Oreo cookies.",
                ImageUrl: "/menu/Choco Oreo Crumb.jpg",
            },
            {
                Name: "Ice Tiramisu",
                Price: 29375,
                Description: "Smooth and creamy tiramisu-flavored iced drink.",
                ImageUrl: "/menu/Ice Tiramisu.jpg",
            },
            {
                Name: "Mochachino",
                Price: 33125,
                Description: "Rich mocha cappuccino blend with a bold coffee and chocolate taste.",
                ImageUrl: "/menu/Ice Cappuccino.jpg",
            },
            {
                Name: "Royal Choco Signature",
                Price: 26250,
                Description: "Premium chocolate drink blended with fresh milk for a rich taste.",
                ImageUrl: "/menu/Royal Choco Signature.jpg",
            },
            {
                Name: "Royal Choco Caramel",
                Price: 33125,
                Description: "Luxurious chocolate drink infused with sweet caramel.",
                ImageUrl: "/menu/Royal Choco Signature.jpg",
            },
            {
                Name: "Royal Choco Hazelnut",
                Price: 33125,
                Description: "Smooth chocolate drink enhanced with the nutty taste of hazelnut.",
                ImageUrl: "/menu/Royal Choco Hazelnut.jpg",
            },
            {
                Name: "Sky Caramel Latte",
                Price: 33125,
                Description: "Espresso blended with caramel syrup and fresh milk for a smooth finish.",
                ImageUrl: "/menu/Sky Caramel Latte.jpg",
            },
            {
                Name: "Sky Hazelnut Latte",
                Price: 33125,
                Description: "Espresso with a rich hazelnut syrup twist, served with fresh milk.",
                ImageUrl: "/menu/Sky Caramel Latte.jpg",
            },
            {
                Name: "Vanilla Cookies",
                Price: 33125,
                Description: "Smooth vanilla-flavored drink with a hint of cookie sweetness.",
                ImageUrl: "/menu/Vanilla Cookies.jpg",
            },
            {
                Name: "Guava Juice",
                Price: 26000,
                Description: "Freshly blended guava juice, packed with natural sweetness and vitamins.",
                ImageUrl: "/menu/Guava Juice.jpg",
            },
            {
                Name: "Mango Juice",
                Price: 26000,
                Description: "Smooth and tropical mango juice, naturally sweet and refreshing.",
                ImageUrl: "/menu/Mango Juice.jpg",
            },
            {
                Name: "Orange Juice",
                Price: 26000,
                Description: "Freshly squeezed orange juice with a vibrant citrus flavor.",
                ImageUrl: "/menu/Orange Juice.jpg",
            }
        ]
    }
];

export const cards = [
    {
        id: 1,
        title: 'Vision',
        imageUrl: '/visi-card.png',
        bg: '/visi-bg.jpg',
        description: "Membangun Sky Pasta menjadi brand kuliner lokal berskala internasional yang menyajikan makanan berkelas terbaik dengan harga yang terjangkau dan bisa dinikmati seluruh lapisan masyarakat di Indonesia demi pemenuhan gaya hidup."
    },
    {
        id: 2,
        title: 'History',
        imageUrl: '/history-card.png',
        bg: 'sejarah-bg.jpg',
        bg2: 'sejarah2-bg.jpg',
        description: "Brand Sky Pasta didirikan ketika melihat adanya peluang bisnis di bidang kuliner dengan mengusung konsep makan berkualitas dengan harga terjangkau.",
        description2: (
            <>
                Di 2025 Sky Pasta telah sukses mengembangkan 7 cabang outlet yaitu: <strong>Pamulang, Cinere, Ciledug, Petukangan, Binus Jakbar, Tebet, dan Bekasi.</strong>
            </>
        ),
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
];