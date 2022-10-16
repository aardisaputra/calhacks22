from fastapi import FastAPI
import json
from flask import jsonify, render_template, redirect, request, url_for
import requests

app = FastAPI()

#using post instead of 
@app.get("/")
async def root():
    return {"message": "Invoice Parsing"}

@app.get("/invoices")
async def get_invoices():
    hospital_name = request.form('hospital_name')
    #hospital name, service type, amount, time, hash_column
    service_type = request.form('service_type')
    amount = request.form('amount')
    timestamp = request.form('timestamp')
    hash_column = "uniqueID"
    return json("something")

@app.post("/")
async def updating():
    #send data to cockDB
    return json("updated something")
