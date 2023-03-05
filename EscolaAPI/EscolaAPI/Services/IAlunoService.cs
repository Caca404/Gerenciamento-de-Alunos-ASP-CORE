using EscolaAPI.Models;

namespace EscolaAPI.Services
{
    public interface IAlunoService
    {
        Task<IEnumerable<Aluno>> GetAlunos();
        Task<Aluno> GetAluno(int id);
        Task<IEnumerable<Aluno>> GetAlunosByNome(string nome);
        Task CreateAluno(Aluno aluno);
        Task DeleteAluno(Aluno aluno);
        Task UpdateAluno(Aluno aluno);
    }
}
