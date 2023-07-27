using System.ComponentModel.DataAnnotations;

namespace ReferralAPI.Auth
{
    public class LoginModel
    {
        [Required(ErrorMessage="User Name is a required field")]
        public string? UserName { get; set; }
        [Required(ErrorMessage="Password is a required field")]
        public string? Password { get; set; }
    }
}
