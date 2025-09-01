import React from "react";
import PageHeader from "../common/PageHeader";
import Newsletter from "../common/Newsletter";
import BlogChunk from "../section/BlogChunk";

// Sidebar Components
const SearchWidget = () => (
  <div id="search" className="widget widget_search">
    <div className="sidebar_search">
      <form className="search_form" action="search.php">
        <input
          type="text"
          name="search"
          className="keyword form-control"
          placeholder="Search"
        />
        <button type="submit" className="form-control-submit">
          <i className="ion-ios-search"></i>
        </button>
      </form>
    </div>
  </div>
);

const AuthorWidget = () => (
  <div id="custom_1" className="widget widget_custom">
    <h4 className="widget_title">
      About author
      <span className="title_line"></span>
    </h4>
    <div className="sidebar_author">
      <img src="images/author.png" alt="Author" />
      <p className="intro">
        Sed ut perspiciatis unde omnis iste natus err or sit voluptatem
        accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae
        ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
      </p>
      <div className="author_social">
        <ul>
          {[
            "facebook",
            "twitter",
            "pinterest-outline",
            "instagram-outline",
            "linkedin",
          ].map((platform) => (
            <li key={platform}>
              <a href="#">
                <i className={`ion-social-${platform}`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const RecentPostsWidget = () => {
  const posts = [
    {
      image: "images/thumbnail1.png",
      title: "Contribution of Men as workers",
      date: "OCTOBER 11, 2022",
      link: "blog-1.html",
    },
    {
      image: "images/thumbnail2.png",
      title: "Contribution of Men as workers",
      date: "OCTOBER 11, 2022",
      link: "blog-2.html",
    },
    {
      image: "images/thumbnail3.png",
      title: "Contribution of Men as workers",
      date: "OCTOBER 11, 2022",
      link: "blog-1.html",
    },
  ];

  return (
    <div id="recent-posts-1" className="widget widget_recent_posts">
      <h4 className="widget_title">
        Recent Posts
        <span className="title_line"></span>
      </h4>
      <div className="sidebar_recent_posts">
        <ul className="recent_post_list">
          {posts.map((post, index) => (
            <li key={index} className="recent_post_item">
              <div className="recent_post_image">
                <img className="primary_img" src={post.image} alt="" />
              </div>
              <div className="recent_post_content">
                <h5>
                  <a href={post.link}>{post.title}</a>
                </h5>
                <h6>{post.date}</h6>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const CategoriesWidget = () => {
  const categories = [
    { name: "Construction", count: 5, link: "project.html", active: true },
    { name: "Highrise", count: 7, link: "project-2.html" },
    { name: "Technology", count: 4, link: "project-2.html" },
    { name: "Structure", count: 2, link: "project.html" },
    { name: "Accessorries", count: 4, link: "project-2.html" },
  ];

  return (
    <div id="categories-1" className="widget widget_categories">
      <h4 className="widget_title">
        Categories
        <span className="title_line"></span>
      </h4>
      <div className="sidebar_categories">
        <ul className="category_list">
          {categories.map((category, index) => (
            <li key={index} className={category.active ? "active" : ""}>
              <a href={category.link}>{category.name}</a> ({category.count})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const TagsWidget = () => {
  const tags = [
    { name: "ATTORNEY", link: "about.html" },
    { name: "LAW", link: "practice_area.html" },
    { name: "MURDER", link: "practice_area.html" },
    { name: "CONSTITUTION", link: "project.html" },
    { name: "JUDGEMENT", link: "project-2.html" },
    { name: "ORDER", link: "project-details.html" },
  ];

  return (
    <div id="tags-1" className="widget widget_tag_cloud">
      <h4 className="widget_title">
        Tag Cloud
        <span className="title_line"></span>
      </h4>
      <div className="sidebar_tags">
        <ul className="tag_list">
          {tags.map((tag, index) => (
            <li key={index}>
              <a href={tag.link}>{tag.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Pagination = () => (
  <div className="pagination-div">
    <ul className="pagination">
      <li>
        <a className="page-number current" href="#">
          1
        </a>
      </li>
      <li>
        <a className="page-number" href="#">
          2
        </a>
      </li>
      <li>
        <a className="page-number" href="#">
          3
        </a>
      </li>
      <li>
        <a href="#">.....</a>
      </li>
      <li>
        <a href="#">
          <i className="ion-chevron-right"></i>
        </a>
      </li>
    </ul>
  </div>
);

function Blog() {
  const blogPosts = [
    {
      image: "images/3_2.png",
      date: "OCTOBER 11, 2022",
      title: "Lawreto's help for the Victimes of Domestic Violence in USA",
      description:
        "Lawreto is the best in class editorial and research teams of over...",
      authorImage: "images/s1_1.png",
      authorName: "Rayan Kellar",
      authorTitle: "Attorney",
      link: "blog_details.html",
    },
    {
      image: "images/3_2.png",
      date: "OCTOBER 11, 2022",
      title: "Lawreto's help for the Victimes of Domestic Violence in USA",
      description:
        "Lawreto is the best in class editorial and research teams of over...",
      authorImage: "images/s1_1.png",
      authorName: "Rayan Kellar",
      authorTitle: "Attorney",
      link: "blog_details.html",
    },
    {
      image: "images/3_2.png",
      date: "OCTOBER 11, 2022",
      title: "Lawreto's help for the Victimes of Domestic Violence in USA",
      description:
        "Lawreto is the best in class editorial and research teams of over...",
      authorImage: "images/s1_1.png",
      authorName: "Rayan Kellar",
      authorTitle: "Attorney",
      link: "blog_details.html",
    },
    {
      image: "images/3_2.png",
      date: "OCTOBER 11, 2022",
      title: "Lawreto's help for the Victimes of Domestic Violence in USA",
      description:
        "Lawreto is the best in class editorial and research teams of over...",
      authorImage: "images/s1_1.png",
      authorName: "Rayan Kellar",
      authorTitle: "Attorney",
      link: "blog_details.html",
    },
    // Add more blog posts if needed
  ];

  return (
    <>
      <PageHeader title={"Blogs"} currentPage={"Blogs"} />
      <section className="blog blog_inner blog_inner_padding_right">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                {blogPosts.map((post, index) => (
                  <div key={index} className="col-lg-6">
                    <BlogChunk post={post} />
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar">
                <SearchWidget />
                <AuthorWidget />
                <RecentPostsWidget />
                <CategoriesWidget />
                <TagsWidget />
              </div>
            </div>
          </div>
        </div>

        <Pagination />
      </section>
      <Newsletter />
    </>
  );
}

export default Blog;
