# gets all_covid.csv file, filters it by LAX International Airport Property in the AirportName property of the csv and writes a new file only with data from that airport

import csv
from itertools import groupby
from datetime import datetime
import pandas as pd


# reader = csv.reader(open(r"public/daily_covid_us.csv"),delimiter=',')
df_international = pd.read_csv("public/better_monthly_total_cases.csv")
df_us = pd.read_csv("public/monthly_covid_us.csv")

header = ['month', 'year', 'newPositiveCasesUS', 'newPositiveCasesInternational']
csv_writer = csv.writer(open(r"public/monthly_international_cases.csv",'w'),delimiter=',')
csv_writer.writerow(header)

for us_index, us_row in df_us.iterrows():
    for international_index, international_row in df_international.iterrows():
        if int(us_row['year']) == int(international_row['year']) and int(us_row['month']) == int(international_row['month']):
            new_row = []
            new_row.append(us_row[0])
            new_row.append(us_row[1])
            new_row.append(us_row[2])
            new_row.append(int(international_row['newPositiveCases']) - int(us_row['newPositiveCases']))
            csv_writer.writerow(new_row)
    


