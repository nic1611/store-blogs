using System.Collections.Generic;
using System.Threading.Tasks;
using Store.Blogs.Models;

namespace Store.Blogs.Interfaces
{
    public interface IPostRepository
    {
        Task<IList<Blog>> GetAllPosts();
        Task<Post> GetById(int id);
        Task InsertPost(Post post);
        Task EditPost(Post post);
        Task DeletePost(int id);
    }
}