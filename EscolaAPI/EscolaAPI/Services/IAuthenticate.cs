namespace EscolaAPI.Services
{
    public interface IAuthenticate
    {
        Task<bool> Authenticate(string email, string password);
        Task Logout();
        Task<bool> RegisterUser(string email, string password);
    }
}
