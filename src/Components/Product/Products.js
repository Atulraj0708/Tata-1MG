import Product from "./Product";

import classes from "./Products.module.css";

const Products = () => {
    return (
        <div className = {classes.products}>
            <Product
                id = "1"
                image = "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/67982af8f8c2460faa7666d8707fea4e.jpg"
                rating = "4"
                description="Swisse Beauty"
                price = "1000"
            />

            <Product
                id = "2"
                image = "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/3ab53077d4c44f3c9fdbc83d5d3948b0.jpg"
                rating = "4.5"
                description="Power Gummies"
                price = "910"
            />

            <Product
                id = "3"
                image = "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/85d94e897a59427aadf99eed6ba02caa.jpg"
                rating = "3"
                description="Nature's Island"
                price = "962"
            />

            <Product
                id = "4"
                image = "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/a569ab4a9eb843e9b9890f9965b92027.jpg"
                rating = "4"
                description="Eur Health Plant"
                price = "773"
            />

            <Product
                id = "5"
                image = "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/99bdd5b7284c4be8ac7912d92aa17fa8.jpg"
                rating = "4"
                description="SheNeed Collagen Booster"
                price = "482"
            />

            <Product
                id = "6"
                image = "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/664fc6509c814d15b1979796a728a9c2.jpg"
                rating = "4"
                description="Retirx-Plus Softgel Capsule"
                price = "270"
            />

            <Product
                id = "7"
                image = "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e96bade3-bd4f-459f-ad97-0e737f23a3af.jpeg"
                rating = "4"
                description="Fast&Up Charge"
                price = "351"
            />

            <Product
                id = "8"
                image = "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/63560ec8d29049a2b50e9c73a104c01d.jpg"
                rating = "4"
                description="HK Vitals Hair Strength"
                price = "799"
            />

            <Product
                id = "9"
                image = "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/841298a214e8484cb53fa3606ef19305.jpg"
                rating = "4"
                description="Tata 1mg Vitamin C"
                price = "122"
            />
            <Product
                id = "10"
                image = "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/99bdd5b7284c4be8ac7912d92aa17fa8.jpg"
                rating = "4.2"
                description="Collagen Booster"
                price = "482"
            />
            <Product
                id = "11"
                image = "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/fd4630265ce3412ea5f12c3303fb44cf.jpg"
                rating = "4.2"
                description="Gradeone Nutrition"
                price = "224"
            />
            <Product
                id = "12"
                image = "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/9d38272cc432444e8a59fb92a721e984.jpg"
                rating = "4.2"
                description="Oziva Plant-Based"
                price = "849"
            />
        </div>
    );
}

export default Products;