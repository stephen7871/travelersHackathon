import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import mean_squared_error

# Load the data from the CSV file
df = pd.read_csv('tasks.csv')

# Select the features and target variable
features = ['estimatedDuration', 'Workload']
print(df[features])
target = 'completionTime'
X = df[features]  # Features
y = df[target]  # Target variable
print(y)

# Convert categorical features to numeric using one-hot encoding
X_encoded = pd.get_dummies(X)

# Split the data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X_encoded, y, test_size=0.2, random_state=42)

# Create a decision tree classifier
model = DecisionTreeClassifier()

# Fit the model to the training data
model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = model.predict(X_test)

# Evaluate the model's performance
mse = mean_squared_error(y_test, y_pred)
print('Mean Squared Error:', mse)

# Print the accuracy score
print(y_pred)