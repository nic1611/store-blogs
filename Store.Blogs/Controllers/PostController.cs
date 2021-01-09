using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Store.Blogs.Interfaces;
using Store.Blogs.Models;

namespace Store.Blogs.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PostController : ControllerBase
    {
        private readonly ILogger<PostController> _logger;
        private readonly IPostRepository _rep;

        public PostController(ILogger<PostController> logger, IPostRepository rep)
        {
            _logger = logger;
            _rep = rep;
        }

        [HttpGet("Todos")]
        public async Task<IActionResult> GetAllPosts()
        {
            try
            {
                var posts = await _rep.GetAllPosts();
                return Ok(posts);
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                return BadRequest(e.Message);
            }

        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPostById(int id)
        {
            try
            {
                var posts = await _rep.GetById(id);
                return Ok(posts);
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                return BadRequest(e.Message);
            }
        }

        [HttpPost("Novo")]
        public async Task<IActionResult> CreatePost([FromBody] Post post)
        {
            try
            {
                await _rep.InsertPost(post);
                return Ok();
            }
            catch (System.Exception e)
            {
                _logger.LogError(e.Message);
                return BadRequest(e.Message);
            }
        }

        [HttpPut("Editar")]
        public async Task<IActionResult> EditPost([FromBody] Post post)
        {
            try
            {
                await _rep.EditPost(post);
                return Ok();
            }
            catch (System.Exception e)
            {
                _logger.LogError(e.Message);
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("Remover/{id}")]
        public async Task<IActionResult> DeletePosts(int id)
        {
            try
            {
                await _rep.DeletePost(id);
                return Ok();
            }
            catch (System.Exception e)
            {
                _logger.LogError(e.Message);
                return BadRequest(e.Message);
            }
        }
    }
}