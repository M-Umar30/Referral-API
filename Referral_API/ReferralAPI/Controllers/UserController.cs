using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ReferralAPI.Auth;

namespace ReferralAPI.Controllers
{
    [Authorize(Roles = UserRoles.Admin)]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IConfiguration _configuration;

        public UserController(
                       UserManager<IdentityUser> userManager,
                                  RoleManager<IdentityRole> roleManager,
                                             IConfiguration configuration
                       )
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _configuration = configuration;
        }

        // method to view all users
        [HttpGet]
        [Route("view")]
        public IActionResult View()
        {
            return Ok(_userManager.Users.ToList());
        }

        // method to view a user by id
        [HttpGet]
        [Route("view/{id}")]
        public async Task<IActionResult> View(string id)
        {
            var user = await _userManager.FindByIdAsync(id);
            if (user != null)
            {
                return Ok(user);
            }
            return NotFound($"User with Id = {id} not found");
        }

        // method to view a user by username 
        [HttpGet]
        [Route("viewbyusername/{username}")]
        public async Task<IActionResult> ViewByUsername(string username)
        {
            var user = await _userManager.FindByNameAsync(username);
            if (user != null)
            {
                return Ok(user);
            }
            return NotFound($"User with Username = {username} not found");
        }

        // method to create a user
        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> Create([FromBody] RegisterModel model, string role)
        {
            var userExists = await _userManager.FindByNameAsync(model.UserName);
            if (userExists != null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new AuthResponse { Status = "Error", Message = "User already exists!" });
            }
            IdentityUser user = new()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.UserName
            };
            var result = await _userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new AuthResponse { Status = "Error", Message = "User creation failed! Please check user details and try again." });
            }
            if (!await _roleManager.RoleExistsAsync(UserRoles.Admin))
            {
                await _roleManager.CreateAsync(new IdentityRole(UserRoles.Admin));
            }
            if (!await _roleManager.RoleExistsAsync(UserRoles.User))
            {
                await _roleManager.CreateAsync(new IdentityRole(UserRoles.User));
            }
            if (await _roleManager.RoleExistsAsync(UserRoles.Admin))
            {
                await _userManager.AddToRoleAsync(user, UserRoles.Admin);
            }
            if (await _roleManager.RoleExistsAsync(UserRoles.User))
            {
                await _userManager.AddToRoleAsync(user, UserRoles.User);
            }
            return Ok(new AuthResponse { Status = "Success", Message = "User created successfully!" });
        }

        // method to edit a user
        [HttpPut]
        [Route("edit/{username}")]

        public async Task<IActionResult> Edit(string username, [FromBody] RegisterModel model)
        {
            var user = await _userManager.FindByNameAsync(username);
            if (user != null)
            {
                user.Email = model.Email;
                user.UserName = model.UserName;
                var result = await _userManager.UpdateAsync(user);
                if (result.Succeeded)
                {
                    return Ok(new AuthResponse { Status = "Success", Message = "User updated successfully!" });
                }
                return StatusCode(StatusCodes.Status500InternalServerError, new AuthResponse { Status = "Error", Message = "User update failed! Please check user details and try again." });
            }
            return NotFound($"User with Username = {username} not found");
        }

        // method to delete a user
        [HttpDelete]
        [Route("delete/{username}")]


        public async Task<IActionResult> Delete(string username)
        {
            var user = await _userManager.FindByNameAsync(username);
            if (user != null)
            {
                var result = await _userManager.DeleteAsync(user);
                if (result.Succeeded)
                {
                    return Ok(new AuthResponse { Status = "Success", Message = "User deleted successfully!" });
                }
                return StatusCode(StatusCodes.Status500InternalServerError, new AuthResponse { Status = "Error", Message = "User deletion failed! Please check user details and try again." });
            }
            return NotFound($"User with Username = {username} not found");
        }
    }
}
