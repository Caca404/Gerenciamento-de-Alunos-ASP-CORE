using EscolaAPI.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EscolaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlunosController : ControllerBase
    {
        private AlunosService _alunoService;
        public AlunosController(AlunosService alunosService)
        {
            _alunoService = alunosService;
        }
    }
}
