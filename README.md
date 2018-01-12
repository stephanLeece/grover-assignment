# Node Chatbot



## Plan:
when user enters input, check to see if it contains a certain word/phrase. if true, return correct response.
implementation: data to be stored as json. when user submits a query, iterate through each product, property by property.
if that property contains matches query, add product name and price to reply.




## Progress
-- basic Front end Messaging structure laid out.
-- messages being passed from client to server. setting up if conditions
-- simple, single level conversations working. I plan to switch to regex matching to allow for more natural
language to be matched.
-- tweaked box design and fixed scroll issues.
-- reformatted chatBrain. I added an extra condition to check it the user includes the brand name in their query. For example,
apple iphone, amazon echo etc.
-- tested on edge, chrome, firefox. 

## Notes:
