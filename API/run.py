from flask import Flask
import json
from flask import request

app = Flask(__name__)

@app.route("/", methods = ['GET', 'POST'])
async def root():
    if request.method == 'GET':
        return {"message": "Invoice Parsing"}
    else:
        #Send data to CockRoach DB
        return json("updated something")

@app.route("/invoices", methods = ['POST'])
async def get_invoices():
    hospital_name = request.form('hospital_name')
    
    #hospital name, service type, amount, time, hash_column
    service_type = request.form('service_type')
    amount = request.form('amount')
    timestamp = request.form('timestamp')
    hash_column = "uniqueID"
    return json("something")
