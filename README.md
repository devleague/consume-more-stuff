#STEP 1 
You need to set up an initial database with postgres 

From the db you need to be able to stand up the db with the following models:

1.Category
2.Condition
3.Item
4.ItemStatus
5.User 

#Category db should have the following table (populate with type of categories electronics, clothes, etc.)

id | Type
   | 
  
#Conditions

id | condition 
   |   -new
   |   -likenew
   |   -used
   |   -stayBroke

#Item

id  | Price | Name | Description | Category| Owner/User| Condition| is_sold

#ItemStatus

id |  is_sold
   |  Boolean

#Users

id  | name | password

#STEP 2 

After the db is set up you can seed the tables with mock data via sequelize or fill the tables as you see fit 

#STEP 3
