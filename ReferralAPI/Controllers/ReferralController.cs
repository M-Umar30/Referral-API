using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ReferralAPI.Auth;
using ReferralAPI.Entities;
using ReferralAPI.Models;

namespace ReferralAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ReferralController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly ApplicationDbContext _context;

        public ReferralController(UserManager<IdentityUser> userManager, ApplicationDbContext context)
        {
            _userManager = userManager;
            _context = context;
        }

        // endpoint to create a referral
        
        [HttpPost]
        [Route("Create")]
        public IActionResult Create(ReferralModel referral)
        {
            // gets current user
            var user = _userManager.FindByNameAsync(User.Identity.Name).Result;
            Referral NewReferral = new Referral
            {
                Name = referral.ReferralName,
                description = referral.ReferralDescription,
                likes = 0,
                dislikes = 0,
                UserId = user.Id
            };

            // adds referral to database
            _context.referrals.Add(NewReferral);
            _context.SaveChanges();
            return Ok($"Referral '{referral.ReferralName}' created successfully");
        }

        // endpoint to view all referrals 
        [Authorize(Roles = UserRoles.Admin)]
        [HttpGet]
        [Route("ViewAllReferralDetails")]
        public IActionResult Get()
        {
            return Ok(_context.referrals.ToList());
        }

        // endpoint for users to see all other users referrals
        [HttpGet]
        [Route("ViewAllReferrals")]
        public IActionResult GetAllReferrals()
        {
            // gets current user
            var user = _userManager.FindByNameAsync(User.Identity.Name).Result;
            var referrals = _context.referrals.Where(r => r.UserId != user.Id).ToList();

            // checks if referral exists
            if (referrals == null)
            {
                return BadRequest("No referrals found");
            }
            
            var referralList = new List<ReferralModel>();
            foreach (var referral in referrals)
            {
                var referralModel = new ReferralModel
                {
                    ReferralName = referral.Name,
                    ReferralDescription = referral.description,
                };
                referralList.Add(referralModel);
            }
            
            return Ok(referralList);
        }

        

        // endpoint for users to like a referral
        [HttpPut]
        [Route("LikeReferral")]
        public IActionResult Like(string name)
        {
            // get current user
            var user = _userManager.FindByNameAsync(User.Identity.Name).Result;
            
            // get all referrals
            var referrals = _context.referrals.ToList();
            int id = referrals.FindIndex(r => r.Name == name);

            // checks if referral exists
            if (referrals != null)
            {
                // user cant like their own referral
                if (referrals[id].UserId == user.Id)
                {
                    return BadRequest("You cannot like your own referral");
                }
                // increments likes
                referrals[id].likes++;
                _context.SaveChanges();
                // return success message
                return Ok("Referral liked successfully");

            }
            return NotFound($"Referral with id = {id} not found");
        }

        // endpoint for users to dislike a referral
        [HttpPut]
        [Route("DislikeReferral")]
        public IActionResult Dislike(string name)
        {
            // get current user
            var user = _userManager.FindByNameAsync(User.Identity.Name).Result;

            // get all referrals
            var referrals = _context.referrals.ToList();
            int id = referrals.FindIndex(r => r.Name == name);

            // checks if referral exists
            if (referrals != null)
            {
                // user cant like their own referral
                if (referrals[id].UserId == user.Id)
                {
                    return BadRequest("You cannot dislike your own referral");
                }
                // increments likes
                referrals[id].dislikes++;
                _context.SaveChanges();
                // return success message
                return Ok("Referral disliked successfully");
            }
            return NotFound($"Referral with id = {id} not found");
        }

        // endpoint for user to view their referrals 
        [HttpGet]
        [Route("ViewMyReferrals")]
        public IActionResult Get(string referralName)
        {
            // gets referral of current user
            var user = _userManager.FindByNameAsync(User.Identity.Name).Result;
            var UserReferral = _context.referrals.Where(r => r.UserId == user.Id ).ToList();
            var referral = UserReferral.Find(r => r.Name == referralName);

            // checks if referral exists
            if (referral != null)
            {
                return Ok(referral);
            }
            return NotFound($"Referral with name = {referralName} not found");
        }

        // endpoint for users to delete their referral
        [HttpDelete]
        [Route("DeleteMyReferral")]
        public IActionResult Delete(string name)
        {
            // get current user
            var user = _userManager.FindByNameAsync(User.Identity.Name).Result;

            // get all referrals
            var referrals = _context.referrals.ToList();
            int id = referrals.FindIndex(r => r.Name == name);

            // checks if referral exists
            if (referrals != null)
            {
                // user cant delete their own referral
                if (referrals[id].UserId == user.Id)
                {
                    _context.referrals.Remove(referrals[id]);
                    _context.SaveChanges();
                    return Ok($"Referral '{name}' deleted successfully");
                }
                return BadRequest("You cannot delete another users referral");
            }
            return NotFound($"Referral with id = {id} not found");
        }

        // endpoint for users to update their referral
        [HttpPut]
        [Route("EditMyReferral")]
        public IActionResult Update(string name, ReferralModel referral)
        {
            // get current user
            var user = _userManager.FindByNameAsync(User.Identity.Name).Result;

            // get all referrals
            var referrals = _context.referrals.ToList();
            int id = referrals.FindIndex(r => r.Name == name);

            // checks if referral exists
            if (referrals != null)
            {
                // user cant update their own referral
                if (referrals[id].UserId == user.Id)
                {
                    referrals[id].Name = referral.ReferralName;
                    referrals[id].description = referral.ReferralDescription;
                    _context.SaveChanges();
                    return Ok($"Referral '{referral.ReferralName}' updated successfully");
                }
                return BadRequest("You cannot update another users referral");
            }
            return NotFound($"Referral with id = {id} not found");
        }
    }
}
