Server

1. DB to have a list of components
    1. Components will have 
        - id
        - namespace
        - serverUrl - will accept requests
        - scriptsUrl - script location (bundled)
        - imagesUrl - images location
        - styleUrl - bundled styles url
    2. components input
        - height - will be re-rendered on resize
        - width - will be re-rendered on resize
        - model - model to render component
        - readonly - if component is readonly
        - hashcode - if this changes the component will rerender 
        - postMessage - to post any message to component
        - canDestroy
        - beforeDestroy
        - destroy
        - afterDestroy

    3. component output
        - onModelChange
        - onMessage

    4. Interserver communication
        - Message channel
        - Model service with versioning support
        - multiple users?


Use Case
1. given component.json, it should start a server and