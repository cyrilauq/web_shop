using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CS_WebShop_Api.Domains.Orders
{
    public class OrderItem
    {
        [Key]
        [Required]
        public int Id { get; set; }
        [Required]
        [ForeignKey("Product")]
        public int ProdId { get; set; }
        [Required]
        [ForeignKey("Cart")]
        public int CartId { get; set; }
        [Required]
        public int Quantity { get; set; }
    }
}
