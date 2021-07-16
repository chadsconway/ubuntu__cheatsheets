app.get('/blogs', async (req, res) => {
    const blogs = await blogs.find({_user: req.user.id});
    res.send(blogs);
})