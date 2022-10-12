import matplotlib.pyplot as plt
import random
import math
import numpy as np

# randomly initialising the centroids
def initialize_centroids(data, k):
    centres = data[np.random.choice(No_of_points, k, replace=False)]
    return centres

# getting the lables of the data points(the point which falls under which cluster centre)
def get_labels(data, centroids):
    labels = []
    for point in data:
        min_dist = float('inf')
        label = None
        for i, centroid in enumerate(centroids):
            new_dist = get_distance(point, centroid)
            if min_dist > new_dist:
                min_dist = new_dist
                label = i
        labels.append(label)  # appending the lables to the data points
    return labels

# getting euclidean distance between 2 points
def get_distance(point1, point2):
    return math.sqrt((point1[0] - point2[0]) ** 2 + (point1[1] - point2[1]) ** 2)

# updating centroids
def update_centroids(points, labels, k):
    new_centroids = np.zeros((k, 2))
    counts = np.zeros((k))
    #adding the values of points under each cluster level
    for point, label in zip(points, labels):
        new_centroids[label][0] += point[0]
        new_centroids[label][1] += point[1]
        counts[label] += 1

    #finding the mean values for each clusters where new centroid value will be updated
    for i, (x, y) in enumerate(new_centroids):
        new_centroids[i] = (x/counts[i], y/counts[i])
    return new_centroids

# when to stop the updation of centroids
def should_stop(old_centroids, new_centroids):
    total_movement = 0
    threshold = 1e-20
    for old_point, new_point in zip(old_centroids, new_centroids):
        total_movement += get_distance(old_point, new_point)
    return total_movement < threshold

def plot():
    colors = ['cyan', 'yellow', 'blue', 'lime', 'pink', 'orange', 'olive']
    plt.scatter(data[:, 0], data[:, 1], s=20, color=[colors[i] for i in labels], label=labels)
    plt.scatter(centroids[:,0], centroids[:,1],s=150, color='red', marker='p')
    plt.xlabel('X  —>')
    plt.ylabel('Y  —>')

# MAIN FUNCTION
No_of_points = 400
k = int(input("Enter the number of clusters (Maximum = 7): "))
data = np.random.uniform(100, size=(No_of_points, 2))
plt.figure(1)
plt.scatter(data[:, 0], data[:, 1], s=20, color='black')
plt.xlabel('X  —>')
plt.ylabel('Y  —>')
plt.title("Unclustered Data")
plt.show()

i=0

centroids = initialize_centroids(data, k)
while True:
    old_centroids = centroids
    labels = get_labels(data, centroids)
    if i==0:
        plt.figure(2)
        plot()
        plt.title("Random Cluster Centres")
        plt.show()
        i=1
    centroids = update_centroids(data, labels, k)
    if should_stop(old_centroids, centroids):
        break
    '''
    plt.figure(3)
    plot()
    plt.title("Data during Clustering")
    plt.pause(0.5)
    plt.close()
    plt.show()
    '''



plt.figure(4)
plot()
plt.title("Clustered Data")
plt.show()
