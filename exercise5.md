Exercise5
      
       sequence diagram
       participant browser
       participant server

       browser->>server: GET https://studies.cs.helsinki.fi/exampleapp
       activate server
       server-->>browser: 200 HTML document
       deactivate server

       browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
       activate server
       server-->>browser: 200 css 
       deactivate server

       browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
       activate server
       server-->>browser: 200 js
       deactivate server

       browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
       activate server
       server-->>browser: 200 json
       deactivate server
       

