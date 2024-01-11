# ImmersiveReader - An Azure AI Project 
- Our Project aims to create a Reading platform using Azure Immersive Reader Service
- Project will be helpful for reader , new learner, peoples with disabilities like dyslexia etc.

## To Install 
- Clone the repository first, `git clone https://github.com/Azure-Project688/ImmersiveReader.git`
- Install dependencies `npm install`
- Build the styles `npm run build-tail`
- Run the app `npm start`


## TechSTack Used 
- Express JS (backend)
- Node JS (runtime)
- Azure Immersive Reader
- Azure App Registration
- Tailwind CSS (styling)

## Dependencies
User need to create a Immersive reader resource using below microsoft documentation link
https://learn.microsoft.com/en-us/azure/ai-services/immersive-reader/how-to-create-immersive-reader

It will Provide 4 variables which should be used as environment variables 
- If running on local machine create a `.env ` file and add the below variables
    - TENANT_ID
    - CLIENT_ID
    - CLIENT_SECRET
    - SUBDOMAIN
    - PORT (default 8000 or port for running the app)

## For Docker platform 
- Copy and paste the below command with your respective environment varaibles
    - `docker run -d \
        -e TENANT_ID=your_tenant_id \
        -e CLIENT_ID=your_client_id \
        -e CLIENT_SECRET=your_client_secret \
        -e SUBDOMAIN=your_subdomain \
        -e PORT=8000 \
        -p 8000:8000 \
        memanes688/azureimreader:2.0
    `
  
- You can also create a `.env `file and then run the following command
    - `docker run -d \
        --env-file .env \
        -p 8000:8000 \
        memanes688/azureimreader:2.0
    `

## PREVIEW
[![Video](https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID)

