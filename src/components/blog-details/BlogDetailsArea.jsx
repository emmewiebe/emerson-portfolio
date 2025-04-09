import { Link } from "react-router-dom";

import blogImg1 from "../../assets/images/blog/blog1.jpg";
import blogImg2 from "../../assets/images/blog/blog2.jpg";
import blogSm1 from "../../assets/images/blog/blog-sm-1.jpg";
import blogSm2 from "../../assets/images/blog/blog-sm-2.jpg";
import blogSm3 from "../../assets/images/blog/blog-sm-3.jpg";
import authorImg from "../../assets/images/blog/author.jpg";
import avatar1 from "../../assets/images/avatar/01.jpg";
import avatar2 from "../../assets/images/avatar/02.jpg";

export default function BlogDetailsArea() {
  return (
    <>
      <section className="postbox__area grey-bg-4 pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="postbox__wrappers">
                <div className="postbox__mains">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="postbox__main-wrapper">
                        <div className="postbox__thumb w-img mb-30">
                          <a href="#">
                            <img src={blogImg2} alt="" />
                          </a>
                        </div>
                        <div className="postbox__meta">
                          <span><a href="#"><i className="fa-light fa-user"></i>Tanvir Hossain</a></span>
                          <span><a href="#"><i className="fa-light fa-clock"></i>January 22, 2022</a></span>
                          <span><a href="#"><i className="fa-sharp fa-thin fa-comments"></i>35</a></span>
                        </div>
                        <div className="postbox__details-content-wrapper">
                          <h3 className="postbox__details-title">
                            As influential as runways are, trends not solely <br /> born them. There was a clear direction coming their social media platform.
                          </h3>
                          <p>One morning, when Gregor Samsa woke from troubled dreams...</p>
                          <p>I should be incapable of drawing a single stroke...</p>
                          <div className="postbox__img m-img mt-50 mb-45">
                            <img src={blogImg1} alt="" />
                            <h5 className="postbox__img-caption">Image by <a href="#">@example01</a></h5>
                          </div>
                          <p>His many legs, pitifully thin compared with the size...</p>
                          <div className="postbox__quote">
                            <blockquote>
                              <div className="postbox__quote-icon">
                                <span>[SVG ICON OMITTED]</span>
                              </div>
                              <p>“I try as much as possible to give you a great basic product and what comes out, I feel, is really amazing.”</p>
                            </blockquote>
                          </div>
                          <div className="postbox__features">
                            <h4 className="postbox__features-title">Learning from failure</h4>
                            <p>The European languages are members of the same family...</p>
                            <ul>
                              <li>Get yourself comfortable.</li>
                              <li>Manage your workspace and organize your desk.</li>
                              <li>Keep In touch with your co-workers.</li>
                            </ul>
                          </div>
                          <p>The new common language will be more simple and regular...</p>
                        </div>

                        <div className="postbox__share-wrapper mb-60">
                          <div className="row align-items-center">
                            <div className="col-xl-7">
                              <div className="tagcloud tagcloud-sm">
                                <span>Tags:</span>
                                <a href="#">Blog</a>
                                <a href="#">Creative</a>
                                <a href="#">Portfolio</a>
                                <a href="#">Harry</a>
                              </div>
                            </div>
                            <div className="col-xl-5">
                              <div className="postbox__share text-xl-end">
                                <span>Share On:</span>
                                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="postbox__comment-wrapper">
                          <div className="postbox__comment mb-95">
                            <h3 className="postbox__comment-title">Comments (2)</h3>
                            <ul>
                              <li>
                                <div className="postbox__comment-box d-sm-flex align-items-start">
                                  <div className="postbox__comment-info">
                                    <div className="postbox__comment-avater">
                                      <img src={avatar1} alt="" />
                                    </div>
                                  </div>
                                  <div className="postbox__comment-text ">
                                    <div className="postbox__comment-name">
                                      <span className="post-meta"> July 14, 2022</span>
                                      <h5><a href="#">Eleanor Fant</a></h5>
                                    </div>
                                    <p>One of the best templates out there...</p>
                                    <div className="postbox__comment-reply"><a href="#">Reply</a></div>
                                  </div>
                                </div>
                                <ul className="children">
                                  <li>
                                    <div className="postbox__comment-box d-sm-flex align-items-start">
                                      <div className="postbox__comment-info">
                                        <div className="postbox__comment-avater">
                                          <img src={avatar2} alt="" />
                                        </div>
                                      </div>
                                      <div className="postbox__comment-text ">
                                        <div className="postbox__comment-name">
                                          <span className="post-meta"> July 14, 2022</span>
                                          <h5><a href="#">Alexander Ljung</a></h5>
                                        </div>
                                        <p>This theme is super awesome! But I had one small issue...</p>
                                        <div className="postbox__comment-reply"><a href="#">Reply</a></div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <div className="postbox__comment-box d-sm-flex align-items-start">
                                  <div className="postbox__comment-info">
                                    <div className="postbox__comment-avater">
                                      <img src={avatar1} alt="" />
                                    </div>
                                  </div>
                                  <div className="postbox__comment-text ">
                                    <div className="postbox__comment-name">
                                      <span className="post-meta"> July 14, 2022</span>
                                      <h5><a href="#">Jamil Rayhan</a></h5>
                                    </div>
                                    <p>His many legs, pitifully thin compared with the size...</p>
                                    <div className="postbox__comment-reply"><a href="#">Reply</a></div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>

                          {/* Comment Form remains unchanged */}
                          <div className="postbox__comment-form">
                            <h3 className="postbox__comment-form-title">Leave A Reply</h3>
                            <p>Your email address will not be published. Required fields are marked *</p>
                            <form action="#">
                              <div className="row">
                                <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                                  <div className="postbox__comment-input">
                                    <input type="text" placeholder="Name*" />
                                  </div>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                                  <div className="postbox__comment-input">
                                    <input type="email" placeholder="Email" />
                                  </div>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-lg-12">
                                  <div className="postbox__comment-input">
                                    <input type="text" placeholder="Website" />
                                  </div>
                                </div>
                                <div className="col-xxl-12">
                                  <div className="postbox__comment-input">
                                    <textarea placeholder="Your Comment Here..."></textarea>
                                  </div>
                                </div>
                                <div className="col-xxl-12">
                                  <div className="postbox__comment-agree d-flex align-items-start mb-25">
                                    <input className="e-check-input" type="checkbox" id="e-agree" />
                                    <label className="e-check-label" htmlFor="e-agree">
                                      Save my name, email, and website in this browser for the next time I comment.
                                    </label>
                                  </div>
                                </div>
                                <div className="col-xxl-12">
                                  <div className="postbox__comment-btn">
                                    <button type="submit" className="theme-btn theme-btn-two">Submit Comment</button>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sidebar with author and blog snippets */}
                    <div className="col-xxl-4 col-lg-4">
                      <div className="blog_sidebar__wrapper pl-40">
                        <div className="sidebar__widget mb-20">
                          <div className="sidebar__search">
                            <form action="#"><input type="text" placeholder="Enter your keywords..." /></form>
                          </div>
                        </div>
                        <div className="sidebar__widget mb-45">
                          <div className="sidebar__author">
                            <div className="sidebar__author-thumb">
                              <img src={authorImg} alt="" />
                            </div>
                            <div className="sidebar__author-content">
                              <h3 className="sidebar__author-title">Colene Landin</h3>
                              <p>Lorem ipsum dolor ametare elit consectetur adipiscing Aenean pellentesque.</p>
                              <div className="sidebar__author-social d-flex align-items-center justify-content-center">
                                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sidebar__widget mb-45">
                          <h3 className="sidebar__widget-title">Recent Post</h3>
                          <div className="sidebar__post">
                            <div className="rc__post d-flex align-items-center">
                              <div className="rc__post-thumb"><img src={blogSm1} alt="" /></div>
                              <div className="rc__post-content">
                                <h3 className="rc__post-title"><a href="#">Business meeting 2021 in San Francisco</a></h3>
                                <div className="rc__meta"><span>July 21, 2022</span></div>
                              </div>
                            </div>
                            <div className="rc__post d-flex align-items-center">
                              <div className="rc__post-thumb"><img src={blogSm2} alt="" /></div>
                              <div className="rc__post-content">
                                <h3 className="rc__post-title"><a href="#">Developing privacy user-centric apps</a></h3>
                                <div className="rc__meta"><span>July 21, 2022</span></div>
                              </div>
                            </div>
                            <div className="rc__post d-flex align-items-center">
                              <div className="rc__post-thumb"><img src={blogSm3} alt="" /></div>
                              <div className="rc__post-content">
                                <h3 className="rc__post-title"><a href="#">Starting and Growing Web Design in 2022</a></h3>
                                <div className="rc__meta"><span>July 21, 2022</span></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sidebar__widget mb-45">
                          <h3 className="sidebar__widget-title">Category</h3>
                          <ul>
                            <li><Link to="/blog">Design Media <span>10</span></Link></li>
                            <li><Link to="/blog">Figma Design <span>08</span></Link></li>
                            <li><Link to="/blog">Web Design <span>24</span></Link></li>
                            <li><Link to="/blog">Wix Development <span>37</span></Link></li>
                            <li><Link to="/blog">Framer Website <span>103</span></Link></li>
                          </ul>
                        </div>
                        <div className="sidebar__widget mb-40">
                          <h3 className="sidebar__widget-title">Tags</h3>
                          <div className="tagcloud">
                            <a href="#">Creative</a>
                            <a href="#">Design</a>
                            <a href="#">Branding</a>
                            <a href="#">Life Style</a>
                            <a href="#">Technology</a>
                            <a href="#">Figma</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
