using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ReferralAPI.Entities;

namespace ReferralAPI.Auth
{
    public class ApplicationDbContext : IdentityDbContext<IdentityUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        // dbsets
        public DbSet<User> users { get; set; } = null!;
        public DbSet<Referral> referrals { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder builder) => base.OnModelCreating(builder);
    }
}
