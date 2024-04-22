classes={
    "car":0,
    "fish":1,
    "house":2,
    "tree":3,
    "bike":4,
    "guitar":5,
    "pencil":6,
    "clock":7
}

def readFeatureFile(filepath):
    file = open(filepath, "r")
    lines =file.readlines()

    x, y = [],[]
    for i in range(1, len(lines)):
        row=lines[i].split(",")
        x.append([float(row[j]) for j in range(len(row)-1)])
        y.append(classes[row[-1].strip()])

    return (x,y)

from sklearn.neighbors import KNeighborsClassifier
knn=KNeighborsClassifier(
    n_neighbors=8,
    algorithm="brute",
    weights="uniform"
)

X,y=readFeatureFile("data/dataset/training.csv")
knn.fit(X,y)
X,y=readFeatureFile("data/dataset/testing.csv")
accuracy=knn.score(X,y)
print("accuracy===>", accuracy)
