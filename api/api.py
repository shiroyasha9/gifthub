from flask import Flask, jsonify
import flask
from flask_cors import CORS, cross_origin
import pandas as pd
import requests
import re
from bs4 import BeautifulSoup
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier


app = Flask(__name__)
CORS(app, resources = {r"/api/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

path = (__file__).replace('/api.py', '/new_data_num.csv')
df = pd.read_csv(path)
X = df.drop("gift", axis=1)
y = df["gift"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42)
dtree = DecisionTreeClassifier()
dtree.fit(X_train, y_train)
predictions = dtree.predict(X_test)

def prepdata(data):
    term = data.strip().replace(" ", "+")
    return term


def scraper(site):
    r = requests.get(url = site)
    dct = {}
    dct_lst = []
    soup = BeautifulSoup(r.text, "html.parser")
    lst = soup.findAll("div", {"class": "KZmu8e"})
    for div in lst:
        anchor = re.findall('(<a[^>]*>)', str(div.a))
        ind = anchor[0].find('href')
        link = anchor[0][ind+6:-2]

        ind = link.find("http")
        link = link[ind:].replace("amp;","")

        if link.startswith("http://www.flipkart.com/"):
            ind = link.find("%3Fpid")
            dct["link"] = link[:ind]
        else:
            dct["link"] = link

        if div.find('img') == None:
            dct["img"] = "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
        else:
            dct["img"] = div.find('img')['src']

        dct["title"] = div.find('div', {"class": "sh-np__product-title translate-content"}).text.strip()

        price = div.find('span', {"class": "T14wmb"}).text.strip()
        ind = price.find('₹',1)
        if ind != -1:
            dct["price"] = price[:ind]
        else:
            ind = price.find(".")
            price = price[:ind+3] + " " + price[ind+3:]
            dct["price"] = re.sub('\s+',' ',price)

        ind = dct["price"].find('.')
        dct["price_num"] = float((dct["price"][1:ind+3]).replace(',',''))

        dct["seller"] = div.find('span', {"class": "E5ocAb"}).text.strip()
        dct_lst.append(dct.copy())

    lst = soup.findAll("div", {"class": ("u30d4")})
    lst = lst[:-1]
    for div in lst:
        anchor = re.findall('(<a[^>]*>)', str(div.a))
        ind = anchor[0].find('href')
        link = anchor[0][ind+6:-2]

        ind = link.find("http")
        link = link[ind:].replace("amp;","")

        if link.startswith("http://www.flipkart.com/"):
            ind = link.find("%3Fpid")
            dct["link"] = link[:ind]
        else:
            dct["link"] = link

        if div.find('img') == None:
            dct["img"] = "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
        else:
            dct["img"] = div.find('img')['src']

        try:
            anchor = div.div.next_sibling.div.a
            dct["title"] = anchor.text.strip()
        except:
            dct["link"] = "None"
            dct["img"] = "None"
            dct["title"] = "None"
            dct["price"] = "-1"
            dct["price_num"] = "-1"
            dct["seller"] = "-1"
            continue


        price = div.find('span', {"class": "HRLxBb"}).text.strip()
        ind = price.find('₹',1)
        if ind != -1:
            dct["price"] = price[:ind]
        else:
            ind = price.find(".")
            price = price[:ind+3] + " " + price[ind+3:]
            dct["price"] = re.sub('\s+',' ',price)

        ind = dct["price"].find('.')
        dct["price_num"] = float((dct["price"][1:ind+3]).replace(',',''))

        anchor = div.find('div', {"class": "dD8iuc"}).text.strip()
        elem = re.findall('(from.*)', anchor)
        if elem:
            dct["seller"] = elem[0]
        else:
            dct["seller"] = " "

        dct_lst.append(dct.copy())
    res_lst = [i for n, i in enumerate(dct_lst) if i not in dct_lst[n + 1 :]]
    return res_lst


def gifthub(age, gender, relation, ocassion, interest1, interest2, budget):
    user_input = [[age, gender, relation, ocassion, interest1, interest2, budget]]

    df = pd.DataFrame(user_input, columns = ['age', 'gender', 'relation', 'occasion', 'interest_1', 'interest_2', 'budget'])
    age = user_input[0][0]
    gender = user_input[0][1]
    output = dtree.predict(df)
    output = str(output[0])
    prediction = output
    output = output.split(",")  # output list ready ex. ['Audio Sunglasses', ' Gaming Console']

    out_lst = []
    for data in output:
        if age==0:
            data = data + " for kid"
            if gender==0:
                data = data + " boys"
            else:
                data = data + " girls"
        elif age==1:
            data = data + " for teenage"
            if gender==0:
                data = data + " boys"
            else:
                data = data + " girls"
        else:
            if gender==0:
                data = data + " for men"
            else:
                data = data + " for women"
        data = prepdata(data)  # prepping terms from output for scraping
        site = "https://www.google.com/search?q=" + data + "&source=lnms&tbm=shop&sa=X"
        lst = scraper(site)
        out_lst = out_lst + lst

    sor_out_lst = sorted(out_lst, key = lambda i: i['price_num']) # sorting all the scraped items

    if user_input[0][6] == 0:
        return [prediction , sor_out_lst[:len(sor_out_lst)//3] ]
    elif user_input[0][6] == 1:
        return [prediction, sor_out_lst[len(sor_out_lst) // 3 : 2 * (len(sor_out_lst) // 3)]]
    else:
        return [prediction , sor_out_lst[2*(len(sor_out_lst)//3):]]


@app.route('/')
@cross_origin()
def hello():
    return str("Welcome Home")

@app.route("/api", methods=["POST"])
@cross_origin()
def api():
    json_data = flask.request.json
    print(json_data)
    if json_data != None:
        age = int(json_data[0])
        gender = int(json_data[1])
        relation = int(json_data[2])
        ocassion = int(json_data[3])
        interest1 = int(json_data[4])
        interest2 = int(json_data[5])
        budget = int(json_data[6])
    else:
        return jsonify({"MUFFIN": "OP"})
    ghout = gifthub(age, gender, relation, ocassion, interest1, interest2, budget)[0:2]
    return {
        "output": ghout
    }

if __name__ == '__main__':
    app.run()