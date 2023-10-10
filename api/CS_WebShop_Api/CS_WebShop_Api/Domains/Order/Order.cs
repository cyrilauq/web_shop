using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CS_WebShop_Api.Domains.Orders
{
    public class Order
    {
        [Key]
        [Required]
        public int Id { get; set; }
        [ForeignKey("DeliverieAddresse")]
        [Required]
        public int DeliverieAddresseId { get; set; }
        [Required]
        public DateTime makeDateTime { get; set; }
        public DateTime endDateTime { get; set; }
        [Required]
        public int ItemCount { get; set; }
        [Required]
        public double Total { get; set; }
    }
}
