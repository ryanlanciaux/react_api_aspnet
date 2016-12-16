using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Todos;

namespace api.Controllers
{
    [Route("api/[controller]")]
    public class TodosController : Controller
    {
        // GET api/todos
        [HttpGet]
        public Todo[] Get()
        {
            return new TodoFactory().Todos;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Todo Get(int id)
        {
            return new TodoFactory().Todos[0];
        }
    }
}
