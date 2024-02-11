using Microsoft.AspNetCore.Mvc;

namespace Tricking.Library.Api.Controllers
{
    [ApiController]
    [Route("api/home")]
    public class HomeController :ControllerBase
    {
        [HttpGet]
        public string Index()
        {
            string greeting = "Hello world!!!";

            return greeting;
        }
    }
}
