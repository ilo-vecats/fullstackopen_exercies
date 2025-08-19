Exercise 6


    sequence diagram
       participant browser
       participant server

       browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
       activate server
       server-->>browser: 200 HTML document
       deactivate server

       browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/notes/new_note
       activate server
       server-->>browser: 201 created note saved
       deactivate server

       browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
       activate server
       server-->>browser: 200 JSON (updated notes)
       deactivate server

       


    
    
