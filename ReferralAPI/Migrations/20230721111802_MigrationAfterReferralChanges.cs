using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ReferralAPI.Migrations
{
    /// <inheritdoc />
    public partial class MigrationAfterReferralChanges : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "dislikes",
                table: "referrals",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "likes",
                table: "referrals",
                type: "int",
                nullable: false,
                defaultValue: 0);



        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "dislikes",
                table: "referrals");

            migrationBuilder.DropColumn(
                name: "likes",
                table: "referrals");
        }
    }
}
