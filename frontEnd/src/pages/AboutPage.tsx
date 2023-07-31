import React from 'react'

export function AboutPage() {
    return (
        <div className='container'>
            <h2 style={{
                textAlign: 'center'
            }}>About Olympus</h2>
            <p style={{
                textAlign: 'justify'
            }}>A brief introduction about the project:
                The project is a submission under the hackathon geek-o-olympic. The problem statement is to use the provided olympic dataset or any available dataset on the internet to enhance the olympics experience for users and organizers. A web based project has been made by our team. The project includes statistics of olympic players, sports, etc. Other than that it includes a prediction system which predicts the medal that a player can win or not based on various attributes such as age, height, weight, gender, sport, country and season of the olympic. It also includes a sentiment analyzer which basically predicts the sentiment of tweets on a particular day of any event. The website also includes a live stream platform to stream any event happening live and let users comment. It has a separate section to show various stats of players, sport and countries in olympics. Tech stack used:
                ‌Backend: Python
                ‌Frontend: React
                ‌Live straming platform: Vimeo
                ‌Authentication: auth0
                ‌Prediction model: Sklearn's Gradient Boosting Classifier
                ‌Sentiment analysis model: Hugging Face's pretrained roBERTa model (cardiffnlp/twitter-roberta-base-sentiment)
                The backend of the website has been written in Python with fast API as the web framework to connect frontend and backend.
                React has been used to implement the frontend of the project. Vimeo is used to live stream the ongoing events and for a user interactive live stream.
                auth0 has been used for authentication, authorization and data protection of the users.
                Sklearn's Gradient Boosting Classifier has been use dto predict the success and failure of an athlete. The model has achieved an accuracy of around 45%, both f1-score and precision score of 0.53.
                For sentiment analysis of tweets, the pretrained model based on roBERta sentiment analysis has been used provided by Hugging Face. All the tweets are first cleaned by removing the mentions (@), hashtags, links, numbers, etc using Python's Regex module. Then the stopwords removal and stemming of tweets is done. Hugging Face provides the AutoTokenizer in transformers library for tokenizing the tweets The overall accuracy of the sentiment analysis of the model is around 67%, with the average f1 score of 0.635, average recall score of 0.652 and an average precision score of 0.671</p>
        </div>
    )
}
