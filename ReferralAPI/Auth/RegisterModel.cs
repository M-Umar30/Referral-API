using System.ComponentModel.DataAnnotations;

namespace ReferralAPI.Auth
{
    public class RegisterModel
    {
        [Required(ErrorMessage="User Name is a required field")]
        public string? UserName { get; set; }

        [EmailAddress]
        [Required(ErrorMessage="Email is a required field")]
        public string? Email { get; set; }

        [Required(ErrorMessage="Password is a required field")]
        public string? Password { get; set; }
    }
}
