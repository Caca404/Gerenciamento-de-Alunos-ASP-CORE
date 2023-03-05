using EscolaAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EscolaAPI.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {}

        public DbSet<Aluno> Alunos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Aluno>().HasData(
                new Aluno {
                    Id = 1,
                    Nome = "Rita da Silva",
                    Email = "Riitinha20k@hotmail.com",
                    DataNasc = (DateTime.Parse("1985-02-01")).Date
                },
                new Aluno
                {
                    Id = 2,
                    Nome = "Carlos Rodrigues",
                    Email = "CarlosR10@hotmail.com",
                    DataNasc = (DateTime.Parse("1985-02-01")).Date
                }
            );
        }
    }
}
