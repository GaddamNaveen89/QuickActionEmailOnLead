# 1 Salesforce  Lightning Web Components
Designed a Lightning Web Component that can be used as a QUICK ACTION for sending out leads.
Solution: Out-of-the-box features provided by Salesforce, Can only add the Send Email on QUICK ACTION to the CASE and Activity Section. It is impossible to add the SEND EMAIL on QUICK ACTION to LEAD or CONTACT. 
->The possible solution is to create an LWC and then use it as a QUICK ACTION. This will help the Sales user to work more efficiently by making tasks easier and quicker to do directly from the Salesforce Interface.
Best Practices:
@api:- To make a property public and reactive.
@api recordId:- It will hold the ID of the record.
@api invoke():-  Method will trigger the navigation request to the Global.sendEmail Quick Action. 
NavigationMixin.Navigate :- This method to navigate to different Salesforce pages, including Standard & Custom objects, and even external URLs in some cases.
