import { Product } from "./product";

describe('Product class tests', () => {
    let product: Product;

    beforeEach(() => {
        product = new Product(
            "Product", 
            3.65,
            "Description of a test product"
        );
    });

    it("when is created it should know its title", () => {
        expect(product.title).toEqual('Product');
    });

    it("when is created it should know its price", () => {
        expect(product.price).toEqual(3.65);
    });

    it("when is created it should know its price", () => {
        expect("Description of a test product").toEqual(product.description);
    });
});