using Bogus;
using CS_WebShop_Api.Auth;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Identity;

namespace CS_WebShop_Api
{
    public static class DataInitializer
    {
        public static void SeedRole(RoleManager<IdentityRole> roleManager)
        {
            if (roleManager.RoleExistsAsync(UserRoles.Admin).Result == false)
            {
                IdentityRole admin = new IdentityRole() { Name = UserRoles.Admin };
                var resultAdmin = roleManager.CreateAsync(admin);
                resultAdmin.Wait();
            }
            if (roleManager.RoleExistsAsync(UserRoles.User).Result == false)
            {
                IdentityRole user = new IdentityRole() { Name = UserRoles.User };
                var resultUser = roleManager.CreateAsync(user);
                resultUser.Wait();
            }
        }
        public static void Seed(UserManager<IdentityUser> userManager)
        {
            if (userManager.Users.Count() != 0)
                return;
            var productAdmin = new IdentityUser
            {
                Email = "product@admin.com",
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = "product_admin"
            };
            var resultDispatcher = userManager.CreateAsync(productAdmin, "Password123$").Result;
            if (resultDispatcher.Succeeded)
            {
                var resultAddAdminToProd = userManager.AddToRoleAsync(productAdmin, UserRoles.Admin).Result;
                var resultAddUserToProd = userManager.AddToRoleAsync(productAdmin, UserRoles.User).Result;
            }
            var user = new IdentityUser
            {
                Email = "touka_ki@example.com",
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = "touka_ki"
            };
            var resultUser = userManager.CreateAsync(user, "Password123@").Result;
            if (resultUser.Succeeded)
            {
                var resultAddUserToProd = userManager.AddToRoleAsync(user, UserRoles.User).Result;
            }

        }
    }
}
