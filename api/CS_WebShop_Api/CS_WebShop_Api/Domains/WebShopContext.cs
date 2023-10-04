using Bogus;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace CS_WebShop_Api.Domains
{
    public class WebShopContext: IdentityDbContext<IdentityUser>
    {
        public DbSet<Product> Products { get; set; }

        public WebShopContext(DbContextOptions<WebShopContext> options) : base(options) { }

        private static readonly Faker<Product> ProductFaker = new Faker<Product>()
            .RuleFor(x => x.RefNum, x => x.Commerce.Ean13())
            .RuleFor(x => x.Name, x => x.Commerce.ProductName())
            .RuleFor(x => x.Description, x => x.Commerce.ProductDescription())
            .RuleFor(x => x.Price, x => Double.Parse(x.Commerce.Price()))
            .RuleFor(x => x.Category, x => x.Commerce.Categories(2)[0]);

        public List<Product> GetAllProducts(int amountOfProducts)
        {
            List<Product> products = ProductFaker.Generate(amountOfProducts);
            return products;
        }

        public Product GetSingleProduct()
        {
            Product product = ProductFaker.Generate();
            return product;
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            Product[] FakeProducts = new Product[25];
            for(int i = 0; i < 25; i++)
            {
                FakeProducts[i] = GetSingleProduct();
            }
            modelBuilder.Entity<Product>().HasData(FakeProducts);
        }
    }
}
