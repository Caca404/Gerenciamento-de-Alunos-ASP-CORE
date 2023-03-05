using System.ComponentModel.DataAnnotations;

namespace EscolaAPI.Models
{
    public class Aluno
    {
        public int Id { get; set; }
        [Required]
        [StringLength(80)]
        public string Nome { get; set; }
        [Required]
        [StringLength(100)]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime DataNasc { get; set; }
    }
}
