import mysql.connector
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="Pc192439",
    database='thestudenthub'
)
mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM logins")

myresult = mycursor.fetchall()

username = (myresult[0][2])
password = myresult[0][3]
print(username,password)