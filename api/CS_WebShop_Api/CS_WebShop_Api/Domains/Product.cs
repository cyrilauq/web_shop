using System.ComponentModel.DataAnnotations;

namespace CS_WebShop_Api.Domains
{
    public class Product
    {
        [Key]
        [Required]
        public string RefNum { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string Category { get; set; }
        [Required]
        public double Price { get; set; }
    }
}
