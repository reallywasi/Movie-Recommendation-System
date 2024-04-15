# Movie-Recommendation-System

![image](https://github.com/reallywasi/Movie-Recommendation-System/assets/118682540/c80ccf5b-993a-4312-b2f0-9d0e18e4f65b)

# Movie Recommendation System using Item Similarity

## Description
This project aims to build a movie recommendation system using item similarity techniques. Leveraging collaborative filtering, the system recommends movies to users based on their preferences and ratings. By analyzing the correlation between movies in a dataset of user ratings, the system generates personalized recommendations tailored to each user's tastes. The project employs Python and popular libraries such as NumPy, pandas, and matplotlib for data processing, exploratory data analysis (EDA), and recommendation generation. Through visualization techniques and optimization steps, the system enhances recommendation accuracy and relevance. Users can interact with the recommendation system through a Jupyter Notebook interface, exploring the code and receiving movie recommendations based on their input preferences.


## Contributors
- Wasi
- Rajneesh
- Anshika
- Ishita

## Overview
The recommendation system is implemented using Python and popular libraries such as NumPy, pandas, and matplotlib. The project involves importing movie rating data, performing exploratory data analysis (EDA), building the recommendation system based on item similarity, generating recommendations, and evaluating and optimizing the system's performance.

## Steps

### 1. Data Import and Preprocessing:
The project starts by importing movie rating data from a CSV file, which typically contains user IDs, item IDs (movie IDs), ratings, and timestamps. This data is merged with a dataset containing movie titles to enhance interpretability. Preprocessing steps include handling missing values, removing duplicates, and ensuring data consistency. Visualization techniques such as histograms and scatter plots are applied to gain insights into the dataset's characteristics.

### 2. Exploratory Data Analysis (EDA):
EDA techniques are employed to analyze the dataset further. This involves calculating summary statistics such as average ratings and the number of ratings for each movie. Histograms, box plots, and scatter plots are used to visualize the distribution of ratings and their relationship with other variables. EDA helps identify outliers, understand data distributions, and formulate hypotheses for the recommendation system.

### 3. Building the Recommendation System:
The recommendation system is based on item similarity, utilizing the correlation between movies based on user ratings. Collaborative filtering techniques are implemented to find movies similar to those liked by a user. A user-item matrix is constructed, and similarity between movies is calculated using metrics such as cosine similarity or Pearson correlation coefficient. The system then recommends similar movies to those highly rated by the user.

### 4. Generating Recommendations:
The system generates recommendations by calculating the correlation between a target movie and other movies in the dataset. Movies with the highest correlation values, indicating a high degree of similarity, are recommended to the user. Recommendations can be presented as a list of top-N similar movies or personalized recommendations tailored to the user's preferences.

### 5. Evaluation and Optimization:
The project evaluates the recommendation system's performance using metrics such as precision, recall, and mean absolute error. Additionally, the system is optimized by filtering out movies with a low number of ratings or considering only highly-rated movies. This optimization ensures that recommendations are relevant and reliable for users.

## How to Use
1. Clone the repository to your local machine.
2. Install the required libraries mentioned in the `requirements.txt` file.
3. Run the Jupyter Notebook file `recommendation_system.ipynb` to explore the code and generate recommendations.

## Credits
- The dataset used in this project was obtained from [insert dataset source].
- Inspiration and guidance were drawn from various online tutorials and resources.

Feel free to explore the code, provide feedback, and contribute to further improvements. Happy recommending!
