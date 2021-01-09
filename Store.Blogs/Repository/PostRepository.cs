using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Store.Blogs.Context;
using Store.Blogs.Interfaces;
using Store.Blogs.Models;

namespace Store.Blogs.Repository
{
    public class PostRepository : IPostRepository
    {
        private readonly BloggingContext _context;
        public PostRepository(BloggingContext context)
        {
            _context = context;
        }

        public async Task<IList<Blog>> GetAllPosts()
        {
            var posts = await _context.Blogs
            .Include(i => i.Posts)
            .ToListAsync();

            posts.ForEach(f => f.Posts.ForEach(e => e.Blog = null));

            return posts;
        }

        public async Task<Post> GetById(int id)
        {
            var post = await _context.Posts
            .Include(i => i.Blog)
            .FirstAsync(f => f.PostId == id);

            post.Blog.Posts.Clear();
            return post;
        }

        public async Task InsertPost(Post post)
        {
            await _context.Posts.AddAsync(post);
            await _context.SaveChangesAsync();
        }

        public async Task EditPost(Post post)
        {
            var postDB = await _context.Posts.FirstAsync(f => f.PostId == post.PostId);
            postDB.PostId = post.PostId;
            postDB.Title = post.Title;
            postDB.Content = post.Content;
            postDB.BlogId = post.BlogId;
            await _context.SaveChangesAsync();
        }

        public async Task DeletePost(int id)
        {
            var postDB = await _context.Posts.FirstAsync(f => f.PostId == id);
            _context.Posts.Remove(postDB);
            await _context.SaveChangesAsync();
        }
    }
}