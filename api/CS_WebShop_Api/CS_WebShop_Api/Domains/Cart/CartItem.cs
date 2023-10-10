using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CS_WebShop_Api.Domains.Carts
{
    public class CartItem
    {
        [Key]
        [Required]
        public int Id { get; set; }
        [Required]
        [ForeignKey("Product")]
        public int ProdId { get; set; }
        [Required]
        public int Quantity { get; set; }
    }
}
