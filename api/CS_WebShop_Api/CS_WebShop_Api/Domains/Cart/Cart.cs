using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CS_WebShop_Api.Domains.Carts
{
    public class Cart
    {
        [Key]
        [Required]
        public int Id { get; set; }
        [Required]
        [ForeignKey("User")]
        public string UserId { get; set; }
    }
}
