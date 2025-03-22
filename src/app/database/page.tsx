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

export const menuCategory: Array<MenuCategoryCard> = [
    {
        CategoryName: "Creamy Sauced Pasta",
        MenuList: [
            {
                Name: "Fettuccine Carbonara",
                Price: 34450,
                Description: "Smooth fettuccine pasta coated in a rich and creamy carbonara sauce, topped with savory smoked beef and cheese for an irresistible flavor.",
                ImageUrl: "/menu/sky1.png"
            },
            {
                Name: "Penne Creamy Mushroom",
                Price: 33150,
                Description: "Tender penne pasta enveloped in a luscious creamy sauce, combined with champignon mushrooms and cheese for a delightful, earthy taste.",
                ImageUrl: "/menu/sky1.png"
            },
            {
                Name: "Mac N Cheese",
                Price: 33800,
                Description: "Classic macaroni pasta smothered in a rich, velvety cheese sauce, topped with grated cheese for an extra cheesy and comforting bite.",
                ImageUrl: "/menu/sky1.png"
            },
            {
                Name: "Fettuccine Creamy Chicken",
                Price: 35100,
                Description: "Silky fettuccine pasta in a creamy sauce, paired with juicy chicken fillet and melted cheese for a satisfying and flavorful experience.",
                ImageUrl: "/menu/sky1.png"
            },
            {
                Name: "Fettuccine Alfredo",
                Price: 37050,
                Description: "A timeless Alfredo dish featuring fettuccine pasta tossed in a creamy, buttery sauce with tender chicken fillet, fresh spinach, and cheese.",
                ImageUrl: "/menu/sky1.png"
            },
            {
                Name: "Penne Carbonara Sweet Corn",
                Price: 37050,
                Description: "A twist on the classic carbonara with penne pasta, creamy sauce, smoked beef, and sweet corn, adding a touch of sweetness to the rich flavors.",
                ImageUrl: "/menu/sky1.png"
            },
            {
                Name: "Fettuccine Spicy Creamy Chicken",
                Price: 35100,
                Description: "Fettuccine pasta in a creamy yet spicy sauce, complemented by tender chicken fillet, fresh chili, and cheese for a bold and indulgent taste.",
                ImageUrl: "/menu/sky1.png"
            },
            {
                Name: "Fettuccine Spicy Carbonara",
                Price: 35750,
                Description: "A fiery take on carbonara, featuring fettuccine pasta in a creamy, spicy sauce with smoked beef, fresh chili, and cheese for a flavorful kick.",
                ImageUrl: "/menu/sky1.png"
            },
            {
                Name: "Fusilli Spicy Tuna Cream",
                Price: 51350,
                Description: "Spiral fusilli pasta coated in a spicy, creamy sauce, mixed with tender tuna chunks, fresh chili, and melted cheese for a perfect balance of heat and richness.",
                ImageUrl: "/menu/sky1.png"
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
                ImageUrl: "AAAAAAAAAAA"
            },
            {
                Name: "Spaghetti Aglio e Olio Smoked Beef",
                Price: 35750,
                Description: "Delightfully simple spaghetti aglio e olio, featuring smoky, savory smoked beef, infused oil, garlic, chili, parsley, and cheese for a rich and aromatic experience.",
                ImageUrl: "AAAAAAAAAAA"
            },
            {
                Name: "Spaghetti Aglio e Olio Tuna",
                Price: 38350,
                Description: "A flavorful twist on aglio e olio with tender tuna chunks, garlic, chili, parsley, and cheese. A light yet satisfying dish with an authentic local touch.",
                ImageUrl: "AAAAAAAAAAA"
            },
            {
                Name: "Spaghetti Chilli Con Carne",
                Price: 37050,
                Description: "Spaghetti tossed with hearty ground beef, chili flakes, and cheese, creating a bold and flavorful dish with a hint of local spice.",
                ImageUrl: "AAAAAAAAAAA"
            },
            {
                Name: "Spaghetti BBQ Bolognese",
                Price: 37050,
                Description: "A smoky BBQ-inspired take on classic Bolognese, featuring ground beef, carrots, onions, and a rich BBQ sauce, topped with cheese for extra indulgence.",
                ImageUrl: "AAAAAAAAAAA"
            },
            {
                Name: "Fusilli Spicy Tuna",
                Price: 43550,
                Description: "Twisted fusilli pasta mixed with tender tuna chunks, garlic, chili, parsley, and cheese. A spicy and savory delight with an authentic touch.",
                ImageUrl: "AAAAAAAAAAA"
            },
            {
                Name: "Spaghetti Aglio Chili Oil",
                Price: 54375,
                Description: "A fusion of aglio e olio and chili oil, featuring spaghetti tossed with succulent chicken thigh, mushrooms, butter, parmesan cheese, homemade chili oil, and fresh parsley.",
                ImageUrl: "AAAAAAAAAAA"
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
                ImageUrl: "AAAAAAAAAAA"
            },
            {
                Name: "Fettuccine Special Premium Creamy Chicken Crispy Mushroom",
                Price: 51000,
                Description: "Creamy fettuccine pasta served with crispy golden chicken, torched mozzarella, and flavorful mushrooms. A premium dish with extra portions to satisfy your cravings.",
                ImageUrl: "AAAAAAAAAAA"
            },
            {
                Name: "Spaghetti Special Premium BBQ Bolognese",
                Price: 51000,
                Description: "Classic spaghetti with a smoky BBQ-infused Bolognese sauce, loaded with ground beef, torched mozzarella, and mushrooms. A hearty and premium delight.",
                ImageUrl: "AAAAAAAAAAA"
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
                ImageUrl: "AAAAAAAAAAA"
            },
            {
                Name: "Authentic Beef Blackpepper Rice",
                Price: 46150,
                Description: "Savor tender beef slices with carrots and oyster mushrooms, served over fluffy rice and coated in rich, savory black pepper sauce.",
                ImageUrl: "AAAAAAAAAAA"
            },
            {
                Name: "Spicy Blackpepper Beef",
                Price: 48750,
                Description: "A bold and fiery dish featuring juicy beef slices, oyster mushrooms, and a tantalizingly spicy black pepper sauce over steamed rice.",
                ImageUrl: "AAAAAAAAAAA"
            },
            {
                Name: "Classic Lasagna",
                Price: 58500,
                Description: "Layers of rich meat sauce, creamy béchamel, and melted cheese, all baked to perfection for a comforting Italian classic.",
                ImageUrl: "AAAAAAAAAAA"
            },
            {
                Name: "Australian Beef Saikoro",
                Price: 67000,
                Description: "Premium Australian diced beef, pan-seared to perfection and served with rice and a luscious mushroom sauce.",
                ImageUrl: "AAAAAAAAAAA"
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
                ImageUrl: "AAAAAAAAAAA"
            },
            {
                Name: "Pizza Chicken Lovers",
                Price: 88725,
                Description: "A delicious combination of tomato sauce, tender chicken, sausages, and gooey mozzarella for true chicken lovers.",
                ImageUrl: "AAAAAAAAAAA"
            },
            {
                Name: "Pizza Cheezy Melt",
                Price: 88725,
                Description: "For cheese lovers! Indulge in a rich mix of tomato sauce, cheddar, and melted mozzarella for an irresistible cheesy experience.",
                ImageUrl: "AAAAAAAAAAA"
            },
            {
                Name: "Pizza Pepperoni",
                Price: 88725,
                Description: "A classic favorite with tangy tomato sauce, savory pepperoni, and perfectly melted mozzarella cheese on a crispy crust.",
                ImageUrl: "AAAAAAAAAAA"
            },
            {
                Name: "Pizza Ultimate Meat Lovers",
                Price: 102500,
                Description: "A feast for meat lovers! Packed with pepperoni, smoked beef, sausage, and melted cheese over a rich tomato base.",
                ImageUrl: "AAAAAAAAAAA"
            },
            {
                Name: "Pizza Tortila Prime Cheese",
                Price: 109000,
                Description: "A gourmet delight with a thin, crispy tortilla crust, layered with premium cheese blends for an indulgent cheesy treat.",
                ImageUrl: "AAAAAAAAAAA"
            }
        ]
    },
    {
        CategoryName: "Crispy Chicken with Rice",
        MenuList: [
            {
                Name: "Fettuchini",
                Price: 54375,
                Description: "asdasdasd",
                ImageUrl: "AAAAAAAAAAA"
            },
        ]
    },
    {
        CategoryName: "Snacks",
        MenuList: [
            {
                Name: "Fettuchini",
                Price: 54375,
                Description: "asdasdasd",
                ImageUrl: "AAAAAAAAAAA"
            },
        ]
    },
    {
        CategoryName: "Beverages",
        MenuList: [
            {
                Name: "Fettuchini",
                Price: 54375,
                Description: "asdasdasd",
                ImageUrl: "AAAAAAAAAAA"
            },
        ]
    },
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