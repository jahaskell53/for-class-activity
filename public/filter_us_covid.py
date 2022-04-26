# gets all_covid.csv file, filters it by LAX International Airport Property in the AirportName property of the csv and writes a new file only with data from that airport

import csv
from itertools import groupby
from datetime import datetime
import pandas as pd


# reader = csv.reader(open(r"public/daily_covid_us.csv"),delimiter=',')
df = pd.read_csv("public/daily_covid_us.csv", parse_dates=['date'])
# print(df.tail())
df.index = pd.to_datetime(df.date)
new_content = df.groupby(by=[df.index.month, df.index.year])['positiveIncrease'].sum()
print(new_content)
# for index, row in enumerate(reader):
#     if index == 0:
#         continue
#     print(row[0])
#     date = row[0]
#     print(to_datetime(row[0], infer_datetime_format=True))
# groups_by_month = groupby(reader, lambda row: datetime.strptime(row[0], '%Y-%m-%d'))
# for key, group in groups_by_month:
#     print(key + ":", list(group))
# csv.writer(open(r"public/monthly_covid_us.csv",'w'),delimiter=',').writerows(new_content)

