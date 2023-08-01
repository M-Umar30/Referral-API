using System.ComponentModel.DataAnnotations;

namespace ReferralAPI.Entities
{
    public class Referral
    {
        [Key]
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? description { get; set; }
        public int likes { get; set; }
        public int dislikes { get; set; }

        public string? UserId { get; set; }
        public User? User { get; set; }
    }
}
