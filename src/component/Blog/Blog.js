import React from 'react';
import "./Blog.css"

const Blog = () => {
    return (
        <div class="container py-5">
            <div class="row">
                <header>
                    <h1 class="text-center text-primary"> <q>Q & A</q> </h1>
                </header>
                <div class="col-md-6 py-3 ">
                    <h2> What is Context API?</h2>
                    <p class="pe-5 fs-5"> The React Context API is <strong>a way for a React app to effectively produce global variables that can be passed around</strong>. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p>
                </div>
                <div class="col-md-6 py-3">
                    <h2> What is Semantic tag?</h2>
                    <p class="pe-5 fs-5"> A semantic element <strong>clearly describes its meaning to both the browser and the developer</strong>. Examples of non-semantic elements: <strong>div and span</strong> - Tells nothing about its content. Examples of semantic elements: <strong>form , table , and article</strong> - Clearly defines its content.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;