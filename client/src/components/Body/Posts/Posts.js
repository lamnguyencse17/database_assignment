import React, { Component } from 'react'

export default class Posts extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <>
                <div className="col-md-10 blogShort">
                    <a href = "https://itviec.com/blog/android-developer/" style={{fontSize: 32}}>Android developer là làm gì? Lương có ngon không </a>
                    <img src="http://d.gr-assets.com/books/1358275334l/2767052.jpg" alt="post img" className="pull-left img-responsive thumb margin10 img-thumbnail" />
                    <article><p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                        of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p></article>
                    <a className="btn btn-blog pull-right marginBottom10" href="http://bootsnipp.com/user/snippets/2RoQ">READ MORE</a>
                </div>
                <div className="col-md-10 blogShort">
                    <h1>Title 2</h1>
                    <img src="http://d.gr-assets.com/books/1358275334l/2767052.jpg" alt="post img" className="pull-left img-responsive thumb margin10 img-thumbnail" />
                    <article><p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                        of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p></article>
                    <a className="btn btn-blog pull-right marginBottom10" href="http://bootsnipp.com/user/snippets/2RoQ">READ MORE</a>
                </div>

                <div className="col-md-10 blogShort">
                    <h1>Title 3</h1>
                    <img src="http://d.gr-assets.com/books/1358275334l/2767052.jpg" alt="post img" className="pull-left img-responsive thumb margin10 img-thumbnail" />
                    <article><p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                        of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p></article>
                    <a className="btn btn-blog pull-right marginBottom10" href="http://bootsnipp.com/user/snippets/2RoQ">READ MORE</a>
                </div>

                <div className="col-md-12 gap10"></div>
                </>
                )
    }
}
