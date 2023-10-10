using System.ComponentModel.DataAnnotations;

namespace CS_WebShop_Api.Domains
{
    public class DeliverieAddresse
    {
        [Key]
        [Required]
        public int Id { get; set; }
        [Required]
        public string Street { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public int Number { get; set; }
        [Required]
        public string Country { get; set; }
        [Required]
        public int PostalCode { get; set; }
        public string BoxNumber { get; set; }
    }
}
