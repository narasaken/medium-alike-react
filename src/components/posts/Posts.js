import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

export class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popularArticles: []
        };
    }

    componentDidMount() {
        fetch('https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=hc63TLTAw4QwqD4VEV4ceWl5Dr3fA3Uc')
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    popularArticles: data.results
                });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        return (
            <div className='topics'>
                {this.state.popularArticles.map(article => (
                    <div className='articles' key={article.id}>
                        <div className='info-top'>
                            <p>{article.byline}</p>
                            <p>{article.published_date}</p>
                        </div>
                        <h2>{article.title}</h2>
                        <p>{article.abstract}</p>
                        <a href={article.url}>Read more</a>
                        <p className='tags'>{article.section}</p>
                        {article.media && article.media[0] && article.media[0]['media-metadata'] && (
                            <img className="article-img" src={article.media[0]['media-metadata'][0].url} style={{ 
                                width: '350px', 
                                height: '300px', 
                                margin: '0 auto',
                                marginRight: '160px',
                                borderRadius: '4px',
                                marginTop: '-350px',
                             }} />
                        )}
                        <hr />
                    </div>
                ))}
            </div>
        );
    }
}