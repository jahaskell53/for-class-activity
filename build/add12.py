# gets all_covid.csv file, filters it by LAX International Airport Property in the AirportName property of the csv and writes a new file only with data from that airport

import csv
from itertools import groupby
from datetime import datetime
import pandas as pd


# reader = csv.reader(open(r"public/daily_covid_us.csv"),delimiter=',')
df = pd.read_csv("public/monthly_international_and_us_cases.csv")

csv_writer = csv.writer(open(r"public/monthly_international_and_us_cases.csv",'w'),delimiter=',')
for index, row in df.iterrows():
    new_row = row
    year = int(row['year'])
    if int(row['year']) == 2021.0:
        new_row['month'] = str(12 + int(row['month']))
    csv_writer.writerow(new_row)