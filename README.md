# Project Track:-
## Invoice App
# About Project:-
## Objective:-
The website mainly aims on creating, storing and updating status of invoices
## Creating Invoice:-
The admin has the permission to create invoices. This is a two step form. In the first step information of the user like name, email and other informations like tax and delivery charge is added and in the second step information about the product like the material name, quantity, number of labours who worked are stored. Once the invoice is created, the link of pdf of that invoice is sent to the user through mail.
## Listing Invoice:-
In this web page there is a search option. After entering the mail for a particular user, the invoiceId, due date and status of all the invoices generated for that particular user is displayed. For every invoice, there is an edit option through which the status of invoice is updated.
## Update Status:-
Update Status will update the status of that particular invoice and once the status is updated, the user will receive the link of pdf of updated invoice.
## Invoice Stats:-
Invoice stats displays the number of outstanding, paid and pending invoices in the form of pie chart.

## Functionalities:-
Allows admin to generate invoices and once the invoice is generated the user receives the link of pdf. \
Allows admin to view the number of pending, paid and outstanding invoices in the form of pie chart. \
Admin can view invoices of any user by entering their mail and update the status of their voices. 

## Tech-stack:-
* nodejs
* mongodb
* express
* mongoose
* bootstrap
* SendGrid API
* MongoDB Cluster
* Handlebars

## Routes:-
* \\:- Home page
* \create:-First step of creating invoice
* \details:-Second and final step pf creating invoice
* \search:- Shows all invoices of a user by entering their mail
* \edit\id:-Edits the status of invoice
* \chart:-Shows pending, paid and outstanding invoices in form of pie chart.

## APIs Used:-
* A sendgrid API key is used for sending mails.
* MongoDB cluster connection string is required to connect to online database.

## Setting up project on your machine:-
* Clone the project
* Change the current directory to enter the invoiceApp directory "cd dirName"
* Install the packages by using command "npm install"
* Type "npm run dev"
* Open Browser
* Enter URL localhost:3000/


