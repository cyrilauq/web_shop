using Microsoft.AspNetCore.Identity;

namespace CS_WebShop_Api
{
    public interface IJwtAuthenticationService
    {
        Task<IdentityUser> AuthenticateAsync(string login, string password);


    }
}
