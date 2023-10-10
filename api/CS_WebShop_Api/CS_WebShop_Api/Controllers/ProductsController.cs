using CS_WebShop_Api.Auth;
using CS_WebShop_Api.Domains;
using CS_WebShop_Api.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.RegularExpressions;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CS_WebShop_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly WebShopContext _context;

        public ProductsController(WebShopContext context) { _context = context; }


        // GET: api/<ValuesController>
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return _context.Products;
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public string Get(string id)
        {
            Product result = _context.Products.Where(prod => prod.RefNum.CompareTo(id) == 0).FirstOrDefault();
            if (result == null)
            {
                return "No Product Found";
            }
            return result.Name;
        }

        // POST api/<ValuesController>
        [HttpPost]
        public async Task<string> Post([FromBody] ProductViewModels value)
        {
            try
            {
                if (!new Regex(@"\b[A-Z0-9]{9}\b").IsMatch(value.RefNum))
                {
                    return "Wrong format for the Ref Number";
                }
                if (value.RefNum.Trim().Length == 0)
                {
                    return "The Ref Number shouldn't be empty";
                }
                if (value.Category.Trim().Length == 0)
                {
                    return "The Category shouldn't be empty";
                }
                if (value.Name.Trim().Length == 0)
                {
                    return "The Name shouldn't be empty";
                }
                if (value.Description.Trim().Length == 0)
                {
                    return "The Description shouldn't be empty";
                }
                if (value.Price <= 0)
                {
                    return "The Price should superior to 0";
                }

                _context.Add(new Product
                {
                    Category = value.Category,
                    RefNum = value.RefNum,
                    Name = value.Name,
                    Description = value.Description,
                    Price = value.Price
                });
                await _context.SaveChangesAsync();
                return "Product saved";
            }
            catch (Exception e)
            {
                return e.Message + ": " + e.Source;
            }

        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public async Task<string> Put(string id, [FromBody] ProductViewModels value)
        {
            Product result = _context.Products.Where(prod => prod.RefNum.CompareTo(id) == 0).FirstOrDefault();
            if (result == null)
            {
                return "No Product Found";
            }
            if (value.Category.Trim().Length == 0)
            {
                return "The Category shouldn't be empty";
            }
            if (value.Name.Trim().Length == 0)
            {
                return "The Name shouldn't be empty";
            }
            if (value.Description.Trim().Length == 0)
            {
                return "The Description shouldn't be empty";
            }
            if (value.Price <= 0)
            {
                return "The Price should superior to 0";
            }

            try
            {
                _context.Add(new Product
                {
                    Category = value.Category,
                    RefNum = value.RefNum,
                    Name = value.Name,
                    Description = value.Description,
                    Price = value.Price
                });
                await _context.SaveChangesAsync();
                return "Product saved";
            }
            catch (Exception e)
            {
                return e.Message + ": " + e.Source;
            }
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        [Authorize(Roles = UserRoles.Admin)]
        public async Task<string> Delete(string id)
        {
            Product result = _context.Products.Where(prod => prod.RefNum.CompareTo(id) == 0).FirstOrDefault();
            if (result == null)
            {
                return "No Product Found";
            }
            _context.Products.Remove(result);
            await _context.SaveChangesAsync();
            return "Product deleted";
        }
    }
}
