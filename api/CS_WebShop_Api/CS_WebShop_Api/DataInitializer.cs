using Bogus;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Identity;

namespace CS_WebShop_Api
{
    public static class DataInitializer
    {
        public static void SeedRole(RoleManager<IdentityRole> roleManager)
        {
            if (roleManager.RoleExistsAsync("Admin").Result == false)
            {
                IdentityRole admin = new IdentityRole() { Name = "Admin" };
                var result = roleManager.CreateAsync(admin);
                result.Wait();
            }
        }
        public static void Seed(UserManager<IdentityUser> userManager)
        {
            if (userManager.Users.Count() != 0)
                return;
            var finalDispatcher = new IdentityUser
            {
                Email = "product@admin.com",
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = "product_admin"
            };
            var resultDispatcher = userManager.CreateAsync(finalDispatcher, "Password123$").Result;
            if (resultDispatcher.Succeeded)
            {
                var resultDispatcher2 = userManager.AddToRoleAsync(finalDispatcher, "Admin").Result;
            }

        }
    }
}
