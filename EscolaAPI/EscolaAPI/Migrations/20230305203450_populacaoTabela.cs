using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace EscolaAPI.Migrations
{
    /// <inheritdoc />
    public partial class populacaoTabela : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Alunos",
                columns: new[] { "Id", "DataNasc", "Email", "Nome" },
                values: new object[,]
                {
                    { 1, new DateTime(1985, 2, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Riitinha20k@hotmail.com", "Rita da Silva" },
                    { 2, new DateTime(1985, 2, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "CarlosR10@hotmail.com", "Carlos Rodrigues" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Alunos",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Alunos",
                keyColumn: "Id",
                keyValue: 2);
        }
    }
}
